export function DesertDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        {/* Mesa / butte shapes */}
        <path
          d="M0 120V80L60 60L120 40L180 42L240 38L280 50L320 30L360 28L400 35L440 20L480 22L520 18L560 25L600 15L640 30L680 28L720 35L760 20L800 32L840 28L880 40L920 35L960 25L1000 30L1040 35L1080 28L1120 40L1160 45L1200 38L1240 50L1280 42L1320 55L1360 48L1400 60L1440 50V120H0Z"
          className="fill-background"
        />
        {/* Cactus silhouette left */}
        <g className="fill-foreground/[0.06]">
          <rect x="180" y="30" width="6" height="40" rx="3" />
          <rect x="172" y="38" width="8" height="4" rx="2" />
          <rect x="170" y="28" width="4" height="14" rx="2" />
          <rect x="186" y="34" width="8" height="4" rx="2" />
          <rect x="190" y="22" width="4" height="16" rx="2" />
        </g>
        {/* Cactus silhouette right */}
        <g className="fill-foreground/[0.06]">
          <rect x="1100" y="28" width="6" height="44" rx="3" />
          <rect x="1092" y="36" width="8" height="4" rx="2" />
          <rect x="1090" y="24" width="4" height="16" rx="2" />
          <rect x="1106" y="32" width="8" height="4" rx="2" />
          <rect x="1110" y="18" width="4" height="18" rx="2" />
        </g>
        {/* Small cactus center */}
        <g className="fill-foreground/[0.04]">
          <rect x="700" y="20" width="5" height="30" rx="2.5" />
          <rect x="694" y="26" width="6" height="3" rx="1.5" />
          <rect x="692" y="18" width="3" height="11" rx="1.5" />
        </g>
      </svg>
    </div>
  )
}

export function SaguaroIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="10" y="4" width="4" height="40" rx="2" fill="currentColor" />
      <rect x="4" y="16" width="6" height="3" rx="1.5" fill="currentColor" />
      <rect x="2" y="8" width="3" height="11" rx="1.5" fill="currentColor" />
      <rect x="14" y="12" width="6" height="3" rx="1.5" fill="currentColor" />
      <rect x="18" y="4" width="3" height="11" rx="1.5" fill="currentColor" />
    </svg>
  )
}

export function StarBurst({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line x1="20" y1="0" x2="20" y2="40" stroke="currentColor" strokeWidth="1" />
      <line x1="0" y1="20" x2="40" y2="20" stroke="currentColor" strokeWidth="1" />
      <line x1="5.86" y1="5.86" x2="34.14" y2="34.14" stroke="currentColor" strokeWidth="1" />
      <line x1="34.14" y1="5.86" x2="5.86" y2="34.14" stroke="currentColor" strokeWidth="1" />
      <circle cx="20" cy="20" r="3" fill="currentColor" />
    </svg>
  )
}
