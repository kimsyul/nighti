import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import ReactQueryClientProvider from '../../config/ReactQueryClientProvider';

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
    <html lang="ko">
      <body className={`${notoSans.variable} antialiased bg-slate-900`}>
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
      </body>
    </html>
  );
}
