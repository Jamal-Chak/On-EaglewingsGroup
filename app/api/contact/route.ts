import { createHash } from 'node:crypto';
import { BRANCHES, SERVICES } from '@/lib/data';

export const runtime = 'nodejs';

const MAX_BODY_BYTES = 12_000;
const RATE_LIMIT = 5;
const RATE_WINDOW_SECONDS = 60;

const rateLimitScript = `
local count = redis.call('INCR', KEYS[1])
if count == 1 then
  redis.call('EXPIRE', KEYS[1], ARGV[1])
end
return count
`;

type ContactSubmission = {
  name: string;
  email: string;
  phone: string;
  branch: string;
  service: string;
  message: string;
  terms: boolean;
};

function jsonResponse(body: { error: string }, status: number) {
  return Response.json(body, {
    status,
    headers: { 'Cache-Control': 'no-store' },
  });
}

function validateSubmission(value: unknown): ContactSubmission | null {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) return null;

  const body = value as Record<string, unknown>;
  if (
    typeof body.name !== 'string' ||
    typeof body.email !== 'string' ||
    typeof body.phone !== 'string' ||
    typeof body.branch !== 'string' ||
    typeof body.service !== 'string' ||
    typeof body.message !== 'string' ||
    body.terms !== true
  ) {
    return null;
  }

  const submission = {
    name: body.name.trim(),
    email: body.email.trim(),
    phone: body.phone.trim(),
    branch: body.branch,
    service: body.service,
    message: body.message.trim(),
    terms: true,
  };
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validBranch = BRANCHES.some(
    (branch) => branch.name.toLowerCase().replace(/\s+/g, '') === submission.branch,
  );
  const validService =
    submission.service === '' || SERVICES.some((service) => service.slug === submission.service);

  if (
    submission.name.length < 2 ||
    submission.name.length > 100 ||
    !emailPattern.test(submission.email) ||
    submission.email.length > 254 ||
    /[\r\n]/.test(submission.email) ||
    submission.phone.length < 5 ||
    submission.phone.length > 50 ||
    !validBranch ||
    !validService ||
    submission.message.length < 10 ||
    submission.message.length > 5000
  ) {
    return null;
  }

  return submission;
}

async function checkRateLimit(request: Request) {
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!redisUrl || !redisToken) {
    throw new Error('Contact rate limiting is not configured.');
  }

  const forwardedIp = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  const clientIp = request.headers.get('x-real-ip')?.trim() || forwardedIp || 'unknown';
  const ipHash = createHash('sha256').update(clientIp).digest('hex');
  const endpoint = new URL(redisUrl);
  if (endpoint.protocol !== 'https:') {
    throw new Error('The Redis REST endpoint must use HTTPS.');
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${redisToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([
      'EVAL',
      rateLimitScript,
      1,
      `contact-rate:${ipHash}`,
      RATE_WINDOW_SECONDS,
    ]),
    signal: AbortSignal.timeout(5000),
    cache: 'no-store',
  });
  if (!response.ok) {
    throw new Error(`Rate-limit store returned HTTP ${response.status}.`);
  }

  const result = (await response.json()) as { result?: unknown; error?: string };
  if (typeof result.result !== 'number') {
    throw new Error(result.error || 'Rate-limit store returned an invalid response.');
  }

  return result.result <= RATE_LIMIT;
}

export async function POST(request: Request) {
  const contentType = request.headers.get('content-type') || '';
  if (!contentType.toLowerCase().includes('application/json')) {
    return jsonResponse({ error: 'Please submit the form using the provided contact form.' }, 415);
  }

  const contentLength = Number(request.headers.get('content-length') || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return jsonResponse({ error: 'The submitted message is too large.' }, 413);
  }

  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch (error) {
    console.error('Unable to read contact form request:', error);
    return jsonResponse({ error: 'We could not read your submission. Please try again.' }, 400);
  }
  if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
    return jsonResponse({ error: 'The submitted message is too large.' }, 413);
  }

  let parsedBody: unknown;
  try {
    parsedBody = JSON.parse(rawBody);
  } catch {
    return jsonResponse({ error: 'The submitted form data is invalid.' }, 400);
  }

  const submission = validateSubmission(parsedBody);
  if (!submission) {
    return jsonResponse({ error: 'Please check the form fields and try again.' }, 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !from || !to) {
    console.error('Contact email delivery is not configured.');
    return jsonResponse({ error: 'Contact submissions are temporarily unavailable.' }, 503);
  }

  let allowed: boolean;
  try {
    allowed = await checkRateLimit(request);
  } catch (error) {
    console.error('Contact rate-limit check failed:', error);
    return jsonResponse({ error: 'Contact submissions are temporarily unavailable.' }, 503);
  }
  if (!allowed) {
    return jsonResponse({ error: 'Too many messages. Please wait a minute and try again.' }, 429);
  }

  const branch = BRANCHES.find(
    (candidate) =>
      candidate.name.toLowerCase().replace(/\s+/g, '') === submission.branch,
  );
  const service = SERVICES.find((candidate) => candidate.slug === submission.service);
  const emailText = [
    'New website contact submission',
    '',
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    `Phone: ${submission.phone}`,
    `Branch: ${branch?.name ?? 'Unknown'}`,
    `Service: ${service?.title ?? 'Not specified'}`,
    '',
    'Message:',
    submission.message,
  ].join('\n');

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: submission.email,
        subject: `Website inquiry - ${branch?.name ?? 'Contact form'}`,
        text: emailText,
      }),
      signal: AbortSignal.timeout(10_000),
      cache: 'no-store',
    });

    if (!response.ok) {
      const details = await response.text();
      console.error(`Resend rejected contact email (HTTP ${response.status}):`, details);
      return jsonResponse({ error: 'We could not send your message. Please try again later.' }, 502);
    }

    return Response.json(
      { message: 'Your message has been sent. We will be in touch soon.' },
      { headers: { 'Cache-Control': 'no-store' } },
    );
  } catch (error) {
    console.error('Contact email delivery failed:', error);
    return jsonResponse({ error: 'We could not send your message. Please try again later.' }, 502);
  }
}
