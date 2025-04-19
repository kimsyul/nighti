'use client';

import { questions } from '@/lib/test';
import TestButton from '@/components/ TestButton';
import { useRouter } from 'next/navigation';
import React, { use } from 'react';

export default function Page({ params }: { params: Promise<{ step: string }> }) {
  const router = useRouter();
  const { step } = use(params);
  const stepNum = Number(step);

  const question = questions[stepNum - 1]?.question;
  const options = questions[stepNum - 1]?.options;

  const onClickButton = () => {
    const nextStep = stepNum + 1;
    if (nextStep > questions.length) {
      router.push('/test/result');
    } else {
      router.push(`/test/${nextStep}`);
    }
  };

  return (
    <div className="flex flex-col h-full justify-between">
      <section className="flex flex-col items-center gap-7">
        <div className="text-2xl">Q. {step}</div>
        <div className="font-bold text-3xl text-center">{question}</div>
      </section>
      <section className="flex flex-col gap-3 mb-5 font-bold text-lg">
        {options.map((option) => (
          <TestButton key={option.value} text={option.label} onClickButton={onClickButton} />
        ))}
      </section>
    </div>
  );
}
