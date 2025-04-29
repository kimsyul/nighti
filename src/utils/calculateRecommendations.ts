import { SpotType, getAllSpots } from '@/actions/spotAction';

export async function calculateRecommendations(selectedValues: string[]) {
  const spots = await getAllSpots();

  if (!spots) return [];

  const sortedWithScore = spots
    .map((spot: SpotType) => {
      const matchCount = spot.tags.filter((tag: string) => selectedValues.includes(tag)).length;
      return { ...spot, matchCount };
    })
    .filter((spot) => spot.matchCount > 0)
    .sort((a, b) => b.matchCount - a.matchCount);

  return sortedWithScore.map(({ matchCount, ...rest }) => rest);
}
