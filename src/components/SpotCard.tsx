import Image from 'next/image';
import { Badge } from './ui/badge';
import Link from 'next/link';

export default function SpotCard() {
  return (
    <Link
      href={`/spot/1`}
      className="flex flex-col items-center gap-2 transition-all duration-300 hover:scale-[1.02] cursor-pointer border-1 border-dashed border-secondary rounded-2xl w-3/4 m-auto">
      <Image src={'/shooting-star.png'} width={1} height={1} alt="남산 타워" className="w-full rounded-t-2xl" />
      <div className="text-center">
        <div className="text-amber-200 text-xl font-bold">남산타워</div>
        <div className="flex gap-1">
          <Badge variant="outline">남산</Badge>
          <Badge variant="outline">남산</Badge>
          <Badge variant="outline">남산</Badge>
        </div>
      </div>
    </Link>
  );
}
