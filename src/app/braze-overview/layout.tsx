import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Braze Overview | Swyft - Customer Engagement Platform',
  description: 'Discover how Braze, a leading customer engagement platform, helps businesses deliver personalized experiences across multiple channels including email, push notifications, and in-app messaging.',
  keywords: 'Braze, customer engagement, marketing automation, personalized messaging, cross-channel marketing, customer experience, Swyft',
  openGraph: {
    title: 'Braze Overview | Swyft - Customer Engagement Platform',
    description: 'Discover how Braze, a leading customer engagement platform, helps businesses deliver personalized experiences across multiple channels.',
    type: 'website',
    url: 'https://swyft.cx/braze-overview',
    images: [
      {
        url: '/og-braze-overview.jpg',
        width: 1200,
        height: 630,
        alt: 'Braze Overview - Swyft',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Braze Overview | Swyft',
    description: 'Discover how Braze helps businesses deliver personalized experiences across multiple channels.',
    images: ['/og-braze-overview.jpg'],
  },
  alternates: {
    canonical: 'https://swyft.cx/braze-overview',
  },
};

export default function BrazeOverviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 