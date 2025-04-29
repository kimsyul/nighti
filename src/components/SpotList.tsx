'use client';

import SpotCard from './SpotCard';
import { getSpotList } from '@/actions/spotAction';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

const PAGE_SIZE = 10;

export default function SpotList({ search = '' }: { search?: string }) {
  const { data, isFetching, isFetchingNextPage, fetchNextPage } = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['spots', search],
    queryFn: ({ pageParam }) => getSpotList({ search, page: pageParam, pageSize: PAGE_SIZE }),
    getNextPageParam: (lastPage) => (lastPage.page ? lastPage.page + 1 : undefined),
  });

  const handleLoadMore = () => {
    fetchNextPage();
  };

  return (
    <div className="flex flex-col gap-8">
      {isFetching && <div>로딩 중...</div>}
      <div className="flex flex-col gap-5">
        {data?.pages
          ?.map((page) => page.data)
          ?.flat()
          .map((spot) => (
            <SpotCard key={spot.num} {...spot} />
          ))}
      </div>
      <Button
        variant={'accent'}
        onClick={handleLoadMore}
        disabled={isFetchingNextPage}
        size={'lg'}
        className="w-full font-bold">
        {isFetchingNextPage ? (
          '불러오는 중...'
        ) : (
          <>
            <ChevronDown /> 더 보기
          </>
        )}
      </Button>
    </div>
  );
}
