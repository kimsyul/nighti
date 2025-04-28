import { getSpot } from '@/actions/spotAction';
import { SpotDetail } from '@/components/SpotDetail';

export default async function Page({ params }: { params: { id: string } }) {
  const spot = await getSpot(params.id);

  return <>{spot ? <SpotDetail spot={spot} /> : <div></div>}</>;
}
