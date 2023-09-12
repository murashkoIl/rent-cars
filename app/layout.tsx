import { getServerSession } from 'next-auth';
import type { Metadata } from 'next';

import AuthProvider from './context/client-provider';
import { authOptions } from './api/auth/[...nextauth]/route';
import './globals.css';

export const metadata: Metadata = {
  title: 'Car Rent',
  description: 'Discover the cars',
};

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className="relative">
        <AuthProvider session={session}>{children}</AuthProvider>
      </body>
    </html>
  );
}
