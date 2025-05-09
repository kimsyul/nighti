import Image from 'next/image';
import { Badge } from './ui/badge';
import Link from 'next/link';
import { SpotCardInfo } from '@/types/spot';

export default function SpotCard({ num, title, operatingTime, isFree, address, img }: SpotCardInfo) {
  return (
    <Link
      href={`/spot/${num}`}
      className="flex flex-col items-center gap-4 bg-primary/50 transition-all duration-300 hover:shadow-md hover:shadow-secondary active:shadow-md active:shadow-secondary cursor-pointer border-1 border-secondary rounded-2xl w-full m-auto py-6">
      <section className="relative w-6/7 h-50">
        {img ? (
          <Image src={img} alt={`${title} 이미지`} fill className="object-cover rounded-2xl" />
        ) : (
          <div>사진 없음</div>
        )}
      </section>
      <section className="w-6/7 flex flex-col gap-1.5">
        <div className="flex justify-between">
          <div className="text-amber-200 text-xl font-bold">{title}</div>
          <Badge variant="outline">{isFree}</Badge>
        </div>
        <div>{address}</div>
        <div>{operatingTime}</div>
      </section>
    </Link>
  );
}
