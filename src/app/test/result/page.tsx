import { Button } from '@/components/ui/button';
import ContentBox from '@/components/ContentBox';
import { RotateCcw, ScanHeart, Share } from 'lucide-react';
import Link from 'next/link';
import SpotList from '@/components/SpotList';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export default function Page() {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-3xl font-bold text-accent">당신에게 추천하는 야경 명소</div>

      <div className="flex items-center gap-2 sticky">
        <Button size="lg" variant="accent" className="font-bold flex-1" asChild>
          <Link href={'/spot'}>
            <ScanHeart /> 전체 명소 보러가기
          </Link>
        </Button>
        <Button size="lg" variant="accent" className="font-bold" asChild>
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
    </div>
  );
}
