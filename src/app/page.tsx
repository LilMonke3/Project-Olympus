'use client';

import { useState, useEffect, useMemo, useCallback, memo } from 'react';
import dynamic from 'next/dynamic';
import { useInfiniteScroll } from '@/hooks/use-infinite-scroll';
import { greekMythologyData, MythologyItem, getCategoryLabel, getCategoryColor } from '@/data/greek-mythology';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Mountain, Zap } from 'lucide-react';
import { performanceUtils } from '@/components/performance-monitor';

// Lazy load components for better performance
const MythologyCard = dynamic(() => import('@/components/mythology-card').then(mod => ({ default: mod.MythologyCard })), {
  loading: () => <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg h-96" />,
  ssr: false
});

const MythologyFilter = dynamic(() => import('@/components/mythology-filter').then(mod => ({ default: mod.MythologyFilter })), {
  loading: () => <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg h-24" />,
  ssr: false
});

const LoadingCard = dynamic(() => import('@/components/loading').then(mod => ({ default: mod.LoadingCard })), {
  loading: () => <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg h-96" />,
  ssr: false
});

const LoadingSpinner = dynamic(() => import('@/components/loading').then(mod => ({ default: mod.LoadingSpinner })), {
  loading: () => <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg h-12" />,
  ssr: false
});

const ScrollToTop = dynamic(() => import('@/components/scroll-to-top').then(mod => ({ default: mod.ScrollToTop })), {
  ssr: false
});

const ThemeToggle = dynamic(() => import('@/components/theme-toggle').then(mod => ({ default: mod.ThemeToggle })), {
  ssr: false
});

type Category = 'all' | 'god' | 'goddess' | 'hero' | 'creature' | 'story' | 'saved';

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
  const [selectedCharacterId, setSelectedCharacterId] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupCharacter, setPopupCharacter] = useState<MythologyItem | null>(null);
  const [savedCharacters, setSavedCharacters] = useState<Set<string>>(new Set());

  // Memoized filter function with performance optimizations
  const filteredItems = useMemo(() => {
    const startTime = performance.now();
    
    let filtered = greekMythologyData;
    
    // Filter by category
    if (filters.category === 'saved') {
      filtered = filtered.filter(item => savedCharacters.has(item.id));
    } else if (filters.category !== 'all') {
      filtered = filtered.filter(item => item.category === filters.category);
    }
    
    // Filter by search term with debouncing
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
    
    const endTime = performance.now();
    console.log(`Filter computation took ${endTime - startTime}ms`);
    
    return filtered;
  }, [filters.category, filters.search, savedCharacters]);

  // Calculate if there are more items to load
  const hasNextPage = useMemo(() => items.length < filteredItems.length, [items.length, filteredItems.length]);

  // Memoized load more function with performance tracking
  const loadMoreItems = useCallback(() => {
    const startTime = performance.now();
    
    const nextPage = currentPage + 1;
    const startIndex = nextPage * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const newItems = filteredItems.slice(startIndex, endIndex);
    
    setItems(prev => [...prev, ...newItems]);
    setCurrentPage(nextPage);
    
    const endTime = performance.now();
    console.log(`Load more items took ${endTime - startTime}ms`);
  }, [currentPage, filteredItems]);

  // Memoized filter change handler
  const handleFiltersChange = useCallback((newFilters: FilterOptions) => {
    setFilters(newFilters);
  }, []);

  // Handle save/unsave character
  const handleSaveCharacter = useCallback((characterId: string) => {
    setSavedCharacters(prev => {
      const newSet = new Set(prev);
      if (newSet.has(characterId)) {
        newSet.delete(characterId);
      } else {
        newSet.add(characterId);
      }
      // Save to localStorage
      localStorage.setItem('savedCharacters', JSON.stringify(Array.from(newSet)));
      return newSet;
    });
  }, []);


  // Load saved characters from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('savedCharacters');
    if (saved) {
      try {
        const savedIds = JSON.parse(saved);
        setSavedCharacters(new Set(savedIds));
      } catch (error) {
        console.error('Error loading saved characters:', error);
      }
    }
  }, []);

  // Reset items when filters change
  useEffect(() => {
    console.log('Filters değişti, yeni items ayarlanıyor...');
    console.log('Filtered items length:', filteredItems.length);
    
    setItems([]);
    setCurrentPage(0);
    
    // İlk 3 item'ı göster (veya tümünü varsa)
    const initialItems = filteredItems.slice(0, ITEMS_PER_PAGE);
    console.log('Initial items to show:', initialItems.map(item => item.title));
    setItems(initialItems);
  }, [filteredItems]);

  // Setup infinite scroll with optimized options
  const { isFetching } = useInfiniteScroll({
    hasNextPage,
    fetchNextPage: loadMoreItems,
    threshold: 200,
    debounceMs: 100
  });

  // Handle mounted state for theme toggle
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle character navigation from related figures
  useEffect(() => {
    const handleNavigateEvent = (event: CustomEvent) => {
      const { characterId, character } = event.detail;
      console.log('Event alındı:', character.title);
      
      // Popup'ı aç ve karakter bilgisini ayarla
      setPopupCharacter(character);
      setShowPopup(true);
      setSelectedCharacterId(characterId);
      
      // Scroll to top smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Add event listener
    window.addEventListener('navigateToCharacter', handleNavigateEvent as EventListener);
    
    // Cleanup
    return () => {
      window.removeEventListener('navigateToCharacter', handleNavigateEvent as EventListener);
    };
  }, []); // Boş dependency array - sadece ilk kurulum

  // Handle URL hash for direct navigation
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const character = greekMythologyData.find(item => item.id === hash);
      if (character) {
        // Sadece bu karakteri vurgula
        setSelectedCharacterId(hash);
      }
    }
  }, []); // Sadece ilk yüklemede çalışsın

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
              <MemoizedMythologyCard 
                item={item} 
                index={index} 
                isSelected={item.id === selectedCharacterId}
                isSaved={savedCharacters.has(item.id)}
                onSaveCharacter={handleSaveCharacter}
              />
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
      
      {/* Character Popup */}
      {showPopup && popupCharacter && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border-4 border-amber-500/50">
            {/* Header */}
            <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {popupCharacter.title}
                </h2>
                <button
                  onClick={() => setShowPopup(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl font-bold"
                >
                  ×
                </button>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Image */}
                <div className="w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0">
                  <img
                    src={popupCharacter.image}
                    alt={popupCharacter.title}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/logo.svg';
                    }}
                  />
                </div>
                
                {/* Info */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge className={`${getCategoryColor(popupCharacter.category)} px-3 py-1 text-sm font-medium`}>
                      {getCategoryLabel(popupCharacter.category)}
                    </Badge>
                    {popupCharacter.attributes?.map((attr, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {attr}
                      </Badge>
                    ))}
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    {popupCharacter.description}
                  </p>
                  
                  {popupCharacter.powers && (
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">Güçler</h4>
                      <div className="flex flex-wrap gap-2">
                        {popupCharacter.powers.map((power, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {power}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Full Story */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Tam Hikaye</h3>
                <div className="prose prose-sm max-w-none dark:prose-invert">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                    {popupCharacter.fullStory}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}