import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '../components/layout/Header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: '나만의 리그오브레전드',
  description: '리그오브레전드의 정보를 확인하고 내가 좋아하는 캐릭터를 골라보세요!'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="trancy-ko">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
        <Header />
        {children}
      </body>
    </html>
  );
}
