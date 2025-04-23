import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Input } from '@/components/ui/input';
import { SearchCheck } from 'lucide-react';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full">
      {/* <div className="flex w-full items-center gap-2 mb-10">
        <Input type="search" placeholder="Search" />
        <Button type="submit" variant="accent" className="font-bold">
          <SearchCheck size={20} />
          검색
        </Button>
      </div> */}

      {children}
    </div>
  );
}
