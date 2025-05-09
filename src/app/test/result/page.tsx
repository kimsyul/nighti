import Recommendation from '@/components/Recommendation';
import ResultPageButton from '@/components/ResultPageButton';
import Result from '@/components/ResultPageButton';

export default function Page() {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-2xl font-bold text-accent">오늘 밤 여기 어때요?</div>
      <Recommendation />
      <ResultPageButton />
    </div>
  );
}
