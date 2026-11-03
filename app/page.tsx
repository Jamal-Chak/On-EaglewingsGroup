import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import DivisionCard from '@/components/division-card';
import ProjectCard from '@/components/project-card';
import CADEstimator from '@/components/cad-estimator';
import { SERVICES, PROJECTS, BRANCHES } from '@/lib/data';
import { MapPin } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <section className="py-20 bg-white dark:bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Our Expert Divisions</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Nine specialized divisions delivering world-class construction and engineering solutions across South Africa and Zimbabwe.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <DivisionCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-brand-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
              <p className="text-slate-600 dark:text-slate-400">Flagship works including O.R. Tambo Airport Fire Escape Staircase</p>
            </div>
            <Link href="/projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
              View All Projects
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      <CADEstimator className="py-20" />

      <section className="py-20 bg-white dark:bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Two Branches, One Standard of Excellence</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Serving clients across South Africa and Zimbabwe with local expertise and global standards.
              </p>
              {BRANCHES.map((b) => (
                <div key={b.name} className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">{b.name}</h4>
                    <p className="text-slate-600 dark:text-slate-400">{b.country}</p>
                    <a href={`tel:${b.phone}`} className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline mt-1 block">{b.phone}</a>
                    <a href={`mailto:${b.email}`} className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline mt-1 block">{b.email}</a>
                  </div>
                </div>
              ))}
            </div>
            <div className="glass-card p-8">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Request a Consultation</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Get expert advice on your next construction project. Our team is ready to help.
              </p>
              <Link href="/contact" className="block text-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}