import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary font-display font-bold text-2xl mb-4">
              T
            </div>
            <h3 className="font-display text-lg font-bold mb-2">Transform Maisha</h3>
            <p className="text-sm text-primary-foreground/80">Every Life Counts</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-accent transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/stories" className="hover:text-accent transition-colors">
                  Stories
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-accent transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@transformmaisha.org" className="hover:text-accent transition-colors">
                  info@transformmaisha.org
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+254700000000" className="hover:text-accent transition-colors">
                  +254 700 000 000
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <span className="p-2 bg-accent/20 rounded-sm text-primary-foreground/70">
                <Facebook className="w-4 h-4" />
              </span>
              <span className="p-2 bg-accent/20 rounded-sm text-primary-foreground/70">
                <Twitter className="w-4 h-4" />
              </span>
              <span className="p-2 bg-accent/20 rounded-sm text-primary-foreground/70">
                <Instagram className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
            <p>&copy; 2024 Transform Maisha Foundation. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
