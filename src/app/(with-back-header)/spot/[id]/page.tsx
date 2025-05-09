import { getSpot } from '@/actions/spotAction';
import { SpotDetail } from '@/components/SpotDetail';

type PageProps = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: PageProps) {
  const id = Number(params.id);
  const spot = await getSpot(id);

  return <>{spot ? <SpotDetail spot={spot} /> : <div>정보를 불러오지 못했습니다.</div>}</>;
}
