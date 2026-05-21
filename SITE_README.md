# MK Basketball Club - Premium Cinematic Website

A modern, premium cinematic single-page basketball club website built with Next.js 16, TypeScript, TailwindCSS, shadcn/ui, Framer Motion, and React Hook Form.

## 🎯 Features

### Design
- **Cinematic & Immersive**: Sports documentary-inspired dark premium aesthetic
- **Motion-Heavy**: Extensive Framer Motion animations and transitions
- **Modern UI**: Glassmorphism, gradient overlays, and ambient glow effects
- **Mobile-First**: Fully responsive design optimized for all devices
- **Interactive**: Parallax scrolling, reveal-on-scroll animations, magnetic buttons

### Sections (15 Total)
1. **Hero Section** - Fullscreen with animated counters and scroll indicator
2. **Social Proof** - Stats showcase with hover effects
3. **Instagram Reels** - Horizontal snap-scroll slider
4. **YouTube Shorts** - Netflix-style video cards
5. **Featured Video** - Large player showcase
6. **Training Programs** - Program cards with pricing
7. **Player Transformations** - Before/after success stories
8. **Achievements** - Timeline of milestones
9. **Basketball Philosophy** - Core values and mission
10. **Founder Section** - Cinematic founder story
11. **Gallery** - Masonry layout with lightbox
12. **Testimonials** - Player and parent reviews
13. **Events** - Upcoming tournaments and camps
14. **Final CTA** - Strong call-to-action
15. **Footer** - Navigation and contact

### Global Inquiry Dialog
- **Multi-Step Form**: Step-by-step UX with validation
- **Multiple Types**: Training, tournaments, collaboration, sponsorship, coaching
- **React Hook Form + Zod**: Production-grade validation
- **Framer Motion**: Smooth transitions between steps
- **Glassmorphism**: Modern backdrop blur styling

## 📁 Project Structure

```
mk-bball/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main single-page application
│   ├── globals.css         # Global styles and animations
│   └── favicon.ico
│
├── components/
│   ├── sections/           # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── SocialProofSection.tsx
│   │   ├── InstagramReelsSection.tsx
│   │   ├── YouTubeShortsSection.tsx
│   │   ├── FeaturedVideoSection.tsx
│   │   ├── TrainingProgramsSection.tsx
│   │   ├── TransformationStoriesSection.tsx
│   │   ├── AchievementsSection.tsx
│   │   ├── PhilosophySection.tsx
│   │   ├── FounderSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── EventsSection.tsx
│   │   ├── FinalCTASection.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts
│   │
│   ├── InquiryDialog.tsx   # Global reusable dialog form
│   └── ui/
│       └── button.tsx
│
├── hooks/
│   ├── useIntersectionObserver.ts  # Reveal-on-scroll hook
│   ├── useParallax.ts              # Parallax effect hook
│   └── index.ts
│
├── lib/
│   ├── utils.ts            # cn() utility function
│   └── validationSchemas.ts # Zod schemas and constants
│
├── public/
│   └── (images and assets)
│
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (or latest stable)
- pnpm (or npm/yarn)

### Installation

1. **Clone/Navigate to Project**
   ```bash
   cd p:\project\mk-bball
   ```

2. **Install Dependencies** (using pnpm)
   ```bash
   pnpm install
   ```

   Or if using npm:
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open in Browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
pnpm build
pnpm start
```

## 📦 Dependencies

### Core
- **Next.js 16.2.6** - React framework with App Router
- **React 19.2.4** - UI library
- **TypeScript 5** - Type safety

### Styling & Animation
- **TailwindCSS 4** - Utility-first CSS framework
- **Framer Motion 12.39.0** - Animation library
- **class-variance-authority** - Component variants
- **tailwind-merge** - Merge Tailwind classes
- **tw-animate-css** - Animation utilities

### Forms & Validation
- **React Hook Form 7.76.0** - Form state management
- **@hookform/resolvers** - Form validation resolvers
- **Zod** - Schema validation library

### UI & Icons
- **shadcn/ui** - Component library
- **Radix UI** - Headless UI components
- **lucide-react** - Icon library

## 🎨 Customization

### Colors
Update the Tailwind color theme in `tailwind.config.ts` and CSS variables in `app/globals.css`.

### Content
Edit section components in `components/sections/` to update copy, images, and data.

### Animations
Modify Framer Motion variants in each section component or adjust animation utilities in `globals.css`.

### Validation Schema
Update `lib/validationSchemas.ts` to modify form fields and validation rules.

## 📱 Responsive Design

All sections are fully responsive:
- **Mobile**: Single column layouts
- **Tablet**: 2-column grids
- **Desktop**: 3-4 column grids with optimal spacing

## ♿ Accessibility

- Semantic HTML structure
- Proper ARIA labels
- Keyboard navigation support
- Focus management in dialog
- Color contrast compliance

## 🔒 Form Security

- Client-side and server-ready validation with Zod
- Input sanitization with React Hook Form
- CSRF protection ready
- Type-safe form submission

## 📊 Performance

- Optimized images with Next.js Image component ready
- Lazy loading with Intersection Observer
- Smooth scroll behavior
- Efficient animations with Framer Motion GPU acceleration
- Code splitting and dynamic imports

## 🌐 SEO

- Meta tags in layout
- Open Graph support
- Semantic HTML
- Structured data ready

## 📝 Notes

### Placeholder Content
The website uses emoji placeholders for images and videos. Replace with actual assets:
- Videos in Hero: Use `<video>` tags or video embed
- Gallery images: Connect to image server or CMS
- Player images: Add actual player photos

### Form Submission
The form currently logs to console. Connect to:
- Email service (SendGrid, Nodemailer)
- CRM (Salesforce, Pipedrive)
- Database (Firebase, MongoDB)
- Webhook (Make, Zapier)

### Analytics
Add your analytics:
- Google Analytics
- Posthog
- Plausible
- Custom tracking

## 🛠️ Development Tips

### Custom Hooks
Use `useIntersectionObserver` for scroll reveal animations:
```tsx
const { ref, isVisible } = useIntersectionObserver();
<div ref={ref}>
  {isVisible && <motion.div>...</motion.div>}
</div>
```

### Framer Motion Patterns
Use staggered animations:
```tsx
const containerVariants = {
  visible: { transition: { staggerChildren: 0.1 } }
};
```

### Form Handling
The dialog form supports dynamic field rendering based on inquiry type. Extend in `InquiryDialog.tsx`.

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Other Platforms
- **Netlify**: Drag and drop `out/` folder
- **AWS Amplify**: Connect GitHub repo
- **Docker**: Create Dockerfile (example provided)

## 📄 License

All rights reserved © 2026 MK Basketball Club

## 🤝 Support

For questions or issues:
- Email: info@mkbasketball.com
- Phone: +91 98765 43210

---

**Built with ❤️ for MK Basketball Club**
