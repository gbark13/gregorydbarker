"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StarBurst } from "./desert-scene"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 mt-4">
        <nav className="bg-card/80 backdrop-blur-xl border border-border rounded-full px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <StarBurst className="w-6 h-6 text-primary transition-transform group-hover:rotate-45" />
            <span className="font-serif text-lg font-bold text-foreground tracking-tight hidden sm:inline">
              Barker Family Band
            </span>
            <span className="font-serif text-lg font-bold text-foreground tracking-tight sm:hidden">
              BFB
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-medium uppercase tracking-[0.2em] px-4 py-2 rounded-full transition-colors ${
                  pathname === link.href
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="sm" className="ml-2 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground text-xs uppercase tracking-[0.15em] px-5">
              <Link href="/contact">Book Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden mx-4 mt-2">
          <div className="bg-card/95 backdrop-blur-xl border border-border rounded-2xl p-6">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium uppercase tracking-[0.2em] px-4 py-3 rounded-xl transition-colors ${
                    pathname === link.href
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-2 rounded-xl bg-accent hover:bg-accent/90 text-accent-foreground uppercase tracking-[0.15em]">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Book Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
