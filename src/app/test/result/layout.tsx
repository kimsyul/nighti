import { ReactNode } from 'react';

export default function first({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-lg h-screen overflow-y-auto bg-[url(/bg.png)] shadow-2xl shadow-amber-200 bg-center bg-cover flex flex-col pb-4 m-auto">
      <main className="flex-1 px-6 py-4">{children}</main>
    </div>
  );
}
