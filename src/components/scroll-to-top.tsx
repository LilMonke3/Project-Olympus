'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronUp, Rocket } from 'lucide-react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Button
      onClick={scrollToTop}
      size="sm"
      className="fixed bottom-4 sm:bottom-6 lg:bottom-8 right-4 sm:right-6 lg:right-8 z-50 rounded-full w-10 h-10 sm:w-12 sm:h-12 shadow-lg bg-gradient-to-r from-amber-500 to-blue-500 hover:from-amber-600 hover:to-blue-600 dark:from-purple-500 dark:to-purple-600 dark:hover:from-purple-600 dark:hover:to-purple-700 transition-all duration-600 hover:scale-110 hover:shadow-2xl group mobile-touch-target"
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" />
      <Rocket className="w-2 h-2 sm:w-3 sm:h-3 absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-all duration-600" />
    </Button>
  );
}