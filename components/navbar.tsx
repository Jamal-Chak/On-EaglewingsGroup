'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Sun, Moon } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem('darkMode');
    setDarkMode(stored ? stored === 'true' : true);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newValue = !darkMode;
    setDarkMode(newValue);
    localStorage.setItem('darkMode', String(newValue));
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 dark:border-brand-dark/30 bg-white/80 dark:bg-brand-dark/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white"
          >
            <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <span className="text-sm">OEG</span>
            </span>
            <span>ON-Eaglewings</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get a Quote
            </Link>
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 text-slate-600 dark:text-slate-400"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      )}

      {isOpen && (
        <div className="fixed inset-y-0 left-0 z-50 w-full md:w-80 bg-white dark:bg-brand-dark border-r border-white/20 dark:border-brand-dark/30 transform transition-transform duration-300 -translate-x-full md:translate-x-0">
          <div className="flex items-center justify-between p-6 border-b border-white/20 dark:border-brand-dark/30">
            <Link href="/" className="text-xl font-bold text-slate-900 dark:text-white">
              ON-Eaglewings
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-slate-600 dark:text-slate-400"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="p-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                  pathname === item.href
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-brand-dark/50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-6 border-t border-white/20 dark:border-brand-dark/30">
              <button
                onClick={toggleDarkMode}
                className="w-full flex items-center justify-between px-4 py-3 text-base font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-brand-dark/50 transition-colors"
              >
                <span>Dark Mode</span>
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            </div>
            <Link
              href="/contact"
              className="block px-4 py-3 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-center"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}