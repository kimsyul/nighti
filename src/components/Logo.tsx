'use client';

import { useSearchStore } from '@/store/useSearchStore';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Logo() {
  const { setIsOpen } = useSearchStore();

  const pathName = usePathname();
  const goHome = pathName.startsWith('/spot') ? '/spot' : '/';

  return (
    <Link href={goHome} onClick={() => setIsOpen(false)} className="relative w-[60px] h-[40px]">
      <Image src={'/logo.png'} fill alt="나이티 로고" className="object-contain" />
    </Link>
  );
}
