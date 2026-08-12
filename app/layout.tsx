import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/shared/WhatsAppButton';
import JsonLd from '@/components/shared/JsonLd';
import { generateOrganizationJsonLd, generateLocalBusinessJsonLd } from '@/lib/seo';
import { SEO, COMPANY } from '@/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: SEO.defaultTitle,
    template: `%s${SEO.titleSuffix}`,
  },
  description: SEO.defaultDescription,
  metadataBase: new URL(SEO.baseUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: SEO.defaultTitle,
    description: SEO.defaultDescription,
    url: SEO.baseUrl,
    siteName: SEO.siteName,
    locale: SEO.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO.defaultTitle,
    description: SEO.defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'PE-LIM',
    'geo.placename': 'Chorrillos, Lima',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`} data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col font-sans">
        <JsonLd data={generateOrganizationJsonLd()} />
        <JsonLd data={generateLocalBusinessJsonLd()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
