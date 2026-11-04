import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { COMPANY } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Quality Standards',
  description: 'Quality and compliance enquiries for ON-Eaglewings Group projects.',
};

export default function StandardsPage() {
  return (
    <div className="relative">
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-brand-dark">
        <section className="bg-brand-dark py-24 dark:bg-black">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-400">Company</p>
            <h1 className="text-4xl font-extrabold text-white md:text-5xl">Quality Standards</h1>
            <p className="mt-5 max-w-2xl text-lg text-slate-300">
              Ask our team for current quality, safety, and compliance information relevant to your project.
            </p>
          </div>
        </section>
        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Request supporting documents</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Certification and compliance requirements depend on the service and project. Contact us to request
              current documents and confirm their scope and validity; this page does not itself certify a specific
              standard or accreditation.
            </p>
            <Link href="/contact" className="mt-6 inline-flex rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
              Ask about a project
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
