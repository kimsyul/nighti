'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import SpotCard from './SpotCard';
import { getAllSpots } from '@/actions/spotAction';
import { Skeleton } from './ui/skeleton';
import { useInView } from 'react-intersection-observer';

export default function SpotList({ search }: { search: string }) {
  // TODO
  // const { data, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage } = useInfiniteQuery({
  //   initialPageParam: 1,
  //   queryKey: ['spots', search],
  //   queryFn: ({ pageParam }) => getAllSpots({ search, page: pageParam, pageSize: 5 }),
  //   getNextPageParam: (lastPage) => (lastPage.page ? )
  // });

  const { ref, inView } = useInView({ threshold: 0 });

  return (
    <>
      {(isFetching || isFetchingNextPage) && <Skeleton className="rounded-2xl w-3/4 m-auto bg-amber-200" />}
      {data && data.map((spot) => <SpotCard key={spot.num} {...spot} />)}
      <div ref={ref}></div>
    </>
  );
}
