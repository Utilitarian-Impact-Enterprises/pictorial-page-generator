import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface CachedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string;
}

const CachedImage = ({
  src,
  alt,
  className,
  wrapperClassName,
  ...props
}: CachedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (src) {
      setIsLoaded(false);
      setError(false);
      
      const img = new Image();
      img.src = src;
      
      img.onload = () => {
        setIsLoaded(true);
      };
      
      img.onerror = () => {
        setError(true);
        setIsLoaded(true);
      };
    }
  }, [src]);

  return (
    <div className={cn("relative overflow-hidden", wrapperClassName)}>
      {!isLoaded && (
        <Skeleton className="absolute inset-0 bg-white/5" />
      )}
      <img
        src={src}
        alt={alt}
        className={cn(
          "transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0",
          error ? "grayscale opacity-50" : "",
          className
        )}
        {...props}
      />
    </div>
  );
};

export default CachedImage;
