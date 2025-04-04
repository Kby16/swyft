import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Braze Features | Swyft - Customer Engagement Platform',
  description: 'Explore the powerful features of Braze, including email marketing, push notifications, in-app messaging, analytics dashboard, user segmentation, and content management tools.',
  keywords: 'Braze features, email marketing, push notifications, in-app messaging, analytics dashboard, user segmentation, content management, Swyft',
  openGraph: {
    title: 'Braze Features | Swyft - Customer Engagement Platform',
    description: 'Explore the powerful features of Braze, including email marketing, push notifications, in-app messaging, and more.',
    type: 'website',
    url: 'https://swyft.cx/braze-features',
    images: [
      {
        url: '/og-braze-features.jpg',
        width: 1200,
        height: 630,
        alt: 'Braze Features - Swyft',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Braze Features | Swyft',
    description: 'Explore the powerful features of Braze, including email marketing, push notifications, and more.',
    images: ['/og-braze-features.jpg'],
  },
  alternates: {
    canonical: 'https://swyft.cx/braze-features',
  },
};

export default function BrazeFeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 