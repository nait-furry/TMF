import Link from 'next/link'
import HeroSection from '@/components/hero-section'

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection
        title="Privacy Policy"
        subtitle="How Transform Maisha Foundation handles information shared through this website."
      />

      <section className="py-20 px-6 bg-background">
        <div className="max-w-3xl mx-auto space-y-8 text-foreground/80 leading-relaxed">
          <div>
            <h2 className="font-display text-3xl text-primary mb-3">Information We Collect</h2>
            <p>
              We collect information you choose to share with us, such as your name,
              email address, phone number, and message details when you contact us,
              volunteer, partner, or express interest in supporting our work.
            </p>
          </div>

          <div>
            <h2 className="font-display text-3xl text-primary mb-3">How We Use It</h2>
            <p>
              We use submitted information to respond to inquiries, coordinate
              partnerships and volunteering, share relevant updates, and improve
              how we communicate the mission of Transform Maisha Foundation.
            </p>
          </div>

          <div>
            <h2 className="font-display text-3xl text-primary mb-3">Your Choices</h2>
            <p>
              You can ask us to update or remove your contact information by
              reaching out through the contact page.
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
