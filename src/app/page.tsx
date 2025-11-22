'use client';

import { useState, useEffect, useMemo, useCallback, memo } from 'react';
import { MythologyCard } from '@/components/mythology-card';
import { MythologyFilter } from '@/components/mythology-filter';
import { LoadingCard, LoadingSpinner } from '@/components/loading';
import { ScrollToTop } from '@/components/scroll-to-top';
import { ThemeToggle } from '@/components/theme-toggle';
import { useInfiniteScroll } from '@/hooks/use-infinite-scroll';
import { greekMythologyData, MythologyItem } from '@/data/greek-mythology';
import { Sparkles, Mountain, Zap } from 'lucide-react';

type Category = 'all' | 'god' | 'goddess' | 'hero' | 'creature' | 'story';

interface FilterOptions {
  category: Category;
  search: string;
}

const ITEMS_PER_PAGE = 3;

// Memoized components for performance
const MemoizedMythologyCard = memo(MythologyCard);
const MemoizedMythologyFilter = memo(MythologyFilter);
const MemoizedScrollToTop = memo(ScrollToTop);
const MemoizedLoadingCard = memo(LoadingCard);
const MemoizedLoadingSpinner = memo(LoadingSpinner);

export default function Home() {
  const [items, setItems] = useState< MythologyItem[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [filters, setFilters] = useState<FilterOptions>({ category: 'all', search: '' });
  const [mounted, setMounted] = useState(false);

  // Memoized filter function
  const filteredItems = useMemo(() => {
    let filtered = greekMythologyData;
    
    // Filter by category
    if (filters.category !== 'all') {
      filtered = filtered.filter(item => item.category === filters.category);
    }
    
    // Filter by search term
    if (filters.search.trim()) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower) ||
        item.fullStory.toLowerCase().includes(searchLower) ||
        item.attributes?.some(attr => attr.toLowerCase().includes(searchLower)) ||
        item.powers?.some(power => power.toLowerCase().includes(searchLower))
      );
    }
    
    return filtered;
  }, [filters.category, filters.search]);

  // Calculate if there are more items to load
  const hasNextPage = useMemo(() => items.length < filteredItems.length, [items.length, filteredItems.length]);

  // Memoized load more function
  const loadMoreItems = useCallback(() => {
    const nextPage = currentPage + 1;
    const startIndex = nextPage * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const newItems = filteredItems.slice(startIndex, endIndex);
    
    setItems(prev => [...prev, ...newItems]);
    setCurrentPage(nextPage);
  }, [currentPage, filteredItems]);

  // Memoized filter change handler
  const handleFiltersChange = useCallback((newFilters: FilterOptions) => {
    setFilters(newFilters);
  }, []);

  // Memoized character navigation handler
  const handleNavigateToCharacter = useCallback((characterId: string, character: MythologyItem) => {
    setFilters({
      category: 'all',
      search: character.title
    });
    
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Reset items when filters change
  useEffect(() => {
    setItems([]);
    setCurrentPage(0);
    const initialItems = filteredItems.slice(0, ITEMS_PER_PAGE);
    setItems(initialItems);
  }, [filteredItems]);

  // Setup infinite scroll
  const { isFetching } = useInfiniteScroll({
    hasNextPage,
    fetchNextPage: loadMoreItems,
    threshold: 200
  });

  // Handle mounted state for theme toggle
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle character navigation from related figures
  useEffect(() => {
    const handleNavigateEvent = (event: CustomEvent) => {
      const { characterId, character } = event.detail;
      handleNavigateToCharacter(characterId, character);
    };

    // Add event listener
    window.addEventListener('navigateToCharacter', handleNavigateEvent as EventListener);
    
    // Cleanup
    return () => {
      window.removeEventListener('navigateToCharacter', handleNavigateEvent as EventListener);
    };
  }, [handleNavigateToCharacter]); // handleNavigateToCharacter'e bağımlı

  // Handle URL hash for direct navigation
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const character = greekMythologyData.find(item => item.id === hash);
      if (character) {
        handleNavigateToCharacter(hash, character);
      }
    }
  }, [handleNavigateToCharacter]); // handleNavigateToCharacter'e bağımlı

  return (
    <div className="min-h-screen gradient-bg transition-all duration-400 relative overflow-hidden">
      {/* Enhanced Theme Transition Overlay */}
      <div className="theme-transition-overlay" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-5 left-5 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-amber-200/20 dark:bg-amber-400/10 rounded-full blur-xl animate-pulse transition-all duration-400"></div>
        <div className="absolute top-16 right-8 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-blue-200/20 dark:bg-blue-400/10 rounded-full blur-2xl animate-pulse delay-1000 transition-all duration-400"></div>
        <div className="absolute bottom-12 left-1/4 w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-purple-200/20 dark:bg-purple-400/10 rounded-full blur-xl animate-pulse delay-2000 transition-all duration-400"></div>
      </div>

      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-10 transition-all duration-400">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
              <div className="relative">
                <Mountain className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600 dark:text-amber-400 transition-colors duration-400" />
                <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-amber-500 rounded-full animate-ping"></div>
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-amber-600 to-blue-600 dark:from-amber-400 dark:to-blue-400 bg-clip-text text-transparent transition-all duration-400">
                Yunan Mitolojisi
              </h1>
              <div className="relative">
                <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-amber-500 dark:text-amber-400 transition-colors duration-400" />
                <div className="absolute -top-1 -right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-ping delay-500"></div>
              </div>
            </div>
            {mounted && (
              <ThemeToggle />
            )}
          </div>
          <p className="text-gray-600 dark:text-gray-300 transition-colors duration-400 text-center text-sm sm:text-base mt-2 sm:mt-0">
            Tanrılar, kahramanlar ve efsanelerle dolu büyülü bir yolculuk
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8 relative">
        {/* Filter */}
        <div className="desktop-container">
          <MemoizedMythologyFilter
            filters={filters}
            onFiltersChange={handleFiltersChange}
            itemCount={items.length}
            totalItems={filteredItems.length}
          />
        </div>

        {/* Items Grid - Desktop 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {items.map((item, index) => (
            <div key={item.id} className="desktop-container">
              <MemoizedMythologyCard item={item} index={index} />
            </div>
          ))}
        </div>

        {/* Loading State */}
        {isFetching && hasNextPage && (
          <div className="col-span-1 lg:col-span-2 space-y-4 sm:space-y-6 mt-6">
            <div className="desktop-container">
              <MemoizedLoadingCard />
            </div>
          </div>
        )}

        {/* No More Items */}
        {!hasNextPage && items.length > 0 && (
          <div className="col-span-1 lg:col-span-2 text-center py-6 sm:py-8">
            <div className="flex items-center justify-center gap-2">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 dark:text-amber-400 transition-colors duration-600" />
              <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm transition-colors duration-600">
                Tüm {filteredItems.length} öğe yüklendi
              </p>
            </div>
          </div>
        )}

        {/* Loading Spinner */}
        {isFetching && hasNextPage && (
          <div className="col-span-1 lg:col-span-2">
            <MemoizedLoadingSpinner />
          </div>
        )}

        {/* Empty State */}
        {items.length === 0 && !isFetching && (
          <div className="col-span-1 lg:col-span-2 text-center py-12 sm:py-16">
            <Mountain className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4 transition-colors duration-600" />
            <h3 className="text-base sm:text-lg font-semibold text-gray-600 dark:text-gray-300 mb-2 transition-colors duration-600">
              Gösterilecek öğe bulunamadı
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base transition-colors duration-600">
              Filtrelerinizi değiştirmeyi deneyin
            </p>
          </div>
        )}
      </main>

      {/* Scroll to Top Button */}
      <MemoizedScrollToTop />
    </div>
  );
}