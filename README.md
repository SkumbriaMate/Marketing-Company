# Aurora Marketing - Digital Presence Management

A modern, fully responsive, and animated marketing website built with Next.js, React, TypeScript, and Tailwind CSS.

## ✨ Features

- **7 Pages**: Home, About, Services, Plans, Case Studies, FAQ, Book a Consultation
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Page transitions and loading animations
- **Global Loader**: Consistent loading experience across all pages
- **Hero Image**: Dynamic hero section with background image support
- **Lead Form**: Contact form with optional Supabase integration
- **TypeScript**: Full type safety throughout
- **Clean Architecture**: Organized folder structure with reusable components

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. (Optional) Set up Supabase for lead storage:
   - Create a `.env.local` file in the root directory
   - Add the following variables:
   ```
   NEXT_PUBLIC_SUPABASE_ENABLED=true
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
   - Create a `leads` table in Supabase with columns: `id`, `name`, `email`, `company`, `website`, `message`, `created_at`

   If Supabase is not enabled, leads will be logged to the server console.

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## 📁 Project Structure

```
/
├── app/              # Next.js App Router pages
│   ├── api/          # API routes
│   ├── about/        # About page
│   ├── services/     # Services page
│   ├── plans/        # Plans page
│   ├── case-studies/ # Case studies page
│   ├── faq/          # FAQ page
│   ├── book/         # Book consultation page
│   ├── layout.tsx    # Root layout
│   └── template.tsx  # Global page template with loader
├── components/       # Reusable React components
│   ├── Loader.tsx           # Global loading spinner
│   ├── PageTransition.tsx   # Page animation wrapper
│   ├── ServicesAccordion.tsx # Services accordion
│   └── ...
├── content/          # Content/data files
├── lib/              # Utility functions and Supabase client
└── public/           # Static assets
    └── assets/       # Images and media files
```

## 📄 Pages

- **Home** (`/`): Hero section with background image, services accordion, target audience, differentiators
- **About** (`/about`): Mission, philosophy, who we work with
- **Services** (`/services`): Expandable services accordion with icons
- **Plans** (`/plans`): Three subscription tiers (no prices)
- **Case Studies** (`/case-studies`): Client success stories
- **FAQ** (`/faq`): Frequently asked questions with accordion
- **Book** (`/book`): Lead form and consultation booking

## 🎨 Components

### Core Components
- `Loader`: Global loading spinner with company branding
- `PageTransition`: Smooth fade-in animations for pages
- `Navbar`: Sticky navigation with mobile menu
- `Footer`: Site footer with links
- `Hero`: Hero section with optional background image

### Content Components
- `SectionHeading`: Reusable section headings
- `ServicesAccordion`: Compact, expandable services list with icons
- `Card` / `IconCard`: Card components
- `PlanCard`: Plan display component
- `TestimonialCard`: Testimonial display
- `FAQAccordion`: FAQ accordion component
- `CTASection`: Call-to-action section
- `LeadForm`: Contact/lead form with validation

## 🎭 Animations

The site includes smooth, professional animations:
- **Page Load**: Fade-in from top (600ms)
- **Sections**: Slide-down animation (500ms)
- **Loader**: Spinning animation with company name
- **Hover States**: Smooth transitions on all interactive elements

## 🎨 Design System

- **Color Palette**: Neutral grays with dark accents
- **Typography**: Clean, hierarchical type scale
- **Spacing**: Consistent padding and margins
- **Layout**: Max-width containers (6xl = 1152px)
- **Responsiveness**: Mobile-first breakpoints (sm, md, lg)

## 💾 Content Management

All content is stored in TypeScript files in the `/content` directory:
- `mission.ts`: Mission statement, about content, home page content
- `services.ts`: Services list and descriptions
- `plans.ts`: Plans and features
- `faqs.ts`: FAQ questions and answers
- `caseStudies.ts`: Case study data

Edit these files to update site content.

## 🖼️ Hero Image

The hero image is located at `public/assets/hero.jpeg`. To change it:
1. Replace the image file in `public/assets/`
2. Update the path in `app/page.tsx` if using a different filename

## 🚀 Deployment

This project is ready to deploy to platforms like:
- **Vercel** (recommended for Next.js)
- Netlify
- AWS Amplify
- Any Node.js hosting platform

Make sure to set environment variables in your hosting platform's dashboard if using Supabase.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Images**: Next.js Image Optimization
- **Forms**: React Hook Form (client-side)
- **Database** (optional): Supabase

## 📱 Responsive Design

The site is fully responsive and optimized for:
- 📱 Mobile devices (< 640px)
- 📱 Tablets (640px - 1024px)
- 💻 Desktops (> 1024px)
- 🖥️ Large screens (> 1280px)

## 🔧 Customization

### Change Company Name
Company name is centralized in:
- `components/Navbar.tsx`
- `components/Footer.tsx`
- `components/Loader.tsx`
- `app/layout.tsx` (metadata)

### Customize Colors
Update colors in `tailwind.config.ts`:
```ts
colors: {
  primary: "#your-color",
  // ...
}
```

### Add More Services
Edit `components/ServicesAccordion.tsx` to add/remove services.

## 📝 License

ISC

---

Built with ❤️ by Aurora Marketing
