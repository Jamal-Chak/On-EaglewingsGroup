'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import { BRANCHES } from '@/lib/data';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    branch: 'gauteng',
    service: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const selectedBranch = BRANCHES.find((b) => b.name.toLowerCase().includes(formData.branch)) || BRANCHES[0];

  if (submitted) {
    return (
      <div className="glass-card p-8 text-center">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
          <Send className="w-8 h-8 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
        <p className="text-slate-600 dark:text-slate-400">
          Thank you for contacting {selectedBranch.name}. We will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Send Us a Message</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full px-4 py-3 bg-white dark:bg-brand-primary border border-white/30 dark:border-brand-dark/30 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full px-4 py-3 bg-white dark:bg-brand-primary border border-white/30 dark:border-brand-dark/30 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone</label>
          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+27 73 000 0000"
            className="w-full px-4 py-3 bg-white dark:bg-brand-primary border border-white/30 dark:border-brand-dark/30 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Branch</label>
          <select
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white dark:bg-brand-primary border border-white/30 dark:border-brand-dark/30 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
          >
            {BRANCHES.map((b) => (
              <option key={b.name} value={b.name.toLowerCase().replace(/\s+/g, '')}>
                {b.name} ({b.country})
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Service Interest</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white dark:bg-brand-primary border border-white/30 dark:border-brand-dark/30 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="">Select a service</option>
            <option value="steel-glass-balustrades">Steel & Glass Balustrades</option>
            <option value="pools">Swimming Pools</option>
            <option value="steel-staircases">Steel Staircases</option>
            <option value="decking">Decking</option>
            <option value="waterproofing">Waterproofing</option>
            <option value="solar-energy">Solar Energy</option>
            <option value="roller-shutters">Roller Shutters</option>
            <option value="garage-doors">Garage Doors</option>
            <option value="wall-skimming">Wall Skimming</option>
          </select>
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            className="w-full px-4 py-3 bg-white dark:bg-brand-primary border border-white/30 dark:border-brand-dark/30 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
        <input
          id="terms"
          type="checkbox"
          className="w-4 h-4 text-blue-600 dark:text-blue-400 bg-white dark:bg-brand-primary border border-white/30 dark:border-brand-dark/30 rounded focus:ring-blue-500"
          required
        />
        <label htmlFor="terms">I agree to the terms and privacy policy</label>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
      >
        {submitting ? 'Sending...' : 'Send Message'}
        <Send className="w-4 h-4" />
      </button>
    </form>
  );
}
