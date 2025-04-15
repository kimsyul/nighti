import { Button } from '@/components/ui/button';

export default function Page() {
  return (
    <div className="flex flex-col h-full justify-between">
      <section className="flex flex-col items-center gap-7">
        <div className="text-2xl">Q1.</div>
        <div className="font-bold text-3xl">오늘, 당신의 기분은 어떤가요?</div>
      </section>
      <section className="flex flex-col gap-3 mb-10">
        <div className="w-full bg-secondary/60 p-5 text-center rounded-2xl cursor-pointer">꿀꿀해요</div>
        <div className="w-full bg-secondary/60 p-5 text-center rounded-2xl cursor-pointer">꿀꿀해요</div>
        <div className="w-full bg-secondary/60 p-5 text-center rounded-2xl cursor-pointer">꿀꿀해요</div>
        <div className="w-full bg-secondary/60 p-5 text-center rounded-2xl cursor-pointer">꿀꿀해요</div>
      </section>
    </div>
  );
}
