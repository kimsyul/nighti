'use client';

import { questions } from '@/lib/test';
import TestButton from '@/components/TestButton';
import { useRouter } from 'next/navigation';
import { useRecommendStore } from '@/app/store/useRecommendStore';

export default function Test({ step }: { step: number }) {
  const router = useRouter();

  const question = questions[step - 1]?.question;
  const options = questions[step - 1]?.options;

  const { selectedValues, addValue } = useRecommendStore();

  const onClickButton = (value: string) => {
    const nextStep = step + 1;

    addValue(value);
    console.log(selectedValues);

    if (nextStep > questions.length) {
      router.push('/test/result');
    } else {
      router.push(`/test/${nextStep}`);
    }
  };

  return (
    <div className="flex flex-col h-full justify-between">
      <section className="flex flex-col items-center gap-7">
        <div className="text-center">
          <div className="text-2xl">Q.</div>
          <div className="text-2xl">
            {step} / {questions.length}
          </div>
        </div>
        <div className="font-bold text-3xl text-center">{question}</div>
      </section>
      <section className="flex flex-col gap-3 mb-5 font-bold text-lg">
        {options.map((option, idx) => (
          <TestButton key={idx} onClickButton={() => onClickButton(option.value)}>
            {option.label}
          </TestButton>
        ))}
      </section>
    </div>
  );
}
