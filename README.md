# Joe-ai: The Future of Enterprise Intelligence - Website

A modern, responsive website for Joe-ai built with Next.js, React, and Tailwind CSS. Features include on-page navigation, contact form, and WhatsApp integration.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **On-Page Navigation**: Smooth scrolling navigation links
- **Contact Form**: Fully functional contact form with validation
- **WhatsApp Integration**: Direct WhatsApp chat widget for demos
- **Modern UI**: Futuristic enterprise tech aesthetic with cyan accents
- **Fast Performance**: Optimized for Vercel deployment
- **TypeScript**: Full TypeScript support for type safety

## Project Structure

```
joe_ai_vercel_website/
├── pages/
│   ├── api/
│   │   └── contact.ts          # Contact form API endpoint
│   ├── _app.tsx                # Next.js app wrapper
│   ├── _document.tsx           # Next.js document setup
│   └── index.tsx               # Main homepage
├── components/
│   ├── Header.tsx              # Navigation header
│   ├── ContactForm.tsx         # Contact form component
│   └── WhatsAppWidget.tsx      # WhatsApp floating widget
├── styles/
│   └── globals.css             # Global styles and animations
├── public/
│   └── images/                 # Static images
├── .env.example                # Environment variables template
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── next.config.js              # Next.js configuration
└── vercel.json                 # Vercel deployment config
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn/pnpm
- Git

### Installation

1. **Clone or extract the project**
   ```bash
   cd joe_ai_vercel_website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and update:
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`: Your WhatsApp number (default: +97152421616)
   - `NEXT_PUBLIC_API_URL`: Your API URL (default: http://localhost:3000/api)

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Building for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

### Option 1: Using Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** and set environment variables when asked

### Option 2: Using GitHub

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/joe-ai-website.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Set environment variables in project settings
   - Deploy

### Environment Variables for Vercel

Set these in your Vercel project settings:

- `NEXT_PUBLIC_WHATSAPP_NUMBER`: +97152421616
- `NEXT_PUBLIC_API_URL`: https://your-domain.com/api

## Features Explained

### Navigation
- Smooth scrolling to different sections
- Mobile-responsive hamburger menu
- Fixed header with logo and CTA buttons

### Contact Form
- Name, Email, Phone, and Message fields
- Form validation
- Toast notifications for success/error
- API endpoint at `/api/contact`

### WhatsApp Widget
- Floating button in bottom-right corner
- Direct link to WhatsApp chat
- Pre-filled message for context

### Sections

1. **Hero**: Main value proposition and CTAs
2. **Solution**: Key advantages of Joe-ai
3. **Architecture**: Technical details and features
4. **ROI**: Key metrics and benefits
5. **Contact**: Contact form and direct contact info
6. **Footer**: Links and company information

## Customization

### Colors
Edit `styles/globals.css` to change the color scheme:
- `--obsidian`: Background color
- `--cyan-accent`: Primary accent color
- `--text-primary`: Main text color

### Content
Edit `pages/index.tsx` to update:
- Section titles and descriptions
- Feature lists
- ROI metrics
- Contact information

### WhatsApp Number
Update in `.env.local`:
```
NEXT_PUBLIC_WHATSAPP_NUMBER=+97152421616
```

## API Integration

### Contact Form Endpoint

**POST** `/api/contact`

Request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1 (323) 689 3535",
  "message": "I'm interested in Joe-ai"
}
```

Response:
```json
{
  "success": true,
  "message": "Contact form submitted successfully. We will contact you soon."
}
```

## Performance Optimization

- Image optimization with Next.js Image component
- CSS minification with Tailwind
- Code splitting and lazy loading
- Optimized for Core Web Vitals

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Troubleshooting

### Port already in use
```bash
npm run dev -- -p 3001
```

### Dependencies not installing
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
npm run lint
npm run build
```

## Support

For issues or questions, contact:
- Email: joe-ai@aijoesys.com
- WhatsApp: +971 52 421 8866
- Website: https://joe-ai.io

## License

© 2026 AiJoe Systems FZ LLC. All rights reserved.
