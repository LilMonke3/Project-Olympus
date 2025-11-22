'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sun, Moon, Monitor, Palette, Zap, Heart } from 'lucide-react';

export default function ThemeTest() {
  const { theme, setTheme, resolvedTheme, isChanging } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [testColors, setTestColors] = useState<string[]>([]);

  useEffect(() => {
    setMounted(true);
    // Generate test colors
    const colors = [
      'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500',
      'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-gray-500'
    ];
    setTestColors(colors);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-bg p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-blue-600 bg-clip-text text-transparent">
            Tema Test Sayfası
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Yönlü renk geçiş efektlerini test edin (Siyah → Beyaz / Beyaz → Siyah)
          </p>
        </div>

        {/* Theme Controls */}
        <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="w-5 h-5" />
              Tema Kontrolleri
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Theme Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => setTheme('light')}
                variant={theme === 'light' ? 'default' : 'outline'}
                className="flex items-center gap-2"
                disabled={isChanging}
              >
                <Sun className="w-4 h-4" />
                Açık Mod
              </Button>
              <Button
                onClick={() => setTheme('dark')}
                variant={theme === 'dark' ? 'default' : 'outline'}
                className="flex items-center gap-2"
                disabled={isChanging}
              >
                <Moon className="w-4 h-4" />
                Koyu Mod
              </Button>
              <Button
                onClick={() => setTheme('system')}
                variant={theme === 'system' ? 'default' : 'outline'}
                className="flex items-center gap-2"
                disabled={isChanging}
              >
                <Monitor className="w-4 h-4" />
                Sistem
              </Button>
            </div>

            {/* Status */}
            <div className="flex items-center gap-4">
              <Badge variant="secondary">
                Mevcut Tema: {theme}
              </Badge>
              <Badge variant="outline">
                Çözümlenmiş: {resolvedTheme}
              </Badge>
              {isChanging && (
                <Badge className="bg-amber-500">
                  <Zap className="w-3 h-3 mr-1" />
                  Değişiyor...
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Color Tests */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Background Colors */}
          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md">
            <CardHeader>
              <CardTitle>Arka Plan Renkleri</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-4">
                {testColors.map((color, index) => (
                  <div
                    key={index}
                    className={`${color} h-20 rounded-lg transition-all duration-400 hover:scale-105 theme-transition-hover`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Text Colors */}
          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md">
            <CardHeader>
              <CardTitle>Metin Renkleri</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-red-600 dark:text-red-400">Kırmızı Metin</p>
              <p className="text-blue-600 dark:text-blue-400">Mavi Metin</p>
              <p className="text-green-600 dark:text-green-400">Yeşil Metin</p>
              <p className="text-yellow-600 dark:text-yellow-400">Sarı Metin</p>
              <p className="text-purple-600 dark:text-purple-400">Mor Metin</p>
              <p className="text-gray-600 dark:text-gray-400">Gri Metin</p>
            </CardContent>
          </Card>

          {/* Border Colors */}
          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md">
            <CardHeader>
              <CardTitle>Kenarlık Renkleri</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="border-4 border-red-500 h-20 rounded-lg transition-all duration-400 theme-transition-hover"></div>
                <div className="border-4 border-blue-500 h-20 rounded-lg transition-all duration-400 theme-transition-hover"></div>
                <div className="border-4 border-green-500 h-20 rounded-lg transition-all duration-400 theme-transition-hover"></div>
                <div className="border-4 border-purple-500 h-20 rounded-lg transition-all duration-400 theme-transition-hover"></div>
              </div>
            </CardContent>
          </Card>

          {/* Shadow Effects */}
          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md">
            <CardHeader>
              <CardTitle>Gölge Efektleri</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-amber-400 to-orange-500 h-20 rounded-lg shadow-lg transition-all duration-400 hover:shadow-xl theme-transition-hover"></div>
                <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-20 rounded-lg shadow-lg transition-all duration-400 hover:shadow-xl theme-transition-hover"></div>
                <div className="bg-gradient-to-r from-green-400 to-teal-500 h-20 rounded-lg shadow-lg transition-all duration-400 hover:shadow-xl theme-transition-hover"></div>
                <div className="bg-gradient-to-r from-pink-400 to-red-500 h-20 rounded-lg shadow-lg transition-all duration-400 hover:shadow-xl theme-transition-hover"></div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Elements */}
        <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Etkileşimli Elementler
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Buton 1</Button>
              <Button variant="secondary">Buton 2</Button>
              <Button variant="outline">Buton 3</Button>
              <Button variant="ghost">Buton 4</Button>
              <Button variant="destructive">Buton 5</Button>
            </div>
          </CardContent>
        </Card>

        {/* Performance Info */}
        <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md">
          <CardHeader>
            <CardTitle>Performans Bilgisi</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <p>✅ 400ms smooth geçiş süresi</p>
              <p>✅ localStorage ile tema kaydı</p>
              <p>✅ Gereksiz re-render'lar önlendi</p>
              <p>✅ Memoization ile performans optimize</p>
              <p>✅ Hydration mismatch önlendi</p>
              <p>✅ System theme desteği</p>
              <p>✅ Çok katmanlı overlay efekti</p>
              <p>✅ Senkronize bileşen geçişleri</p>
              <p>✅ Özel hover efektleri</p>
              <p>✅ Dinamik parlaklık ve gölge</p>
              <p>🎨 YENİ: Siyah-Beyaz renk gradyanı geçişi</p>
              <p>🎨 YENİ: Yönlü animasyonlar (Dark→Light / Light→Dark)</p>
              <p>🎨 YENİ: Genişleyen dairesel efektler</p>
              <p>🎨 YENİ: Hue-rotate ve brightness animasyonları</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}