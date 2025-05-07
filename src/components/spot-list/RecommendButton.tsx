'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { useRecommendStore } from '@/store/useRecommendStore';

export default function RecommendButton() {
  const { recommendedPlaces, reset } = useRecommendStore();

  return (
    <Button variant="accent" size="sm" className="w-fit rounded-4xl px-4" onClick={reset}>
      <Link href={'/'}>{recommendedPlaces.length > 0 ? '💫 명소 다시 추천받기' : '🌃 명소 추천받기'}</Link>
    </Button>
  );
}
