# St. Anne's Episcopal Church Website

## Overview

This is a modern, community-focused website for St. Anne's Episcopal Church in Fremont, California. The application serves as the primary digital presence for the church, providing service information, event details, donation capabilities, and community engagement features. Built as a single-page application with a clean, accessible design that welcomes all generations.

The website emphasizes immediate access to critical information (service times, Zoom links, bulletins) while maintaining a warm, professional aesthetic appropriate for a faith community. The design follows contemporary church platform patterns with Material Design influences, prioritizing clarity and trust.

## Recent Changes (November 2025)

### Latest Updates
- **Navigation Fix**: Replaced wouter Link components with native anchor tags for hash fragment navigation to enable proper in-page smooth scrolling
- **Content Expansion**: Added comprehensive sections including Newcomers/Visit, Labyrinth ministry, Preschool program
- **Address Integration**: Added complete church address (2791 Driscoll Road, Fremont, CA 94539) throughout site
- **Enhanced Giving**: Expanded donation section with multiple giving options, scripture, and Tri-City Interfaith Council information
- **Navigation Structure**: Reorganized navigation to: Home, About, Visit, Worship, Programs, Give, Contact
- **Footer Enhancement**: Added comprehensive quick links including ministry links

### Initial Implementation
- Updated hero section with impressionist-style labyrinth painting background
- Added comprehensive About section with mission, community, worship, and welcome information
- Implemented smooth scrolling navigation with CSS
- Enhanced mobile menu functionality
- Integrated PayPal donation functionality
- Connected all external resources (Zoom, Google Docs, social media)

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Tooling**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server, providing fast HMR and optimized production builds
- Wouter for lightweight client-side routing (SPA architecture)
- TanStack Query (React Query) for server state management and data fetching

**UI Component System**
- shadcn/ui component library built on Radix UI primitives for accessible, composable components
- Tailwind CSS for utility-first styling with custom design tokens
- Custom CSS variables for theming (defined in index.css), supporting light mode with potential dark mode extension
- Typography system using Google Fonts: Crimson Text (serif) for headings and Inter (sans-serif) for body text

**Component Architecture**
- Page-level components in `client/src/pages/` (Home, NotFound)
- Feature components in `client/src/components/`:
  - Header: Sticky navigation with mobile menu support
  - Hero: Full-screen hero section with labyrinth painting background
  - About: Mission, community, worship, and welcome cards
  - ServiceInfo: Current service details with Zoom, bulletin, and readings links
  - Events: Event cards for programs and worship services
  - EventCard: Reusable card component for events
  - Donation: PayPal integration for online giving
  - Connect: Contact information, service times, and social media links
  - Footer: Site footer with quick links and contact info
- Reusable UI primitives in `client/src/components/ui/` from shadcn/ui
- Component examples directory for development/documentation purposes

**State Management**
- React Query for async state and API interactions
- React hooks (useState, useContext) for local component state
- Toast notifications system for user feedback

**Design System**
- Consistent spacing using Tailwind scale (2, 4, 6, 8, 12, 16, 20, 24)
- Responsive breakpoints with mobile-first approach
- Elevation system through custom CSS classes (hover-elevate, active-elevate)
- Color system based on HSL values with semantic naming (primary, secondary, muted, accent, destructive)

### Backend Architecture

**Server Framework**
- Express.js for HTTP server and API routing
- ES modules throughout (type: "module" in package.json)
- Custom middleware for request logging with performance metrics
- JSON body parsing with raw body capture for webhook support

**Development Environment**
- Vite middleware mode for development with HMR
- SSR-capable setup for potential server-side rendering
- Hot module replacement integrated with Express

**Storage Layer**
- In-memory storage implementation (MemStorage class) for user data
- Interface-based design (IStorage) allowing easy swap to persistent storage
- UUID-based entity identification

**Build & Deployment**
- Production build using esbuild for server code bundling
- Vite for client bundle optimization
- Static file serving in production mode
- Environment-aware configuration (NODE_ENV)

### Data Storage Solutions

**Current Implementation**
- In-memory Map-based storage for users
- No persistent database currently configured, though Drizzle ORM is set up

**Database Schema (Prepared but Not Active)**
- Drizzle ORM configured for PostgreSQL via @neondatabase/serverless
- Schema defined in `shared/schema.ts` with users table
- Zod validation schemas for type-safe data operations
- Migration system configured via drizzle-kit

**Future Database Architecture**
- PostgreSQL ready via Neon serverless driver
- Connection pooling through serverless architecture
- Schema migrations managed by Drizzle Kit
- Type-safe queries using Drizzle ORM

### Authentication and Authorization

**Current State**
- User schema defined with username/password fields
- No active authentication implementation
- Session management dependencies installed (connect-pg-simple)
- Ready for session-based authentication with PostgreSQL session store

