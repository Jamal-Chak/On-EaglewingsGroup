import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { SERVICES } from '@/lib/data';

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="relative">
      <Navbar />
      <section className="py-20 bg-brand-dark dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <Link href="/services" className="text-sm text-blue-400 hover:text-blue-300 transition-colors mb-2 inline-block">
                ← Back to Services
              </Link>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">{service.title}</h1>
              <p className="text-lg text-slate-300 max-w-2xl">{service.description}</p>
            </div>
            <div className="w-16 h-16 bg-blue-600/20 backdrop-blur-md rounded-full flex items-center justify-center text-blue-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>About {service.title}</h2>
                <p>{service.description}</p>
                <p>
                  At ON-Eaglewings Group, our {service.title} division delivers exceptional quality and craftsmanship.
                  With 20+ years of experience serving South Africa and Zimbabwe, we bring ISO-certified standards
                  to every project we undertake.
                </p>
                <h3>What We Offer</h3>
                <ul className="list-disc pl-6 my-4 text-slate-600 dark:text-slate-400">
                  {service.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Get a Quote for {service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                  Fill out our contact form and select {service.title} as your service of interest. Our team will
                  provide a detailed estimate based on your project requirements.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="lg:col-span-1 space-y-6">
              <div className="glass-card p-6 h-fit">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Key Features</h3>
                <ul className="space-y-4">
                  {service.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-slate-600 dark:text-slate-400">{f}</span>
                    </div>
                  ))}
                </ul>
              </div>
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Related Services</h3>
                <ul className="space-y-3">
                  {SERVICES.filter((s) => s.slug !== service.slug).slice(0, 4).map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} className="block px-4 py-3 rounded-lg bg-white/50 dark:bg-brand-primary/30 hover:bg-blue-50 dark:hover:bg-brand-primary/20 border border-white/20 dark:border-brand-dark/30 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}