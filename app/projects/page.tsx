'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Building, Download, MapPin } from 'lucide-react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import PageHero from '@/components/page-hero';
import { PROJECTS } from '@/lib/data';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(PROJECTS.map((project) => project.category))];
  const filteredProjects =
    filter === 'All' ? PROJECTS : PROJECTS.filter((project) => project.category === filter);

  return (
    <div className="relative">
      <Navbar />
      <PageHero>
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
      </PageHero>

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
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/20" />
                    <a
                      href={project.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Download case study for ${project.title}`}
                      className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-lg border border-white/20 bg-slate-950/75 px-3 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur-md transition-colors hover:bg-blue-600"
                    >
                      <Download className="h-4 w-4" />
                      Case study
                    </a>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                            {project.category}
                          </span>
                          <h2 className="text-lg font-bold text-white mt-1">{project.title}</h2>
                        </div>
                        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                          Featured project
                        </span>
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
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PROJECTS.map((project) => (
                <a
                  key={project.id}
                  href={project.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 text-left shadow-lg transition-all hover:-translate-y-1 hover:border-blue-400/50 hover:bg-white/10"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-900 shadow-md">
                      <Download className="h-3.5 w-3.5" />
                      Download
                    </span>
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">{project.category}</span>
                    <h3 className="mt-1 font-semibold text-white">{project.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{project.location}</p>
                  </div>
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
