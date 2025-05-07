'use client';

import { useSearchStore } from '@/store/useSearchStore';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Logo() {
  const { setIsOpen } = useSearchStore();

  const pathName = usePathname();
  const goHome = pathName.startsWith('/spot') ? '/spot' : '/';

  return (
    <Link href={goHome} onClick={() => setIsOpen(false)}>
      서울 야경
    </Link>
  );
}
