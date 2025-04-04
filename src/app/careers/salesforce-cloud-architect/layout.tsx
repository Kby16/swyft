import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Salesforce Cloud Architect | Careers at Swyft',
  description: 'Join Swyft as a Salesforce Cloud Architect. Help businesses design, implement, and optimize Salesforce solutions. Apply now to be part of our growing team.',
  keywords: 'Salesforce Cloud Architect job, Salesforce career, Salesforce architect position, Swyft careers, Salesforce jobs, cloud architect position, Salesforce consulting jobs',
  openGraph: {
    title: 'Salesforce Cloud Architect | Careers at Swyft',
    description: 'Join Swyft as a Salesforce Cloud Architect. Help businesses design, implement, and optimize Salesforce solutions.',
    type: 'website',
    url: 'https://swyft.cx/careers/salesforce-cloud-architect',
    images: [
      {
        url: '/og-salesforce-position.jpg',
        width: 1200,
        height: 630,
        alt: 'Salesforce Cloud Architect Position at Swyft',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salesforce Cloud Architect | Careers at Swyft',
    description: 'Join Swyft as a Salesforce Cloud Architect. Help businesses design, implement, and optimize Salesforce solutions.',
    images: ['/og-salesforce-position.jpg'],
  },
  alternates: {
    canonical: 'https://swyft.cx/careers/salesforce-cloud-architect',
  },
};

export default function SalesforceCloudArchitectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 