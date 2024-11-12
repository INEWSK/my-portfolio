'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Button
      size='icon'
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out',
        {
          'translate-y-10 opacity-0': !isVisible,
          'translate-y-0 opacity-100': isVisible,
          'pointer-events-none': !isVisible,
        }
      )}
      aria-label='Back to top'
    >
      <ArrowUp />
    </Button>
  );
}
