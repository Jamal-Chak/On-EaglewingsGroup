'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building, Download, MapPin } from 'lucide-react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { PROJECTS } from '@/lib/data';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(PROJECTS.map((project) => project.category))];
  const filteredProjects =
    filter === 'All' ? PROJECTS : PROJECTS.filter((project) => project.category === filter);

  return (
    <div className="relative">
      <Navbar />
      <section className="py-24 bg-brand-dark dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 rounded-full mb-6">
            Projects
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Featured Works
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A showcase of our major architectural projects across South Africa and Zimbabwe, including the
            flagship O.R. Tambo Airport Fire Escape Staircase.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-colors ${
                  filter === category
                    ? 'bg-blue-600 text-white'
                    : 'border border-white/20 dark:border-brand-dark/30 bg-white/5 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-brand-primary/20 hover:text-blue-600 dark:hover:text-blue-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  className="group relative glass-card overflow-hidden"
                >
                  <div className="relative h-72 overflow-hidden">
                    <div className="absolute inset-0 bg-slate-200 dark:bg-brand-primary animate-pulse" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                            {project.category}
                          </span>
                          <h2 className="text-lg font-bold text-white mt-1">{project.title}</h2>
                        </div>
                        <a
                          href={project.downloadUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Download case study for ${project.title}`}
                          className="p-3 bg-white text-slate-900 rounded-lg hover:bg-blue-500 hover:text-white transition-all"
                        >
                          <Download className="w-5 h-5" />
                        </a>
                      </div>
                      <div className="mt-4 flex items-center gap-4 text-xs text-slate-300">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {project.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Building className="w-3 h-3" />
                          {project.loadSpecs}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-600 dark:text-slate-400">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-brand-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Download Case Studies
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
              Technical case studies are available for download. Each includes detailed specifications,
              load ratings, and engineering drawings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {PROJECTS.map((project) => (
                <a
                  key={project.id}
                  href={project.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-slate-900 border border-white/30 dark:border-brand-dark/30 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-brand-primary/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  {project.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
