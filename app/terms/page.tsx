import Link from 'next/link'
import HeroSection from '@/components/hero-section'

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection
        title="Terms of Service"
        subtitle="Basic terms for using the Transform Maisha Foundation website."
      />

      <section className="py-20 px-6 bg-background">
        <div className="max-w-3xl mx-auto space-y-8 text-foreground/80 leading-relaxed">
          <div>
            <h2 className="font-display text-3xl text-primary mb-3">Website Use</h2>
            <p>
              This website shares information about Transform Maisha Foundation,
              our programs, stories, and ways to get involved. Please use the
              site respectfully and do not attempt to disrupt or misuse it.
            </p>
          </div>

          <div>
            <h2 className="font-display text-3xl text-primary mb-3">Content</h2>
            <p>
              Website content is provided for general information. Program,
              donation, partnership, and volunteering details may change as the
              organization updates its work and operations.
            </p>
          </div>

          <div>
            <h2 className="font-display text-3xl text-primary mb-3">Inquiries</h2>
            <p>
              For official confirmations, partnership details, donation support,
              or corrections, contact the team directly.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-sm hover:bg-primary/90 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}
