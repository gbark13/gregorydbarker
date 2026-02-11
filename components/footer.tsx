import Link from "next/link"
import { StarBurst } from "./desert-scene"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <StarBurst className="w-6 h-6 text-primary transition-transform group-hover:rotate-45" />
              <span className="font-serif text-2xl font-bold text-background">
                Barker Family Band
              </span>
            </Link>
            <p className="text-background/50 text-sm leading-relaxed max-w-xs">
              Bringing joy to Arizona community events with our 7-piece brass and woodwind ensemble. Proud to be a family.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-background/40 mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-background/70 hover:text-background transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-background/70 hover:text-background transition-colors text-sm">
                  Media
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/70 hover:text-background transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-background/40 mb-6">Get in Touch</h3>
            <p className="text-background/50 text-sm leading-relaxed mb-4">
              Available for Arizona events, rodeos, festivals, parades, and celebrations across the Grand Canyon State.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:text-primary/80 transition-colors"
            >
              Book Us Today
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        <div className="border-t border-background/10 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/30 text-xs">
            {new Date().getFullYear()} The Barker Family Band. All rights reserved.
          </p>
          <p className="text-background/30 text-xs">
            Proudly based in Arizona
          </p>
        </div>
      </div>
    </footer>
  )
}
