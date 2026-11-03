'use client';

import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { motion } from 'framer-motion';
import { COMPANY, LEADERSHIP_VALUES } from '@/lib/data';
import { ShieldCheck, Star, Zap, HardHat, Building2, Users, Globe } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="relative">
      <Navbar />
      <section className="py-24 bg-brand-dark dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 rounded-full">
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
              Built on 20 Years of Excellence
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {COMPANY.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Building2, label: 'Founded', value: '2004', desc: 'Established in South Africa' },
              { icon: Globe, label: 'Countries', value: '2', desc: 'South Africa & Zimbabwe' },
              { icon: Users, label: 'Divisions', value: '9', desc: 'Specialized services' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10"
              >
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-400 mb-4">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider mt-2">{stat.label}</div>
                <div className="text-xs text-slate-500 mt-1">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-600/20 rounded-2xl blur-xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/20 dark:border-brand-dark/30 bg-white/5 dark:bg-white/5">
                <div className="w-full h-80 bg-slate-200 dark:bg-brand-primary" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Our Heritage</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Founded in 2004 in South Africa, ON-Eaglewings Group has grown into a premier construction, engineering,
                finishes, and renewable energy corporation. Our expansion into Harare, Zimbabwe marked a significant
                milestone in our journey to serve the SADC region with world-class infrastructure solutions.
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Benchmarked against industry leaders like WBHO and JUWI, we maintain ISO quality standards and
                corporate philosophy that puts client satisfaction first. Every project we undertake reflects our
                commitment to excellence, safety, and innovation.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Start a Project <span className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-brand-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Leadership Values</h2>
            <p className="text-slate-600 dark:text-slate-400">The principles that guide every project we deliver</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP_VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4 text-blue-600 dark:text-blue-400">
                  <v.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">{v.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}