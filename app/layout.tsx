import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://archipel.foundation'),
  title: {
    default: 'ARCHIPEL Foundation — Réinventer la santé. Pour qu\'elle dure.',
    template: '%s | ARCHIPEL Foundation',
  },
  description:
    'ARCHIPEL Foundation est un fonds de dotation en création, dédié à la santé préventive et intégrative. Le médecin est le confident de la maladie. ARCHIPEL est le confident de la santé.',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://archipel.foundation',
    siteName: 'ARCHIPEL Foundation',
    images: [
      {
        url: '/images/og-accueil.jpg',
        width: 1200,
        height: 630,
        alt: 'ARCHIPEL Foundation — Réinventer la santé. Pour qu\'elle dure.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: process.env.VERCEL_ENV === 'production',
    follow: process.env.VERCEL_ENV === 'production',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <Script defer data-domain="archipel.foundation" src="https://plausible.io/js/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
