'use server';

import { createClient } from '@/utils/supabase/server';
import { PostgrestError } from '@supabase/supabase-js';
import { cookies } from 'next/headers';

function handleError(error: PostgrestError | null) {
  console.log(error);
  throw new Error(error?.message);
}

export async function getAllSpots() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase.from('spots').select('*');

  if (error) {
    handleError(error);
  }

  return data;
}
