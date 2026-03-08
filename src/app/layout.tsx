import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { FooterGate } from '@/components/FooterGate';
import { ToastViewport } from '@/components/ToastViewport';

export const metadata: Metadata = {
  title: 'HEADSTART Tennis Academy (Halifax)',
  description: 'HEADSTART ACADEMY – QUALITY TENNIS FOR ALL',
  openGraph: {
    title: 'HEADSTART Tennis Academy (Halifax)',
    description: 'Quality tennis for all levels in Halifax.',
    type: 'website'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-body">
        <Navbar />
        <main className="container-shell py-6 md:py-8">{children}</main>
        <FooterGate />
        <ToastViewport />
      </body>
    </html>
  );
}
