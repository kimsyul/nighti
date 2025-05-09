'use client';

import { Search, X } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useSearchStore } from '@/store/useSearchStore';
import Logo from './Logo';

export default function LogoAndSearch() {
  const router = useRouter();
  const [searchWord, setSearchWord] = useState('');

  const searchParams = useSearchParams();
  const q = searchParams.get('q') as string;

  const { setSearch, isOpen, setIsOpen } = useSearchStore();

  useEffect(() => {
    setSearch(q || '');
  }, [q]);

  const onSubmit = () => {
    if (!searchWord || q === searchWord) return;
    setSearch(searchWord);
    router.push(`/spot?q=${searchWord}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <header>
      <div className="flex items-center justify-between text-2xl font-bold px-6 py-2">
        <Logo />
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
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
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
