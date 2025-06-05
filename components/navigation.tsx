"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="relative bg-gradient-to-r from-amazonia-blue via-amazonia-teal to-amazonia-blue text-white shadow-2xl">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center space-x-2 text-lg font-bold font-fun transform hover:scale-105 transition-transform"
          >
            <div className="bg-white/20 rounded-full p-2 backdrop-blur-sm">
              <span className="text-xl">🏡🐴</span>
            </div>
            <span className="hidden md:block">Welcome to Balsamic Ranch, Baby!</span>
          </Link>

          <div className="flex space-x-2">
            <Link
              href="/"
              className={`px-4 py-2 rounded-full font-fun transition-all duration-300 transform hover:scale-105 ${
                pathname === "/"
                  ? "bg-white/30 text-white shadow-lg backdrop-blur-sm"
                  : "text-white/80 hover:text-white hover:bg-white/20 backdrop-blur-sm"
              }`}
            >
              <span className="hidden sm:inline">Event Details</span>
              <span className="sm:hidden">📅</span>
            </Link>

            <Link
              href="/rsvp"
              className={`px-4 py-2 rounded-full font-fun transition-all duration-300 transform hover:scale-105 ${
                pathname === "/rsvp"
                  ? "bg-white/30 text-white shadow-lg backdrop-blur-sm"
                  : "text-white/80 hover:text-white hover:bg-white/20 backdrop-blur-sm"
              }`}
            >
              <span className="hidden sm:inline">RSVP</span>
              <span className="sm:hidden">✉️</span>
            </Link>

            <Link
              href="/gifts"
              className={`px-4 py-2 rounded-full font-fun transition-all duration-300 transform hover:scale-105 ${
                pathname === "/gifts"
                  ? "bg-white/30 text-white shadow-lg backdrop-blur-sm"
                  : "text-white/80 hover:text-white hover:bg-white/20 backdrop-blur-sm"
              }`}
            >
              <span className="hidden sm:inline">Gift Ideas</span>
              <span className="sm:hidden">🎁</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
