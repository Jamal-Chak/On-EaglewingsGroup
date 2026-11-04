import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { COMPANY } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Career enquiries for construction, engineering, and renewable energy work with ON-Eaglewings Group.',
};

export default function CareersPage() {
  return (
    <div className="relative">
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-brand-dark">
        <section className="bg-brand-dark py-24 dark:bg-black">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-400">Company</p>
            <h1 className="text-4xl font-extrabold text-white md:text-5xl">Careers</h1>
            <p className="mt-5 max-w-2xl text-lg text-slate-300">
              Interested in construction, engineering, finishes, or renewable energy opportunities?
              Contact our team to ask about current openings.
            </p>
          </div>
        </section>
        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Make a career enquiry</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              There are no live vacancies listed on this page. Send a brief introduction and your CV to{' '}
              <a className="text-blue-600 hover:underline dark:text-blue-400" href={`mailto:${COMPANY.email}?subject=Career%20enquiry`}>
                {COMPANY.email}
              </a>
              . Please do not send identity numbers, bank details, or other sensitive information in an initial enquiry.
            </p>
            <Link href="/contact" className="mt-6 inline-flex rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
              Contact the team
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
