import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary py-8 px-4 text-center text-primary-foreground">
      <div className="mx-auto max-w-4xl">
        <p className="mb-2 flex items-center justify-center gap-2 text-sm">
          Made with <Heart className="h-4 w-4 fill-current" /> by the Barker Family
        </p>
        <p className="text-xs text-primary-foreground/70">
          Thank you for considering a donation to support Mayrelia & Dayla's education.
        </p>
        <p className="mt-4 text-xs text-primary-foreground/50">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  )
}
