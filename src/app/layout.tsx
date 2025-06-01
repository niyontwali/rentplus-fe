import type { Metadata } from 'next';
import { Montserrat, Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import './globals.css';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  fallback: ['Inter', 'Arial', 'sans-serif'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

export const metadata: Metadata = {
  title: 'Rent Plus – Smart Property Management',
  description:
    'A modern platform connecting homeowners and residents with smart rent payment, risk assessment, and contract management.',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon-128x128.png', sizes: '128x128', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=5' />
        <meta name='theme-color' content='#3C1E12' />
      </head>
      <body
        className={`${montserrat.variable} ${inter.variable} font-montserrat antialiased text-primary overflow-x-hidden`}
      >
        <div className='min-h-screen flex flex-col relative'>
          <Navbar />
          <main className='flex-1 w-full max-w-full'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
