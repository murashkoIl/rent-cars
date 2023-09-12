import { CarCatalogue } from '@/components';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main className="overflow-hidden pt-20">
      <Suspense fallback={<div>Loading...</div>}>
        <CarCatalogue />
      </Suspense>
    </main>
  );
}
