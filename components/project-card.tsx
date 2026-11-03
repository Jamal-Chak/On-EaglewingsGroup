'use client';

import Link from 'next/link';
import { Download, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import type { ProjectType } from '@/lib/data';

export default function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <Link href={project.downloadUrl} target="_blank" rel="noopener noreferrer">
      <motion.div
        whileHover={{ y: -6 }}
        className="group relative glass-card overflow-hidden cursor-pointer"
      >
        <div className="relative h-64 overflow-hidden">
          <div className="absolute inset-0 bg-slate-200 dark:bg-brand-primary animate-pulse" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-lg">
              <ExternalLink className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">{project.category}</span>
            <Download className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{project.title}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{project.location}</p>
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-brand-primary/50 px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            Load Specs: {project.loadSpecs}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}