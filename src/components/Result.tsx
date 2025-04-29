'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { RotateCcw, ScanHeart, Share } from 'lucide-react';
import { useRecommendStore } from '@/app/store/useRecommendStore';

export default function Result() {
  const { reset } = useRecommendStore();

  return (
    <div className="flex items-center gap-2 sticky">
      <Button size="lg" variant="accent" className="font-bold flex-1" asChild>
        <Link href={'/spot'}>
          <ScanHeart /> 전체 명소 보러가기
        </Link>
      </Button>
      <Button size="lg" variant="accent" className="font-bold" onClick={() => reset()} asChild>
        <Link href={'/'}>
          <RotateCcw aria-hidden="true" />
          <span className="sr-only">다시하기</span>
        </Link>
      </Button>
      <Button size="lg" variant="accent" className="font-bold ">
        <Share aria-hidden="true" />
        <span className="sr-only">공유하기</span>
      </Button>
    </div>
  );
}
