'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { X } from 'lucide-react'
import HeroSection from '@/components/hero-section'

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=600&fit=crop', category: 'Events', alt: 'Neema Festival' },
  { id: 2, src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=600&fit=crop', category: 'Community', alt: 'Community gathering' },
  { id: 3, src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=600&fit=crop', category: 'Youth', alt: 'Youth mentorship' },
  { id: 4, src: 'https://images.unsplash.com/photo-1516594798280-26c841de141e?w=600&h=600&fit=crop', category: 'Women', alt: 'Women empowerment' },
  { id: 5, src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop', category: 'Training', alt: 'Skills training' },
  { id: 6, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop', category: 'Leadership', alt: 'Leadership training' },
  { id: 7, src: 'https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=600&h=600&fit=crop', category: 'Compassion', alt: 'Compassion ministry' },
  { id: 8, src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop', category: 'Impact', alt: 'Community impact' },
  { id: 9, src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop', category: 'Events', alt: 'Program event' },
]

const categories = ['All', ...Array.from(new Set(galleryImages.map((img) => img.category)))]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredImages =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <HeroSection
        title="Visual Stories"
        subtitle="Moments that capture the spirit of transformation across Kenya"
      />

      {/* Category Filter */}
      <motion.section
        className="py-12 px-6 bg-cream border-b border-border"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-sm font-medium text-sm transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-background text-foreground border border-border hover:border-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Gallery Grid - Masonry-like */}
      <motion.section
        className="py-24 px-6 bg-background"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
            variants={containerVariants}
          >
            <AnimatePresence mode="wait">
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative h-72 rounded-sm overflow-hidden bg-muted">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 text-primary-foreground font-semibold transition-opacity">
                        View
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary to-transparent p-4 text-primary-foreground">
                      <p className="text-xs uppercase tracking-wider opacity-90">
                        {image.category}
                      </p>
                      <p className="text-sm font-medium">{image.alt}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full h-96 md:h-[600px] rounded-sm overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-cover"
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
                <p className="text-xs uppercase tracking-wider opacity-90 mb-2">
                  {selectedImage.category}
                </p>
                <p className="text-lg font-semibold">{selectedImage.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <motion.section
        className="relative py-32 px-6 bg-primary text-primary-foreground overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -mr-48 -mt-48 blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 className="font-display text-display-md mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            See the Transformation
          </motion.h2>

          <motion.p className="text-xl mb-8 leading-relaxed text-primary-foreground/90" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Follow our journey and see the faces of transformation across Kenya
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Link
              href="/get-involved"
              className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-sm hover:opacity-90 transition-opacity"
            >
              Support Our Mission
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-sm hover:bg-primary-foreground/10 transition-colors"
            >
              Share Your Photos
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </main>
  )
}
