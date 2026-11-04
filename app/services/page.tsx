'use client';

import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';
import PageHero from '@/components/page-hero';
import { motion } from 'framer-motion';
import { SERVICES } from '@/lib/data';

export default function ServicesPage() {
  return (
    <div className="relative">
      <Navbar />
      <PageHero>
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 rounded-full mb-6">
            Services
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Nine Specialized Divisions
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Comprehensive construction, engineering, finishes, and renewable energy solutions tailored to your needs.
          </p>
      </PageHero>

      <section className="py-20 bg-white dark:bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium text-sm hover:bg-blue-700 transition-colors">
              All Divisions
            </button>
            {['Construction', 'Renewable Energy', 'Finishes', 'Waterproofing'].map((cat) => (
              <button key={cat} className="px-6 py-2 rounded-full border border-white/20 dark:border-brand-dark/30 bg-white/5 dark:bg-white/5 text-slate-600 dark:text-slate-400 font-medium text-sm hover:bg-blue-50 dark:hover:bg-brand-primary/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card group overflow-hidden hover:border-blue-500 dark:hover:border-blue-500/50 transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={`${s.title} service`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />
                  <div className="absolute bottom-4 left-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-blue-600/80 text-white shadow-lg backdrop-blur-sm">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{s.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">{s.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {s.features.slice(0, 3).map((f) => (
                      <span key={f} className="px-3 py-1 text-xs bg-slate-100 dark:bg-brand-primary/50 text-slate-600 dark:text-slate-400 rounded-full">
                        {f}
                      </span>
                    ))}
                  </div>
                  <Link href={`/services/${s.slug}`} className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors">
                    Learn More <span className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-brand-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Ready to Build?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
              Get a real-time estimate for your project using our CAD estimator or speak directly with our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                Request a Quote
              </Link>
              <Link href="/services/steel-glass-balustrades" className="px-8 py-4 bg-transparent text-white border border-white/30 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}