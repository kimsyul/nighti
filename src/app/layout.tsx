import type { Metadata } from 'next';
import { Noto_Serif_KR } from 'next/font/google';
import './globals.css';
import ReactQueryClientProvider from '../../config/ReactQueryClientProvider';
import GlobalLayout from '@/components/layout/GlobalLayout';

const notoSerif = Noto_Serif_KR({
  variable: '--font-noto-serif',
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
      <body className={`${notoSerif.variable} antialiased font-serif`}>
        <ReactQueryClientProvider>
          <GlobalLayout>{children}</GlobalLayout>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
