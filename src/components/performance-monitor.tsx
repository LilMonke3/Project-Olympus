import { memo, useMemo } from 'react';

interface PerformanceMonitorProps {
  onMetricUpdate?: (metrics: PerformanceMetrics) => void;
}

interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  renderTime: number;
  componentCount: number;
}

export const PerformanceMonitor = memo(({ onMetricUpdate }: PerformanceMonitorProps) => {
  const metrics = useMemo<PerformanceMetrics>(() => {
    // FPS calculation
    let fps = 60;
    let lastTime = performance.now();
    let frameCount = 0;
    
    const calculateFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      if (currentTime >= lastTime + 1000) {
        fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        frameCount = 0;
        lastTime = currentTime;
      }
      requestAnimationFrame(calculateFPS);
    };
    
    requestAnimationFrame(calculateFPS);
    
    // Memory usage (if available)
    const memoryUsage = (performance as any).memory ? 
      Math.round((performance as any).memory.usedJSHeapSize / 1048576) : 0;
    
    // Render time estimation
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const renderTime = navigation ? Math.round(navigation.loadEventEnd - navigation.loadEventStart) : 0;
    
    // Component count (rough estimation)
    const componentCount = document.querySelectorAll('[class*="component"]').length;
    
    return {
      fps,
      memoryUsage,
      renderTime,
      componentCount
    };
  }, []);

  // Report metrics periodically
  useMemo(() => {
    if (onMetricUpdate) {
      onMetricUpdate(metrics);
    }
  }, [metrics, onMetricUpdate]);

  return null; // This is a utility component, no visual output
});

// Performance optimization utilities
export const performanceUtils = {
  // Debounce function for performance
  debounce: <T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  },

  // Throttle function for performance
  throttle: <T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  },

  // Intersection Observer for lazy loading
  createIntersectionObserver: (
    callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit
  ) => {
    return new IntersectionObserver(callback, {
      rootMargin: '50px',
      threshold: 0.1,
      ...options
    });
  },

  // Resize Observer with performance optimizations
  createResizeObserver: (
    callback: ResizeObserverCallback,
    options?: ResizeObserverOptions
  ) => {
    return new ResizeObserver(
      performanceUtils.debounce(callback, 100),
      options
    );
  },

  // Memory cleanup utility
  cleanup: () => {
    // Clear unused event listeners
    if (typeof window !== 'undefined') {
      // Force garbage collection hint
      if (window.gc) {
        window.gc();
      }
    }
  },

  // Check if device is low-end
  isLowEndDevice: () => {
    if (typeof navigator === 'undefined') return false;
    
    const connection = (navigator as any).connection;
    const hardwareConcurrency = navigator.hardwareConcurrency || 4;
    
    return (
      hardwareConcurrency <= 2 ||
      (connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g')) ||
      (connection && connection.downlink && connection.downlink < 1.5)
    );
  },

  // Get performance recommendations
  getRecommendations: (metrics: PerformanceMetrics) => {
    const recommendations: string[] = [];
    
    if (metrics.fps < 30) {
      recommendations.push('Consider reducing animation complexity');
      recommendations.push('Enable hardware acceleration');
    }
    
    if (metrics.memoryUsage > 100) {
      recommendations.push('High memory usage detected');
      recommendations.push('Consider implementing virtual scrolling');
    }
    
    if (metrics.renderTime > 3000) {
      recommendations.push('Slow initial load time');
      recommendations.push('Optimize bundle size and lazy loading');
    }
    
    return recommendations;
  }
};