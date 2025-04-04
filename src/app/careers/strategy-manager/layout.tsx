import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Strategy Manager | Careers at Swyft',
  description: 'Join Swyft as a Strategy Manager. Help businesses develop and implement effective customer engagement strategies. Apply now to be part of our innovative team.',
  keywords: 'Strategy Manager job, strategic consulting career, customer engagement strategy, Swyft careers, strategy position, marketing strategy jobs, digital transformation career',
  openGraph: {
    title: 'Strategy Manager | Careers at Swyft',
    description: 'Join Swyft as a Strategy Manager. Help businesses develop and implement effective customer engagement strategies.',
    type: 'website',
    url: 'https://swyft.cx/careers/strategy-manager',
    images: [
      {
        url: '/og-strategy-position.jpg',
        width: 1200,
        height: 630,
        alt: 'Strategy Manager Position at Swyft',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strategy Manager | Careers at Swyft',
    description: 'Join Swyft as a Strategy Manager. Help businesses develop and implement effective customer engagement strategies.',
    images: ['/og-strategy-position.jpg'],
  },
  alternates: {
    canonical: 'https://swyft.cx/careers/strategy-manager',
  },
};

export default function StrategyManagerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 