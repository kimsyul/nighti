import SpotCard from '@/components/SpotCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function Page() {
  return (
    <div>
      <section>
        <h1 className="text-center text-2xl text-accent font-bold">서울 야경 명소</h1>
      </section>
      <section>
        <SpotCard />
      </section>
    </div>
  );
}
