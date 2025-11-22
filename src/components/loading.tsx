import { Skeleton } from '@/components/ui/skeleton';
import { Card } from '@/components/ui/card';

export function LoadingCard() {
  return (
    <Card className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-colors duration-600">
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 space-y-2">
            <Skeleton className="h-8 w-48 bg-gray-200 dark:bg-gray-700 transition-colors duration-600" />
            <div className="flex gap-2">
              <Skeleton className="h-6 w-20 bg-gray-200 dark:bg-gray-700 transition-colors duration-600" />
              <Skeleton className="h-6 w-16 bg-gray-200 dark:bg-gray-700 transition-colors duration-600" />
              <Skeleton className="h-6 w-24 bg-gray-200 dark:bg-gray-700 transition-colors duration-600" />
            </div>
          </div>
          <Skeleton className="w-24 h-24 md:w-32 md:h-32 rounded-lg bg-gray-200 dark:bg-gray-700 transition-colors duration-600" />
        </div>
        <Skeleton className="h-4 w-full bg-gray-200 dark:bg-gray-700 transition-colors duration-600" />
        <Skeleton className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 transition-colors duration-600" />
        <Skeleton className="h-10 w-full bg-gray-200 dark:bg-gray-700 transition-colors duration-600" />
      </div>
    </Card>
  );
}

export function LoadingSpinner() {
  return (
    <div className="flex justify-center py-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-gray-100 transition-colors duration-600"></div>
    </div>
  );
}