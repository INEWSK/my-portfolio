'use client';

import { useTheme } from 'next-themes';
import { MagicCard } from './magicui/magic-card';

export default function Cards() {
  const { theme } = useTheme();

  const cards = Array.from({ length: 4 }).map((_, index) => (
    <MagicCard
      key={index}
      className='flex-col items-center justify-center whitespace-nowrap shadow-sm'
      gradientColor={theme === 'dark' ? '#262626' : '#D9D9D955'}
    >
      Card
    </MagicCard>
  ));
  return (
    <div className='grid h-96 grid-cols-1 gap-4 sm:grid-cols-2'>{cards}</div>
  );
}
