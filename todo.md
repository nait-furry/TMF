# TMF Website Fix Notes

## Requested fixes

- Fix navigation and routing so "What we do" leads to the Programs page.
- Fix the hero section.
- Fix broken links across pages.
- Document the changes and next steps.

## Changes made

- Updated `components/navigation.tsx` from section-scroll buttons to route-based navigation.
- Routed "What we do" to `/programs`.
- Routed "Join" to `/get-involved` and "Donate" to `/get-involved#donate`.
- Added active-route styling and closed the mobile menu after route selection.
- Updated the home hero in `app/page.tsx` with a stronger image-backed first screen, readable overlay, stable responsive typography, and working CTAs.
- Updated `components/hero-section.tsx` so inner page heroes have better spacing, contrast, and responsive sizing.
- Converted homepage CTA buttons and program cards into real links.
- Added missing anchors for `/get-involved#donate`, `/get-involved#monthly`, `/contact#contact-form`, and `/contact#map`.
- Replaced placeholder contact and social links that previously pointed to `#`.
- Added `/privacy` and `/terms` pages so footer policy links resolve.

## How to proceed

- Run `npm run build` before deploying.
- Replace placeholder organization details such as phone number, social profile URLs, and donation processor links when the client provides them.
- Replace Unsplash images with client-owned images in `public/` and update each page image source and alt text.
- If online donation is not ready yet, keep donation buttons routing to `/contact` or a clear donation inquiry workflow.
