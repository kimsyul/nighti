'use client';

import { ArrowBigLeft } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';

export default function first({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <div className="max-w-lg h-screen overflow-y-auto bg-[url(/bg.png)] shadow-2xl shadow-amber-200 bg-center bg-cover flex flex-col pb-4 m-auto">
      <header className="flex items-center justify-between text-2xl font-bold px-4 py-2 shadow-sm shadow-amber-200">
        <ArrowBigLeft size={30} className="text-accent cursor-pointer" onClick={() => router.back()} />
      </header>
      <main className="flex-1 px-6 py-4">{children}</main>
    </div>
  );
}
