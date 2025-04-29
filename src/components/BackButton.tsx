'use client';

import { useRecommendStore } from '@/app/store/useRecommendStore';
import { ArrowBigLeft } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();
  const pathName = usePathname();

  const { selectedValues, removeValue } = useRecommendStore();

  const onClickBackButton = () => {
    if (pathName.startsWith('/test')) {
      const valueToRemove = selectedValues[selectedValues.length - 1];

      if (valueToRemove !== undefined) {
        console.log('삭제할 값:', valueToRemove);
        removeValue(valueToRemove);
      }
    }
    router.back();
  };

  return <ArrowBigLeft size={30} className="text-accent cursor-pointer" onClick={onClickBackButton} />;
}
