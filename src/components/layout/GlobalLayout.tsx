import Link from 'next/link';
import { ReactNode } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Search } from 'lucide-react';

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-lg h-screen overflow-y-auto bg-[url(/bg.png)] shadow-2xl shadow-amber-200 bg-center bg-cover flex flex-col px-6 m-auto">
      <header className="flex items-center justify-between text-2xl font-bold py-4">
        <Link href={'/'}>서울 야경</Link>
        <Search className="cursor-pointer text-accent" />
      </header>
      <main className="flex-1">{children}</main>
      <footer className="text-center text-white text-sm my-3">Copyright © 2025 - All right reserved by KSY</footer>
    </div>
  );
}
