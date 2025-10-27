import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: '404 - Page Not Found',
    description: 'The page you are looking for does not exist.',
    siteName: 'Ability Avenues',
    type: 'website',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Ability Avenues - Page Not Found',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: '404 - Page Not Found',
    description: 'The page you are looking for does not exist.',
    images: ['/images/og-default.jpg'],
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-8">The page you are looking for does not exist.</p>
        <a href="/" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
          Go Home
        </a>
      </div>
    </div>
  );
}