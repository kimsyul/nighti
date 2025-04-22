import Image from 'next/image';
import { Badge } from './ui/badge';
import Link from 'next/link';

export default function SpotCard() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-center">
        <div className="text-amber-200 text-xl font-bold">남산타워</div>
        <div className="flex gap-1">
          <Badge variant="outline">남산</Badge>
          <Badge variant="outline">남산</Badge>
          <Badge variant="outline">남산</Badge>
        </div>
      </div>
      <Link href={`/spot/1`} className="w-full">
        <Image
          src={'/shooting-star.png'}
          width={1}
          height={1}
          alt="남산 타워"
          className="w-full rounded-4xl hover:shadow-lg hover:shadow-amber-200 cursor-pointer"
        />
      </Link>
    </div>
  );
}
