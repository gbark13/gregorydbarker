import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Marquee } from "@/components/marquee"
import { DesertDivider, StarBurst } from "@/components/desert-scene"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const instruments = [
  "Upright Tuba",
  "Soprano Clarinet",
  "Silver Trumpet",
  "Silver Trumpet",
  "Brass Alto Saxophone",
  "Silver Soprano Saxophone",
  "White Trombone",
  "Piano",
  "Ukulele",
  "Tambourine",
  "Triangle",
  "Voice",
]

const marqueeItems = [
  "Parades",
  "County Fairs",
  "Rodeos",
  "Fourth of July",
  "Festivals",
  "Community Events",
  "Private Parties",
  "Holiday Celebrations",
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - Full bleed image with overlaid type */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/band-family.jpg"
            alt="The Barker Family Band posing together with their instruments"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-foreground/30" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-foreground/70 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 pb-16 pt-32">
          <div className="max-w-5xl">
            <p className="text-primary-foreground/70 uppercase tracking-[0.4em] text-xs font-medium mb-6">
              Arizona Family Ensemble
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[6.5rem] font-bold text-primary-foreground mb-6 leading-[0.9] tracking-tight">
              The Barker<br />
              Family Band
            </h1>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-10">
              <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm uppercase tracking-[0.15em] px-8 py-6">
                <Link href="/contact">
                  Book Our Band
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <p className="text-primary-foreground/60 text-sm max-w-xs leading-relaxed">
                7 players. 12 instruments. One family bringing joy to Arizona communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Marquee */}
      <div className="bg-primary py-4 border-y border-primary-foreground/10">
        <Marquee items={marqueeItems} className="text-primary-foreground" />
      </div>

      {/* About Section - Editorial asymmetric layout */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6">
          {/* Large statement */}
          <div className="max-w-4xl mb-20">
            <StarBurst className="w-8 h-8 text-primary mb-8" />
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-8 text-balance">
              Heartfelt music under the Arizona sun
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl">
              {"We are The Barker Family Band, a 7-piece ensemble united by blood and a shared love for music. Whether it's a Fourth of July parade, a county fair, a rodeo, or a community celebration, we bring the fun."}
            </p>
          </div>

          {/* Stats row - large editorial numbers */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 border-y border-border py-12 mb-20">
            <div>
              <span className="block font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary leading-none">7</span>
              <span className="text-muted-foreground text-xs md:text-sm uppercase tracking-[0.2em] mt-2 block">Players</span>
            </div>
            <div>
              <span className="block font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-accent leading-none">12</span>
              <span className="text-muted-foreground text-xs md:text-sm uppercase tracking-[0.2em] mt-2 block">Instruments</span>
            </div>
            <div>
              <span className="block font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-none">1</span>
              <span className="text-muted-foreground text-xs md:text-sm uppercase tracking-[0.2em] mt-2 block">Family</span>
            </div>
          </div>

          {/* Instruments - bento-style grid */}
          <div>
            <p className="text-primary uppercase tracking-[0.3em] text-xs font-medium mb-6">Our Instruments</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {instruments.map((instrument, index) => (
                <div
                  key={index}
                  className="group relative bg-card border border-border px-5 py-4 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all cursor-default"
                >
                  <span className="text-[0.65rem] text-muted-foreground group-hover:text-primary-foreground/60 uppercase tracking-[0.15em] absolute top-2 right-3 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary-foreground transition-colors">{instrument}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Desert Divider */}
      <DesertDivider className="bg-card -mb-px" />

      {/* Why Choose Us - Card section with southwestern motifs */}
      <section className="py-28 bg-card">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="text-accent uppercase tracking-[0.3em] text-xs font-medium mb-4">Why Choose Us</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance">
                Bring your event to life
              </h2>
            </div>
            <Button asChild variant="outline" className="rounded-full border-foreground text-foreground hover:bg-foreground hover:text-background text-xs uppercase tracking-[0.15em] px-6 self-start md:self-auto bg-transparent">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-primary text-primary-foreground p-8 md:p-10 flex flex-col justify-between min-h-[320px]">
              <StarBurst className="w-10 h-10 text-primary-foreground/40" />
              <div>
                <h3 className="font-serif text-2xl font-bold mb-3">Family Atmosphere</h3>
                <p className="text-primary-foreground/70 leading-relaxed text-sm">
                  Our tight-knit family bond translates into seamless performances filled with genuine joy and connection.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-accent text-accent-foreground p-8 md:p-10 flex flex-col justify-between min-h-[320px]">
              <StarBurst className="w-10 h-10 text-accent-foreground/40" />
              <div>
                <h3 className="font-serif text-2xl font-bold mb-3">Arizona Events</h3>
                <p className="text-accent-foreground/70 leading-relaxed text-sm">
                  From desert parades to county fairs, rodeos to private parties, we play at any Arizona event with heart.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-foreground text-background p-8 md:p-10 flex flex-col justify-between min-h-[320px]">
              <StarBurst className="w-10 h-10 text-background/40" />
              <div>
                <h3 className="font-serif text-2xl font-bold mb-3">Versatile Sound</h3>
                <p className="text-background/70 leading-relaxed text-sm">
                  With 12 instruments across brass, woodwinds, strings, and percussion, we deliver a rich, full sound for any occasion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-desert.jpg"
            alt=""
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <StarBurst className="w-12 h-12 text-primary-foreground/30 mx-auto mb-8" />
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mb-6 text-balance leading-tight">
              Ready for some good ol' family music?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10 max-w-xl mx-auto text-pretty">
              Bring The Barker Family Band to your next Arizona gathering. We play at any community event.
            </p>
            <Button asChild size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground text-sm uppercase tracking-[0.15em] px-10 py-6">
              <Link href="/contact">
                Book Our Band
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
