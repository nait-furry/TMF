"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import HeroSection from "@/components/hero-section";

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
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  } as const;

  const stories = [
    {
      id: "salvation-and-healing",
      title: "Saved and Restored",
      subtitle: "Healing, salvation, and family restoration",
      image: "/320691.webp",
      category: "Testimony",
    },
    {
      id: "burden-for-christ",
      title: "Burden for Christ Revived",
      subtitle: "A renewed call to follow and serve",
      image: "/320704.webp",
      category: "Worship Encounter",
      span: "col-span-2",
    },
    {
      id: "campaigns-of-hope",
      title: "Campaigns of Hope",
      subtitle: "Communities gathered around the gospel",
      image: "/320710.webp",
      category: "Open-Air Campaign",
    },
    {
      id: "discipleship-in-action",
      title: "Discipleship in Action",
      subtitle: "Teaching, mentorship, and community support",
      image: "/320713.webp",
      category: "Training",
    },
    {
      id: "mission-that-guides-us",
      title: "The Mission That Guides Us",
      subtitle: "Campaigns, compassion, and community empowerment",
      image: "/320695.webp",
      category: "Mission",
      span: "col-span-2",
    },
  ];

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
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="font-display text-display-md text-primary mb-4">
              Voices of Change
            </h2>
            <p className="text-lg text-foreground/70">
              Explore testimonies and ministry moments from communities
              discovering their God-given potential.
            </p>
          </motion.div>

          <motion.div variants={containerVariants}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stories.map((story) => (
                <motion.div
                  key={story.id}
                  className={`${story.span || "col-span-1"} group cursor-pointer`}
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
                        <h3 className="font-display text-2xl font-bold">
                          {story.title}
                        </h3>
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

      {/* CTA */}
      <motion.section
        className="relative py-32 px-6 bg-primary text-primary-foreground overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -mr-48 -mt-48 blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            className="font-display text-display-md mb-6"
            variants={itemVariants}
          >
            Be Part of These Stories
          </motion.h2>

          <motion.p
            className="text-xl mb-8 leading-relaxed text-primary-foreground/90"
            variants={itemVariants}
          >
            Your support enables the next chapter of transformation across Kenya
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
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
  );
}
