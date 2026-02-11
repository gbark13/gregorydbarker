import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { VideoGallery } from "@/components/video-gallery"
import { PhotoGallery } from "@/components/photo-gallery"
import { StarBurst } from "@/components/desert-scene"

export const metadata = {
  title: "Media | The Barker Family Band",
  description: "Watch performance videos and browse photos of The Barker Family Band at community events across Arizona.",
}

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <StarBurst className="w-8 h-8 text-primary mb-8" />
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-background mb-6 leading-[0.95]">
              See Us<br />in Action
            </h1>
            <p className="text-background/50 text-lg leading-relaxed max-w-xl">
              Browse our collection of performance videos and photos from community events, parades, and celebrations across Arizona.
            </p>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-primary uppercase tracking-[0.3em] text-xs font-medium mb-4">
                Performances
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                Watch Our Videos
              </h2>
            </div>
          </div>
          <VideoGallery />
        </div>
      </section>

      {/* Photos Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-accent uppercase tracking-[0.3em] text-xs font-medium mb-4">
                Gallery
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                Photos from Events
              </h2>
            </div>
          </div>
          <PhotoGallery />
        </div>
      </section>

      <Footer />
    </div>
  )
}
