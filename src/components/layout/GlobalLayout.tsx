import Link from 'next/link';
import { ReactNode } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col max-w-lg h-screen m-auto px-2.5 bg-[url(/background.jpg)] bg-center bg-cover">
      <header className="h-14 flex items-center text-2xl font-bold">
        <Link href={'/'}>서울 야경</Link>
      </header>
      <div className="flex w-full items-center space-x-2">
        <Input type="search" placeholder="Search" />
        <Button type="submit" className="cursor-pointer hover:bg-accent hover:text-black">
          검색
        </Button>
      </div>
      <main className="flex-1 mt-2.5 px-">{children}</main>
      <footer className="text-center text-white my-3">Copyright © 2025 - All right reserved by KSY</footer>
    </div>
  );
}
