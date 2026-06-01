'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import HeroSection from '@/components/hero-section'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'info@transformmaisha.org',
      href: 'mailto:info@transformmaisha.org',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+254 700 000 000',
      href: 'tel:+254700000000',
    },
    {
      icon: MapPin,
      label: 'Office',
      value: 'Nairobi, Kenya',
      href: '#',
    },
    {
      icon: Clock,
      label: 'Office Hours',
      value: 'Mon - Fri, 9AM - 5PM EAT',
      href: '#',
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <HeroSection
        title="Get In Touch"
        subtitle="We'd love to hear from you. Reach out with questions, partnership inquiries, or to share your story."
      />

      {/* Contact Section */}
      <motion.section
        className="py-24 px-6 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div variants={containerVariants}>
              <motion.h2 className="font-display text-display-sm text-primary mb-8" variants={itemVariants}>
                Send us a Message
              </motion.h2>

              <motion.form
                onSubmit={handleSubmit}
                className="space-y-6"
                variants={containerVariants}
              >
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="your@email.com"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="+254 700 000 000"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select a subject</option>
                    <option value="donation">Donation Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="volunteer">Volunteer Inquiry</option>
                    <option value="story">Share Your Story</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder="Your message..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-sm hover:bg-primary/90 transition-all"
                  variants={itemVariants}
                >
                  {submitted ? 'Message Sent!' : 'Send Message'}
                </motion.button>
              </motion.form>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={containerVariants}>
              <motion.h2 className="font-display text-display-sm text-primary mb-8" variants={itemVariants}>
                Contact Information
              </motion.h2>

              <div className="space-y-8">
                {contactInfo.map((info, idx) => {
                  const Icon = info.icon
                  return (
                    <motion.a
                      key={idx}
                      href={info.href}
                      className="flex items-start gap-4 p-6 bg-cream rounded-sm hover:shadow-md transition-all"
                      variants={itemVariants}
                    >
                      <div className="flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60 uppercase tracking-wider mb-1">
                          {info.label}
                        </p>
                        <p className="font-semibold text-primary">{info.value}</p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>

              {/* Social Links */}
              <motion.div className="mt-12" variants={itemVariants}>
                <h3 className="font-semibold text-primary mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="px-4 py-2 bg-background border border-border rounded-sm hover:bg-primary hover:text-primary-foreground transition-all text-sm font-medium"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section
        className="relative py-24 px-6 bg-cream h-96 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-muted text-foreground/60">
          <div className="text-center">
            <MapPin className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p>Map integration would go here</p>
            <p className="text-sm">Nairobi, Kenya</p>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="py-24 px-6 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 className="font-display text-display-md text-primary mb-16 text-center" variants={itemVariants}>
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                q: 'How can I volunteer with Transform Maisha?',
                a: 'We welcome volunteers with various skills. Contact us with your interests and availability, and we&apos;ll match you with opportunities that align with your passions.',
              },
              {
                q: 'Can I visit our community programs?',
                a: 'Yes! We occasionally host site visits for donors and partners. Contact us to arrange a visit and see our work firsthand.',
              },
              {
                q: 'How do I request a speaker for my organization?',
                a: 'Our team can speak about our work, community development, and faith-based transformation. Email us with your event details and dates.',
              },
              {
                q: 'Can I partner with Transform Maisha?',
                a: 'We actively seek partnerships with organizations, businesses, and individuals aligned with our mission. Let&apos;s discuss how we can collaborate.',
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                className="p-6 bg-cream rounded-sm border-l-4 border-accent"
                variants={itemVariants}
              >
                <h3 className="font-semibold text-primary mb-2">{faq.q}</h3>
                <p className="text-foreground/70">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        className="relative py-32 px-6 bg-primary text-primary-foreground overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -mr-48 -mt-48 blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 className="font-display text-display-md mb-6" variants={itemVariants}>
            Ready to Make a Difference?
          </motion.h2>

          <motion.p className="text-xl mb-8 leading-relaxed text-primary-foreground/90" variants={itemVariants}>
            Whether through donation, partnership, volunteering, or sharing your story—there's a way for you to be part of transformation.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
            <Link
              href="/get-involved"
              className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-sm hover:opacity-90 transition-opacity"
            >
              Support Us Today
            </Link>
            <a
              href="#contact-form"
              className="px-8 py-3 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-sm hover:bg-primary-foreground/10 transition-colors"
            >
              Send a Message
            </a>
          </motion.div>
        </div>
      </motion.section>
    </main>
  )
}
