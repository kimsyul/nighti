'use client';

import { useRecommendStore } from '@/store/useRecommendStore';
import { useEffect } from 'react';
import SpotCard from './SpotCard';
import { useQuery } from '@tanstack/react-query';
import { getFilteredSpot } from '@/actions/spotAction';
import LoadingOrEmpty from './LoadingOrEmpty';

export default function Recommendation() {
  const { selectedValues, setRecommendations, recommendedPlaces } = useRecommendStore();

  const { data, isPending } = useQuery({
    queryKey: ['spots'],
    queryFn: () => getFilteredSpot(selectedValues),
    enabled: selectedValues.length > 0,
  });
  console.log(selectedValues);
  console.log(data);

  useEffect(() => {
    if (data) {
      const topData = data && data.sort(() => Math.random() - 0.5).slice(0, 3);
      setRecommendations(topData);
    }
  }, [data]);

  return (
    <div className="flex flex-col gap-4">
      {isPending && <LoadingOrEmpty>추천 명소를 고르고 있어요!</LoadingOrEmpty>}
      {!isPending && recommendedPlaces.length === 0 && <LoadingOrEmpty>추천할 명소가 없어요..ㅠㅠ</LoadingOrEmpty>}
      {recommendedPlaces && recommendedPlaces.map((spot) => <SpotCard key={spot.num} {...spot} />)}
    </div>
  );
}
