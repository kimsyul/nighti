'use server';

import { createClient } from '@/utils/supabase/server';
import { PostgrestError } from '@supabase/supabase-js';
import { cookies } from 'next/headers';

function handleError(error: PostgrestError | null) {
  console.log(error);
  throw new Error(error?.message);
}

export async function getAllSpots({ search, page, pageSize }: { search?: string; page: number; pageSize: number }) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase
    .from('spots')
    .select('*')
    .like('title', `%${search}%`)
    .range((page - 1) * pageSize, page * pageSize - 1);

  if (error) {
    handleError(error);
  }

  return { data, page, pageSize };
}

export async function getSpot(num: string) {
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

// export async function getAllSpots() {
//   const cookieStore = await cookies();
//   const supabase = createClient(cookieStore);

//   const { data, error } = await supabase.from('spots').select('*');

//   if (error) {
//     handleError(error);
//   }

//   return data;
// }
