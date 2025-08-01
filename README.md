# Zact - The OS to Run Your Entire Company with AI Agents

A modern, responsive landing page for Zact, showcasing the AI agent platform that allows companies to install specialized AI agents as employees.

## 🚀 Features

- **Modern React + TypeScript** - Built with Vite for fast development
- **Responsive Design** - Optimized for all devices
- **Interactive Demo** - Realistic AI agent simulation
- **Waitlist Integration** - Loops.so integration with fallback
- **SEO Optimized** - Complete meta tags and structured data
- **Infinite Scroll** - Smooth agent card animations
- **Modal System** - Clean waitlist signup experience

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Custom animations
- **Icons**: Lucide React
- **Backend**: Express.js (for Loops.so proxy)
- **Waitlist**: Loops.so + Web3Forms fallback
- **Deployment**: Ready for Vercel/Netlify

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/zact-ai/website.git
cd website

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your API keys
```

## 🔧 Environment Variables

Create a `.env` file with:

```env
VITE_LOOPS_API_KEY=your_loops_api_key
VITE_WEB3FORMS_KEY=your_web3forms_key
LOOPS_API_KEY=your_loops_api_key
```

## 🚀 Development

```bash
# Run frontend only
npm run dev

# Run backend only (for Loops.so integration)
npm run server

# Run both frontend and backend
npm run dev:full
```

## 📁 Project Structure

```
zact-landing/
├── public/                 # Static assets
│   ├── zactlogo.png       # Zact logo
│   ├── robots.txt         # SEO
│   ├── sitemap.xml       # SEO
│   └── og-image.html     # Social media image
├── src/
│   ├── components/        # React components
│   │   ├── Hero.tsx      # Main hero section
│   │   ├── Features.tsx  # Features showcase
│   │   ├── Agents.tsx    # AI agents display
│   │   ├── Demo.tsx      # Interactive demo
│   │   ├── CTA.tsx       # Call-to-action
│   │   ├── Header.tsx    # Navigation
│   │   ├── Footer.tsx    # Footer
│   │   └── WaitlistModal.tsx # Waitlist modal
│   ├── services/         # API services
│   │   └── waitlistService.ts # Waitlist integration
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── server.js            # Express backend
├── index.html           # HTML template
└── package.json         # Dependencies
```

## 🎨 Key Components

### Hero Section
- Compelling headline and description
- Statistics showcase
- Call-to-action buttons

### Features
- Grid layout with icons
- Feature highlights
- Responsive design

### Agents Section
- Infinite horizontal scroll
- Agent cards with descriptions
- Installation buttons

### Interactive Demo
- Realistic AI agent simulation
- Live metrics display
- Workflow visualization
- Chat interface

### Waitlist Modal
- Clean signup form
- Loops.so integration
- Success/error handling
- Local storage backup

## 🔌 API Integration

### Loops.so Integration
- Server-side proxy to avoid CORS
- Contact creation with properties
- Error handling for duplicates
- Rate limiting support

### Fallback System
- Web3Forms as backup
- Local storage for offline
- Graceful degradation

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build the project
npm run build

# Deploy to Netlify
# Upload dist/ folder
```

## 🔧 Customization

### Colors & Branding
Edit `tailwind.config.js` for brand colors:
```js
theme: {
  extend: {
    colors: {
      primary: '#000000',
      secondary: '#1a1a1a',
    }
  }
}
```

### Content Updates
- **Hero**: Edit `src/components/Hero.tsx`
- **Features**: Edit `src/components/Features.tsx`
- **Agents**: Edit `src/components/Agents.tsx`
- **Demo**: Edit `src/components/Demo.tsx`

### SEO
- **Meta tags**: Edit `index.html`
- **Structured data**: JSON-LD in `index.html`
- **Sitemap**: Edit `public/sitemap.xml`

## 📊 Analytics

The site is ready for Google Analytics integration. Add your GA ID to the environment variables.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is proprietary to Zact.

## 🆘 Support

For support, contact the Zact team or create an issue in this repository.

---

**Built with ❤️ by the Zact team** 