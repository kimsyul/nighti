import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Mercury from '@/images/수성.png';
import SpotCard from '@/components/SpotCard';
import ContentBox from '@/components/ContentBox';

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
    <div className="flex flex-col gap-10">
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
        <div className="flex flex-col gap-10">
          <SpotCard />
          <SpotCard />
          <SpotCard />
        </div>
      </ContentBox>
      <div className="sticky">
        <Button>결과 공유하기</Button>
      </div>
    </div>
  );
}
