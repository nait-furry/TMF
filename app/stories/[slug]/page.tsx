'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

const storyData: Record<string, any> = {
  'samuel-journey': {
    title: "Samuel's Journey: From Street Life to Purpose",
    category: 'Youth Transformation',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    date: 'March 2024',
    author: 'Samuel M.',
    content: `
      <p>Samuel was 16 when he found himself alone on the streets of Nairobi. Orphaned at a young age and raised by a struggling grandmother, he'd been passed between relatives until he ended up living in the streets. By day, he hustled for survival. By night, despair consumed him.</p>
      
      <p>When Transform Maisha outreach workers found him, Samuel was skeptical. He'd heard promises before. But something was different about their approach—they didn't judge him for his circumstances. Instead, they saw potential. They saw someone worth investing in.</p>
      
      <p>Through the TOTOS Program, Samuel received mentorship, skills training, and, most importantly, a spiritual foundation grounded in Christ. He learned that his past didn't define his future. The organization provided vocational training in technical skills while mentors walked with him through the healing of his trauma.</p>
      
      <p>Two years later, Samuel is apprenticing with a local technology company and mentoring other youth from similar backgrounds. He speaks about his transformation with quiet confidence: "I was told I'd end up in prison or dead. Instead, I'm building a future. Transform Maisha taught me I have value, not because of what I can do, but because I'm God's creation."</p>
      
      <p>Samuel's story is one of hundreds—young people discovering purpose, potential, and a pathway forward through compassionate, Christ-centered mentorship.</p>
    `,
  },
  'faith-foundation': {
    title: "Faith's Foundation: Building an Economic Legacy",
    category: 'Women Empowerment',
    image: 'https://images.unsplash.com/photo-1516594798280-26c841de141e?w=800&h=600&fit=crop',
    date: 'February 2024',
    author: 'Faith K.',
    content: `
      <p>Faith worked as a day laborer, earning barely enough to feed her three children. Her skills were limited, her options seemed non-existent, and hope felt like a luxury she couldn't afford. One income source meant one crisis away from homelessness.</p>
      
      <p>When she joined Transform Maisha's Women Empowerment Program, Faith received business training, microfinance support, and ongoing mentorship. But the transformation was deeper than economic—it was spiritual and psychological.</p>
      
      <p>For the first time, someone believed in her. Mentors invested hours helping her develop a business plan for a small catering operation. The program provided initial capital and business support as she launched.</p>
      
      <p>Three years later, Faith's catering business employs five other women from her community. She's not just building wealth—she's creating opportunities. Her children are in school. She's stable. And most importantly, she's mentoring other women, passing forward the belief that God has given them potential worth developing.</p>
      
      <p>"I'm not just feeding my family anymore—I'm building a legacy for my daughters," Faith reflects. "I want them to see that a woman can be powerful, independent, and rooted in faith."</p>
    `,
  },
  'community-heals': {
    title: 'Community Heals: Collective Transformation',
    category: 'Community Impact',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop',
    date: 'January 2024',
    author: 'Community Leaders',
    content: `
      <p>Kiberera is one of Nairobi's largest informal settlements, home to over 200,000 people living in extreme poverty. When Transform Maisha began work there, they didn't arrive with grand solutions. Instead, they came to listen, to understand, and to walk alongside the community.</p>
      
      <p>Over five years, the Compassion Ministry and community programs have created a ripple effect of transformation. What started with supporting 50 families has grown to serve over 1,000 households.</p>
      
      <p>But the real transformation isn't in numbers—it's in the culture shift. Where there was despair, there's now hope. Where there was fragmentation, there's now community. Youth who were headed toward crime are now mentors. Mothers who were barely surviving are starting businesses. Churches that were disconnected are now centers of holistic transformation.</p>
      
      <p>The Neema Festival, an annual community celebration, now brings together 5,000+ people annually—a visible expression of collective joy and transformed lives. People who were marginalized are now leading. Potential that was hidden is now being developed.</p>
      
      <p>"Transformation doesn't happen in isolation," say the community leaders. "It happens when someone believes in you, when you're given tools and opportunity, and when you know you're part of something bigger than your own struggle. That's what Transform Maisha has created here."</p>
    `,
  },
  'grace-story': {
    title: 'Grace: From Poverty to Prosperity',
    category: 'Mentorship',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop',
    date: 'December 2023',
    author: 'Grace N.',
    content: `
      <p>Grace's life seemed predetermined by poverty. Born into a family struggling with food insecurity, she attended a struggling public school and saw no pathway forward. By age 18, it seemed her options were limited.</p>
      
      <p>A mentor from Transform Maisha met her through a youth outreach program. That mentor, Michael, invested in Grace with intentionality. He wasn't just providing guidance—he was modeling what it looks like to live a Christ-centered life with purpose and integrity.</p>
      
      <p>Through mentorship, Grace developed confidence and clarity about her potential. She pursued further education with Michael's support, eventually completing college. Her mentor walked with her through struggles, celebrated her victories, and most importantly, pointed her toward Jesus as the foundation of lasting transformation.</p>
      
      <p>Today, Grace works as a social worker in the same community where she grew up. And she's mentoring young girls, passing forward the investment that changed her life. "Michael saw something in me that I couldn't see in myself," Grace shares. "He showed me that transformation starts with believing you're valuable, that your life has purpose, and that God has a plan for you."</p>
      
      <p>The mentor-mentee relationship that launched Grace's transformation continues to multiply through her work with others.</p>
    `,
  },
  'mentor-impact': {
    title: 'The Mentor Effect: Multiplying Transformation',
    category: 'Leadership',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    date: 'November 2023',
    author: 'Multiple Mentors & Mentees',
    content: `
      <p>One of Transform Maisha's most powerful discoveries is the multiplier effect of mentorship. A single person investing in another's growth doesn't just change one life—it creates a chain reaction of transformation.</p>
      
      <p>Consider John's story: He was mentored through the TOTOS Program five years ago. His mentor, Joseph, invested in his development with the conviction that John had potential worth cultivating. Today, John mentors 12 other young people. Each of those 12 is now mentoring others. The impact multiplies exponentially.</p>
      
      <p>Across all our programs, we've documented this pattern repeatedly. Mentees become mentors. Beneficiaries become leaders. Recipients become givers. This isn't accidental—it's built into our philosophy: transformation that's internalized becomes transformation we pass forward.</p>
      
      <p>The spiritual component is essential to this multiplication. When mentees experience Christ's transformative love and grace through mentors, they want others to experience it too. Faith becomes infectious. Hope becomes contagious. Purpose becomes something you naturally want to multiply.</p>
      
      <p>We're not just creating individual success stories. We're building a movement of transformation—one mentoring relationship at a time.</p>
    `,
  },
}

export default function StoryDetail() {
  const params = useParams()
  const slug = params.slug as string
  const story = storyData[slug]

  if (!story) {
    return (
      <main className="min-h-screen bg-background pt-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-display text-display-md text-primary mb-4">Story Not Found</h1>
          <Link href="/stories" className="text-accent hover:underline">
            Back to Stories
          </Link>
        </div>
      </main>
    )
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
          <Link href="/stories" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
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
              Stories like these are only possible through generous support from people like you. Every contribution creates opportunity for transformation.
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
                    <p className="text-sm text-foreground/60">{data.category}</p>
                  </motion.div>
                </Link>
              ))}
          </div>
        </div>
      </motion.section>
    </main>
  )
}
