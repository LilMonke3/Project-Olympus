'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Filter, X, Search, TrendingUp } from 'lucide-react';

type Category = 'all' | 'god' | 'goddess' | 'hero' | 'creature' | 'story' | 'saved';

interface FilterOptions {
  category: Category;
  search: string;
}

interface MythologyFilterProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  itemCount: number;
  totalItems: number;
}

const categories: { value: Category; label: string; color: string; icon: string }[] = [
  { value: 'all', label: 'Tümü', color: 'bg-gradient-to-r from-gray-500 to-gray-600 text-white', icon: '🌟' },
  { value: 'saved', label: 'Kaydedilenler', color: 'bg-gradient-to-r from-green-500 to-emerald-600 text-white', icon: '💾' },
  { value: 'god', label: 'Tanrılar', color: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white', icon: '⚡' },
  { value: 'goddess', label: 'Tanrıçalar', color: 'bg-gradient-to-r from-pink-500 to-pink-600 text-white', icon: '👸' },
  { value: 'hero', label: 'Kahramanlar', color: 'bg-gradient-to-r from-amber-500 to-amber-600 text-white', icon: '🗡️' },
  { value: 'creature', label: 'Canavarlar', color: 'bg-gradient-to-r from-red-500 to-red-600 text-white', icon: '🐉' },
  { value: 'story', label: 'Hikayeler', color: 'bg-gradient-to-r from-purple-500 to-purple-600 text-white', icon: '📖' },
];

export function MythologyFilter({ filters, onFiltersChange, itemCount, totalItems }: MythologyFilterProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState(filters.search);

  const handleCategoryChange = (category: Category) => {
    onFiltersChange({ ...filters, category });
  };

  const handleSearchChange = (search: string) => {
    setSearchTerm(search);
    onFiltersChange({ ...filters, search });
  };

  const clearFilters = () => {
    setSearchTerm('');
    onFiltersChange({ category: 'all', search: '' });
  };

  const hasActiveFilters = filters.category !== 'all' || filters.search !== '';

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-4xl mx-auto lg:max-w-5xl mb-4 sm:mb-6 lg:mb-8"
    >
      <Card className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-md border-0 shadow-2xl overflow-hidden">
        {/* Glassmorphism Header */}
        <CardHeader className="pb-2 sm:pb-3 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-blue-500/10"></div>
          <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-3 sm:p-4 lg:p-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 sm:gap-3 lg:gap-4"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 dark:text-amber-400" />
              </motion.div>
              <CardTitle className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white transition-colors duration-600">
                Filtreler
              </CardTitle>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 lg:gap-4"
            >
              <div className="flex items-center gap-2">
                <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 sm:px-3 lg:px-4 py-1 text-xs sm:text-sm font-medium shadow-md">
                  {itemCount} / {totalItems}
                </Badge>
                {hasActiveFilters && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-xs bg-red-500 hover:bg-red-600 text-white px-2 sm:px-3 lg:px-4 py-1 h-auto transition-all duration-600 transform hover:scale-105"
                  >
                    <X className="w-3 h-3 mr-1" />
                    Temizle
                  </Button>
                )}
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="bg-gradient-to-r from-amber-500 to-blue-500 hover:from-amber-600 hover:to-blue-600 text-white px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-2.5 h-auto transition-all duration-600 transform hover:scale-105 shadow-md text-xs sm:text-sm"
                >
                  {isExpanded ? 'Gizle' : 'Göster'}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </CardHeader>
        
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ delay: 0.1 }}
          className="px-3 sm:px-4 lg:px-6 pb-2 sm:pb-3 lg:pb-4"
        >
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute left-3 sm:left-4 lg:left-5 top-1/2 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-gray-400"
            >
              <Search className="w-3 h-3 sm:w-4 sm:h-4" />
            </motion.div>
            <input
              type="text"
              placeholder="Mitolojik karakterler ara..."
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-8 sm:pl-10 lg:pl-12 pr-3 sm:pr-4 lg:pr-5 py-2 sm:py-3 lg:py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-600 text-sm sm:text-base lg:text-lg"
            />
          </div>
        </motion.div>

        {/* Category Filters */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="px-3 sm:px-4 lg:px-6 pb-3 sm:pb-4 lg:pb-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4 lg:mb-6"
              >
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                <h4 className="text-xs sm:text-sm lg:text-base font-medium text-gray-900 dark:text-white transition-colors duration-600">
                  Kategori
                </h4>
              </motion.div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
                {categories.map((cat, index) => (
                  <motion.div
                    key={cat.value}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.05 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge
                      variant={filters.category === cat.value ? "default" : "outline"}
                      className={`cursor-pointer transition-all duration-600 transform hover:scale-105 px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 lg:py-2.5 text-xs sm:text-sm font-medium shadow-md hover:shadow-lg ${
                        filters.category === cat.value 
                          ? cat.color 
                          : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-gray-600'
                        }`}
                      onClick={() => handleCategoryChange(cat.value)}
                    >
                      <span className="flex items-center gap-1.5 sm:gap-2 lg:gap-3">
                        <span className="text-sm sm:text-base">{cat.icon}</span>
                        <span className="truncate">{cat.label}</span>
                      </span>
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
}