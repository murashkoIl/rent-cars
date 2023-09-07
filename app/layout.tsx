import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Car Rent',
  description: 'Discover the cars',
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">{children}</body>
    </html>
  );
}
