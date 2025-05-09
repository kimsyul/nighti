import { getSpot } from '@/actions/spotAction';
import { SpotDetail } from '@/components/SpotDetail';

// TODO
export default async function Page({ params }: any) {
  const id = Number(params.id);
  const spot = await getSpot(id);

  return <>{spot ? <SpotDetail spot={spot} /> : <div>정보를 불러오지 못했습니다.</div>}</>;
}
