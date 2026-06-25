"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Users, Target, TrendingUp } from "lucide-react";
import HeroSection from "@/components/hero-section";

export default function GetInvolved() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
  };

  const donationTiers = [
    {
      id: 1,
      amount: "KES 6,500",
      period: "One-time",
      title: "Supporter",
      description: "Fund mentoring for one youth",
      benefits: [
        "Monthly impact updates",
        "Direct thank you letter",
        "Supporter recognition",
      ],
      icon: Heart,
    },
    {
      id: 2,
      amount: "KES 3,000",
      period: "Monthly",
      title: "Companion",
      description: "Sustain community programs",
      benefits: [
        "All Supporter benefits",
        "Quarterly impact report",
        "Exclusive virtual events",
        "Tax deductible",
      ],
      icon: Users,
      highlighted: true,
    },
    {
      id: 3,
      amount: "KES 13,000",
      period: "Monthly",
      title: "Advocate",
      description: "Champion transformative change",
      benefits: [
        "All Companion benefits",
        "Semi-annual site visit",
        "Direct mentor updates",
        "Leadership recognition",
      ],
      icon: Target,
    },
  ];

  const waysToGive = [
    {
      title: "Direct Donation",
      description: "Give online securely to support our mission",
      action: "Donate Now",
      href: "#donate",
    },
    {
      title: "Monthly Giving",
      description: "Become a sustaining partner with recurring donations",
      action: "Set Up Monthly",
      href: "#monthly",
    },
    {
      title: "Corporate Partnership",
      description: "Align your business with community transformation",
      action: "Partner With Us",
      href: "/contact",
    },
    {
      title: "Volunteering",
      description: "Give your time and skills to our community",
      action: "Get Involved",
      href: "/contact",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <HeroSection
        title="Get Involved"
        subtitle="Join the movement of transformation—every contribution, every hour, every voice matters in creating lasting change"
      />

      {/* Impact of Giving Section */}
      <motion.section
        className="py-24 px-6 bg-cream"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="font-display text-display-md text-primary mb-16 text-center"
            variants={itemVariants}
          >
            Your Impact
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                amount: "KES 3,000",
                impact: "Funds youth mentoring for one month",
              },
              {
                amount: "KES 6,500",
                impact: "Provides skills training materials",
              },
              { amount: "KES 13,000", impact: "Supports community event" },
              {
                amount: "KES 32,500",
                impact: "Enables business startup capital",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="p-8 bg-background border-2 border-accent rounded-sm text-center"
                variants={itemVariants}
              >
                <p className="font-display text-4xl text-accent mb-2">
                  {item.amount}
                </p>
                <p className="text-foreground/70">{item.impact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Donation Tiers */}
      <motion.section
        id="donate"
        className="py-24 px-6 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="font-display text-display-md text-primary mb-16 text-center"
            variants={itemVariants}
          >
            Choose Your Level
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {donationTiers.map((tier) => {
              const Icon = tier.icon;
              return (
                <motion.div
                  key={tier.id}
                  className={`relative rounded-sm overflow-hidden transition-all ${
                    tier.highlighted
                      ? "border-2 border-accent ring-2 ring-accent/30 md:scale-105"
                      : "border border-border"
                  } ${tier.highlighted ? "bg-cream" : "bg-background"}`}
                  variants={itemVariants}
                >
                  {tier.highlighted && (
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}

                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Icon className="w-8 h-8 text-accent" />
                      <div>
                        <p className="text-sm text-foreground/60 uppercase tracking-wider">
                          {tier.period}
                        </p>
                        <h3 className="font-display text-2xl text-primary">
                          {tier.title}
                        </h3>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="font-display text-4xl text-accent">
                        {tier.amount}
                      </p>
                      <p className="text-foreground/70">{tier.description}</p>
                    </div>

                    <ul className="space-y-3 mb-8 py-8 border-t border-border">
                      {tier.benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm text-foreground/80"
                        >
                          <span className="text-accent mt-1">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className={`block w-full py-3 text-center font-semibold rounded-sm transition-all ${
                        tier.highlighted
                          ? "bg-accent text-accent-foreground hover:opacity-90"
                          : "bg-primary text-primary-foreground hover:bg-primary/90"
                      }`}
                    >
                      {tier.period === "Monthly"
                        ? "Set Up Monthly"
                        : "Donate Now"}
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Ways to Give */}
      <motion.section
        id="monthly"
        className="py-24 px-6 bg-cream"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="font-display text-display-md text-primary mb-16 text-center"
            variants={itemVariants}
          >
            Ways to Give
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {waysToGive.map((way, idx) => (
              <motion.div
                key={idx}
                className="p-8 bg-background border-l-4 border-accent rounded-sm group hover:shadow-lg transition-all"
                variants={itemVariants}
              >
                <h3 className="font-display text-2xl text-primary mb-3">
                  {way.title}
                </h3>
                <p className="text-foreground/70 mb-6">{way.description}</p>
                <Link
                  href={way.href}
                  className="inline-flex px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-sm hover:bg-primary/90 transition-all"
                >
                  {way.action}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Accountability Section */}
      <motion.section
        className="py-24 px-6 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="font-display text-display-md text-primary mb-16 text-center"
            variants={itemVariants}
          >
            Financial Accountability
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: TrendingUp,
                title: "90%",
                description: "of donations go directly to community programs",
              },
              {
                icon: Users,
                title: "Transparent",
                description: "Regular impact reports and program updates",
              },
              {
                icon: Target,
                title: "Registered",
                description: "Official nonprofit with audited financials",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  className="text-center"
                  variants={itemVariants}
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <p className="font-display text-3xl text-accent mb-3">
                    {item.title}
                  </p>
                  <p className="text-foreground/70">{item.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            className="text-center text-foreground/70 mt-12 text-lg"
            variants={itemVariants}
          >
            We believe transparency builds trust. Every dollar is tracked and
            reported.
            <Link href="/contact" className="text-accent hover:underline ml-2">
              Request our latest financial report.
            </Link>
          </motion.p>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="py-24 px-6 bg-cream"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="font-display text-display-md text-primary mb-16 text-center"
            variants={itemVariants}
          >
            Common Questions
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                q: "Is my donation tax-deductible?",
                a: "Yes, Transform Maisha is a registered 501(c)(3) nonprofit. All donations are tax-deductible.",
              },
              {
                q: "Can I donate without creating an account?",
                a: "Absolutely. We accept both registered and guest donations. You&apos;ll receive a receipt either way.",
              },
              {
                q: "How often will I receive updates?",
                a: "Monthly giving partners receive quarterly impact updates plus exclusive monthly newsletters.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept credit cards, bank transfers, and cryptocurrency donations for maximum flexibility.",
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                className="p-6 bg-background rounded-sm border border-border"
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
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full -ml-48 -mb-48 blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            className="font-display text-display-md mb-6"
            variants={itemVariants}
          >
            Transform Lives Today
          </motion.h2>

          <motion.p
            className="text-xl mb-8 leading-relaxed text-primary-foreground/90"
            variants={itemVariants}
          >
            Your generosity creates pathways to transformation. Every donation
            is an investment in human potential.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link
              href="/contact"
              className="inline-flex px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-sm hover:opacity-90 transition-opacity"
            >
              Donate Now
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
