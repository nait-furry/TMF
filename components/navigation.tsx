'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 pointer-events-none transition-all duration-300">
      <div 
        className={`w-full mx-auto pointer-events-auto transition-all duration-500 ease-in-out px-6 md:px-8 ${
          isScrolled 
            ? 'max-w-5xl mt-4 bg-background/45 backdrop-blur-xl border border-border/40 rounded-full shadow-lg shadow-black/5 py-3' 
            : 'max-w-7xl mt-0 bg-transparent border-transparent py-5 border-b'
        } ${
          isOpen 
            ? 'bg-background/95 backdrop-blur-lg border border-border/50  shadow-xl py-6' 
            : ''
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo - Using the new hand-drawn TMF logo */}
          <Link href="#" className="flex items-center gap-3 group">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Stuff-removebg-preview-x1FpEXlWn8D0sjNrtpqz4Ih9fhqy6C.png"
              alt="Transform Maisha Foundation"
              width={140}
              height={100}
              className={`w-auto object-contain hover:opacity-90 transition-all duration-500 ease-in-out ${
                isScrolled ? 'h-10 md:h-12' : 'h-16 md:h-20'
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-foreground text-sm font-medium hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 py-1"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('mission')}
              className="text-foreground text-sm font-medium hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 py-1"
            >
              Mission
            </button>
            <button
              onClick={() => scrollToSection('impact')}
              className="text-foreground text-sm font-medium hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 py-1"
            >
              Impact
            </button>
            <button
              onClick={() => scrollToSection('stories')}
              className="text-foreground text-sm font-medium hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 py-1"
            >
              Stories
            </button>
            <button
              onClick={() => scrollToSection('cta')}
              className="text-foreground text-sm font-medium hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 py-1"
            >
              Join
            </button>
          </div>

          {/* Donate CTA */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToSection('cta')}
              className="hidden sm:inline-flex px-6 py-2 bg-accent text-accent-foreground font-medium text-sm hover:bg-accent/90 transition-all transform hover:scale-105 active:scale-95"
            >
              Donate
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-muted transition-colors"
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
          <div className="md:hidden border-t border-border/20 mt-4 pt-4 pb-2">
            <div className="flex flex-col gap-3">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left text-foreground text-sm font-medium hover:text-accent transition-colors py-2 border-b border-border/10"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('mission')}
                className="text-left text-foreground text-sm font-medium hover:text-accent transition-colors py-2 border-b border-border/10"
              >
                Mission
              </button>
              <button
                onClick={() => scrollToSection('impact')}
                className="text-left text-foreground text-sm font-medium hover:text-accent transition-colors py-2 border-b border-border/10"
              >
                Impact
              </button>
              <button
                onClick={() => scrollToSection('stories')}
                className="text-left text-foreground text-sm font-medium hover:text-accent transition-colors py-2 border-b border-border/10"
              >
                Stories
              </button>
              <button
                onClick={() => scrollToSection('cta')}
                className="text-left text-foreground text-sm font-medium hover:text-accent transition-colors py-2 border-b border-border/10"
              >
                Join
              </button>
              <button
                onClick={() => scrollToSection('cta')}
                className="w-full text-center px-6 py-2.5 bg-accent text-accent-foreground font-medium text-sm hover:bg-accent/90 transition-all mt-2"
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
