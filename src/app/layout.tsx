import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import ReactQueryClientProvider from '../../config/ReactQueryClientProvider';
import GlobalLayout from '@/components/layout/GlobalLayout';

const notoSans = Noto_Sans_KR({
  variable: '--font-noto-sans',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: '서울ON!',
  description: '당신의 삶에 문화생활을 ON!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className={`${notoSans.variable} antialiased`}>
        <ReactQueryClientProvider>
          <GlobalLayout>{children}</GlobalLayout>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
