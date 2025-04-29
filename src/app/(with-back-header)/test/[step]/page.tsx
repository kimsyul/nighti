import { use } from 'react';
import Test from '@/components/Test';

export default function Page({ params }: { params: Promise<{ step: string }> }) {
  const { step } = use(params);
  const stepNum = Number(step);

  return <Test step={stepNum} />;
}
