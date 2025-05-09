import { ReactNode } from 'react';

export default function ContentBox({ children }: { children: ReactNode }) {
  return <div className="bg-primary/50 text-white rounded-2xl p-8 border-2 flex flex-col gap-2">{children}</div>;
}
