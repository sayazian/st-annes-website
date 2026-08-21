# St. Anne's Church Website - Design Guidelines

## Design Approach

**Selected Approach**: Modern Design System with Community Focus
- Inspired by contemporary church platforms (Subsplash, Church Community Builder) and Material Design principles
- Emphasis on clarity, warmth, and accessibility for all age groups
- Professional yet approachable aesthetic that builds trust

## Core Design Principles

1. **Information Clarity**: Service times, Zoom links, and key announcements must be immediately visible
2. **Warm Accessibility**: Design should feel welcoming to all generations
3. **Efficient Navigation**: Two-click maximum to any content
4. **Trust & Credibility**: Clean, professional presentation appropriate for a faith community

## Typography System

**Font Stack**: 
- Headings: Crimson Text (serif) - dignified, traditional feel via Google Fonts
- Body: Inter (sans-serif) - excellent readability via Google Fonts
- Accent/UI: Inter for consistency

**Hierarchy**:
- Hero/H1: text-5xl md:text-6xl, font-bold
- Section Headers/H2: text-3xl md:text-4xl, font-semibold
- Subsections/H3: text-2xl md:text-3xl, font-semibold
- Body Text: text-base md:text-lg, leading-relaxed
- Small Text/Meta: text-sm

## Layout System

**Spacing Primitives**: Use Tailwind units 2, 4, 6, 8, 12, 16, 20, 24
- Component padding: p-6 md:p-8
- Section spacing: py-16 md:py-24
- Card gaps: gap-6 md:gap-8
- Element spacing: space-y-4 or space-y-6

**Container Strategy**:
- Full-width hero: w-full with max-w-7xl inner container
- Content sections: max-w-6xl mx-auto
- Text content: max-w-3xl for readability

## Page Structure & Components

### Homepage Layout

**Hero Section** (80vh max):
- Large hero image: Church exterior or stained glass (warm, inviting photography)
- Overlay with semi-transparent gradient for text readability
- Centered content: "Welcome to St. Anne's Episcopal Church"
- Primary CTA: "Join Us Sunday" with service time
- Secondary CTA: Zoom link with blurred background button
- Trust indicator: "Serving Fremont since [year]"

**Current Service Info** (prominent card):
- Large, elevated card (shadow-lg) immediately below hero
- Service name, date, time
- Three prominent buttons: Zoom Link, Bulletin, Readings
- Use 2-column layout on desktop (service info | quick links)

**Upcoming Events** (2-column grid on desktop):
- Card-based layout with images
- Event title, date, description, Zoom/registration link
- grid-cols-1 md:grid-cols-2 gap-8

**Quick Donate Section**:
- Centered, elevated card with PayPal integration
- Clear heading: "Support Our Ministry"
- Donation amount selector and recurring options
- Brief impact statement

**Connect Section** (3-column on desktop):
- Contact card (email, phone)
- Social media links with icons (Facebook, Instagram, Yelp)
- Service times summary

### Navigation

**Header**:
- Sticky navigation with church name/logo
- Menu items: Home, Services, Events, Give, Contact
- Mobile: Hamburger menu
- Desktop: Horizontal navigation with hover states

**Footer** (multi-column):
- Column 1: Church address, service times
- Column 2: Quick links (Bulletins, Readings, Zoom)
- Column 3: Contact info, social media
- Bottom row: Copyright, Privacy Policy

## Component Library

**Cards**:
- Elevated with shadow-md, rounded-lg
- White background with subtle border
- Consistent padding: p-6
- Hover: subtle shadow-lg transition

**Buttons**:
- Primary: Solid with rounded-md, px-6 py-3
- Secondary: Outline style
- Blurred background for hero overlay buttons
- Icon + text combinations using Heroicons

**Links**:
- Underline on hover
- Clear visited state
- Icon indicators for external links

**Form Elements** (Donation):
- Consistent border and padding
- Clear labels above inputs
- Adequate touch targets (min 44px)

## Images

**Required Images**:
1. **Hero Image**: Church exterior or interior (stained glass, sanctuary) - warm, inviting, professional photography
2. **Event Images**: Dr. Aquilanti music series promotional image (existing)
3. **General Church Life**: Optional additional images showing community, worship, fellowship

**Image Treatment**:
- Hero: Full-width with gradient overlay
- Event cards: aspect-ratio 16:9 or 4:3, object-cover
- All images: rounded corners (rounded-lg)

## Icons

**Library**: Heroicons (via CDN)
- Calendar icons for events
- Link icon for external links
- Social media icons
- Menu/hamburger icon

## Accessibility Standards

- Minimum contrast ratio 4.5:1 for body text
- Touch targets minimum 44x44px
- Clear focus indicators on all interactive elements
- Semantic HTML structure
- Alt text for all images
- ARIA labels for icon-only buttons

## Responsive Breakpoints

- Mobile: Base styles (< 768px)
- Tablet: md: (768px+) - 2 columns where appropriate
- Desktop: lg: (1024px+) - Full multi-column layouts

## Animation Approach

**Minimal, Purposeful Motion**:
- Smooth transitions on hover states (transition-all duration-200)
- Fade-in on scroll for event cards (optional, very subtle)
- No distracting animations
- Focus on performance and clarity

## Special Considerations

**Multi-generational Audience**: 
- Larger text sizes (minimum 16px base)
- High contrast
- Clear button labels
- Simple, intuitive navigation

**Weekly Content Updates**:
- Service info section designed for easy content swap
- Event cards templated for consistency

**Donation Integration**:
- PayPal widget styled to match site aesthetic
- Clear, trustworthy presentation
- Mobile-optimized checkout flow