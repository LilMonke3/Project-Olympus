'use client';

import { useState, useEffect, useRef } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  delayBetweenItems?: number;
}

export const useScrollAnimation = ({
  threshold = 0.1,
  rootMargin = '0px',
  delayBetweenItems = 100
}: UseScrollAnimationOptions = {}) => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            
            // Clear any existing timeout for this index
            const existingTimeout = timeoutsRef.current[index];
            if (existingTimeout) {
              clearTimeout(existingTimeout);
            }
            
            // Add delay based on index
            const timeout = setTimeout(() => {
              setVisibleItems((prev) => new Set([...prev, index]));
            }, index * delayBetweenItems);
            
            timeoutsRef.current[index] = timeout;
          }
        });
      },
      { threshold, rootMargin }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      // Clear all timeouts
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current = [];
    };
  }, [threshold, rootMargin, delayBetweenItems]);

  const observeElement = (element: HTMLElement, index: number) => {
    if (observerRef.current) {
      element.setAttribute('data-index', index.toString());
      observerRef.current.observe(element);
    }
  };

  const unobserveElement = (element: HTMLElement) => {
    if (observerRef.current) {
      observerRef.current.unobserve(element);
    }
  };

  return { visibleItems, observeElement, unobserveElement };
};