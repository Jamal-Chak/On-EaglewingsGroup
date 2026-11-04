'use client';

import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import { COMPANY } from '@/lib/data';

export default function Footer() {
  const y = new Date().getFullYear();
  return (
    <footer className="border-t border-white/20 dark:border-brand-dark/30 bg-white dark:bg-brand-dark py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xs">OEG</span>
              <span className="text-xl font-bold text-slate-900 dark:text-white">ON-Eaglewings</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5">{COMPANY.description}</p>
            <div>
              <a href={`mailto:${COMPANY.email}`} className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline">
                <Mail className="w-4 h-4" />
                Email our team
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">All Services</Link></li>
              <li><Link href="/services/steel-glass-balustrades" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Steel & Glass Balustrades</Link></li>
              <li><Link href="/services/pools" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Pools</Link></li>
              <li><Link href="/services/steel-staircases" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Steel Staircases</Link></li>
              <li><Link href="/services/decking" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Decking</Link></li>
              <li><Link href="/services/waterproofing" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Waterproofing</Link></li>
              <li><Link href="/services/solar-energy" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Solar Energy</Link></li>
              <li><Link href="/services/roller-shutters" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Roller Shutters</Link></li>
              <li><Link href="/services/garage-doors" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Garage Doors</Link></li>
              <li><Link href="/services/wall-skimming" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Wall Skimming</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</Link></li>
              <li><Link href="/contact" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</Link></li>
              <li><Link href="/company/standards" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Quality Standards</Link></li>
              <li><Link href="/company/careers" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                <Phone className="w-4 h-4 mt-0.5" />
                <div><div className="text-slate-900 dark:text-white font-medium">Gauteng HQ</div><a href={`tel:${COMPANY.phoneSA}`} className="hover:text-blue-600 dark:hover:text-blue-400">{COMPANY.phoneSA}</a></div>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                <Phone className="w-4 h-4 mt-0.5" />
                <div><div className="text-slate-900 dark:text-white font-medium">Harare Branch</div><a href={`tel:${COMPANY.phoneZim}`} className="hover:text-blue-600 dark:hover:text-blue-400">{COMPANY.phoneZim}</a></div>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                <Mail className="w-4 h-4 mt-0.5" />
                <a href="mailto:info@on-eaglewingsgroup.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{COMPANY.email}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 dark:border-brand-dark/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-sm text-slate-500 dark:text-slate-400">© {y} ON-Eaglewings Group. All rights reserved.</p>
            <div className="flex gap-5">
              <Link href="/legal/privacy" className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</Link>
              <Link href="/legal/terms" className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}