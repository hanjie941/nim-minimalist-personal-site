import { useRef } from 'react'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContainer,
  MorphingDialogContent,
} from './morphing-dialog'

interface ProductDialogProps {
  src: string
  alt: string
  title: string
  description: string
  className?: string
  productIndex: number
  totalProducts: number
  onPrevious: () => void
  onNext: () => void
}

export function ProductDialog({
  src,
  alt,
  title,
  description,
  className,
  productIndex,
  totalProducts,
  onPrevious,
  onNext,
}: ProductDialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={dialogRef}>
      <MorphingDialog>
        <MorphingDialogTrigger>
          <div className="cursor-zoom-in">
            <img
              src={src}
              alt={alt}
              className="aspect-video w-full rounded-xl object-cover"
            />
          </div>
        </MorphingDialogTrigger>
    
        <MorphingDialogContainer>
          <MorphingDialogContent 
            className="bg-white dark:bg-zinc-900 rounded-xl relative flex max-w-[1200px] max-h-[800px] w-[90vw] h-[90vh] overflow-hidden"
            onPrevious={onPrevious}
            onNext={onNext}
            showNavigation={true}
          >
            <div className="flex flex-row w-full h-full p-6 gap-8">
              {/* Image container with max dimensions */}
              <div className="flex-1 min-w-0 flex items-center justify-center">
                <img 
                  src={src} 
                  alt={alt} 
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
              
              {/* Content container - reduced width to allow larger image */}
              <div className="w-[300px] flex flex-col justify-center space-y-2 pr-4">
                <div className="text-base font-bold text-zinc-900 dark:text-zinc-50">
                  {title}
                </div>
                <div className="text-base text-zinc-500 dark:text-zinc-400">
                  {description}
                </div>
                <div className="text-sm text-zinc-400 dark:text-zinc-500 mt-4">
                  {/* Display navigation hint */}
                  <span>← → to navigate • {productIndex + 1} of {totalProducts}</span>
                </div>
              </div>
            </div>
          </MorphingDialogContent>
        </MorphingDialogContainer>
      </MorphingDialog>
    </div>
  );
} 