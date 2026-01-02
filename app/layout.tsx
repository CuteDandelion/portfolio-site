import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Portfolio | Your Name',
  description: 'Showcasing my work in AI, automation, DevOps, and cloud technologies. Built with Next.js, TypeScript, and deployed on Kubernetes.',
  keywords: ['portfolio', 'developer', 'DevOps', 'AI', 'automation', 'Kubernetes', 'cloud', 'n8n', 'MCP', 'Claude'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    title: 'Portfolio | Your Name',
    description: 'Showcasing my work in AI, automation, DevOps, and cloud technologies.',
    siteName: 'Your Name Portfolio',
    images: [
      {
        url: '/assets/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Your Name',
    description: 'Showcasing my work in AI, automation, DevOps, and cloud technologies.',
    images: ['/assets/images/og-image.jpg'],
    creator: '@yourhandle',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
