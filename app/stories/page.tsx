'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import HeroSection from '@/components/hero-section'
import MasonryGrid from '@/components/masonry-grid'

export default function Stories() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

  const stories = [
    {
      id: 'samuel-journey',
      title: "Samuel's Journey",
      subtitle: 'From Street Life to Purpose',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
      category: 'Youth Transformation',
    },
    {
      id: 'faith-foundation',
      title: "Faith's Foundation",
      subtitle: 'Building an Economic Legacy',
      image: 'https://images.unsplash.com/photo-1516594798280-26c841de141e?w=500&h=500&fit=crop',
      category: 'Women Empowerment',
      span: 'col-span-2',
    },
    {
      id: 'community-heals',
      title: 'Community Heals',
      subtitle: 'Collective Transformation',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&h=500&fit=crop',
      category: 'Community Impact',
    },
    {
      id: 'grace-story',
      title: "Grace's New Beginning",
      subtitle: 'From Poverty to Prosperity',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=500&fit=crop',
      category: 'Mentorship',
    },
    {
      id: 'mentor-impact',
      title: 'The Mentor Effect',
      subtitle: 'Multiplying Transformation',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop',
      category: 'Leadership',
      span: 'col-span-2',
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <HeroSection
        title="Stories of Transformation"
        subtitle="Real stories from real people experiencing Christ-centered transformation across Kenya"
      />

      {/* Stories Grid */}
      <motion.section
        className="py-24 px-6 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="font-display text-display-md text-primary mb-4">
              Voices of Change
            </h2>
            <p className="text-lg text-foreground/70">
              Explore the journeys of individuals and communities discovering their God-given potential
            </p>
          </motion.div>

          <motion.div variants={containerVariants}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stories.map((story) => (
                <motion.div
                  key={story.id}
                  className={`${story.span || 'col-span-1'} group cursor-pointer`}
                  variants={itemVariants}
                >
                  <Link href={`/stories/${story.id}`}>
                    <div className="relative h-64 rounded-sm overflow-hidden mb-4">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors duration-300" />
                      <div className="absolute inset-0 flex flex-col justify-end p-6 text-primary-foreground">
                        <span className="text-xs uppercase tracking-wider opacity-90 mb-2">
                          {story.category}
                        </span>
                        <h3 className="font-display text-2xl font-bold">{story.title}</h3>
                        <p className="text-sm opacity-90">{story.subtitle}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="py-24 px-6 bg-cream"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="font-display text-display-md text-primary mb-12"
            variants={itemVariants}
          >
            What People Are Saying
          </motion.h2>

          <motion.div
            className="space-y-8"
            variants={containerVariants}
          >
            {[
              {
                quote:
                  'Transform Maisha didn\'t just give me skills—they gave me dignity, purpose, and a relationship with Christ that changed everything.',
                author: 'Samuel M.',
              },
              {
                quote:
                  'The mentorship I received planted seeds of hope. Now I\'m mentoring others in my community. The transformation multiplies.',
                author: 'Grace K.',
              },
              {
                quote:
                  'This organization sees potential in people society has written off. They proved I wasn\'t a lost cause.',
                author: 'Faith N.',
              },
            ].map((testimonial, idx) => (
              <motion.blockquote
                key={idx}
                className="text-xl italic text-foreground/80 border-l-4 border-accent pl-6 py-4"
                variants={itemVariants}
              >
                "{testimonial.quote}"
                <footer className="text-sm font-semibold text-primary mt-2 not-italic">
                  — {testimonial.author}
                </footer>
              </motion.blockquote>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA */}
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
            Be Part of These Stories
          </motion.h2>

          <motion.p className="text-xl mb-8 leading-relaxed text-primary-foreground/90" variants={itemVariants}>
            Your support enables the next chapter of transformation across Kenya
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
            <Link
              href="/get-involved"
              className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-sm hover:opacity-90 transition-opacity"
            >
              Support Transformation
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-sm hover:bg-primary-foreground/10 transition-colors"
            >
              Share Your Story
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </main>
  )
}
