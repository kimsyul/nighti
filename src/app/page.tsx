import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col gap-10 items-center justify-between h-full pt-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-5xl text-center font-bold ps-4 ">오늘 당신에게 어울리는 야경은?</h1>
        <h2 className="text-2xl text-center bg-black/50 w-fit px-1">오늘 밤, 나를 위한 작은 쉼표</h2>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <Button type="button" className="text-xl w-full" size="lg" asChild>
            <Link href={'/test/1'}>테스트 시작</Link>
          </Button>
          <Link href={'/list'} className="text-center underline cursor-pointer">
            스킵하기
          </Link>
        </div>
        <Link href={'/list'} className="text-center">
          서울야경
        </Link>
      </div>
    </div>
  );
}
