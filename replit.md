# Gurdeep Singh - Data Analyst Portfolio

## Overview

This is a personal portfolio website for Gurdeep Singh, a Data/Business Analyst specializing in SQL, Python, Excel, and data visualization. The site features a Disney Pixar's "Cars" themed design, combining Mater's friendly personality with modern data analytics aesthetics. Built as a single-page application showcasing projects, experience, certifications, education, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast HMR and optimized production builds
- **Wouter** for lightweight client-side routing
- Single-page application (SPA) architecture with all content on the home page

**UI Component Strategy**
- **shadcn/ui** component library with Radix UI primitives for accessibility
- **Tailwind CSS** for utility-first styling with custom theme configuration
- Component structure follows atomic design with reusable UI primitives in `/components/ui`
- Feature components organized in `/components` (HeroSection, ProjectsSection, etc.)
- Custom CSS variables for theme colors supporting light/dark modes

**State Management**
- **TanStack Query (React Query)** for server state management and caching
- Local React state (useState, useRef) for UI interactions
- No global state management library (Redux/Zustand) - architecture favors component-level state

**Styling & Theming**
- Cars-themed color palette with custom CSS variables:
  - Primary: Rust brown/burnt orange (#C47335)
  - Secondary: Deep teal (#4A9B9B)
  - Accent: Lightning McQueen red (#E31E24)
- Dark mode support with theme toggle functionality
- Custom fonts: Bebas Neue for headings, Inter for body, JetBrains Mono for code
- Responsive design with mobile-first approach

**User Experience Features**
- Auto-playing background music (Life is a Highway by Rascal Flatts) with mute/unmute control
- 3D car animation loader on initial page load
- Smooth scroll navigation between sections
- Interactive hover effects and animations using CSS transitions
- Toast notifications for user feedback

### Backend Architecture

**Server Setup**
- **Express.js** HTTP server with minimal API surface
- Serves static built files in production
- Hot module replacement (HMR) via Vite middleware in development
- No authentication or session management currently implemented

**Data Layer**
- **Drizzle ORM** configured for PostgreSQL with schema definition
- Storage interface abstraction with in-memory implementation (MemStorage)
- User schema defined but not actively used in current implementation
- Database migrations configured in `/migrations` directory

**API Design**
- RESTful API structure with `/api` prefix for future endpoints
- Currently no active API routes - portfolio is entirely static content
- Prepared for CRUD operations through storage interface

**Development Workflow**
- Separate dev and build scripts
- TypeScript compilation checks without emission
- Build process bundles server and client separately using esbuild and Vite

### External Dependencies

**Database**
- **Neon Database** (PostgreSQL) via `@neondatabase/serverless`
- Configured via `DATABASE_URL` environment variable
- Connection pooling for serverless environments

**UI Libraries**
- **Radix UI** component primitives for accessible UI patterns
- **Lucide React** for consistent iconography
- **Embla Carousel** for project showcases
- **Framer Motion** capability (via dependencies, not actively used)

**Development Tools**
- **Replit** specific plugins for development banner and error overlay
- **PostCSS** with Tailwind CSS for style processing
- Path aliases configured for clean imports (`@/`, `@shared/`, `@assets/`)

**Assets**
- Static images stored in `/attached_assets` directory
- Custom audio file for background music
- Favicon and portfolio images (headshot, project banners, etc.)

**Third-Party Services**
- Google Fonts for typography (Bebas Neue, Inter, JetBrains Mono)
- Google Drive for resume hosting
- GitHub for project repositories
- LinkedIn and email for contact integration