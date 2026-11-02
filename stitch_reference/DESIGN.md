---
name: Kinetic Obsidian
colors:
  surface: '#14121a'
  surface-dim: '#14121a'
  surface-bright: '#3b3841'
  surface-container-lowest: '#0f0d15'
  surface-container-low: '#1d1a23'
  surface-container: '#211e27'
  surface-container-high: '#2b2931'
  surface-container-highest: '#36333c'
  on-surface: '#e6e0ec'
  on-surface-variant: '#cfc2d7'
  inverse-surface: '#e6e0ec'
  inverse-on-surface: '#322f38'
  outline: '#988ca0'
  outline-variant: '#4c4354'
  surface-tint: '#dcb8ff'
  primary: '#dcb8ff'
  on-primary: '#480081'
  primary-container: '#8a2be2'
  on-primary-container: '#eed9ff'
  inverse-primary: '#8422dc'
  secondary: '#dbb8ff'
  on-secondary: '#3f2160'
  secondary-container: '#573878'
  on-secondary-container: '#caa6ef'
  tertiary: '#00dfc1'
  on-tertiary: '#00382f'
  tertiary-container: '#007161'
  on-tertiary-container: '#23fcdb'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#efdbff'
  primary-fixed-dim: '#dcb8ff'
  on-primary-fixed: '#2c0051'
  on-primary-fixed-variant: '#6700b5'
  secondary-fixed: '#efdbff'
  secondary-fixed-dim: '#dbb8ff'
  on-secondary-fixed: '#29074a'
  on-secondary-fixed-variant: '#573878'
  tertiary-fixed: '#26fedc'
  tertiary-fixed-dim: '#00dfc1'
  on-tertiary-fixed: '#00201a'
  on-tertiary-fixed-variant: '#005144'
  background: '#14121a'
  on-background: '#e6e0ec'
  surface-variant: '#36333c'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.04em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-stat:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 36px
    letterSpacing: -0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

This design system establishes an athletic, modern, and high-energy digital identity for a community running club. The aesthetic blends the electric vibrancy of urban distance running with the polished structure of contemporary performance brands. 

The visual language draws inspiration from high-contrast athletic editorial design and sleek dark-mode fitness tracking applications:
- **Atmosphere:** Forward-leaning, community-driven, fast, and empowering. It avoids stodgy collegiate tropes in favor of crisp edges, saturated purples, deep obsidian surfaces, and luminous typography.
- **Target Audience:** Urban runners of all levels—from recreational track enthusiasts to half-marathoners—looking for social camaraderie, weekly training routes, and transparent club leadership.
- **Visual Stance:** High-contrast modern athletic styling. Surfaces are deep, grounded, and clean, paired with electric violet light effects and structured typography that commands pace and forward momentum.

## Colors

The palette is engineered around the distinctive royal purple identity seen in the club crest, grounded in an obsidian dark mode designed for high contrast and outdoor readability.

- **Primary (`#8A2BE2` / Royal Electric Purple):** The signature brand color derived from the emblem. Deployed for dominant actions, primary CTA fills, hero accents, and brand framing.
- **Secondary (`#D8B4FE` / Luminous Lavender):** A high-visibility tint used for text highlights, subtle borders, interactive states, and soft badge backgrounds against dark surfaces.
- **Tertiary (`#00F5D4` / Kinetic Mint):** An energetic athletic accent color used sparingly for active run tags, live distance metrics, and dynamic status badges.
- **Neutral (`#121018` / Obsidian Slate):** The bedrock dark foundation. It carries a slight violet undertone to prevent dull grays and harmonize with the core purple spectrum.
- **Surface Elevation Hierarchy:**
  - Base Background: `#0B0A0F`
  - Layer 1 Container (Cards, Navigation): `#171520`
  - Layer 2 Elevation (Hover, Interactive Cards): `#231F30`
  - Crisp Foreground: `#FFFFFF` for primary display typography; `#A39EBC` for body and secondary metadata.

## Typography

The typography leverages **Plus Jakarta Sans** for headlines, stat callouts, and action triggers, delivering geometric precision and athletic confidence. It is paired with **Inter** for all long-form body copy, roster details, and schedule descriptions to maintain crisp legibility under dense information architectures.

- **Headings:** Set with tight negative letter tracking to simulate speed, cohesion, and forward motion.
- **Athletic Badges and Labels:** Set in uppercase or semibold weights with slight tracking (`0.04em` to `0.06em`) for instant scanning during mobile navigation.
- **Performance Numerics (`label-stat`):** Bold, heavy numeric styling dedicated to mileage, group run paces, and founding date highlights (`ESTD 2024`).

