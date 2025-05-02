import { ReactNode } from 'react';

export default function LoadingOrEmpty({ children }: { children: ReactNode }) {
  return <span className="font-bold text-lg text-center flex items-center justify-center">{children}</span>;
}
