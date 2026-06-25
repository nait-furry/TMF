# Social Media Setup Guide

This document explains how to configure social media links for the Transform Maisha Foundation website.

## Overview

Social media links are currently configured in two locations:

1. **Footer** (`components/footer.tsx`) - Main social media links
2. **Contact Page** (`app/contact/page.tsx`) - Social media placeholder section

## Current Social Media Platforms

The website currently supports the following platforms:

- Facebook
- Twitter (X)
- Instagram
- LinkedIn

## How to Add/Update Social Media Links

### Step 1: Update Footer Social Links

Open `components/footer.tsx` and locate the Social Links section (around line 98-139).

Each social media link follows this structure:

```tsx
<a
  href="https://facebook.com/transformmaisha"
  target="_blank"
  rel="noopener noreferrer"
  className="p-2.5 bg-accent/20 rounded-sm text-primary-foreground/70"
  aria-label="Facebook"
>
  <Facebook className="w-4 h-4" />
</a>
```

**To update a link:**

1. Replace the `href` value with your actual social media profile URL
2. Update the `aria-label` to match the platform name
3. Ensure the correct icon component is used (Facebook, Twitter, Instagram, or Linkedin)

**Example - Updating Facebook link:**

```tsx
<a
  href="https://www.facebook.com/YourActualProfile"
  target="_blank"
  rel="noopener noreferrer"
  className="p-2.5 bg-accent/20 rounded-sm text-primary-foreground/70"
  aria-label="Facebook"
>
  <Facebook className="w-4 h-4" />
</a>
```

### Step 2: Update Contact Page Social Links (Optional)

If you want to add clickable social media links to the contact page, update the Social Links section in `app/contact/page.tsx` (around line 229-242).

Currently, this section shows placeholder text:

```tsx
{
  ["Facebook", "Twitter", "Instagram", "LinkedIn"].map((social) => (
    <span
      key={social}
      className="px-4 py-2 bg-background border border-border rounded-sm text-sm font-medium text-foreground/60"
    >
      {social}
    </span>
  ));
}
```

**To make these clickable:**

1. Create a social links array with platform names and URLs
2. Replace the `<span>` elements with `<a>` tags

**Example implementation:**

```tsx
const socialLinks = [
  {
    name: "Facebook",
    url: "https://facebook.com/transformmaisha",
    icon: Facebook,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/transformmaisha",
    icon: Twitter,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/transformmaisha",
    icon: Instagram,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/transformmaisha",
    icon: Linkedin,
  },
];

// Then in the JSX:
{
  socialLinks.map((social) => (
    <a
      key={social.name}
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 bg-background border border-border rounded-sm text-sm font-medium text-foreground/60 hover:text-accent hover:border-accent transition-colors"
    >
      {social.name}
    </a>
  ));
}
```

### Step 3: Add WhatsApp Link (Already Configured)

The WhatsApp link is already set up in the contact page. To update the phone number:

1. Open `app/contact/page.tsx`
2. Find all instances of `https://wa.me/254700000000`
3. Replace with your actual WhatsApp number in international format (no spaces or special characters)

**Example:**

```tsx
href = "https://wa.me/254712345678";
```

This appears in two places:

- Line ~107: Main WhatsApp button
- Line ~283: Final CTA WhatsApp button

## URL Format Guidelines

### Facebook

- Format: `https://www.facebook.com/YourPageName`
- Example: `https://www.facebook.com/TransformMaishaFoundation`

### Twitter/X

- Format: `https://twitter.com/YourUsername`
- Example: `https://twitter.com/transformmaisha`

### Instagram

- Format: `https://www.instagram.com/YourUsername`
- Example: `https://www.instagram.com/transformmaisha`

### LinkedIn

- Format: `https://www.linkedin.com/company/YourCompany`
- Example: `https://www.linkedin.com/company/transformmaisha`

### WhatsApp

- Format: `https://wa.me/[CountryCode][PhoneNumber]`
- Example: `https://wa.me/254700000000`
- Note: No spaces, dashes, or parentheses in the phone number

## Adding New Social Media Platforms

To add a new social media platform:

1. **Import the icon** from lucide-react in `components/footer.tsx`:

   ```tsx
   import { /* existing icons */, NewIcon } from "lucide-react";
   ```

2. **Add the link** in the Social Links section:

   ```tsx
   <a
     href="https://newplatform.com/yourprofile"
     target="_blank"
     rel="noopener noreferrer"
     className="p-2.5 bg-accent/20 rounded-sm text-primary-foreground/70"
     aria-label="New Platform"
   >
     <NewIcon className="w-4 h-4" />
   </a>
   ```

3. **Update the gap** if needed (currently `gap-3`)

## Styling Options

### Current Footer Icon Style

- Background: `bg-accent/20` (20% opacity accent color)
- Text color: `text-primary-foreground/70` (70% opacity)
- Padding: `p-2.5`
- Border radius: `rounded-sm`
- No hover effects (as requested)

### To Add Hover Effects (Optional)

If you want to add hover effects later, use:

```tsx
className =
  "p-2.5 bg-accent/20 rounded-sm text-primary-foreground/70 hover:bg-accent hover:text-primary-foreground transition-all hover:scale-110";
```

## Testing Your Links

After updating the social media links:

1. Start the development server: `npm run dev` or `pnpm dev`
2. Navigate to the homepage and scroll to the footer
3. Click each social media icon to verify it opens the correct URL
4. Test the WhatsApp link on the contact page
5. Verify all links open in a new tab (target="\_blank")

## Important Notes

- All external links should include `target="_blank"` and `rel="noopener noreferrer"` for security
- Use descriptive `aria-label` attributes for accessibility
- Ensure phone numbers are in the correct international format for WhatsApp
- Test all links before deploying to production

## Quick Reference

| Platform  | URL Pattern                            | Icon Component  |
| --------- | -------------------------------------- | --------------- |
| Facebook  | `https://www.facebook.com/...`         | `Facebook`      |
| Twitter/X | `https://twitter.com/...`              | `Twitter`       |
| Instagram | `https://www.instagram.com/...`        | `Instagram`     |
| LinkedIn  | `https://www.linkedin.com/company/...` | `Linkedin`      |
| WhatsApp  | `https://wa.me/[number]`               | `MessageCircle` |

## Support

If you need to add additional social media platforms not listed here, check the [Lucide React Icons](https://lucide.dev/) documentation for available icons.
