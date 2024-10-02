import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Subscription List',
};

import { Open_Sans } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const openSans = Open_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={openSans.className}>
      <body>{children}</body>
    </html>
  );
}
