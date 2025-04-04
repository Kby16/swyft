import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Swyft | Get in Touch',
  description: 'Contact Swyft for all your customer engagement needs. Reach out to our team for inquiries, support, or to discuss how we can help your business grow with Braze implementation and optimization.',
  keywords: 'Contact Swyft, Swyft support, Swyft contact, Braze support, customer engagement support, Swyft inquiry, Swyft help',
  openGraph: {
    title: 'Contact Swyft | Get in Touch',
    description: 'Contact Swyft for all your customer engagement needs. Reach out to our team for inquiries, support, or to discuss how we can help your business grow.',
    type: 'website',
    url: 'https://swyft.cx/contact',
    images: [
      {
        url: '/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Swyft - Get in Touch',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Swyft | Get in Touch',
    description: 'Contact Swyft for all your customer engagement needs. Reach out to our team for inquiries, support, or to discuss how we can help your business grow.',
    images: ['/og-contact.jpg'],
  },
  alternates: {
    canonical: 'https://swyft.cx/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 