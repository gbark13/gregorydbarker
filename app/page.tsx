import { VideoHero } from "@/components/video-hero"
import { AboutSection } from "@/components/about-section"
import { LinksSection } from "@/components/links-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <VideoHero />
      <AboutSection />
      <LinksSection />
      <Footer />
    </main>
  )
}
