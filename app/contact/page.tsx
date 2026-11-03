import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ContactForm from '@/components/contact-form';
import { BRANCHES } from '@/lib/data';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="relative">
      <Navbar />
      <section className="py-24 bg-brand-dark dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 rounded-full mb-6">
            Contact
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Ready to start your project? Reach out to our Gauteng HQ or Harare Branch for expert consultation.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Contact Our Branches</h2>
              {BRANCHES.map((b) => (
                <div key={b.name} className="glass-card p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{b.name}</h3>
                      <p className="text-slate-600 dark:text-slate-400">{b.country}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone</div>
                        <a href={`tel:${b.phone}`} className="text-sm text-blue-600 dark:text-blue-400 hover:underline">{b.phone}</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</div>
                        <a href={`mailto:${b.email}`} className="text-sm text-blue-600 dark:text-blue-400 hover:underline">{b.email}</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-700 dark:text-slate-300">Hours</div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Mon - Fri: 8:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Lead Routing</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Leads are automatically routed to the nearest branch based on your location. Gauteng HQ handles
                  all South Africa inquiries, while Harare Branch manages Zimbabwe requests.
                </p>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}