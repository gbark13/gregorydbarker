"use client"

import { SaguaroIcon } from "./desert-scene"

interface MarqueeProps {
  items: string[]
  className?: string
}

export function Marquee({ items, className = "" }: MarqueeProps) {
  const content = items.map((item, i) => (
    <span key={i} className="flex items-center gap-6 mx-6">
      <span className="text-sm font-medium uppercase tracking-[0.3em] whitespace-nowrap">{item}</span>
      <SaguaroIcon className="w-3 h-6 opacity-40 flex-shrink-0" />
    </span>
  ))

  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="flex animate-marquee">
        <div className="flex items-center">{content}</div>
        <div className="flex items-center" aria-hidden>{content}</div>
        <div className="flex items-center" aria-hidden>{content}</div>
      </div>
    </div>
  )
}