## Layout & Spacing

The layout is built on a responsive 12-column grid designed for dynamic card arrangements, route previews, and roster directories.

- **Desktop (>= 1024px):** 12-column fluid grid, `2.5rem` section margins, `1.5rem` column gutters. Max content width is constrained to `1280px` for optimal visual hierarchy.
- **Tablet (768px - 1023px):** 8-column layout, `2rem` margins, `1.25rem` gutters.
- **Mobile (< 768px):** 4-column layout, `1.25rem` outer margins, `1rem` gutters. Stacks interactive route maps, leader cards, and social buttons into vertical swipeable flows.
- **Component Rhythms:** Consistent `0.5rem` (sm) internal padding for badges, `1rem` to `1.5rem` (md/lg) for cards and modals, and `2.5rem` to `4rem` (xl/2xl) for section separators.

## Elevation & Depth

This system avoids heavy muddy drop shadows, utilizing **luminous tonal layering** and **colored ambient glow** inspired by night running gear and city lights:

1. **Surface 0 (Floor):** Pure dark canvas (`#0B0A0F`), zero shadow.
2. **Surface 1 (Card/Container):** Layered tone (`#171520`) with a razor-thin 1px border (`rgba(255, 255, 255, 0.08)`).
3. **Surface 2 (Floating/Interactive):** Raised tone (`#231F30`) with a subtle tinted purple ambient glow (`0px 8px 32px -8px rgba(138, 43, 226, 0.35)`).
4. **Active/Focus Accents:** A crisp double-ring or electric violet outline (`#8A2BE2`) with `0 0 16px rgba(138, 43, 226, 0.5)` for active elements, route waypoints, and primary buttons.

## Shapes

The shape hierarchy is engineered for modern athletic precision (`roundedness: 2`):

- **Default Elements (Buttons, Inputs, Route Chips):** `0.5rem` (8px) radius, conveying structural sharpness and speed without harsh raw brutality.
- **Cards, Media Containers, and Map Viewports:** `1rem` (16px) radius (`rounded-lg`), providing clean containment for photography and map layers.
- **Pill Accents:** Reserved strictly for social platform pills, status indicators, and pace tags (e.g., `5K Pace`, `GroupMe`, `Instagram`), offering visual contrast against rectangular cards.

## Components

### Buttons
- **Primary CTA:** Saturated royal purple background (`#8A2BE2`), crisp white bold label, `0.5rem` border-radius. On hover, shifts to vibrant electric purple (`#9D4EDD`) with an ambient violet glow.
- **Secondary / Ghost:** Transparent background, `1px solid rgba(216, 180, 254, 0.3)`, lavender text (`#D8B4FE`). On hover, fills with `rgba(138, 43, 226, 0.12)`.
- **Social Connectors (Instagram, GroupMe):** Pill-shaped surfaces (`rounded-full`) utilizing dark slate containers, platform-accurate monochrome icons, and high-contrast labels that brighten on hover.

### Badges & Chips
- **Run Schedule Badges:** Compact pills with semi-translucent purple backdrops (`rgba(138, 43, 226, 0.18)`), vibrant violet border, and bold uppercase text (`label-md`).
- **Pace / Distance Badges:** Crisp mint accent (`rgba(0, 245, 212, 0.12)`) paired with `#00F5D4` text for dynamic visual separation from brand purple.

### Cards
- **Route / Event Cards:** Obsidian container (`#171520`) with 1px border (`rgba(255, 255, 255, 0.07)`), containing interactive map thumbnail, meeting timestamp, distance milestone, and a one-click calendar/join button.
- **Leadership Highlight Cards:** Framed portrait container with 16px radius, subtle dual-tone purple gradient rim on hover, prominent leader name, role title, and personal Instagram/Strava quick links.

### Map Preview Containers
- **Interactive Route Frame:** 16px rounded surface with an inset overlay, custom purple polyline route styling against dark Mapbox/OSM tiles, and floating speed/elevation tags anchored to bottom corners.

### Form Inputs & Checkboxes
- **Input Fields:** Dark inset backgrounds (`#121018`), `1px solid rgba(255, 255, 255, 0.12)`, white input text, and lavender placeholder text. Focus state triggers a vibrant `#8A2BE2` border with a 3px diffused outer halo.
- **Checkboxes & Radios:** Sharp `4px` or circular controls filled with `#8A2BE2` when checked, featuring white checkmark glyphs.