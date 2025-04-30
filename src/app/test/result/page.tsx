import Recommendation from '@/components/Recommendation';
import ResultPageButton from '@/components/ResultPageButton';
import Result from '@/components/ResultPageButton';

export default function Page() {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-3xl font-bold text-accent">당신에게 추천하는 야경 명소</div>
      <Recommendation />
      <ResultPageButton />
    </div>
  );
}