**Prepared Mechanisms**
- Password hashing not yet implemented (should add bcrypt or similar)
- Session cookie infrastructure available
- User lookup methods in storage interface (getUser, getUserByUsername)

## External Dependencies

### Third-Party UI Libraries
- **Radix UI**: Comprehensive set of unstyled, accessible component primitives (@radix-ui/react-*)
- **shadcn/ui**: Pre-styled components built on Radix UI with Tailwind CSS integration
- **Lucide React**: Icon library for consistent iconography
- **React Icons**: Additional icons (specifically SiFacebook, SiInstagram, SiYelp for social media)
- **cmdk**: Command palette component for potential search/navigation features
- **embla-carousel-react**: Carousel/slider functionality
- **react-day-picker**: Calendar/date picker component

### Form Management
- **React Hook Form**: Form state management with performance optimization
- **@hookform/resolvers**: Validation resolvers for Zod integration
- **Zod**: Runtime type validation and schema definition

### Styling & Design
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant styling
- **tailwind-merge**: Intelligent Tailwind class merging
- **clsx**: Conditional class name utility
- **Google Fonts**: Crimson Text and Inter font families loaded via CDN

### Data Fetching & State
- **@tanstack/react-query**: Async state management, caching, and data synchronization
- **date-fns**: Date manipulation and formatting

### Database & ORM
- **Drizzle ORM**: Type-safe SQL query builder for PostgreSQL
- **@neondatabase/serverless**: Neon serverless PostgreSQL driver
- **drizzle-zod**: Integration between Drizzle schemas and Zod validation
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### Development Tools
- **Replit-specific plugins**: 
  - @replit/vite-plugin-runtime-error-modal
  - @replit/vite-plugin-cartographer
  - @replit/vite-plugin-dev-banner
- **TypeScript**: Type safety across the entire stack
- **ESBuild**: Fast bundling for server code

### External Services (Referenced in Components)
- **PayPal**: Donation processing via PayPal donation forms
- **Zoom**: Virtual service attendance via embedded Zoom links
- **Google Docs**: Weekly bulletins and readings hosted on Google Docs
- **Social Media**: Links to Facebook, Instagram, and Yelp profiles

### Asset Management
- Custom assets directory at `attached_assets/` for images
- Hero background: Impressionist-style labyrinth painting (`ChatGPT Image Nov 19, 2025, 10_19_52 PM_1763619739058.png`)
- Images imported via `@assets` alias configured in Vite
- Favicon served from public directory

## Website Sections

### Hero Section
- Full-screen hero with labyrinth painting background
- Welcome message and tagline
- Zoom link and bulletin access buttons
- Responsive design with dark gradient overlay for text readability

### About Section
- Four-card layout highlighting church mission and values
- "Our Mission" - Community worship and service focus
- "Our Community" - Diverse, welcoming congregation
- "Our Worship" - Traditional Episcopal liturgy
- "All Are Welcome" - Inclusive message
- Scripture quote (Matthew 18:20)

### Newcomers/Visit Section (New)
- Planning Your First Visit information
- Three cards: When We Meet, Where We Are, What to Wear
- What to Expect section with detailed visitor guide
- FAQs for first-time visitors
- Zoom and contact CTAs

### Service Information
- Current Sunday service details
- Date and time display
- Quick access buttons:
  - Join on Zoom (primary CTA)
  - View Bulletin (Google Docs)
  - View Readings (Google Docs)

### Labyrinth Ministry (New)
- Comprehensive labyrinth information
- "What is a Labyrinth?" educational content
- Three Stages of the Labyrinth Walk (Releasing, Receiving, Returning)
- Visit details and guidance
- Open to the public during daylight hours

### Preschool Program (New)
- St. Anne's Preschool overview
- Program philosophy and approach
- What We Offer list
- Enrollment and contact information
- Ages 2-5 years, flexible scheduling

### Events Section
- Event card grid layout
- "A Non-Musician's Guide to How Music Works" series
- Sunday Morning Worship information
- Each event includes title, description, date/time, and Zoom link

### Donation Section (Enhanced)
- Two-card layout: Online Giving and Other Ways to Give
- PayPal integration for secure online giving
- Mail a Check option with complete address
- In-Person Giving information
- Planned Giving contact
- Tri-City Interfaith Council membership dues notice
- Scripture quote (2 Corinthians 9:7)

### Connect Section
- Three-card layout:
  1. Contact & Location with full address
  2. Service Times with schedule
  3. Social media links (Facebook, Instagram, Yelp)
- Complete contact information: email, phone, physical address

### Footer
- Church name and complete address
- Quick Links: Plan Your Visit, bulletins, readings, Zoom, Labyrinth, Preschool
- Contact section with email and phone
- Social media links
- Copyright notice