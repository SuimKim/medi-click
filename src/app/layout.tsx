import type { Metadata } from 'next';

import './globals.css';
import Header from '@/components/layout/Header';
import TQProvider from '@/provider/TQProvider';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body>
        <TQProvider>
          <Header />
          <div className='flex min-h-[cal(100vh-60px)] flex-col items-center'>
            {children}
          </div>
        </TQProvider>
      </body>
    </html>
  );
}
