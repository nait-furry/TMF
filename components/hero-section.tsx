import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

interface HeroSectionProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  primaryCTA?: {
    label: string
    href: string
  }
  secondaryCTA?: {
    label: string
    href: string
  }
  showScrollIndicator?: boolean
  imageOverlay?: boolean
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  primaryCTA,
  secondaryCTA,
  showScrollIndicator = false,
  imageOverlay = true,
}: HeroSectionProps) {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-16"
      style={
        backgroundImage
          ? {
              backgroundImage: `url('${backgroundImage}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      {/* Overlay */}
      {backgroundImage && imageOverlay && (
        <div className="absolute inset-0 bg-primary/20" />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="font-display font-bold text-display-lg text-primary mb-4 leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* CTAs */}
        {(primaryCTA || secondaryCTA) && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {primaryCTA && (
              <Link
                href={primaryCTA.href}
                className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-sm hover:opacity-90 transition-opacity"
              >
                {primaryCTA.label}
              </Link>
            )}
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded-sm hover:bg-accent/10 transition-colors"
              >
                {secondaryCTA.label}
              </Link>
            )}
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-6 h-6 text-accent" />
        </div>
      )}
    </section>
  )
}
