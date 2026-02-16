# Kelvin Kgarudi Portfolio

## Overview

A modern, multi-page personal portfolio website for a Machine Learning & Data Science professional. The site showcases projects, skills, certifications, and contact information with a premium, high-tech aesthetic inspired by Apple Developer, Vercel, and OpenAI design language.

**Purpose**: Professional portfolio to attract recruiters, ML engineers, data science managers, fintech companies, and academic supervisors.

**Brand Identity**: TekMonger/TekCorp — calm intelligence, precision, ethical tech, and subtle confidence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript using Vite as the build tool
- Client-side routing via `wouter` (lightweight alternative to React Router)
- Component library: shadcn/ui (Radix primitives + Tailwind CSS)
- Animation: Framer Motion for smooth page transitions and micro-interactions
- State management: TanStack Query for server state, React Context for theme

**Design System**:
- Dark mode default with light mode toggle
- Glassmorphism cards with subtle shadows
- Cyan/blue accent color palette
- Inter font for headings, JetBrains Mono for code/tech labels
- CSS variables for theming defined in `client/src/index.css`

**Page Structure**:
- Home (`/`) - Hero section with featured projects
- About (`/about`) - Bio, education, values
- Projects (`/projects`) - Filterable project gallery with modal details
- Skills (`/skills`) - Technical skills by category
- Certifications (`/certifications`) - Professional credentials
- Contact (`/contact`) - Contact form with validation

### Backend Architecture

**Framework**: Express.js with TypeScript
- RESTful API endpoints under `/api/`
- Contact form submissions stored via storage interface

**Storage Layer**:
- Interface-based design (`IStorage`) allowing swappable implementations
- Currently using in-memory storage (`MemStorage`)
- Database schema defined with Drizzle ORM (PostgreSQL ready)
- Schema location: `shared/schema.ts`

**API Endpoints**:
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Retrieve contact messages

### Data Layer

**Content Management**:
- All portfolio content driven by `client/src/data/profile.ts`
- Includes profile info, projects, skills, certifications, education, testimonials
- Easy to update without touching component code

**Database Schema** (Drizzle ORM):
- `users` table - Basic authentication support
- `contact_messages` table - Contact form submissions
- Validation via `drizzle-zod` integration

### Build System

**Development**: Vite dev server with HMR
**Production**: 
- Client: Vite builds to `dist/public`
- Server: esbuild bundles to `dist/index.cjs`
- Single build script: `script/build.ts`

## External Dependencies

### UI Component Libraries
- **Radix UI**: Accessible primitives (Dialog, Dropdown, Tabs, etc.)
- **shadcn/ui**: Pre-styled components using Radix + Tailwind
- **Lucide React**: Icon library

### Animation & Styling
- **Framer Motion**: Page transitions and hover effects
- **Tailwind CSS**: Utility-first styling
- **class-variance-authority**: Component variant management

### Form Handling
- **React Hook Form**: Form state management
- **Zod**: Schema validation (shared between client/server)
- **@hookform/resolvers**: Zod integration for React Hook Form

### Database & ORM
- **Drizzle ORM**: Type-safe database queries
- **PostgreSQL**: Production database (via `DATABASE_URL`)
- **connect-pg-simple**: Session storage for PostgreSQL

### Development Tools
- **Vite**: Fast dev server and bundler
- **tsx**: TypeScript execution for server
- **esbuild**: Production server bundling

### Replit-Specific
- `@replit/vite-plugin-runtime-error-modal`: Error overlay in development
- `@replit/vite-plugin-cartographer`: Development tooling
- `@replit/vite-plugin-dev-banner`: Development banner