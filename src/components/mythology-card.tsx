'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { MythologyItem, getCategoryLabel, getCategoryColor, greekMythologyData } from '@/data/greek-mythology';
import { ChevronDown, ChevronUp, Sparkles, Heart, Share2, Bookmark, ExternalLink } from 'lucide-react';

interface MythologyCardProps {
  item: MythologyItem;
  index: number;
  isSelected?: boolean;
  isSaved?: boolean;
  onSaveCharacter?: (characterId: string) => void;
}

export function MythologyCard({ item, index, isSelected, isSaved = false, onSaveCharacter }: MythologyCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(isSaved);
  const [enhancedStory, setEnhancedStory] = useState(item.fullStory);
  const cardRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Load enhanced story from localStorage on mount
  useEffect(() => {
    const enhancedStories = JSON.parse(localStorage.getItem('enhancedStories') || '{}');
    if (enhancedStories[item.id]) {
      setEnhancedStory(enhancedStories[item.id]);
    }
  }, [item.id]);

  const handleLike = () => setIsLiked(!isLiked);
  const handleBookmark = () => {
    const newBookmarkState = !isBookmarked;
    setIsBookmarked(newBookmarkState);
    if (onSaveCharacter) {
      onSaveCharacter(item.id);
    }
  };
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: item.description,
        url: window.location.href
      });
    }
  };

  const handleRelatedClick = (relatedId: string) => {
    const relatedItem = greekMythologyData.find(char => char.id === relatedId);
    if (relatedItem) {
      console.log('Tıklanan karakter:', relatedItem.title);
      console.log('Mevcut karakter:', item.title);
      
      // Scroll to top smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Trigger a custom event to notify parent component
      const event = new CustomEvent('navigateToCharacter', { 
        detail: { characterId: relatedId, character: relatedItem } 
      });
      window.dispatchEvent(event);
      
      // Also update URL hash for better navigation
      window.location.hash = relatedId;
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ y: -5 }}
      className={`mb-3 sm:mb-4 lg:mb-6 desktop-hover-lift ${
        isSelected ? 'ring-4 ring-amber-500 ring-opacity-50 scale-105' : ''
      }`}
    >
      <Card className="w-full max-w-4xl mx-auto lg:max-w-5xl transition-all duration-600 hover:shadow-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-0 shadow-lg overflow-hidden group desktop-card desktop-hover-glow">
        {/* Glassmorphism Header */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-transparent to-blue-500/20 dark:from-purple-500/20 dark:to-blue-500/20"></div>
          <CardHeader className="pb-3 sm:pb-4 relative backdrop-blur-sm bg-white/50 dark:bg-gray-800/50">
            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 p-3 sm:p-4 lg:p-6">
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-600 desktop-text-large">
                    {item.title}
                  </CardTitle>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="flex items-center gap-1 sm:gap-2 flex-wrap"
                >
                  <Badge className={`${getCategoryColor(item.category)} px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium shadow-sm`}>
                    {getCategoryLabel(item.category)}
                  </Badge>
                  {item.attributes?.map((attr, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm transition-colors duration-600">
                      {attr}
                    </Badge>
                  ))}
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.4 }}
                className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 flex-shrink-0 group self-center sm:self-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-blue-400 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-600"></div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-600 group-hover:scale-105 shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/logo.svg';
                  }}
                />
              </motion.div>
            </div>
          </CardHeader>
        </div>
        
        <CardContent className="space-y-3 sm:space-y-4 lg:space-y-6 p-4 sm:p-6 lg:p-8 desktop-spacing">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.5 }}
            className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base desktop-text-large transition-colors duration-600"
          >
            {item.description}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.6 }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500 dark:text-amber-400 transition-colors duration-600" />
              <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 transition-colors duration-600">
                {isExpanded ? 'Tam Hikaye' : 'Hikayenin devamı için tıklayın'}
              </span>
            </div>
            
            <div className="flex items-center gap-1 sm:gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLike}
                className={`p-2 sm:p-2 transition-all duration-600 mobile-touch-target ${isLiked ? 'text-red-500 hover:text-red-600' : 'text-gray-400 hover:text-red-500'}`}
              >
                <Heart className={`w-4 h-4 sm:w-4 sm:h-4 ${isLiked ? 'fill-current' : ''}`} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleBookmark}
                className={`p-2 sm:p-2 transition-all duration-600 mobile-touch-target ${isBookmarked ? 'text-blue-500 hover:text-blue-600' : 'text-gray-400 hover:text-blue-500'}`}
              >
                <Bookmark className={`w-4 h-4 sm:w-4 sm:h-4 ${isBookmarked ? 'fill-current' : ''}`} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleShare}
                className="p-2 sm:p-2 text-gray-400 hover:text-green-500 transition-all duration-600 mobile-touch-target"
              >
                <Share2 className="w-4 h-4 sm:w-4 sm:h-4" />
              </Button>
            </div>
          </motion.div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-3 sm:space-y-4"
              >
                <Separator className="bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600" />
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="prose prose-sm max-w-none dark:prose-invert"
                >
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line text-sm sm:text-base transition-colors duration-600">
                    {enhancedStory}
                  </p>
                </motion.div>
                
                {item.powers && item.powers.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-2"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base transition-colors duration-600">Güçler</h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {item.powers.map((power, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 + idx * 0.05 }}
                        >
                          <Badge variant="secondary" className="text-xs bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-800 dark:to-purple-700 text-purple-800 dark:text-purple-200 border-purple-300 dark:border-purple-600 transition-colors duration-600">
                            {power}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
                
                {item.related && item.related.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-2"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base transition-colors duration-600">İlişkili Figürler</h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {item.related.map((related, idx) => {
                        const relatedItem = greekMythologyData.find(char => char.id === related);
                        // Sadece ilişkili olan diğer karakterleri göster - mevcut karakteri gösterme
                        if (!relatedItem) {
                          return null;
                        }
                        return (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + idx * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Badge 
                              variant="outline" 
                              className="text-xs border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-600 cursor-pointer flex items-center gap-1 group"
                              onClick={() => handleRelatedClick(related)}
                            >
                              <span>{related}</span>
                              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </Badge>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.7 }}
          >
            <Button
              variant="ghost"
              size="lg"
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full justify-center bg-gradient-to-r from-amber-500 to-blue-500 hover:from-amber-600 hover:to-blue-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-600 transform hover:scale-105 text-sm sm:text-base py-3 sm:py-3.5 lg:py-4 mobile-touch-target min-h-[44px]"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="w-4 h-4 sm:w-4 sm:h-4 mr-2" />
                  Daha Az Göster
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 sm:w-4 sm:h-4 mr-2" />
                  Devamını Oku
                </>
              )}
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}