import { useRecommendStore } from '@/app/store/useRecommendStore';
import { calculateRecommendations } from '@/utils/calculateRecommendations';
import { useEffect, useState } from 'react';
// TODO

export default function Recommendation() {
  const { selectedValues, setRecommendations, recommendedPlaces } = useRecommendStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const spots = await calculateRecommendations(selectedValues);
      setRecommendations(spots);
      setLoading(false);
    }

    load();
  }, []);

  if (loading) return <div>추천 명소를 고르고 있어요!</div>;
  if (!recommendedPlaces) return <div>추천할 명소가 없어요..</div>;

  return <div className="flex flex-col"></div>;
}
