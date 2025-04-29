import { ReactNode } from 'react';
import BackButton from '@/components/BackButton';

export default function first({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-lg h-screen overflow-y-auto bg-[url(/bg.png)] shadow-2xl shadow-amber-200 bg-center bg-cover flex flex-col pb-4 m-auto">
      <header className="flex items-center justify-between text-2xl font-bold px-4 py-2 shadow-sm shadow-amber-200">
        <BackButton />
      </header>
      <main className="flex-1 px-6 py-4">{children}</main>
    </div>
  );
}
