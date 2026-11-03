import os

def w(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'OK: {path}')

w('components/footer.tsx', '''\
'use client';

import Link from 'next/link';
import { Mail, Phone, Instagram, Linkedin, X, Facebook } from 'lucide-react';
import { COMPANY } from '@/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-white/20 dark:border-brand-dark/30 bg-white dark:bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                <span className="text-sm">OEG</span>
              </span>
              <span className="text-xl font-bold text-slate-900 dark:text-white">ON-Eaglewings</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
              {COMPANY.description}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-brand-primary flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-brand-primary flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-brand-primary flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-brand-primary flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Services</h3>
            <ul className="space-y-3">
''')