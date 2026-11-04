# ON-Eaglewings Group website

## Local development

Install the locked dependencies with `npm ci`, then run `npm run dev`. Run `npx tsc --noEmit` and `npm run build` before deployment.

## Contact email setup

The contact API delivers notifications through Resend and uses Upstash Redis for shared rate limiting. Configure these values in `.env.local` for development and in the deployment platform's secret manager for production:

- `RESEND_API_KEY`: a server-side Resend API key.
- `CONTACT_FROM_EMAIL`: a sender address on a domain verified with Resend.
- `CONTACT_TO_EMAIL`: the company's monitored contact inbox.
- `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`: credentials for an HTTPS Upstash Redis REST database.

Use `.env.example` as the variable-name template. Do not commit `.env.local` or place secrets in `NEXT_PUBLIC_*` variables. The API reports a configuration error instead of showing a false success when email or rate limiting is unavailable.

## Content that still needs approval

The images in `public/images/` are locally hosted Unsplash stock photographs. They are illustrative and do not document ON-Eaglewings Group projects; replace them with approved company photography before presenting them as completed work. See the [Unsplash license](https://unsplash.com/license). The PDFs in `public/pdfs/` are explicitly marked preliminary placeholders and must be replaced with approved case studies before publication. Review the draft privacy and terms pages with the company and local counsel, and provide official social-profile URLs before adding social links.
