/* eslint-disable @next/next/next-script-for-ga */
import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { Layout, FixedPlugin } from '@/components';
import { getImagePrefix } from '../../utils/utils';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MJ Steel Fabrication | Precision Steel Solutions',
  description:
    'MJ Steel Fabrication offers precision-engineered steel solutions for construction, industrial, and custom projects. Contact us for expert fabrication services.',
  keywords: [
    'steel fabrication',
    'MJ Steel Fabrication',
    'precision engineering',
    'custom steel solutions',
    'construction steel',
    'industrial fabrication',
    'steel fabrication services',
    'cnc',
    'cnc steel fabrication',
    'cnc fabrication',
    'cnc fabrication services',
    'cnc steel fabrication services',
    'cnc steel fabrication company',
    'polishing',
  ],
  // openGraph: {
  //   title: 'MJ Steel Fabrication | Precision Steel Solutions',
  //   description:
  //     'Discover expert steel fabrication services at MJ Steel Fabrication. From design to delivery, we provide high-quality solutions for all project sizes.',
  //   url: 'https://www.mjsteelfab.com',
  //   siteName: 'MJ Steel Fabrication',
  //   images: [
  //     {
  //       url: '/og-image.jpg',
  //       width: 1200,
  //       height: 630,
  //       alt: 'MJ Steel Fabrication - Precision Steel Solutions',
  //     },
  //   ],
  //   locale: 'en_US',
  //   type: 'website',
  // },
  twitter: {
    card: 'summary_large_image',
    title: 'MJ Steel Fabrication | Precision Steel Solutions',
    description:
      'High-quality steel fabrication services for construction and industrial projects. Contact MJ Steel Fabrication today!',
    images: ['/og-image.jpg'], // Replace with actual Twitter image path
  },
  alternates: {
    canonical: 'https://www.mjsteelfabrication.com',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1F2937" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'MJ Steel Fabrication',
              url: 'https://www.mjsteelfabrication.com',
              logo: `${getImagePrefix()}image/mj.png`,
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-234-567-890',
                contactType: 'Customer Service',
                email: 'info@mjsteelfab.com',
              },
              sameAs: [
                'https://www.facebook.com',
                'https://www.twitter.com',
                'https://www.linkedin.com',
              ],
            }),
          }}
        />
        {/* Uncomment and configure analytics if needed */}
        {/* <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script> */}
      </head>
      <body className={`${roboto.className}`}>
        <Layout>
          {children}
          <FixedPlugin />
        </Layout>
      </body>
    </html>
  );
}
