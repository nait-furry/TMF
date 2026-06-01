import Image from 'next/image'
import { ReactNode } from 'react'

interface MasonryItem {
  id: string
  image?: string
  title?: string
  description?: string
  span?: 'col-span-1' | 'col-span-2'
  children?: ReactNode
}

interface MasonryGridProps {
  items: MasonryItem[]
  columns?: 'grid-cols-1' | 'grid-cols-2' | 'grid-cols-3' | 'grid-cols-4'
  gap?: 'gap-4' | 'gap-6' | 'gap-8'
  className?: string
}

export default function MasonryGrid({
  items,
  columns = 'grid-cols-3',
  gap = 'gap-6',
  className = '',
}: MasonryGridProps) {
  return (
    <div className={`grid ${columns} ${gap} ${className}`}>
      {items.map((item) => (
        <div
          key={item.id}
          className={`${item.span || 'col-span-1'} overflow-hidden group`}
        >
          {item.image ? (
            <div className="relative h-64 overflow-hidden rounded-sm">
              <Image
                src={item.image}
                alt={item.title || 'Gallery item'}
                fill
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              {(item.title || item.description) && (
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                  {item.title && (
                    <h3 className="font-display font-bold text-xl text-primary-foreground mb-2">
                      {item.title}
                    </h3>
                  )}
                  {item.description && (
                    <p className="text-sm text-primary-foreground/90">
                      {item.description}
                    </p>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="bg-card rounded-sm p-6 min-h-64 flex items-center justify-center">
              {item.children}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
