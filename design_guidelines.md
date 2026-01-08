# Design Guidelines: Kelvin Kgarudi Portfolio

## Design Approach
**Reference-Based Approach**: Draw inspiration from Apple Developer, Vercel, OpenAI, NVIDIA, and Stripe for a professional, technical aesthetic that communicates "quiet confidence + deep technical competence."

## Visual Identity
**Brand Personality**: Calm intelligence, precision, depth, discipline, ethical tech, subtle confidence
**Design Philosophy**: Modern, high-tech, minimal, professional — not flashy or playful
**Target Audience**: Recruiters, ML engineers, data science managers, fintech companies, academic supervisors

## Layout System
**Spacing Units**: Use Tailwind spacing of 4, 8, 12, 16, 20, 24, 32 for consistent rhythm
**Container Strategy**: 
- Full-width sections with inner max-w-7xl
- Content sections: max-w-6xl
- Text content: max-w-prose

## Typography Hierarchy
**Headings**: Inter or Geist (modern sans-serif)
- H1: text-5xl md:text-6xl lg:text-7xl, font-bold
- H2: text-4xl md:text-5xl, font-bold
- H3: text-2xl md:text-3xl, font-semibold

**Body**: Inter or system font
- Base: text-base md:text-lg, leading-relaxed
- Small: text-sm

**Code/Tech Labels**: JetBrains Mono or Fira Code (monospace)

## Component Library

### Navigation
- Sticky top navigation with glass effect
- Active route indicator with accent color
- Mobile hamburger menu

### Cards
- Glassmorphism effect with soft shadows
- Subtle rounded corners (rounded-xl)
- Lift animation on hover (translate-y-[-4px])
- Padding: p-6 md:p-8

### Buttons
**Primary CTA**: 
- Rounded-lg, px-8 py-4
- Gradient background (subtle)
- Hover: slight scale + brightness increase

**Secondary**: 
- Border style with transparent background
- Hover: background fill

### Project Cards
- Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Include: title, one-line description, tech stack chips, CTA buttons
- Tech stack as small rounded pills

### Skill Categories
- Icon + title + subtle progress indicator
- Grouped in cards by category
- Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-4

### Timeline
- Vertical timeline with connector lines
- Education milestones with dates
- Icon markers at each node

## Page-Specific Layouts

### Home (/)
**Hero Section** (h-screen):
- Large hero image (tech/abstract gradient background)
- Centered content with headline + subheading
- Two primary buttons: "View Projects" and "Download CV"
- Blurred button backgrounds for readability

**Featured Projects**: 3-column grid showcasing top projects
**About Preview**: Single column, centered, max-w-3xl
**Tech Stack**: Logo badges in horizontal scroll or grid

### About (/about)
- Two-column layout: portrait placeholder + story content
- Timeline section for education
- Values/interests as icon cards

### Projects (/projects)
- Filter pills at top (ML, Fraud Detection, Forecasting, CV, NLP)
- Project grid (3 columns desktop, 1 mobile)
- Modal or detail page for case studies

### Skills (/skills)
- 4-column grid of skill category cards
- Each card contains skill list with icons
- No gamified progress bars

### Certifications (/certifications)
- Certificate cards in 2-3 column grid
- Issuer logo, title, date, credential ID

### Contact (/contact)
- Centered form (max-w-2xl)
- Name, email, message fields
- Email copy button
- Social links below form

## Animations
**Page Load**: Fade + slide up (stagger children)
**Hover**: Subtle lift on cards (4px translate)
**Page Transitions**: Smooth fade (200ms)
**Scroll**: Minimal parallax on hero only

**Animation Principle**: Use to guide attention, not distract. Keep motion calm and purposeful.

## Images
**Hero Image**: Large, tech-themed abstract gradient or neural network visualization (full-width, h-screen)
**About Page**: Professional portrait placeholder (rounded-lg, max-w-sm)
**Project Cards**: Thumbnail images for each project (aspect-video)

## Accessibility
- Minimum contrast ratio 4.5:1
- Font size: minimum 16px base
- Clear focus states with visible outlines
- Keyboard navigation support

## Navigation & Footer
**Navigation**: Logo/name left, page links center/right, theme toggle right
**Footer**: Name, role, social links (LinkedIn, GitHub, YouTube), copyright

**Design Goal**: "This person is disciplined, intelligent, technically deep, and ready for serious ML work."

**Avoid**: Portfolio clichés, playful UI, startup hype, excessive animations