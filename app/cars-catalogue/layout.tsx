import { Footer, Header } from '@/components';
import { AppRoutes } from '@/constants';
import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';

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
      <main className="overflow-hidden pt-20">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </main>
      <Footer />
    </>
  );
}
