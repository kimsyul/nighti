import SpotList from '@/components/SpotList';
import RecommendButton from '@/components/spot-list/RecommendButton';

export default async function Page() {
  return (
    <div className="flex flex-col gap-4">
      <RecommendButton />
      <section className="flex flex-col gap-2">
        <h1 className="text-center text-2xl text-accent font-bold">서울 야경 명소</h1>
      </section>
      <section>
        <SpotList />
      </section>
    </div>
  );
}
