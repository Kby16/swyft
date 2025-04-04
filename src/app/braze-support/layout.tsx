import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Braze Support | Swyft - Customer Engagement Platform',
  description: 'Get help with the Braze platform. Access documentation, community forums, technical support, training resources, security information, and status updates.',
  keywords: 'Braze support, Braze help, Braze documentation, Braze community, Braze technical support, Braze training, Braze security, Braze status, Swyft',
  openGraph: {
    title: 'Braze Support | Swyft - Customer Engagement Platform',
    description: 'Get help with the Braze platform. Access documentation, community forums, technical support, training resources, and more.',
    type: 'website',
    url: 'https://swyft.cx/braze-support',
    images: [
      {
        url: '/og-braze-support.jpg',
        width: 1200,
        height: 630,
        alt: 'Braze Support - Swyft',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Braze Support | Swyft',
    description: 'Get help with the Braze platform. Access documentation, community forums, technical support, training resources, and more.',
    images: ['/og-braze-support.jpg'],
  },
  alternates: {
    canonical: 'https://swyft.cx/braze-support',
  },
};

export default function BrazeSupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 