'use client';

import * as React from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme, isChanging } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    if (isChanging) return;
    setTheme(newTheme);
  };

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="relative overflow-hidden transition-all duration-300 hover:scale-110 z-50 border-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm mobile-touch-target w-9 h-9 sm:w-10 sm:h-10"
      >
        <div className="w-4 h-4 sm:h-[1.2rem] sm:w-[1.2rem] bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          disabled={isChanging}
          className="relative overflow-hidden transition-all duration-400 hover:scale-110 disabled:opacity-70 z-50 border-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm mobile-touch-target w-9 h-9 sm:w-10 sm:h-10 group"
        >
          {/* Theme Icons */}
          <Sun className={`h-4 w-4 sm:h-[1.2rem] sm:w-[1.2rem] transition-all duration-400 absolute ${
            resolvedTheme === 'light' 
              ? 'rotate-0 scale-100 opacity-100' 
              : '-rotate-90 scale-0 opacity-0'
          }`} />
          <Moon className={`h-4 w-4 sm:h-[1.2rem] sm:w-[1.2rem] transition-all duration-400 absolute ${
            resolvedTheme === 'dark' 
              ? 'rotate-0 scale-100 opacity-100' 
              : 'rotate-90 scale-0 opacity-0'
          }`} />
          <Monitor className={`h-4 w-4 sm:h-[1.2rem] sm:w-[1.2rem] transition-all duration-400 absolute ${
            theme === 'system' && resolvedTheme !== 'light' && resolvedTheme !== 'dark'
              ? 'rotate-0 scale-100 opacity-100' 
              : 'scale-0 opacity-0'
          }`} />
          
          {/* Default icon when no theme is active */}
          {(theme === 'system' && !resolvedTheme) && (
            <div className="h-4 w-4 sm:h-[1.2rem] sm:w-[1.2rem] bg-gray-400 dark:bg-gray-500 rounded-full" />
          )}
          
          <span className="sr-only">Toggle theme</span>
          
          {/* Loading indicator during theme change */}
          {isChanging && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <div className="w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          
          {/* Hover effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border-2 shadow-xl transition-all duration-400"
      >
        <DropdownMenuItem 
          onClick={() => handleThemeChange('light')}
          className="cursor-pointer transition-all duration-400 hover:bg-amber-50 dark:hover:bg-amber-900/20 focus:bg-amber-50 dark:focus:bg-amber-900/20"
        >
          <Sun className="mr-2 h-4 w-4" />
          <span>Açık</span>
          {theme === 'light' && (
            <div className="ml-auto w-2 h-2 bg-amber-500 rounded-full" />
          )}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => handleThemeChange('dark')}
          className="cursor-pointer transition-all duration-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 focus:bg-blue-50 dark:focus:bg-blue-900/20"
        >
          <Moon className="mr-2 h-4 w-4" />
          <span>Koyu</span>
          {theme === 'dark' && (
            <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full" />
          )}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => handleThemeChange('system')}
          className="cursor-pointer transition-all duration-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 focus:bg-purple-50 dark:focus:bg-purple-900/20"
        >
          <Monitor className="mr-2 h-4 w-4" />
          <span>Sistem</span>
          {theme === 'system' && (
            <div className="ml-auto w-2 h-2 bg-purple-500 rounded-full" />
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}