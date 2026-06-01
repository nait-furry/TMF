'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 w-full bg-background/98 backdrop-blur-md z-50 border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo - Using the new hand-drawn TMF logo */}
          <Link href="#" className="flex items-center gap-3 group">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Stuff-removebg-preview-x1FpEXlWn8D0sjNrtpqz4Ih9fhqy6C.png"
              alt="Transform Maisha Foundation"
              width={140}
              height={60}
              className="h-12 w-auto object-contain hover:opacity-90 transition-opacity"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-foreground text-sm font-medium hover:text-accent transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('mission')}
              className="text-foreground text-sm font-medium hover:text-accent transition-colors"
            >
              Mission
            </button>
            <button
              onClick={() => scrollToSection('impact')}
              className="text-foreground text-sm font-medium hover:text-accent transition-colors"
            >
              Impact
            </button>
            <button
              onClick={() => scrollToSection('stories')}
              className="text-foreground text-sm font-medium hover:text-accent transition-colors"
            >
              Stories
            </button>
            <button
              onClick={() => scrollToSection('cta')}
              className="text-foreground text-sm font-medium hover:text-accent transition-colors"
            >
              Join
            </button>
          </div>

          {/* Donate CTA */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToSection('cta')}
              className="hidden sm:inline-flex px-6 py-2 bg-accent text-accent-foreground font-medium text-sm rounded-sm hover:bg-accent/90 transition-all transform hover:scale-105"
            >
              Donate
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-sm transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border mt-4 pt-4 pb-4">
            <div className="flex flex-col gap-3">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left text-foreground text-sm font-medium hover:text-accent transition-colors py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('mission')}
                className="text-left text-foreground text-sm font-medium hover:text-accent transition-colors py-2"
              >
                Mission
              </button>
              <button
                onClick={() => scrollToSection('impact')}
                className="text-left text-foreground text-sm font-medium hover:text-accent transition-colors py-2"
              >
                Impact
              </button>
              <button
                onClick={() => scrollToSection('stories')}
                className="text-left text-foreground text-sm font-medium hover:text-accent transition-colors py-2"
              >
                Stories
              </button>
              <button
                onClick={() => scrollToSection('cta')}
                className="text-left text-foreground text-sm font-medium hover:text-accent transition-colors py-2"
              >
                Join
              </button>
              <button
                onClick={() => scrollToSection('cta')}
                className="px-6 py-2 bg-accent text-accent-foreground font-medium text-sm rounded-sm hover:bg-accent/90 transition-all mt-2"
              >
                Donate
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
