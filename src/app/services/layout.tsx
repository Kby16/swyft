import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Swyft - Customer Engagement Solutions',
  description: 'Explore Swyft\'s comprehensive customer engagement services including Braze implementation, optimization, integration, and custom development to help your business grow.',
  keywords: 'Swyft services, Braze implementation, customer engagement services, marketing automation, personalized messaging, cross-channel marketing, Swyft solutions',
  openGraph: {
    title: 'Services | Swyft - Customer Engagement Solutions',
    description: 'Explore Swyft\'s comprehensive customer engagement services including Braze implementation, optimization, and integration.',
    type: 'website',
    url: 'https://swyft.cx/services',
    images: [
      {
        url: '/og-services.jpg',
        width: 1200,
        height: 630,
        alt: 'Swyft Services - Customer Engagement Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | Swyft - Customer Engagement Solutions',
    description: 'Explore Swyft\'s comprehensive customer engagement services including Braze implementation, optimization, and integration.',
    images: ['/og-services.jpg'],
  },
  alternates: {
    canonical: 'https://swyft.cx/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 