"use client"

import { useState } from "react"
import { Play, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const videos = [
  {
    id: "1",
    title: "Fourth of July Parade",
    description: "Leading the annual Independence Day parade through downtown.",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "2",
    title: "County Fair Concert",
    description: "Full concert set at the summer county fair main stage.",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "3",
    title: "Community Festival",
    description: "Highlights from the annual community festival performance.",
    youtubeId: "dQw4w9WgXcQ",
  },
]

export function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <button
            key={video.id}
            type="button"
            className="group text-left bg-card border border-border overflow-hidden hover:border-primary transition-all"
            onClick={() => setActiveVideo(video.youtubeId)}
          >
            {/* Thumbnail */}
            <div className="relative aspect-video bg-foreground/5">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-muted-foreground/40 text-xs uppercase tracking-widest">Video</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-primary/10">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-primary-foreground ml-0.5" />
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="p-5">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                {video.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {video.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
          role="dialog"
          aria-label="Video player"
        >
          <div className="relative w-full max-w-5xl">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-background hover:bg-background/10 rounded-full"
              onClick={() => setActiveVideo(null)}
            >
              <X className="w-6 h-6" />
            </Button>
            <div className="aspect-video overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="Video player"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Placeholder message */}
      <div className="mt-10 border border-dashed border-border px-6 py-5 text-center">
        <p className="text-muted-foreground text-sm">
          <strong className="text-foreground">Note:</strong> Replace the placeholder YouTube video IDs in{" "}
          <code className="text-xs bg-secondary px-1.5 py-0.5 rounded font-mono">/components/video-gallery.tsx</code>{" "}
          with your actual video IDs.
        </p>
      </div>
    </>
  )
}
