import { Bus, TrainFront } from 'lucide-react';
import { Button } from './ui/button';
import Image from 'next/image';
import { Database } from '../../types_db';

type Spot = Database['public']['Tables']['spots']['Row'];

export function SpotDetail({ spot }: { spot: Spot }) {
  return (
    <div className="flex flex-col gap-4s">
      <section>
        <h1 className="text-accent font-bold text-4xl">{spot.title}</h1>
        <span>{spot.address}</span>
      </section>
      <div className="relative w-full h-64 rounded-4xl overflow-hidden">
        {spot.img ? <Image src={spot.img} alt={`${spot.title} 이미지`} fill className="object-cover" /> : <div></div>}
      </div>
      <section className="flex flex-col gap-4 bg-primary/50 rounded-2xl p-4">
        <div className="flex flex-col">
          <span className="text-accent font-bold text-lg">운영 시간</span>
          <span>{spot.operatingTime}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-accent font-bold text-lg">이용 요금</span>
          <span>{spot.entranceFee ?? spot.isFree}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-accent font-bold text-lg">주차 정보</span>
          <span>{spot.parkingInfo ?? '주차 정보 제공 X'}</span>
        </div>
        {spot.url && (
          <div className="flex flex-col">
            <span className="text-accent font-bold text-lg">홈페이지</span>
            <a href={spot.url} target="_blank" rel="noopener noreferrer" className="underline">
              {spot.url}
            </a>
          </div>
        )}
        {spot.tel && (
          <div className="flex flex-col">
            <span className="text-accent font-bold text-lg">문의</span>
            <span>{spot.tel}</span>
          </div>
        )}
        <div className="flex flex-col">
          <span className="text-accent font-bold text-lg">오시는 길</span>
          <div className="flex flex-col gap-1">
            {spot.subway && (
              <div className="flex gap-2">
                <TrainFront size={20} />
                <span className="flex-1">{spot.subway}</span>
              </div>
            )}
            {spot.bus && (
              <div className="flex gap-2">
                <Bus size={20} />
                <span className="flex-1">{spot.bus}</span>
              </div>
            )}
          </div>
        </div>
      </section>
      <div className="flex gap-2 mt-2 justify-center">
        <Button variant="outline" className="w-40 font-bold">
          <a href={`https://map.naver.com/p/search/${spot.address}`} target="_blank" rel="noopener noreferrer">
            네이버 지도
          </a>
        </Button>
        <Button variant="outline" className="w-40 font-bold">
          <a
            href={`https://map.kakao.com/?map_type=TYPE_MAP&q=${spot.address}`}
            target="_blank"
            rel="noopener noreferrer">
            카카오 맵
          </a>
        </Button>
      </div>
      {/* <div className="flex flex-col pb-10">
        <span className="text-accent font-bold text-lg">소개</span>
        <p className="leading-relaxed text-justify text-sm">{spot.contents}</p>
      </div> */}
    </div>
  );
}
