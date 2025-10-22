# Ricks Energy Limited - High Performance Website

A modern, high-performance website and web application built with Next.js for Ricks Energy Limited, a leading sustainable energy solutions provider.

## 🚀 Features

- **High Performance**: Built with Next.js 14+ App Router and optimized for speed
- **Modern UI**: Responsive design with Tailwind CSS and Framer Motion animations
- **TypeScript**: Full type safety throughout the application
- **SEO Optimized**: Meta tags, structured data, and performance optimizations
- **Admin Dashboard**: Complete management backend for content and client management
- **Contact System**: Advanced contact forms with validation
- **Responsive Design**: Mobile-first approach with excellent UX across all devices

## 🛠 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Headless UI, Heroicons
- **Animations**: Framer Motion
- **Image Optimization**: Next.js Image component with WebP/AVIF support
- **Performance**: Bundle analyzer, optimized imports

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ricks-energy-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── about/          # About page
│   ├── admin/          # Admin dashboard
│   ├── api/            # API routes
│   ├── contact/        # Contact page
│   ├── services/       # Services page
│   └── globals.css     # Global styles
├── components/         # Reusable components
│   ├── layout/         # Layout components (Header, Footer)
│   └── ui/             # UI components (Button, Card, etc.)
├── data/               # Static data and content
├── lib/                # Utility functions
└── types/              # TypeScript type definitions
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically deploy your application

### Other Platforms

The application can be deployed on any platform that supports Node.js:

- **Netlify**: Use `npm run build` and deploy the `out` folder
- **AWS Amplify**: Connect your GitHub repository
- **Railway**: Connect your repository for automatic deployments

## 📊 Performance Features

- **Image Optimization**: WebP/AVIF formats with optimized loading
- **Code Splitting**: Automatic code splitting for optimal bundle sizes
- **Prefetching**: Intelligent prefetching of critical resources
- **Compression**: Gzip/Brotli compression enabled
- **Caching**: Optimized caching strategies for static assets
- **Bundle Analysis**: Use `npm run analyze` to analyze bundle size

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run analyze` - Analyze bundle size

## 📱 Features Overview

### Public Website
- **Homepage**: Company overview with animated sections
- **About**: Company history, mission, and values
- **Services**: Detailed service offerings with interactive cards
- **Contact**: Advanced contact form with validation
- **Responsive Design**: Optimized for all screen sizes

### Admin Dashboard
- **Overview**: Key metrics and statistics
- **Contact Management**: View and manage form submissions
- **Project Tracking**: Monitor project progress
- **Content Management**: Update company information
- **Analytics**: Performance insights

Built with ❤️ for Ricks Energy Limited - Powering Tomorrow with Sustainable Energy Solutions
