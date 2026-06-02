'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import HeroSection from '@/components/hero-section'
import MasonryGrid from '@/components/masonry-grid'
import AnimatedCounter from '@/components/animated-counter'
import { coreValues, teamMembers, testimonials } from '@/lib/data/about'

export default function About() {
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

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <HeroSection
        title="About Transform Maisha"
        subtitle="Our journey of compassionate, Christ-centered community transformation across Kenya"
      />

      {/* Our Story Section */}
      <motion.section
        className="py-24 px-6 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div className="space-y-6" variants={containerVariants}>
              <motion.div variants={itemVariants}>
                <h2 className="font-display text-display-md text-primary mb-4">Our Journey</h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Transform Maisha Foundation was born from a conviction that every life has inherent worth and divine potential. What began as grassroots community mentorship has grown into a comprehensive movement of transformation across Kenya.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="font-display text-2xl text-primary mb-3">Mission</h3>
                <p className="text-lg text-foreground/80 leading-relaxed border-l-2 border-coloursecondary pl-6">
                  To be compassionate, Christ-centered companions in community empowerment for lasting social and economic transformation.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="font-display text-2xl text-primary mb-3">Vision</h3>
                <p className="text-lg text-foreground/80 leading-relaxed border-l-2 border-coloursecondary pl-6">
                  A community that utilizes its God-given potential through Christ-centered mentorship and support.
                </p>
              </motion.div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              className="relative h-96 rounded-sm overflow-hidden"
              variants={itemVariants}
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
                alt="Transform Maisha team at work"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Impact Integration Section */}
      <motion.section
        className="py-24 px-6 bg-card border-y border-border"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="font-display text-display-md text-primary mb-16"
            variants={itemVariants}
          >
            Impact Proof
          </motion.h2>

          {/* Stats Grid - Asymmetrical */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              className="bg-background p-8 rounded-sm border-t-4 border-accent"
              variants={itemVariants}
            >
              <h3 className="font-display text-4xl text-primary mb-2">
                <AnimatedCounter value={2500} suffix="+" />
              </h3>
              <p className="text-foreground/70">Lives Directly Transformed</p>
            </motion.div>

            <motion.div
              className="bg-background p-8 rounded-sm border-t-4 border-accent"
              variants={itemVariants}
            >
              <h3 className="font-display text-4xl text-primary mb-2">
                <AnimatedCounter value={15} />
              </h3>
              <p className="text-foreground/70">Active Community Programs</p>
            </motion.div>

            <motion.div
              className="bg-background p-8 rounded-sm border-t-4 border-accent"
              variants={itemVariants}
            >
              <h3 className="font-display text-4xl text-primary mb-2">
                <AnimatedCounter value={8} />
              </h3>
              <p className="text-foreground/70">Counties Across Kenya</p>
            </motion.div>
          </div>

          {/* Testimonials */}
          <motion.div className="mb-16" variants={containerVariants}>
            <h3 className="font-display text-2xl text-primary mb-8">Voices of Change</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  className="bg-background p-8 rounded-sm"
                  variants={itemVariants}
                >
                  <p className="text-foreground/80 italic mb-4">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <p className="font-semibold text-primary">{testimonial.author}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Explore More */}
          <motion.div className="text-center mt-12" variants={itemVariants}>
            <Link
              href="/stories"
              className="inline-flex px-10 py-4 bg-foreground text-background font-sans uppercase tracking-widest text-xs hover:bg-coloursecondary transition-colors duration-300"
            >
              Read More Stories
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Core Values Section - Unique Layout */}
      <motion.section
        className="py-24 px-6 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="font-display text-display-md text-primary mb-16"
            variants={itemVariants}
          >
            Core Values
          </motion.h2>

          <motion.div variants={containerVariants}>
            <MasonryGrid items={coreValues} columns="grid-cols-4" gap="gap-6" />
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="py-24 px-6 bg-card border-y border-border"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="font-display text-display-md text-primary mb-16"
            variants={itemVariants}
          >
            Our Team
          </motion.h2>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-12" variants={containerVariants}>
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                className="text-center"
                variants={itemVariants}
              >
                <div className="relative w-full h-64 rounded-sm overflow-hidden mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-display text-xl text-primary mb-1">{member.name}</h3>
                <p className="text-foreground/70">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="relative py-24 px-6 bg-primary text-primary-foreground overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -mr-48 -mt-48 blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 className="font-display text-display-md mb-6" variants={itemVariants}>
            Join Our Mission
          </motion.h2>

          <motion.p className="text-xl mb-8 leading-relaxed text-primary-foreground/90" variants={itemVariants}>
            Be part of a compassionate movement transforming lives and communities across Kenya
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-6 justify-center mt-8" variants={itemVariants}>
            <Link
              href="/get-involved"
              className="px-10 py-4 bg-coloursecondary text-background font-sans uppercase tracking-widest text-xs hover:bg-secondary transition-colors duration-300"
            >
              Donate Now
            </Link>
            <Link
              href="/contact"
              className="px-10 py-4 border border-foreground text-primary-foreground font-sans uppercase tracking-widest text-xs hover:bg-card hover:text-foreground transition-colors duration-300"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </main>
  )
}
