"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDownRight } from "lucide-react";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);

  return (
    <main
      ref={containerRef}
      className="bg-background text-foreground selection:bg-secondary selection:text-secondary-foreground"
    >
      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-32 pb-12 px-6 md:px-12 lg:px-24 text-primary-foreground"
      >
        <Image
          src="/320686.jpg"
          alt="Transform Maisha community gathered at an outdoor evening event"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-primary/20" />

        <div className="relative z-10 flex justify-between items-start font-sans text-xs uppercase tracking-widest text-primary-foreground/75">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Transform Maisha
            <br />
            Foundation
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-right"
          >
            Nairobi, Kenya
            <br />
            Est. 2024
          </motion.div>
        </div>

        <div className="relative z-10 mt-16 mb-12 max-w-6xl">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl leading-none uppercase"
          >
            Every <span className="text-secondary italic pr-4">Life</span>
            <br />
            Counts.
          </motion.h1>
        </div>

        <div className="relative z-10 grid md:grid-cols-12 gap-8 items-end">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="md:col-span-4"
          >
            <ArrowDownRight
              className="w-12 h-12 text-secondary"
              strokeWidth={1}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="md:col-span-8 md:col-start-6 max-w-2xl font-sans text-lg md:text-xl leading-relaxed text-primary-foreground/90"
          >
            <p>
              We are Christ-centered companions empowering communities across
              Kenya through worship gatherings, youth mentorship, compassion
              ministry, and lasting social and economic transformation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-involved#donate"
                className="inline-flex items-center justify-center px-8 py-3 bg-secondary text-background font-sans uppercase tracking-widest text-xs hover:bg-background hover:text-primary transition-colors duration-300"
              >
                Donate Now
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center justify-center px-8 py-3 border border-primary-foreground text-primary-foreground font-sans uppercase tracking-widest text-xs hover:bg-primary-foreground hover:text-primary transition-colors duration-300"
              >
                What We Do
              </Link>
            </div>
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
            src="/320710.jpg"
            alt="Large Transform Maisha outdoor gathering facing the stage"
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
              To be compassionate, Christ-centered companions in community
              empowerment for lasting{" "}
              <span className="italic text-secondary">social and economic</span>{" "}
              transformation.
            </motion.h2>
          </div>
        </div>
      </section>

      {/* PROGRAMS - ASYMMETRIC GRID */}
      <section className="py-24 bg-primary text-primary-foreground px-6 md:px-12 lg:px-24">
        <div className="flex justify-between items-end mb-20 border-b border-background/20 pb-8">
          <h2 className="font-serif text-5xl md:text-7xl tracking-tighter">
            Initiatives
          </h2>
          <span className="font-sans text-sm tracking-widest uppercase text-background/50 hidden md:block">
            04 Programs
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-24">
          {[
            {
              title: "Worship & Revival",
              desc: "Holy Spirit nights, worship encounters, and gospel gatherings that call communities to Christ.",
              img: "/320713.jpg",
              offset: "md:mt-0",
            },
            {
              title: "Youth Connection",
              desc: "Mentorship, discipleship, and leadership spaces where young people are empowered for impact.",
              img: "/youth_connection.jpg",
              offset: "md:mt-32",
            },
            {
              title: "Community Outreach",
              desc: "Open-air missions and local partnerships carrying hope, prayer, and practical care.",
              img: "/320698.jpg",
              offset: "md:mt-0",
            },
            {
              title: "Media Ministry",
              desc: "Radio, testimonies, and digital stories extending the message beyond the event ground.",
              img: "/320704.jpg",
              offset: "md:mt-32",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`group ${item.offset}`}
            >
              <Link href="/programs" className="block">
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
                    <h3 className="font-serif text-3xl md:text-4xl mb-3 group-hover:text-secondary transition-colors text-background">
                      {item.title}
                    </h3>
                    <p className="font-sans text-background/60 max-w-sm text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <ArrowRight className="w-6 h-6 transform -rotate-45 group-hover:rotate-0 transition-transform text-secondary" />
                </div>
              </Link>
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
            { num: "50+", label: "Community Leaders" },
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
              <div className="font-sans text-sm uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURED MOMENTS */}
      <section className="py-28 px-6 md:px-12 lg:px-24 bg-background">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <p className="font-sans text-xs uppercase tracking-widest text-foreground/50 mb-5">
              Featured Ministry Moments
            </p>
            <h2 className="font-serif text-5xl md:text-6xl leading-none text-foreground mb-6">
              Faith in motion, from worship nights to community missions.
            </h2>
            <p className="font-sans text-foreground/70 leading-relaxed">
              The movement continues through Holy Spirit Night, Spark
              Conference, radio ministry, Neema Festival, youth gatherings, and
              open-air evangelism across Kenya.
            </p>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Mission & Vision",
                text: "Compassionate, Christ-centered companionship through campaigns, compassion, and community empowerment.",
                img: "/mission-vision.jpeg",
                aspect: "aspect-[3/4]",
              },
              {
                title: "Outdoor Campaigns",
                text: "Communities gather for gospel proclamation, worship, prayer, and public testimony.",
                img: "/320686.jpg",
                aspect: "aspect-[4/3]",
              },
              {
                title: "Worship Encounters",
                text: "Stage ministry and worship leaders help create space for surrender and renewed faith.",
                img: "/320703.jpg",
                aspect: "aspect-[3/4]",
              },
              {
                title: "Community Response",
                text: "Crowds respond together as light, prayer, and worship fill the event ground.",
                img: "/320695.jpg",
                aspect: "aspect-[4/3]",
              },
            ].map((moment) => (
              <motion.article
                key={moment.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className="group"
              >
                <div
                  className={`relative ${moment.aspect} overflow-hidden bg-card mb-5`}
                >
                  <Image
                    src={moment.img}
                    alt={moment.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-3xl text-foreground mb-2">
                  {moment.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-foreground/65">
                  {moment.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* STORIES - HORIZONTAL/STAGGERED SCROLL */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-background">
        <div className="mb-20 text-center">
          <h2 className="font-serif text-5xl md:text-7xl tracking-tighter mb-4 text-foreground">
            Stories of Hope
          </h2>
          <p className="font-sans text-foreground/60 max-w-xl mx-auto">
            Real people experiencing real transformation through faith and
            action.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Anonymous",
              story: "I was healed, I got saved, and my family was restored.",
              // img: "/320691.jpg",
            },
            {
              name: "Shereen",
              story:
                "I came weak and sick but was healed completely during the service.",
              // img: "/320709.jpg",
            },
            {
              name: "Caleb",
              story: "My burden for Christ was revived.",
              // img: "/320695.jpg",
            },
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
                {/* <Image
                  // src={story.img}
                  alt={story.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                /> */}
                <div className="absolute inset-0 bg-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-serif text-2xl mb-2 text-foreground">
                {story.name}
              </h3>
              <p className="font-sans text-sm text-foreground/60 leading-relaxed">
                {story.story}
              </p>
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
            Join the <br />
            <span className="italic text-secondary">Movement.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/get-involved#donate"
              className="px-10 py-4 bg-primary text-primary-foreground font-sans uppercase tracking-widest text-xs hover:bg-secondary hover:text-background transition-colors duration-300"
            >
              Donate Now
            </Link>
            <Link
              href="/get-involved"
              className="px-10 py-4 border border-primary text-primary font-sans uppercase tracking-widest text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              Get Involved
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
