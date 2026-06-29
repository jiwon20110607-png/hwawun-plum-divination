import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '화운 매화역수 🌸',
  description: '신비로운 동양적 분위기의 매화역수 PWA',
  viewport: 'width=device-width, initial-scale=1',
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#14b8a6" />
      </head>
      <body className="min-h-screen w-full">
        <main className="w-full min-h-screen">{children}</main>
      </body>
    </html>
  );
}
