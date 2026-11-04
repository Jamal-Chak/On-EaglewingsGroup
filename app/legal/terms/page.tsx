import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { COMPANY } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms for using the ON-Eaglewings Group website and project estimate tools.',
};

export default function TermsPage() {
  return (
    <div className="relative">
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-brand-dark">
        <section className="bg-brand-dark py-24 dark:bg-black">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-400">Legal</p>
            <h1 className="text-4xl font-extrabold text-white md:text-5xl">Terms of Service</h1>
            <p className="mt-4 text-slate-300">Last updated: 4 November 2026</p>
          </div>
        </section>
        <article className="prose prose-slate dark:prose-invert mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p>
            These preliminary terms cover use of the {COMPANY.name} website. They require review and approval
            by the company and local counsel before being relied on as final legal terms.
          </p>
          <h2>Website information</h2>
          <p>
            Website descriptions are general information, not a proposal, engineering specification, or
            commitment to undertake work. Project availability and service details should be confirmed directly
            with the company.
          </p>
          <h2>Estimates and enquiries</h2>
          <p>
            Any calculator result is an indicative, non-binding estimate only. A written quotation and any
            applicable contract are required before work is agreed. Submitting the contact form does not create
            a contract or guarantee acceptance of a project.
          </p>
          <h2>Use of the website</h2>
          <p>
            Do not misuse the website, attempt to interfere with its operation, or submit unlawful or misleading
            material. Content may not be copied or republished except as permitted by applicable law or with
            the rights holder&apos;s permission.
          </p>
          <h2>Contact</h2>
          <p>
            For questions about these terms, contact <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
            Read our <Link href="/legal/privacy">Privacy Policy</Link>.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
