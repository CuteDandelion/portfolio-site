import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Portfolio | Justin',
  description: 'Automation Engineer specializing in AI-driven workflows, DevOps, and Data Engineering. Building intelligent systems with n8n, MCP, and cloud technologies.',
  keywords: ['portfolio', 'automation engineer', 'DevOps', 'AI', 'automation', 'Kubernetes', 'cloud', 'n8n', 'MCP', 'Claude', 'data engineering', 'workflows'],
  authors: [{ name: 'Justin' }],
  creator: 'Justin',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    title: 'Portfolio | Justin',
    description: 'Automation Engineer specializing in AI-driven workflows, DevOps, and Data Engineering.',
    siteName: 'Justin Portfolio',
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
    title: 'Portfolio | Justin',
    description: 'Automation Engineer specializing in AI-driven workflows, DevOps, and Data Engineering.',
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
