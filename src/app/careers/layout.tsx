import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | Swyft - Join Our Team',
  description: 'Join the Swyft team and help shape the future of customer engagement. Explore our open positions, company culture, benefits, and opportunities for growth.',
  keywords: 'Swyft careers, Swyft jobs, Swyft team, customer engagement jobs, marketing technology careers, Swyft culture, Swyft benefits',
  openGraph: {
    title: 'Careers | Swyft - Join Our Team',
    description: 'Join the Swyft team and help shape the future of customer engagement. Explore our open positions, company culture, and opportunities for growth.',
    type: 'website',
    url: 'https://swyft.cx/careers',
    images: [
      {
        url: '/og-careers.jpg',
        width: 1200,
        height: 630,
        alt: 'Swyft Careers - Join Our Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers | Swyft - Join Our Team',
    description: 'Join the Swyft team and help shape the future of customer engagement. Explore our open positions, company culture, and opportunities for growth.',
    images: ['/og-careers.jpg'],
  },
  alternates: {
    canonical: 'https://swyft.cx/careers',
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 