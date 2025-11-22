import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  onError?: () => void;
}

export function OptimizedImage({
  src,
  alt,
  width = 400,
  height = 400,
  className = '',
  priority = false,
  fill = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 75,
  placeholder = 'empty',
  blurDataURL,
  onError
}: OptimizedImageProps) {
  const defaultBlurDataURL = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOjIwMCIgaGVpZ2h0PSI0MCIgd2lkdGg9IjEwMCIgZmlsbD0iI2Y2ZjIiPg0KPHN2ZyB4aWR0aD0iMCIgZmlsbD0iI2Y2ZjIiPg0KPHRleHQgY3g9IjUwJiB5PSIwLjM0ZW0iIGZpbGw9IiMjIiMjIiPg0KPC9zdmc+`;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        className={`object-cover transition-all duration-300 hover:scale-105 ${className}`}
        sizes={sizes}
        quality={quality}
        priority={priority}
        placeholder={placeholder}
        blurDataURL={blurDataURL || defaultBlurDataURL}
        onError={onError}
        loading={priority ? 'eager' : 'lazy'}
      />
    </div>
  );
}