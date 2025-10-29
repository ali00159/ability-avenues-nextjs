import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ability-avenues-nextjs.vercel.app'),
  title: {
    default: 'Ability Avenues - ABA Therapy for Children with Autism in Minneapolis',
    template: '%s | Ability Avenues',
  },
  description: 'Personalized autism therapy and ABA services for children with autism. Center-based and in-home autism therapy in Minneapolis, Minnesota.',
  themeColor: '#0FA3B1',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Ability Avenues',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ability Avenues - ABA Therapy Minneapolis',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="overflow-x-hidden max-w-[100vw]">
          <Providers>
            {children}
          </Providers>
        </div>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}