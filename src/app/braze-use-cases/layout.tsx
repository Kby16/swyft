import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Braze Use Cases | Swyft - Customer Engagement Platform',
  description: 'Discover how businesses across industries use Braze to drive customer engagement and growth. Explore use cases for e-commerce, media, financial services, travel, education, and healthcare.',
  keywords: 'Braze use cases, Braze examples, Braze success stories, Braze e-commerce, Braze financial services, Braze travel, Braze education, Braze healthcare, Swyft',
  openGraph: {
    title: 'Braze Use Cases | Swyft - Customer Engagement Platform',
    description: 'Discover how businesses across industries use Braze to drive customer engagement and growth. Explore use cases for e-commerce, media, financial services, and more.',
    type: 'website',
    url: 'https://swyft.cx/braze-use-cases',
    images: [
      {
        url: '/og-braze-use-cases.jpg',
        width: 1200,
        height: 630,
        alt: 'Braze Use Cases - Swyft',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Braze Use Cases | Swyft',
    description: 'Discover how businesses across industries use Braze to drive customer engagement and growth. Explore use cases for e-commerce, media, financial services, and more.',
    images: ['/og-braze-use-cases.jpg'],
  },
  alternates: {
    canonical: 'https://swyft.cx/braze-use-cases',
  },
};

export default function BrazeUseCasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 