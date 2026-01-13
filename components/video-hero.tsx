import { Heart } from "lucide-react"

export function VideoHero() {
  // Replace this VIDEO_ID with your actual YouTube video ID
  const VIDEO_ID = "cDCZApCZK-8"

  return (
    <section className="relative bg-background py-8 px-4 md:py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex items-center justify-center gap-2 text-primary">
          <Heart className="h-5 w-5 fill-current" />
          <span className="text-sm font-medium uppercase tracking-wider">Faith • Education • Future</span>
          <Heart className="h-5 w-5 fill-current" />
        </div>

        <h1 className="mb-6 text-center text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl text-balance">
          Support Mayrelia & Dayla's
          <br />
          <span className="text-primary">Christian Education</span>
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-center text-muted-foreground text-pretty">
          Watch our story and learn how your tax credit donation can help us continue our journey at Carefree Christian
          Academy.
        </p>

        <div className="relative mx-auto aspect-video max-w-3xl overflow-hidden rounded-xl shadow-2xl ring-4 ring-primary/20">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${VIDEO_ID}`}
            title="Support Our Scholarship Journey"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
