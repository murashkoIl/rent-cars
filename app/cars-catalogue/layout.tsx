import { Footer, Header } from '@/components';
import { AppRoutes } from '@/constants';
import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Cars Catalogue',
  description: 'Discover the cars catalogue',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (!session?.user) redirect(AppRoutes.Home);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
