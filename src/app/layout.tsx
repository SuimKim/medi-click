import type { Metadata } from 'next';

import localFont from 'next/font/local';
import { ToastContainer, Bounce } from 'react-toastify';
import './globals.css';
import 'react-datepicker/dist/react-datepicker.css';
import Header from '@/components/layout/Header';
import TQProvider from '@/provider/TQProvider';

const pretendard = localFont({
  src: '../../public/font/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'MEDICLCIK',
  description: '원하는 병원을 클릭 한 번으로',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={pretendard.className}>
        <TQProvider>
          <Header />
          <main className='flex min-h-[cal(100vh-80px)] flex-col items-center'>
            {children}
          </main>
          <ToastContainer
            position='top-right'
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='light'
            transition={Bounce}
          />
        </TQProvider>
      </body>
    </html>
  );
}
