'use client';

import { useQuery } from '@tanstack/react-query';
import SpotCard from './SpotCard';
import { getAllSpots } from '@/actions/spotAction';
import { Skeleton } from './ui/skeleton';

export default function SpotList() {
  const { data, isPending } = useQuery({
    queryKey: ['spots'],
    queryFn: () => getAllSpots(),
  });
  console.log(data);

  return (
    <>
      {isPending && <Skeleton className="rounded-2xl w-3/4 m-auto" />}
      {data && data.map((spot) => <SpotCard key={spot.num} {...spot} />)}
    </>
  );
}
