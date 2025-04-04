import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Braze Integrations | Swyft - Customer Engagement Platform',
  description: 'Connect Braze with your favorite tools and platforms. Explore integrations with CRM, marketing, analytics, e-commerce, content management, and social media platforms.',
  keywords: 'Braze integrations, CRM integration, marketing automation, analytics integration, e-commerce integration, content management, social media integration, Swyft',
  openGraph: {
    title: 'Braze Integrations | Swyft - Customer Engagement Platform',
    description: 'Connect Braze with your favorite tools and platforms. Explore integrations with CRM, marketing, analytics, and more.',
    type: 'website',
    url: 'https://swyft.cx/braze-integrations',
    images: [
      {
        url: '/og-braze-integrations.jpg',
        width: 1200,
        height: 630,
        alt: 'Braze Integrations - Swyft',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Braze Integrations | Swyft',
    description: 'Connect Braze with your favorite tools and platforms. Explore integrations with CRM, marketing, analytics, and more.',
    images: ['/og-braze-integrations.jpg'],
  },
  alternates: {
    canonical: 'https://swyft.cx/braze-integrations',
  },
};

export default function BrazeIntegrationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 