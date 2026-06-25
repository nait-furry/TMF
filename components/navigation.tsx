"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "What we do", href: "/programs" },
    { label: "Stories", href: "/stories" },
    { label: "Gallery", href: "/gallery" },
    { label: "Join", href: "/get-involved" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 pointer-events-none transition-all duration-300">
      <div
        className={`w-full mx-auto pointer-events-auto transition-all duration-500 ease-in-out px-6 md:px-8 ${
          isScrolled
            ? "max-w-5xl mt-4 bg-background/45 backdrop-blur-xl border border-border/40 rounded-full shadow-lg shadow-black/5 py-3"
            : "max-w-7xl mt-0 bg-transparent border-transparent py-5 border-b"
        } ${
          isOpen
            ? "bg-background/95 backdrop-blur-lg border border-border/50  shadow-xl py-6"
            : ""
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/logo.png"
              alt="Transform Maisha Foundation"
              width={180}
              height={180}
              className={`w-auto object-contain hover:opacity-90 transition-all duration-500 ease-in-out ${
                isScrolled ? "h-8 md:h-12" : "h-12 md:h-20"
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-left after:bg-accent after:transition-transform after:duration-300 hover:after:origin-bottom-right hover:after:scale-x-100 py-1 ${
                  isActive(item.href)
                    ? "text-accent after:scale-x-100"
                    : "text-accent after:scale-x-0 hover:text-accent"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Donate CTA */}
          <div className="flex items-center gap-4">
            <Link
              href="/get-involved#donate"
              className="hidden rounded-full sm:inline-flex px-6 py-2 bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all transform hover:scale-105 active:scale-95"
            >
              Donate
            </Link>

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
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-left text-sm font-medium hover:text-accent transition-colors py-2 border-b border-border/10 ${
                    isActive(item.href) ? "text-accent" : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/get-involved#donate"
                onClick={() => setIsOpen(false)}
                className="w-full text-center px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-medium text-sm hover:bg-primary/90 transition-all mt-2"
              >
                Donate
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
