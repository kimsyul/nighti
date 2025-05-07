'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { RotateCcw, ScanHeart, Share } from 'lucide-react';
import { useRecommendStore } from '@/store/useRecommendStore';

export default function ResultPageButton() {
  const { reset } = useRecommendStore();

  return (
    <div className="flex flex-col gap-2">
      <Button variant="accent" className="font-bold" asChild>
        <Link href={'/spot'}>
          <ScanHeart /> 전체 명소 보러 가기
        </Link>
      </Button>
      <div className="flex gap-2">
        <Button className="font-bold flex-1">
          <Share aria-hidden="true" /> 공유하기
        </Button>
        <Button variant="outline" className="font-bold " onClick={() => reset()} asChild>
          <Link href={'/'}>
            <RotateCcw aria-hidden="true" /> 테스트 다시 하기
          </Link>
        </Button>
      </div>
    </div>
  );
}
