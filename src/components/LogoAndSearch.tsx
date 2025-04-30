'use client';

import { Search, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useSearchStore } from '@/store/useSearchStore';

export default function LogoAndSearch() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const q = searchParams.get('q') as string;

  const pathName = usePathname();
  const { search, setSearch, isOpen, setIsOpen } = useSearchStore();

  const goHome = pathName.startsWith('/spot') ? '/spot' : '/';

  useEffect(() => {
    setSearch(q || '');
  }, [q]);

  const onSubmit = () => {
    if (!search || q === search) return;
    router.push(`/spot?q=${search}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <header>
      <div className="flex items-center justify-between text-2xl font-bold px-6 py-2">
        <Link href={goHome} onClick={() => setIsOpen(false)}>
          서울 야경
        </Link>
        {!isOpen ? (
          <Search className="cursor-pointer text-accent" onClick={() => setIsOpen(true)} />
        ) : (
          <X className="cursor-pointer text-accent" onClick={() => setIsOpen(false)} />
        )}
      </div>
      {isOpen && (
        <div className="flex w-full items-center gap-2 px-4 py-2">
          <Input
            type="search"
            placeholder="야경 명소를 검색하세요."
            className="bg-white text-primary"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={onKeyDown}
          />
          <Button type="submit" variant="accent" className="font-bold" onClick={onSubmit}>
            검색
          </Button>
        </div>
      )}
    </header>
  );
}
