'use client';

import { useRecommendStore } from '@/app/store/useRecommendStore';
import { useEffect } from 'react';
import SpotCard from './SpotCard';
import { useQuery } from '@tanstack/react-query';
import { getFilteredSpot } from '@/actions/spotAction';

export default function Recommendation() {
  const { selectedValues, setRecommendations, recommendedPlaces } = useRecommendStore();

  const { data, isPending } = useQuery({
    queryKey: ['spots'],
    queryFn: () => getFilteredSpot(selectedValues),
  });
  console.log(selectedValues);
  console.log(data);

  useEffect(() => {
    if (data) {
      setRecommendations(data);
    }
  }, [data]);

  if (!recommendedPlaces || recommendedPlaces.length === 0) return <div>추천할 명소가 없어요..</div>;

  return (
    <div className="flex flex-col gap-8">
      {isPending && <div>추천 명소를 고르고 있어요!</div>}
      {recommendedPlaces.map((spot) => (
        <SpotCard key={spot.num} {...spot} />
      ))}
    </div>
  );
}
