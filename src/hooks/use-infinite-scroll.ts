import { useState, useEffect, useCallback, useRef } from 'react';

interface UseInfiniteScrollOptions {
  hasNextPage: boolean;
  fetchNextPage: () => void;
  threshold?: number;
  debounceMs?: number;
}

export const useInfiniteScroll = ({
  hasNextPage,
  fetchNextPage,
  threshold = 200,
  debounceMs = 100
}: UseInfiniteScrollOptions) => {
  const [isFetching, setIsFetching] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const lastScrollTop = useRef(0);

  const handleScroll = useCallback(() => {
    // Throttle scroll events for better performance
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Only trigger if scrolling down and past threshold
      if (
        scrollTop > lastScrollTop.current &&
        window.innerHeight + scrollTop >= document.documentElement.offsetHeight - threshold &&
        !isFetching &&
        hasNextPage
      ) {
        setIsFetching(true);
        fetchNextPage();
      }
      
      lastScrollTop.current = scrollTop;
    }, debounceMs);
  }, [hasNextPage, isFetching, fetchNextPage, threshold, debounceMs]);

  useEffect(() => {
    // Use passive event listener for better performance
    const scrollOptions = { passive: true };
    window.addEventListener('scroll', handleScroll, scrollOptions);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [handleScroll]);

  // Reset fetching state after a short delay
  useEffect(() => {
    if (isFetching) {
      const timer = setTimeout(() => setIsFetching(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [isFetching]);

  return { isFetching };
};