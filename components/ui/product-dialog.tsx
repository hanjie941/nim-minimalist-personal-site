import { useEffect, useRef, useState } from 'react'
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
}

export function ProductDialog({
  src,
  alt,
  title,
  description,
  className,
}: ProductDialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [currentProduct, setCurrentProduct] = useState({
    src,
    alt,
    title,
    description
  });

  useEffect(() => {
    setCurrentProduct({
      src,
      alt,
      title,
      description
    });
  }, [src, alt, title, description]);

  return (
    <div ref={dialogRef}>
      <MorphingDialog>
        <MorphingDialogTrigger>
          <div className="cursor-zoom-in">
            <img
              src={currentProduct.src}
              alt={currentProduct.alt}
              className="aspect-video w-full rounded-xl object-cover"
            />
          </div>
        </MorphingDialogTrigger>
    
        <MorphingDialogContainer>
          <MorphingDialogContent 
            className="bg-white dark:bg-zinc-900 rounded-xl relative flex max-w-[1200px] max-h-[800px] w-[100vw] h-[55vh] overflow-hidden"
          >
            <div className="flex flex-row w-full h-full p-3 gap-6">
              <div className="flex-1 min-w-0 flex items-center justify-center">
                <img 
                  src={currentProduct.src} 
                  alt={currentProduct.alt} 
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
              
              <div className="w-[300px] flex flex-col justify-center space-y-2 pr-4">
                <div className="text-base text-zinc-900 dark:text-zinc-50">
                  {currentProduct.title}
                </div>
                <div className="text-base text-zinc-500 dark:text-zinc-400">
                  {currentProduct.description}
                </div>
              </div>
            </div>
          </MorphingDialogContent>
        </MorphingDialogContainer>
      </MorphingDialog>
    </div>
  );
} 