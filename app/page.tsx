'use client'

import Image from 'next/image'
import { motion, useScroll } from 'framer-motion'
import { ArrowRight, ArrowDownRight } from 'lucide-react'
import { useRef } from 'react'

export default function Home() {
  const containerRef = useRef(null)

  return (
    <main ref={containerRef} className="bg-background text-foreground selection:bg-secondary selection:text-secondary-foreground">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 lg:px-24">
        {/* Top meta */}
        <div className="flex justify-between items-start font-sans text-xs uppercase tracking-widest text-foreground/60">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            Transform Maisha<br/>Foundation
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-right">
            Nairobi, Kenya<br/>Est. 2024
          </motion.div>
        </div>

        {/* Massive Typography */}
        <div className="mt-20 mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[15vw] leading-[0.8] tracking-tighter uppercase"
          >
            Every <span className="text-secondary italic pr-8">Life</span><br/>
            Counts.
          </motion.h1>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-end">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="md:col-span-4"
          >
            <ArrowDownRight className="w-12 h-12 text-secondary" strokeWidth={1} />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="md:col-span-8 md:col-start-6 max-w-xl font-sans text-lg md:text-xl leading-relaxed text-foreground/80"
          >
            We are Christ-centered companions, empowering communities across Kenya through economic dignity, spiritual growth, and generational transformation.
          </motion.div>
        </div>
      </section>

      {/* IMAGE BREAK */}
      <section className="w-full h-[70vh] md:h-[90vh] px-6 md:px-12 lg:px-24 py-12">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full relative overflow-hidden bg-card"
        >
          <Image
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
            alt="Community gathering"
            fill
            className="object-cover animate-slow-pan mix-blend-multiply opacity-90 grayscale"
          />
        </motion.div>
      </section>

      {/* EDITORIAL ABOUT */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4 font-sans text-xs uppercase tracking-widest text-foreground/50 pt-3 border-t border-border">
            Our Mission
          </div>
          <div className="md:col-span-8">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight"
            >
              To be compassionate, Christ-centered companions in community empowerment for lasting <span className="italic text-secondary">social and economic</span> transformation.
            </motion.h2>
          </div>
        </div>
      </section>

      {/* PROGRAMS - ASYMMETRIC GRID */}
      <section className="py-24 bg-foreground text-background px-6 md:px-12 lg:px-24">
        <div className="flex justify-between items-end mb-20 border-b border-background/20 pb-8">
          <h2 className="font-serif text-5xl md:text-7xl tracking-tighter">Initiatives</h2>
          <span className="font-sans text-sm tracking-widest uppercase text-background/50 hidden md:block">04 Programs</span>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-24">
          {[
            {
              title: "Compassion Ministry",
              desc: "Holistic support for individuals and families experiencing poverty.",
              img: "https://images.unsplash.com/photo-1593113589914-07553801f400?q=80&w=1000&auto=format&fit=crop",
              offset: "md:mt-0"
            },
            {
              title: "Youth Leadership",
              desc: "Mentorship and skills training equipping the next generation.",
              img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop",
              offset: "md:mt-32"
            },
            {
              title: "Economic Empowerment",
              desc: "Business training enabling sustainable livelihoods.",
              img: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1000&auto=format&fit=crop",
              offset: "md:mt-0"
            },
            {
              title: "Community Development",
              desc: "Grassroots initiatives strengthening social cohesion.",
              img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000&auto=format&fit=crop",
              offset: "md:mt-32"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`group cursor-pointer ${item.offset}`}
            >
              <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-background/10">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-3xl md:text-4xl mb-3 group-hover:text-secondary transition-colors text-background">{item.title}</h3>
                  <p className="font-sans text-background/60 max-w-sm text-sm leading-relaxed">{item.desc}</p>
                </div>
                <ArrowRight className="w-6 h-6 transform -rotate-45 group-hover:rotate-0 transition-transform text-secondary" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* IMPACT - MASSIVE NUMBERS */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-secondary text-background">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {[
            { num: "2.5k", label: "Lives Transformed" },
            { num: "08", label: "Counties Active" },
            { num: "50+", label: "Community Leaders" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center md:text-left border-t border-background/20 pt-8"
            >
              <div className="font-serif text-[12vw] md:text-[8vw] leading-none mb-4 tracking-tighter">
                {stat.num}
              </div>
              <div className="font-sans text-sm uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STORIES - HORIZONTAL/STAGGERED SCROLL */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-background">
        <div className="mb-20 text-center">
          <h2 className="font-serif text-5xl md:text-7xl tracking-tighter mb-4 text-foreground">Stories of Hope</h2>
          <p className="font-sans text-foreground/60 max-w-xl mx-auto">Real people experiencing real transformation through faith and action.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Samuel K.",
              story: "From street life to thriving businessman, Samuel now mentors 15 youth.",
              img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
            },
            {
              name: "Grace M.",
              story: "Building financial independence through our economic programs.",
              img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop"
            },
            {
              name: "David O.",
              story: "Youth leader training 20+ young people on faith and business.",
              img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop"
            }
          ].map((story, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] mb-6 overflow-hidden bg-card">
                <Image
                  src={story.img}
                  alt={story.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-serif text-2xl mb-2 text-foreground">{story.name}</h3>
              <p className="font-sans text-sm text-foreground/60 leading-relaxed">{story.story}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-32 px-6 md:px-12 lg:px-24 text-center border-t border-border">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-serif text-5xl md:text-8xl leading-none mb-12 tracking-tighter text-foreground">
            Join the <br/><span className="italic text-secondary">Movement.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-4 bg-foreground text-background font-sans uppercase tracking-widest text-xs hover:bg-secondary hover:text-background transition-colors duration-300">
              Donate Now
            </button>
            <button className="px-10 py-4 border border-foreground text-foreground font-sans uppercase tracking-widest text-xs hover:bg-card transition-colors duration-300">
              Get Involved
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
