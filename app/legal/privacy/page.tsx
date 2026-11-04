import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { COMPANY } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How ON-Eaglewings Group handles information submitted through this website.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="relative">
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-brand-dark">
        <section className="bg-brand-dark py-24 dark:bg-black">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-400">Legal</p>
            <h1 className="text-4xl font-extrabold text-white md:text-5xl">Privacy Policy</h1>
            <p className="mt-4 text-slate-300">Last updated: 4 November 2026</p>
          </div>
        </section>
        <article className="prose prose-slate dark:prose-invert mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p>
            This notice describes how {COMPANY.name} handles information you choose to provide through this
            website. It is a website notice and should be reviewed by the company and local counsel before
            being treated as a complete legal privacy policy.
          </p>
          <h2>Information you submit</h2>
          <p>
            The contact form requests your name, email address, phone number, selected branch, service interest,
            and message. This information is used to respond to your enquiry and route it to the relevant team.
            Do not include sensitive personal information in a message.
          </p>
          <h2>Email delivery and retention</h2>
          <p>
            Contact submissions are sent to the company using its configured email delivery provider. The
            company and that provider may retain the message as needed to process, secure, and respond to the
            enquiry, subject to their applicable retention practices and legal requirements.
          </p>
          <h2>Browser storage</h2>
          <p>
            The site stores your selected colour theme in local browser storage. The current website does not
            intentionally use analytics tracking cookies.
          </p>
          <h2>Your requests</h2>
          <p>
            To ask about, correct, or request deletion of information you submitted, email{' '}
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. The company may need to retain information
            where required by law or to resolve an enquiry.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about this notice can be sent to <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
            See our <Link href="/legal/terms">Terms of Service</Link>.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
