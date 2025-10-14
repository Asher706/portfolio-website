# Portfolio Website

A modern, professional portfolio website built with React, TypeScript, and Tailwind CSS, featuring AI-powered interactions.

## 🚀 Features

- **Clean, Professional Design**: Minimalist layout with smooth animations
- **Responsive**: Optimized for all device sizes  
- **AI Integration**: Smart contact form analysis and interactive chatbot
- **Modern Stack**: React 18, TypeScript, Tailwind CSS, Framer Motion
- **Fast Performance**: Vite build tool for lightning-fast development

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Animation**: Framer Motion
- **Build Tool**: Vite
- **Icons**: Lucide React
- **AI**: OpenAI API integration ready

## 📁 Project Structure

```
src/
├── components/     # React components
│   ├── Header.tsx     # Navigation header
│   ├── Hero.tsx       # Hero section  
│   ├── About.tsx      # About section
│   ├── Projects.tsx   # Projects showcase
│   ├── Contact.tsx    # Contact form
│   └── Footer.tsx     # Footer
├── hooks/          # Custom React hooks
│   └── useAI.ts       # AI integration hooks
├── services/       # API services
│   └── aiService.ts   # AI service layer
├── styles/         # Styling
│   └── index.css      # Global styles
└── main.tsx        # App entry point
```

## 🚦 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Setup**
   ```bash
   cp .env.example .env
   # Edit .env with your API keys
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## ✏️ Customization

### Personal Information
Update these files with your information:
- `src/components/Header.tsx` - Your name and social links
- `src/components/Hero.tsx` - Your name, title, and bio
- `src/components/About.tsx` - Your story and skills
- `src/components/Projects.tsx` - Your actual projects
- `src/components/Contact.tsx` - Your contact information
- `src/components/Footer.tsx` - Footer details

### Styling
- Colors: Edit `tailwind.config.js`
- Custom styles: Edit `src/styles/index.css`
- Fonts: Update in `index.html` and CSS

### AI Features (Optional)
- Add OpenAI API key to `.env`
- The contact form includes AI-powered message analysis
- Interactive chatbot for resume questions

## 📝 Content Guidelines

### Images to Add:
- Professional headshot for Hero section
- Project screenshots/mockups
- Favicon (`public/favicon.ico`)
- Social media preview image

### Content to Customize:
- Personal bio and story
- Skills and technologies
- Project descriptions and links
- Contact information
- Social media profiles

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy dist/ folder to gh-pages branch
```

## 📱 Responsive Breakpoints

- Mobile: 320px - 767px
- Tablet: 768px - 1023px  
- Desktop: 1024px+

## 🎨 Design System

### Colors
- Primary: Blue (#2563eb)
- Text: Gray scale (#1f2937 to #6b7280)
- Background: White/Light gray

### Typography
- Font: Inter (Google Fonts)
- Headings: Bold weights (600-700)
- Body: Regular (400-500)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Ready to showcase your work?** Customize the content and deploy your portfolio!