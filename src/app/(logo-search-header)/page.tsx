import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col gap-10 items-center justify-between h-full pt-10">
      <div className="flex flex-col items-center gap-4 bg-primary/30 rounded-2xl">
        <h1 className="text-4xl text-center font-bold px-4">
          오늘의 당신에게
          <br />
          어울리는 야경은?
        </h1>
        <h2 className="text-xl text-center font-semibold w-fit">오늘 밤, 나를 위한 작은 쉼표</h2>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <Button type="button" variant="accent" className="text-xl w-full font-bold" size="lg" asChild>
            <Link href={'/test/1'}>테스트 시작</Link>
          </Button>
          <Link href={'/spot'} className="text-center underline cursor-pointer">
            스킵하기
          </Link>
        </div>
      </div>
    </div>
  );
}
