# Ability Avenues - ABA Therapy Website

A modern, responsive website for Ability Avenues, a leading provider of Applied Behavior Analysis (ABA) therapy services in Minneapolis, Minnesota. The website showcases evidence-based therapy services for children with autism spectrum disorder and developmental delays.

## 🌟 About Ability Avenues

Ability Avenues provides comprehensive ABA therapy services by Board Certified Behavior Analysts (BCBAs) for children ages 2-18. Our services include:

- **Center-Based Therapy**: Comprehensive, play-based therapy in a preschool-like setting
- **In-Home Therapy**: Personalized one-on-one Applied Behavior Analysis delivered in the comfort of your home
- **Early Intensive Developmental & Behavioral Intervention (EIDBI)**: Comprehensive early intervention services for children ages 0-7

## 🚀 Live Website

Visit our website at: [https://abilityavenues.com](https://abilityavenues.com)

## 🛠️ Technology Stack

This project is built with modern web technologies:

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Animations**: Framer Motion + GSAP
- **Database**: Supabase
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics & Speed Insights

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog page
│   ├── careers/           # Careers page
│   ├── center-based-therapy/ # Center-based therapy page
│   ├── contact/           # Contact page
│   ├── eidbi/             # EIDBI services page
│   ├── faq/               # FAQ page
│   ├── in-home-therapy/   # In-home therapy page
│   ├── intake-process/    # Intake process page
│   └── referrals/         # Referrals page
├── components/            # React components
│   ├── about/             # About page components
│   ├── contact/           # Contact form components
│   ├── eidbi/             # EIDBI page components
│   ├── faq/               # FAQ components
│   ├── home/              # Home page components
│   ├── services/          # Service-related components
│   ├── shared/            # Shared components
│   └── ui/                # Reusable UI components
├── assets/                # Images and SVG assets
├── hooks/                 # Custom React hooks
├── integrations/          # Third-party integrations
│   └── supabase/         # Supabase client and types
└── lib/                   # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (recommended: use [nvm](https://github.com/nvm-sh/nvm))
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ability-avenues-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Design System

The website uses a comprehensive design system with:

- **Color Palette**: Custom brand colors optimized for accessibility
- **Typography**: Carefully selected fonts for readability
- **Components**: Reusable UI components built with Radix UI
- **Animations**: Smooth transitions and micro-interactions
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 📱 Features

- **Responsive Design**: Optimized for all device sizes
- **SEO Optimized**: Meta tags, structured data, and sitemap
- **Contact Forms**: Integrated contact, referral, and career forms
- **Performance**: Optimized images and code splitting
- **Accessibility**: WCAG compliant design and navigation
- **Analytics**: Built-in performance and user analytics

## 🔧 Development

### Code Style

- ESLint configuration for consistent code style
- TypeScript for type safety
- Prettier for code formatting (recommended)

### Component Guidelines

- Use functional components with TypeScript
- Follow the established folder structure
- Use Tailwind CSS for styling
- Implement proper accessibility attributes

## 🚀 Deployment

The application is deployed on Vercel with automatic deployments from the main branch.

### Manual Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Deploy to your preferred platform (Vercel, Netlify, etc.)

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary to Ability Avenues. All rights reserved.

## 📞 Contact

For questions about this website or Ability Avenues services:

- **Website**: [https://abilityavenues.com](https://abilityavenues.com)
- **Email**: Contact through our website contact form
- **Phone**: Available on our contact page

---

Built with ❤️ for children and families in Minneapolis, Minnesota.
