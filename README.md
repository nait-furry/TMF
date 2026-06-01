# Transform Maisha Foundation Website

A world-class, award-winning website for Transform Maisha Foundation featuring premium design, emotional storytelling, and seamless user experience.

## Overview

This is a Next.js 16 web application built with cutting-edge technologies to showcase the organization's mission, impact, and programs. The design emphasizes transformation, faith, community impact, and human stories through innovative layouts, exceptional typography, and real imagery.

## Design Philosophy

- **Editorial Luxury Aesthetic**: Every page feels like a unique visual chapter in a movement narrative
- **Asymmetrical Layouts**: Each page has distinct, intentional visual treatments
- **Minimal Text**: Powerful copy supported by stunning visuals
- **Navy + Gold Palette**: Premium brand colors (#000080, #DAC266) with cream (#F5F1E8) backgrounds
- **PlayFair Display + Montserrat**: Premium typography pairing

## Pages & Features

### Core Pages

1. **Home** (`/`)
   - Full-screen hero with donation CTAs
   - Integrated impact statistics
   - Asymmetrical story grid
   - Program highlights
   - Call-to-action section

2. **About Us** (`/about`)
   - Organization story and journey
   - Mission & Vision statements
   - **Integrated Impact Section** (replaces separate impact page)
   - Community testimonials
   - Core values grid
   - Team showcase

3. **Programs** (`/programs`)
   - Alternating layout program showcases
   - Impact metrics per program
   - Process flow visualization
   - Guiding principles
   - Program call-to-action

4. **Stories** (`/stories`)
   - Masonry grid layout
   - Story detail pages with full narratives
   - Community testimonials
   - Related stories section

5. **Gallery** (`/gallery`)
   - Category filtering
   - Masonry grid with hover effects
   - Lightbox modal viewer
   - Social sharing prompts

6. **Get Involved** (`/get-involved`)
   - **Prominent donation focus**
   - Donation tier options
   - Ways to give (direct, monthly, corporate, volunteering)
   - Financial accountability section
   - FAQ section

7. **Contact** (`/contact`)
   - Contact form with validation
   - Contact information display
   - Social media links
   - FAQ section
   - Office details

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4 with custom design tokens
- **Typography**: Playfair Display (headings) + Montserrat (body)
- **Animations**: Framer Motion
- **Images**: Next.js Image optimization
- **Carousels**: Embla Carousel
- **UI Components**: shadcn/ui

## Key Features

### Responsive Design
- Mobile-first approach
- Fully responsive across all breakpoints
- Touch-friendly navigation

### Animations
- Scroll-triggered animations with Framer Motion
- Smooth page transitions
- Hover effects on images and buttons
- Staggered reveal animations

### Navigation
- Fixed sticky header with logo and navigation
- Donate CTA prominently placed in navigation
- Mobile hamburger menu
- Links to all pages
- Footer with contact info and social links

### Donate CTAs
- Primary CTA in hero section
- Secondary CTA in navigation
- Tertiary CTAs throughout pages (About, Programs, Stories, Get Involved)
- Not aggressive—integrated naturally into mission narrative

### Color System

```
Primary: #000080 (Navy)
Accent: #DAC266 (Gold)
Background: #FFFFFF (White)
Card: #F5F1E8 (Cream)
Text: #2A2A2A (Charcoal)
Borders: #E5E1D8 (Light Gray)
```

All colors defined as CSS variables in `globals.css` for easy theming.

## Development

### Prerequisites
- Node.js 20+
- pnpm (recommended package manager)

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Visit `http://localhost:3000` to see the application.

## Project Structure

```
/vercel/share/v0-project/
├── app/
│   ├── layout.tsx              # Root layout with Navigation & Footer
│   ├── globals.css             # Global styles, design tokens, typography
│   ├── page.tsx                # Home page
│   ├── about/page.tsx          # About Us page
│   ├── programs/page.tsx       # Programs page
│   ├── stories/
│   │   ├── page.tsx            # Stories listing
│   │   └── [slug]/page.tsx     # Story detail page
│   ├── gallery/page.tsx        # Gallery with lightbox
│   ├── get-involved/page.tsx   # Get Involved & Donate page
│   └── contact/page.tsx        # Contact form
├── components/
│   ├── navigation.tsx          # Header navigation
│   ├── footer.tsx              # Footer
│   ├── hero-section.tsx        # Reusable hero component
│   ├── masonry-grid.tsx        # Image grid component
│   └── ui/*                    # shadcn/ui components
├── tailwind.config.ts          # Tailwind configuration
├── next.config.mjs             # Next.js configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies

```

## Customization

### Colors
Edit `/app/globals.css` to change the color palette:
```css
:root {
  --color-navy: #000080;
  --color-gold: #DAC266;
  --color-cream: #F5F1E8;
  /* ... other colors ... */
}
```

### Typography
Fonts are imported in `/app/globals.css` from Google Fonts:
- Playfair Display (headings)
- Montserrat (body text)

Change in `layout.tsx` and `globals.css` to use different fonts.

### Content
All page content is hardcoded in components. To update:
1. Edit the page files (e.g., `/app/about/page.tsx`)
2. Replace placeholder content with actual mission, team, stories, etc.
3. Update images with real photography

### Images
Replace placeholder Unsplash images with real organization photos:
1. Update image URLs in page files
2. Add images to `/public` directory
3. Update alt text for accessibility

## Deployment

### Deploy to Vercel (Recommended)

```bash
# Push to GitHub first
git init
git add .
git commit -m "Initial commit"
git push origin main

# Then use Vercel CLI or web dashboard
# https://vercel.com/new
```

### Environment Variables

Create `.env.local` for development:
```env
# Example variables if needed for future integrations
NEXT_PUBLIC_SITE_NAME=Transform Maisha Foundation
```

## SEO & Metadata

- Metadata configured in `/app/layout.tsx`
- Open Graph tags for social sharing
- Page titles and descriptions set per page
- Structured data ready for implementation

## Accessibility

- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliant
- Alt text on all images

## Performance

- Next.js Image optimization
- CSS optimization with Tailwind
- Code splitting per route
- Static generation where possible
- CDN-ready with Vercel deployment

## Future Enhancements

- [ ] Blog system for impact stories
- [ ] Newsletter signup integration
- [ ] Donation payment processing (Stripe)
- [ ] Admin dashboard for content management
- [ ] Multi-language support
- [ ] Advanced analytics
- [ ] Email notifications
- [ ] CMS integration (Contentful, Sanity, etc.)

## Support & Questions

For questions about the codebase or design implementation:
1. Review the code comments in component files
2. Check Tailwind CSS documentation
3. Consult Framer Motion animation docs
4. Review Next.js 16 documentation

## License

This website is created specifically for Transform Maisha Foundation.

## Credits

Built with:
- Next.js 16
- Tailwind CSS
- Framer Motion
- shadcn/ui
- Inspired by premium brands: Apple, Nike, Patagonia, Awwwards

---

**Last Updated**: 2026  
**Status**: Production Ready
