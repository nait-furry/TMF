"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const storyData: Record<string, any> = {
  "salvation-and-healing": {
    title: "Saved, Healed, and Restored",
    category: "Testimony",
    image: "/320691.webp",
    date: "Mulewo 2025",
    author: "Anonymous",
    content: `
      <p>During the Mulewo gathering, people shared testimonies of salvation, healing, and restored homes. One testimony captured the heart of the ministry: "I was healed, I got saved, and my family was restored."</p>
      <p>Transform Maisha Foundation exists for moments like this, where public worship and prayer become personal encounters with Christ.</p>
      <p>Each testimony points back to the mission: compassionate, Christ-centered companionship for people and communities seeking lasting transformation.</p>
    `,
  },
  "burden-for-christ": {
    title: "Burden for Christ Revived",
    category: "Worship Encounter",
    image: "/320704.webp",
    date: "Mulewo 2025",
    author: "Caleb",
    content: `
      <p>Caleb described a renewed burden for Christ after the ministry gathering. The testimony reflects one of the deepest outcomes of worship: a heart stirred again toward prayer, service, and witness.</p>
      <p>Through worship encounters and open-air campaigns, Transform Maisha creates spaces where people can respond to God together.</p>
      <p>The work continues after the event through discipleship, fellowship, and community support.</p>
    `,
  },
  "campaigns-of-hope": {
    title: "Campaigns of Hope",
    category: "Open-Air Campaign",
    image: "/320710.webp",
    date: "2025",
    author: "Transform Maisha Foundation",
    content: `
      <p>Outdoor campaigns bring communities together around worship, prayer, and gospel proclamation. The field becomes a shared space for families, youth, leaders, and churches to gather with expectation.</p>
      <p>These moments are not only events. They are entry points into compassion, community empowerment, and Christ-centered mentorship.</p>
      <p>Every crowd represents people with stories, needs, gifts, and God-given potential.</p>
    `,
  },
  "discipleship-in-action": {
    title: "Discipleship in Action",
    category: "Training",
    image: "/320713.webp",
    date: "2025",
    author: "Transform Maisha Foundation",
    content: `
      <p>Transformation is strengthened through teaching, mentorship, and training spaces where people can ask questions, receive guidance, and grow in faith.</p>
      <p>Indoor gatherings help connect public ministry moments to continuing discipleship and practical support.</p>
      <p>The goal is a community that utilizes its God-given potential through Christ-centered mentorship and support.</p>
    `,
  },
  "mission-that-guides-us": {
    title: "The Mission That Guides Us",
    category: "Mission",
    image: "/320695.webp",
    date: "2025",
    author: "Transform Maisha Foundation",
    content: `
      <p>The mission is clear: to be compassionate, Christ-centered companions in community empowerment for lasting social and economic transformation.</p>
      <p>The vision is a community that utilizes its God-given potential through Christ-centered mentorship and support.</p>
      <p>The strategy moves through campaigns, compassion, and community empowerment, grounded in the call to make disciples of all nations.</p>
    `,
  },
};

export default function StoryDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const story = storyData[slug];

  if (!story) {
    return (
      <main className="min-h-screen bg-background pt-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-display text-display-md text-primary mb-4">
            Story Not Found
          </h1>
          <Link href="/stories" className="text-accent hover:underline">
            Back to Stories
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${story.image}')` }}
        >
          <div className="absolute inset-0 bg-primary/40" />
        </div>

        <motion.div
          className="relative z-10 max-w-3xl mx-auto px-6 text-center text-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm uppercase tracking-wider opacity-90 mb-4 block">
            {story.category}
          </span>
          <h1 className="font-display font-bold text-display-lg mb-4 leading-tight">
            {story.title}
          </h1>
          <p className="text-lg opacity-90">{story.author}</p>
        </motion.div>
      </section>

      {/* Back Button */}
      <section className="bg-cream py-4 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/stories"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Stories
          </Link>
        </div>
      </section>

      {/* Content */}
      <motion.section
        className="py-24 px-6 bg-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <article className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none text-foreground">
            <div
              className="space-y-6 text-lg leading-relaxed text-foreground/80"
              dangerouslySetInnerHTML={{
                __html: story.content.replace(/<p>/g, '<p class="mb-6">'),
              }}
            />
          </div>

          {/* Meta Info */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-foreground/60">
              Published in {story.date}
            </p>
          </div>

          {/* CTA */}
          <motion.div
            className="mt-16 p-8 bg-cream rounded-sm border-l-4 border-accent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h3 className="font-display text-2xl text-primary mb-4">
              Inspired to Support?
            </h3>
            <p className="text-foreground/80 mb-6">
              Stories like these are only possible through generous support from
              people like you. Every contribution creates opportunity for
              transformation.
            </p>
            <Link
              href="/get-involved"
              className="inline-flex px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-sm hover:bg-primary/90 transition-all"
            >
              Donate & Make an Impact
            </Link>
          </motion.div>
        </article>
      </motion.section>

      {/* Related Stories */}
      <motion.section
        className="py-24 px-6 bg-cream"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-display-sm text-primary mb-12">
            More Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(storyData)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, data]) => (
                <Link key={key} href={`/stories/${key}`}>
                  <motion.div
                    className="group cursor-pointer"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative h-64 rounded-sm overflow-hidden mb-4">
                      <img
                        src={data.image}
                        alt={data.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="font-display text-lg text-primary mb-2">
                      {data.title}
                    </h3>
                    <p className="text-sm text-foreground/60">
                      {data.category}
                    </p>
                  </motion.div>
                </Link>
              ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}
