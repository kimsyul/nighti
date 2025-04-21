import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Mercury from '@/images/수성.png';

const mockData = {
  id: 'mercury',
  title: '🧭 흐름을 좇는 감성 방랑자',
  mbti: ['ENFP', 'ENTP'],
  description:
    '즉흥적인 감각과 낭만을 가진 당신은 자유로운 흐름을 즐기는 탐험가예요. 밤공기, 조명, 분위기… 그날의 기분이 길을 정하죠.',
  features: ['즉흥적인 경로 선택', '분위기에 민감', '우연한 발견을 즐김'],
  keywords: ['강변 산책로', '조용한 골목길', '우연히 만나는 뷰'],
};

export default function Page() {
  return (
    <div>
      <div>{mockData.title}</div>
      <Image src={Mercury} width={100} height={100} alt={mockData.id} />
      <div>{mockData.description}</div>

      <div className="">
        <Button>결과 공유하기</Button>
      </div>
    </div>
  );
}
