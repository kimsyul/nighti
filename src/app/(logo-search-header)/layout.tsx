import LogoAndSearch from '@/components/LogoAndSearch';
import { ReactNode, Suspense } from 'react';

export default function first({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-lg h-screen overflow-y-auto bg-[url(/bg.png)] shadow-2xl shadow-amber-200 bg-center bg-cover flex flex-col pb-4 m-auto">
      <Suspense>
        <LogoAndSearch />
      </Suspense>
      <main className="flex-1 px-6 py-4">{children}</main>
      <footer className="text-center text-white text-sm my-3">Copyright © 2025 - All right reserved by KSY</footer>
    </div>
  );
}
