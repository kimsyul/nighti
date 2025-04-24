import SpotCard from '@/components/SpotCard';

export default async function Page() {
  return (
    <div>
      <section>
        <h1 className="text-center text-2xl text-accent font-bold">서울 야경 명소</h1>
      </section>
      <section>
        {allSpots.map((spot: SpotCardInfo) => (
          <SpotCard key={spot.num} {...spot} />
        ))}
      </section>
    </div>
  );
}
