'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, BookOpen, Wand2, CheckCircle, AlertCircle } from 'lucide-react';
import { greekMythologyData, MythologyItem } from '@/data/greek-mythology';

interface StoryEnhancerProps {
  onStoryUpdated?: (characterId: string, newStory: string) => void;
}

export function StoryEnhancer({ onStoryUpdated }: StoryEnhancerProps) {
  const [selectedCharacter, setSelectedCharacter] = useState<MythologyItem | null>(null);
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [enhancedStory, setEnhancedStory] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Kısa hikayeleri tespit et (kelime sayısına göre)
  const getShortStories = () => {
    return greekMythologyData.filter(item => {
      const wordCount = item.fullStory.split(' ').length;
      return wordCount < 200; // 200 kelimeden kısa olanlar
    });
  };

  const shortStories = getShortStories();

  const enhanceStory = async (character: MythologyItem) => {
    setIsEnhancing(true);
    setError('');
    setSuccess('');
    setEnhancedStory('');

    try {
      const response = await fetch('/api/enhance-story', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: character.title,
          currentStory: character.fullStory,
          category: character.category
        }),
      });

      const data = await response.json();

      if (data.success) {
        setEnhancedStory(data.enhancedStory);
        setSuccess(`${character.title}'in hikayesi başarıyla güncellendi!`);
      } else {
        setError(data.error || 'Hikaye güncellenirken bir hata oluştu.');
      }
    } catch (err) {
      setError('API isteği sırasında bir hata oluştu.');
      console.error('Error enhancing story:', err);
    } finally {
      setIsEnhancing(false);
    }
  };

  const updateStory = () => {
    if (selectedCharacter && enhancedStory) {
      // LocalStorage'a kaydet
      const updatedStories = JSON.parse(localStorage.getItem('enhancedStories') || '{}');
      updatedStories[selectedCharacter.id] = enhancedStory;
      localStorage.setItem('enhancedStories', JSON.stringify(updatedStories));

      onStoryUpdated?.(selectedCharacter.id, enhancedStory);
      setSuccess(`${selectedCharacter.title}'in hikayesi kalıcı olarak güncellendi!`);
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      god: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
      goddess: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
      hero: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      creature: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      story: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryLabel = (category: string) => {
    const labels = {
      god: 'Tanrı',
      goddess: 'Tanrıça',
      hero: 'Kahraman',
      creature: 'Canavar',
      story: 'Hikaye',
    };
    return labels[category as keyof typeof labels] || category;
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wand2 className="w-5 h-5" />
            Hikaye Zenginleştirici
          </CardTitle>
          <CardDescription>
            Wikipedia'dan yararlanarak karakterlerin kısa hikayelerini daha detaylı ve ilgi çekici hale getirin.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Kısa Hikayeli Karakterler ({shortStories.length})
              </h3>
              <div className="grid gap-3">
                {shortStories.map((character) => {
                  const wordCount = character.fullStory.split(' ').length;
                  return (
                    <Card 
                      key={character.id}
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        selectedCharacter?.id === character.id 
                          ? 'ring-2 ring-amber-500' 
                          : ''
                      }`}
                      onClick={() => {
                        setSelectedCharacter(character);
                        setEnhancedStory('');
                        setError('');
                        setSuccess('');
                      }}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full overflow-hidden">
                              <img
                                src={character.image}
                                alt={character.title}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = '/logo.svg';
                                }}
                              />
                            </div>
                            <div>
                              <h4 className="font-semibold">{character.title}</h4>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge className={`text-xs ${getCategoryColor(character.category)}`}>
                                  {getCategoryLabel(character.category)}
                                </Badge>
                                <span className="text-xs text-gray-500">
                                  {wordCount} kelime
                                </span>
                              </div>
                            </div>
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation();
                              enhanceStory(character);
                            }}
                            disabled={isEnhancing}
                          >
                            {isEnhancing && selectedCharacter?.id === character.id ? (
                              <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                              <BookOpen className="w-4 h-4" />
                            )}
                            Zenginleştir
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {selectedCharacter && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              {selectedCharacter.title} - Hikaye Düzenleyici
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {error && (
              <div className="flex items-center gap-2 p-3 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg">
                <AlertCircle className="w-4 h-4" />
                {error}
              </div>
            )}

            {success && (
              <div className="flex items-center gap-2 p-3 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">
                <CheckCircle className="w-4 h-4" />
                {success}
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Mevcut Hikaye</h4>
                <Textarea
                  value={selectedCharacter.fullStory}
                  readOnly
                  className="min-h-[300px] text-sm"
                />
              </div>

              <div>
                <h4 className="font-semibold mb-2">Zenginleştirilmiş Hikaye</h4>
                <Textarea
                  value={enhancedStory}
                  onChange={(e) => setEnhancedStory(e.target.value)}
                  placeholder="Hikaye zenginleştirildiğinde burada görünecek..."
                  className="min-h-[300px] text-sm"
                />
              </div>
            </div>

            {enhancedStory && (
              <div className="flex justify-end">
                <Button onClick={updateStory} className="bg-amber-600 hover:bg-amber-700">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Hikayeyi Güncelle
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}