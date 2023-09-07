import { Footer, Header } from '@/components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cars Catalogue',
  description: 'Discover the cars catalogue',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
