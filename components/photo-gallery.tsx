"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StarBurst } from "./desert-scene"

const photos = [
  {
    id: "1",
    src: "/images/band-1.jpg",
    alt: "The Barker Family Band at the Fourth of July parade",
    caption: "Fourth of July Parade",
  },
  {
    id: "2",
    src: "/images/band-2.jpg",
    alt: "Band performing at the county fair",
    caption: "County Fair Performance",
  },
  {
    id: "3",
    src: "/images/band-3.jpg",
    alt: "Family band group photo",
    caption: "Family Portrait",
  },
  {
    id: "4",
    src: "/images/band-4.jpg",
    alt: "Band setup at community festival",
    caption: "Community Festival",
  },
  {
    id: "5",
    src: "/images/band-5.jpg",
    alt: "Close-up of brass instruments",
    caption: "Our Brass Section",
  },
  {
    id: "6",
    src: "/images/band-6.jpg",
    alt: "Band performing for local celebration",
    caption: "Local Celebration",
  },
]

export function PhotoGallery() {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setActivePhotoIndex(index)
  const closeLightbox = () => setActivePhotoIndex(null)

  const goToPrevious = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex(activePhotoIndex === 0 ? photos.length - 1 : activePhotoIndex - 1)
    }
  }

  const goToNext = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex(activePhotoIndex === photos.length - 1 ? 0 : activePhotoIndex + 1)
    }
  }

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <button
            key={photo.id}
            type="button"
            className="group relative aspect-[4/3] bg-secondary overflow-hidden cursor-pointer border border-border hover:border-primary transition-all"
            onClick={() => openLightbox(index)}
          >
            {/* Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <StarBurst className="w-6 h-6 text-muted-foreground/20 mx-auto mb-2" />
                <p className="text-muted-foreground/50 text-xs uppercase tracking-widest">{photo.caption}</p>
              </div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors flex items-end p-4">
              <span className="text-primary-foreground text-xs font-medium uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                View
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {activePhotoIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/98 flex items-center justify-center"
          onClick={closeLightbox}
          role="dialog"
          aria-label="Photo lightbox"
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-background hover:bg-background/10 z-10 rounded-full"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-background hover:bg-background/10 z-10 rounded-full"
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-background hover:bg-background/10 z-10 rounded-full"
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          <div
            className="relative max-w-4xl max-h-[80vh] w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[4/3] bg-background/5 flex items-center justify-center">
              <div className="text-center p-8">
                <StarBurst className="w-12 h-12 text-background/20 mx-auto mb-4" />
                <p className="text-background font-serif text-xl mb-2">
                  {photos[activePhotoIndex].caption}
                </p>
                <p className="text-background/50 text-sm">
                  {photos[activePhotoIndex].alt}
                </p>
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="text-background/60 text-xs uppercase tracking-widest">
                {activePhotoIndex + 1} / {photos.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Placeholder message */}
      <div className="mt-10 border border-dashed border-border px-6 py-5 text-center">
        <p className="text-muted-foreground text-sm">
          <strong className="text-foreground">Note:</strong> Replace placeholder images with your actual band photos in{" "}
          <code className="text-xs bg-secondary px-1.5 py-0.5 rounded font-mono">/public/images/</code>
        </p>
      </div>
    </>
  )
}
