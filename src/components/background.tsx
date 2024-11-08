'use client';

import React from 'react';
import Particles from './magicui/particles';
import { useTheme } from 'next-themes';

export default function Background() {
  const { theme } = useTheme();

  return (
    <Particles
      className='absolute inset-0 h-full'
      quantity={100}
      ease={80}
      color={theme === 'dark' ? '#fff' : '#333'}
      refresh
    />
  );
}
