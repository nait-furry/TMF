'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import HeroSection from '@/components/hero-section'

export default function Programs() {
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

  const programs = [
    {
      id: 1,
      title: 'Neema Festival',
      description:
        'An annual celebration of community, faith, and transformation bringing thousands together for spiritual renewal and social connection.',
      impact: '500+ participants annually',
      image: '/320686.jpg',
      color: 'from-accent/20',
    },
    {
      id: 2,
      title: 'TOTOS Program',
      description:
        'Comprehensive youth mentorship and skills training designed to equip young leaders with tools for economic independence and spiritual growth.',
      impact: '200+ youth engaged yearly',
      image: '/320703.jpg',
      color: 'from-primary/10',
    },
    {
      id: 3,
      title: 'Compassion Ministry',
      description:
        'Faith-centered community support addressing immediate needs while fostering long-term empowerment and dignity for vulnerable populations.',
      impact: '1,000+ households supported',
      image: '/320713.jpg',
      color: 'from-accent/20',
    },
    {
      id: 4,
      title: 'Women Empowerment',
      description:
        'Economic and leadership development for women, creating pathways to financial independence, business ownership, and community leadership.',
      impact: '300+ women transformed',
      image: '/320698.jpg',
      color: 'from-primary/10',
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <HeroSection
        title="Our Programs"
        subtitle="Comprehensive initiatives transforming lives through Christ-centered mentorship, skills training, and community empowerment"
      />

      {/* Programs Grid - Unique Layouts Per Program */}
      <motion.section
        className="py-24 px-6 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto space-y-24">
          {programs.map((program, idx) => (
            <motion.div
              key={program.id}
              className={idx % 2 === 0 ? 'lg:flex' : 'lg:flex lg:flex-row-reverse'}
              variants={containerVariants}
            >
              {/* Image */}
              <motion.div className="lg:w-1/2 mb-8 lg:mb-0" variants={itemVariants}>
                <div className="relative h-80 lg:h-96 rounded-sm overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                className={`lg:w-1/2 ${idx % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'} space-y-6`}
                variants={containerVariants}
              >
                <motion.div variants={itemVariants}>
                  <h2 className="font-display text-display-sm text-primary mb-4">
                    {program.title}
                  </h2>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    {program.description}
                  </p>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 py-6 border-l-4 border-accent pl-6"
                  variants={itemVariants}
                >
                  <div className="flex-1">
                    <p className="text-sm text-foreground/60 uppercase tracking-wider">Impact</p>
                    <p className="text-xl font-semibold text-primary">{program.impact}</p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Link
                    href="/contact"
                    className="inline-flex px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-sm hover:bg-primary/90 transition-all"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* How Programs Work Section - Unique Layout */}
      <motion.section
        className="py-24 px-6 bg-cream"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="font-display text-display-md text-primary mb-16 text-center"
            variants={itemVariants}
          >
            How We Work
          </motion.h2>

          {/* Process Flow */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Assess', desc: 'Understanding community needs' },
              { step: '02', title: 'Empower', desc: 'Building skills and confidence' },
              { step: '03', title: 'Support', desc: 'Ongoing mentorship and guidance' },
              { step: '04', title: 'Transform', desc: 'Long-term sustainable change' },
            ].map((process, idx) => (
              <motion.div
                key={idx}
                className="relative"
                variants={itemVariants}
              >
                <div className="flex flex-col">
                  <span className="text-6xl font-display font-bold text-accent/30 mb-2">
                    {process.step}
                  </span>
                  <h3 className="font-display text-2xl text-primary mb-2">
                    {process.title}
                  </h3>
                  <p className="text-foreground/70">{process.desc}</p>
                </div>

                {/* Connector line */}
                {idx < 3 && (
                  <div className="hidden md:block absolute top-8 -right-3 w-6 h-0.5 bg-accent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Program Values Section */}
      <motion.section
        className="py-24 px-6 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="font-display text-display-md text-primary mb-16 text-center"
            variants={itemVariants}
          >
            Guiding Principles
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: 'Dignity-First Approach',
                description: 'We honor the inherent worth and potential of every individual and community we serve.',
              },
              {
                title: 'Faith-Centered',
                description: 'Christ-centered mentorship guides transformative discipleship and holistic growth.',
              },
              {
                title: 'Sustainability',
                description: 'Programs designed for lasting impact, building capacity for long-term community independence.',
              },
              {
                title: 'Holistic Development',
                description: 'We address spiritual, economic, social, and educational dimensions of transformation.',
              },
            ].map((principle, idx) => (
              <motion.div
                key={idx}
                className="p-8 bg-cream rounded-sm border-l-4 border-accent"
                variants={itemVariants}
              >
                <h3 className="font-display text-2xl text-primary mb-3">
                  {principle.title}
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="relative py-32 px-6 bg-primary text-primary-foreground overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full -ml-48 -mb-48 blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 className="font-display text-display-md mb-6" variants={itemVariants}>
            Support Our Programs
          </motion.h2>

          <motion.p className="text-xl mb-8 leading-relaxed text-primary-foreground/90" variants={itemVariants}>
            Your contribution directly empowers communities and transforms lives across Kenya
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
            <Link
              href="/get-involved"
              className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-sm hover:opacity-90 transition-opacity"
            >
              Donate Now
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-sm hover:bg-primary-foreground/10 transition-colors"
            >
              Partner With Us
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </main>
  )
}
