import { Button } from '@/components/ui/button';

export default function Page() {
  return (
    <div className="flex flex-col h-full justify-between">
      <section className="flex flex-col items-center gap-7">
        <div className="text-2xl">Q1.</div>
        <div className="font-bold text-3xl">오늘, 당신의 기분은 어떤가요?</div>
      </section>
      <section className="flex flex-col gap-3 mb-5 font-bold text-lg">
        <div className="w-full bg-blue-950/50 hover:bg-blue-200/60 p-3 text-center rounded-2xl cursor-pointer">
          뿌듯해요
        </div>
        <div className="w-full bg-blue-950/50 hover:bg-blue-200/60 p-3 text-center rounded-2xl cursor-pointer">
          활기찬 하루에요!
        </div>
        <div className="w-full bg-blue-950/50 hover:bg-blue-200/60 p-3 text-center rounded-2xl cursor-pointer">
          우울해요..
        </div>
        <div className="w-full bg-blue-950/50 hover:bg-blue-200/60 p-3 text-center rounded-2xl cursor-pointer">
          화나요!!!
        </div>
        <div className="w-full bg-blue-950/50 hover:bg-blue-200/60 p-3 text-center rounded-2xl cursor-pointer">
          그냥 차분해요
        </div>
      </section>
    </div>
  );
}
