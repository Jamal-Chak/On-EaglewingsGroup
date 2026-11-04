import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    template: '%s | ON-Eaglewings Group',
    default: 'ON-Eaglewings Group - Construction, Engineering & Renewable Energy',
  },
  description:
    'Premium construction, engineering, finishes, and renewable energy corporation operating across South Africa and Zimbabwe. You Build, We Finish.',
  openGraph: {
    title: 'ON-Eaglewings Group - You Build, We Finish',
    description: 'Construction, engineering, finishes, and renewable energy across South Africa & Zimbabwe.',
    type: 'website',
    locale: 'en_ZA',
    siteName: 'ON-Eaglewings Group',
  },
  icons: {
    icon: '/icon.svg',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased min-h-screen`}>
        {children}
      </body>
    </html>
  );
}