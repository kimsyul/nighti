import SpotList from '@/components/SpotList';

export default async function Page() {
  return (
    <div className="flex flex-col gap-4">
      <section>
        <h1 className="text-center text-2xl text-accent font-bold">서울 야경 명소</h1>
      </section>
      <section>
        <SpotList />
      </section>
    </div>
  );
}
