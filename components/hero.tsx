'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { COMPANY, SERVICES } from '@/lib/data';

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark dark:bg-black">
      <div className="absolute inset-0 z-0">
        <canvas className="w-full h-full" id="particle-canvas" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10" />
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center h-full">
        <div className="text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 rounded-full backdrop-blur-sm">
              ON-Eaglewings Group • South Africa & Zimbabwe
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
              You Build, <span className="text-blue-400">We Finish</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Premier construction, engineering, finishes, and renewable energy corporation.
              20+ years of excellence across SADC. ISO-certified quality you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/services"
                className="group relative px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl overflow-hidden transition-all hover:scale-105"
              >
                <span className="relative z-10">Explore Services</span>
                <div className="absolute inset-0 bg-blue-500/20 group-hover:bg-blue-500/40 transition-all" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-transparent text-white border border-white/30 rounded-xl font-semibold transition-all hover:bg-white/10"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: 'Years Experience', value: COMPANY.yearsExperience },
              { label: 'Countries', value: COMPANY.countries },
              { label: 'Divisions', value: COMPANY.divisions },
              { label: 'Flagship Project', value: 'O.R. Tambo' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/10"
              >
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-slate-400"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.div>
      </div>
    </section>
  );
}