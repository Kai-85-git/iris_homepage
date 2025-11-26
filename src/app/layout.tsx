import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'IRIS | 効率を上げる生成AIで中小企業に革新を',
  description: '効率を上げる生成AIで中小企業に革新を。個人・中小企業に向けサポートします。',
  icons: {
    icon: '/img/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
