import { Search } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function first({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-lg h-screen overflow-y-auto bg-[url(/bg.png)] shadow-2xl shadow-amber-200 bg-center bg-cover flex flex-col pb-4 m-auto">
      <header className="flex items-center justify-between text-2xl font-bold px-6 py-2">
        <Link href={'/'}>서울 야경</Link>
        <Search className="cursor-pointer text-accent" />
      </header>
      <main className="flex-1 px-6 py-4">{children}</main>
      <footer className="text-center text-white text-sm my-3">Copyright © 2025 - All right reserved by KSY</footer>
    </div>
  );
}
