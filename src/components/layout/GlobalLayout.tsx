import Link from 'next/link';
import { ReactNode } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-lg h-screen overflow-y-auto bg-[url(/bg.png)] shadow-2xl shadow-amber-200 bg-center bg-cover flex flex-col px-6 m-auto">
      {/* <div className="absolute inset-0 bg-black/50 flex flex-col px-6"> */}
      {/* <header className="h-14 flex items-center text-2xl font-bold">
        <Link href={'/'}>서울 야경</Link>
      </header> */}
      {/* <div className="flex w-full items-center space-x-2">
        <Input type="search" placeholder="Search" />
        <Button type="submit" className="cursor-pointer hover:bg-accent hover:text-black">
          검색
        </Button>
      </div> */}
      <main className="flex-1 mt-6">{children}</main>
      <footer className="text-center text-white text-sm my-3">Copyright © 2025 - All right reserved by KSY</footer>
    </div>
    // </div>
  );
}
