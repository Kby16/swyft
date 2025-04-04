import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Swyft | Customer Engagement Platform',
  description: 'Learn about Swyft, our mission, values, and team. Discover how we help businesses build meaningful relationships with their customers through innovative customer engagement solutions.',
  keywords: 'About Swyft, Swyft mission, Swyft values, Swyft team, customer engagement, Swyft company, Swyft history',
  openGraph: {
    title: 'About Swyft | Customer Engagement Platform',
    description: 'Learn about Swyft, our mission, values, and team. Discover how we help businesses build meaningful relationships with their customers.',
    type: 'website',
    url: 'https://swyft.cx/about',
    images: [
      {
        url: '/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About Swyft - Customer Engagement Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Swyft | Customer Engagement Platform',
    description: 'Learn about Swyft, our mission, values, and team. Discover how we help businesses build meaningful relationships with their customers.',
    images: ['/og-about.jpg'],
  },
  alternates: {
    canonical: 'https://swyft.cx/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 