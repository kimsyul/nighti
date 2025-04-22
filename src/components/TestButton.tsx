import { ReactNode } from 'react';

export default function TestButton({ children, onClickButton }: { children: ReactNode; onClickButton?: () => void }) {
  return (
    <div
      onClick={onClickButton}
      className="w-full bg-primary/50 hover:bg-secondary/60 border hover:border-0 p-3 text-center rounded-2xl cursor-pointer">
      {children}
    </div>
  );
}
