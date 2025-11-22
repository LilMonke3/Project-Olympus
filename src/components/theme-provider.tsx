'use client';

import * as React from 'react';
import { createContext, useContext, useEffect, useState, useCallback } from 'react';

type Theme = 'dark' | 'light' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'dark' | 'light';
  isChanging: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'ui-theme',
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = useState<'dark' | 'light'>('light');
  const [isChanging, setIsChanging] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Get system theme
  const getSystemTheme = useCallback((): 'dark' | 'light' => {
    if (typeof window === 'undefined') return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }, []);

  // Resolve theme based on system preference
  const resolveTheme = useCallback((theme: Theme): 'dark' | 'light' => {
    if (theme === 'system') {
      return getSystemTheme();
    }
    return theme;
  }, [getSystemTheme]);

  // Apply theme to document with directional color transition
  const applyTheme = useCallback((theme: 'dark' | 'light') => {
    const root = window.document.documentElement;
    const currentTheme = root.classList.contains('dark') ? 'dark' : 'light';
    
    // Determine transition direction
    const isDarkToLight = currentTheme === 'dark' && theme === 'light';
    const isLightToDark = currentTheme === 'light' && theme === 'dark';
    
    // Add theme-changing class to all elements for synchronized transition
    root.classList.add('theme-changing');
    document.body.classList.add('theme-changing');
    
    // Activate transition overlay with directional color gradient
    const overlay = document.querySelector('.theme-transition-overlay') as HTMLElement;
    if (overlay) {
      // Remove existing direction classes
      overlay.classList.remove('dark-to-light', 'light-to-dark');
      
      // Add appropriate direction class
      if (isDarkToLight) {
        overlay.classList.add('dark-to-light');
      } else if (isLightToDark) {
        overlay.classList.add('light-to-dark');
      }
      
      overlay.classList.add('active');
    }

    // Apply theme change with synchronized timing
    setTimeout(() => {
      root.classList.remove('light', 'dark');
      root.classList.add(theme);
      
      // Update meta theme-color for mobile browsers
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', theme === 'dark' ? '#0a0a0a' : '#ffffff');
      }
    }, 200); // Delay for overlay effect

    // Remove theme-changing class and overlay after transition
    setTimeout(() => {
      root.classList.remove('theme-changing');
      document.body.classList.remove('theme-changing');
      if (overlay) {
        overlay.classList.remove('active');
        // Remove direction classes after transition
        setTimeout(() => {
          overlay.classList.remove('dark-to-light', 'light-to-dark');
        }, 100);
      }
      setIsChanging(false);
    }, 600); // Total transition duration
  }, []);

  // Set theme with localStorage and apply
  const setTheme = useCallback((newTheme: Theme) => {
    if (isChanging) return;
    
    setIsChanging(true);
    setThemeState(newTheme);
    
    // Save to localStorage
    try {
      localStorage.setItem(storageKey, newTheme);
    } catch (error) {
      console.warn('Failed to save theme preference:', error);
    }
    
    // Apply the resolved theme
    const resolved = resolveTheme(newTheme);
    applyTheme(resolved);
  }, [isChanging, storageKey, resolveTheme, applyTheme]);

  // Initialize theme from localStorage or system
  useEffect(() => {
    setMounted(true);
    
    try {
      const stored = localStorage.getItem(storageKey) as Theme;
      const initialTheme = stored || defaultTheme;
      setThemeState(initialTheme);
      setResolvedTheme(resolveTheme(initialTheme));
      
      // Apply initial theme without transition
      const root = window.document.documentElement;
      root.classList.add(resolveTheme(initialTheme));
    } catch (error) {
      console.warn('Failed to load theme preference:', error);
      const fallbackTheme = resolveTheme(defaultTheme);
      setResolvedTheme(fallbackTheme);
      document.documentElement.classList.add(fallbackTheme);
    }
  }, [defaultTheme, storageKey, resolveTheme]);

  // Listen for system theme changes
  useEffect(() => {
    if (theme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      const newResolvedTheme = getSystemTheme();
      setResolvedTheme(newResolvedTheme);
      applyTheme(newResolvedTheme);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme, getSystemTheme, applyTheme]);

  // Update resolved theme when theme changes
  useEffect(() => {
    setResolvedTheme(resolveTheme(theme));
  }, [theme, resolveTheme]);

  const value = {
    theme,
    setTheme,
    resolvedTheme,
    isChanging,
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <ThemeContext.Provider value={value}>
        {children}
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};