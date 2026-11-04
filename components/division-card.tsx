'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ServiceType } from '@/lib/data';

export default function DivisionCard({ service }: { service: ServiceType }) {
  return (
    <Link href={`/services/${service.slug}`}>
      <motion.div
        whileHover={{ y: -8 }}
        className="group relative glass-card overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover opacity-60 transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative z-10 h-48 flex items-center justify-center">
          <div className="w-16 h-16 bg-blue-600/20 backdrop-blur-md rounded-full flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon === 'Squares' ? 'M12 4v16m8-8H4' : service.icon === 'Pool' ? 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3.5.79-4.5 2.05A5.5 5.5 0 002 8.5c0 2.3 1.51 4.05 3 5.5l7 7M6 8v8m4-8v8m8-8v8' : 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4'} />
            </svg>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{service.title}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">{service.description}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/20 dark:border-brand-dark/30 bg-white/50 dark:bg-black/50 flex items-center justify-between">
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">View Details</span>
          <span className="text-blue-600 dark:text-blue-400">→</span>
        </div>
      </motion.div>
    </Link>
  );
}