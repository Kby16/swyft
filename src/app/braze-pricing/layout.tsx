import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Braze Pricing | Swyft - Customer Engagement Platform',
  description: 'Find the right Braze plan for your business. Explore our flexible pricing options including Starter, Growth, and Enterprise plans with volume-based pricing and custom enterprise solutions.',
  keywords: 'Braze pricing, Braze plans, Braze cost, Braze subscription, Braze enterprise, Braze starter, Braze growth, Swyft',
  openGraph: {
    title: 'Braze Pricing | Swyft - Customer Engagement Platform',
    description: 'Find the right Braze plan for your business. Explore our flexible pricing options including Starter, Growth, and Enterprise plans.',
    type: 'website',
    url: 'https://swyft.cx/braze-pricing',
    images: [
      {
        url: '/og-braze-pricing.jpg',
        width: 1200,
        height: 630,
        alt: 'Braze Pricing - Swyft',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Braze Pricing | Swyft',
    description: 'Find the right Braze plan for your business. Explore our flexible pricing options including Starter, Growth, and Enterprise plans.',
    images: ['/og-braze-pricing.jpg'],
  },
  alternates: {
    canonical: 'https://swyft.cx/braze-pricing',
  },
};

export default function BrazePricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 