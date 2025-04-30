'use server';

import { createClient } from '@/utils/supabase/server';
import { PostgrestError } from '@supabase/supabase-js';
import { cookies } from 'next/headers';
import { Database } from '../../types_db';

export type SpotType = Database['public']['Tables']['spots']['Row'];

function handleError(error: PostgrestError | null) {
  console.log(error);
  throw new Error(error?.message);
}

export async function getSpotList({
  search,
  page,
  pageSize,
}: {
  search?: string;
  page: number;
  pageSize: number;
}): Promise<{
  data: SpotType[] | null;
  page: number;
  hasNextPage: boolean;
}> {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data, count, error } = await supabase
    .from('spots')
    .select('*')
    .like('title', `%${search}%`)
    .range((page - 1) * pageSize, page * pageSize - 1);

  const hasNextPage = (count as number) > page * pageSize;

  if (error) {
    handleError(error);
  }

  return { data, page, hasNextPage };
}

export async function getFilteredSpot(selectedValues: string[]): Promise<SpotType[]> {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  let query = supabase.from('spots').select('*');

  if (selectedValues.includes('negative')) {
    query = query.contains('tags', ['negative']);
  }

  const togetherFilter = ['alone', 'family', 'pet'].filter((tag) => selectedValues.includes(tag));
  if (togetherFilter.length > 0) {
    query = query.contains('tags', togetherFilter);
  }

  const placeFilter = ['water', 'high', 'park', 'building', 'tradition'].filter((tag) => selectedValues.includes(tag));
  if (placeFilter.length > 0) {
    query = query.contains('tags', placeFilter);
  }

  if (selectedValues.includes('car')) {
    query = query.not('parkingInfo', 'is', null);
  }

  if (selectedValues.includes('walk')) {
    query = query.or('bus.not.is.null, subway.not.is.null');
  }

  if (selectedValues.includes('money')) {
    query = query.eq('isFree', '유료');
  }

  if (selectedValues.includes('free')) {
    query = query.eq('isFree', '무료');
  }

  const { data, error } = await query;

  if (error) {
    handleError(error);
    return [];
  }

  return data;
}

export async function getAllSpots(): Promise<SpotType[]> {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase.from('spots').select('*');

  if (error) {
    handleError(error);
    return [];
  }

  return data;
}

export async function getSpot(num: number): Promise<SpotType> {
  if (!num) {
    throw new Error('id가 없습니다.');
  }

  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase.from('spots').select('*').eq('num', num).maybeSingle();

  if (error) {
    handleError(error);
  }

  return data;
}

// 'use server';

// import { createClient } from '@/utils/supabase/server';
// import { PostgrestError } from '@supabase/supabase-js';
// import { cookies } from 'next/headers';

// function handleError(error: PostgrestError | null) {
//   console.log(error);
//   throw new Error(error?.message);
// }

// export async function getSpotList() {
//   const cookieStore = await cookies();
//   const supabase = createClient(cookieStore);

//   const { data, error } = await supabase.from('spots').select('*');

//   if (error) {
//     handleError(error);
//   }

//   return data;
// }
