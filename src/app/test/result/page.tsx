import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Mercury from '@/images/수성.png';
import SpotCard from '@/components/SpotCard';
import ContentBox from '@/components/ContentBox';
import { RotateCcw, ScanHeart, Share } from 'lucide-react';
import Link from 'next/link';

const mockData = {
  id: 'mercury',
  title: '🧭 흐름을 좇는 감성 방랑자',
  summary: '기분 따라 걷는 감성적 자유인',
  features: [
    '기분 따라 발길 닿는 대로 걷는 걸 좋아해요.',
    '우연히 발견한 길이나 풍경에서 감동을 받아요.',
    '계획보다 분위기와 순간을 중시해요.',
  ],
};

export default function Page() {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-3xl font-bold">{mockData.title}</div>
      <Image src={Mercury} width={100} height={100} alt={mockData.id} className="w-sm m-auto" />
      <ContentBox>
        <div className="text-2xl font-bold">당신의 특징은?</div>
        <div>
          {mockData.features.map((feature, idx) => (
            <div key={idx} className="text-md">
              - {feature}
            </div>
          ))}
        </div>
      </ContentBox>
      <ContentBox>
        <div className="text-2xl font-bold">당신에게 추천하는 야경 명소</div>
        <div className="flex flex-col gap-10"></div>
      </ContentBox>
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
