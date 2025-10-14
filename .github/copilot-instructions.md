# Portfolio Website - AI Coding Instructions

## Project Overview
A clean, professional portfolio website built with modern JavaScript framework showcasing work and integrating AI-powered features. Focus on minimalist design, smooth interactions, and intelligent user experiences.

## Architecture & Tech Stack
**Framework**: React/Vue.js/Next.js with TypeScript for type safety
**Styling**: CSS Modules or Tailwind CSS for clean, maintainable styles
**AI Integration**: OpenAI API, Gemini, or Claude for interactive features
**Build**: Vite for fast development and optimized production builds

```
/
├── src/
│   ├── components/      # UI components (Header, ProjectCard, ContactForm)
│   ├── pages/          # Route components (Home, About, Projects, Contact)
│   ├── styles/         # Global styles and component-specific CSS
│   ├── hooks/          # Custom React hooks for AI integration
│   ├── services/       # API calls and AI service integrations
│   ├── utils/          # Helper functions and constants
│   └── assets/         # Images, icons, fonts
├── public/             # Static assets and favicon
├── .env                # Environment variables for API keys
└── docs/               # Project documentation
```

## Development Conventions

### File Naming
- Components: PascalCase (`ProjectCard.tsx`, `AIChat.vue`)
- Pages/Routes: PascalCase (`HomePage.tsx`, `ContactPage.vue`)
- Utilities/Services: camelCase (`aiService.ts`, `portfolioHelpers.ts`)
- Styles: Match component names (`ProjectCard.module.css`)

### Clean Design Principles
- **Minimalist Layout**: Generous white space, clean typography (Inter/Roboto fonts)
- **Professional Color Palette**: Neutral grays with single accent color
- **Subtle Animations**: CSS transitions, Framer Motion for smooth interactions
- **Mobile-First**: Responsive breakpoints at 768px, 1024px, 1440px
- **Component Architecture**: Atomic design - atoms, molecules, organisms

### AI Integration Patterns
- **Smart Contact Form**: AI-powered response suggestions and sentiment analysis
- **Project Recommendations**: AI suggests relevant projects based on visitor interests
- **Interactive Resume**: AI chatbot to answer questions about experience
- **Content Generation**: AI-assisted project descriptions and technical explanations
- **Personalization**: Dynamic content adaptation based on user interaction patterns

## Key Development Workflows

### Framework Setup (React Example)
```bash
npm create vite@latest . -- --template react-ts
npm install @types/node framer-motion
npm install openai @anthropic-ai/sdk    # AI integrations
npm install tailwindcss @tailwindcss/typography
npm run dev                              # Start development server
```

### AI Service Integration
```typescript
// src/services/aiService.ts
export class AIService {
  async generateProjectDescription(projectData: ProjectData): Promise<string>
  async analyzeContactMessage(message: string): Promise<MessageAnalysis>
  async getResumeResponse(question: string): Promise<string>
}
```

### Asset Optimization
- Compress images to appropriate formats (WebP for photos, SVG for icons)
- Minify CSS and JavaScript for production
- Implement lazy loading for images and content below the fold

### Performance Considerations
- Keep initial bundle size minimal
- Use semantic HTML for better SEO
- Implement proper meta tags (Open Graph, Twitter Cards)
- Ensure fast loading times (target <3 seconds on 3G)

## Component Architecture Examples

### Core Components
```typescript
// Clean, minimal component structure
interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl: string;
}

// AI-enhanced components
interface AIContactFormProps {
  onSubmit: (message: string, aiSuggestions: string[]) => void;
}
```

### Professional Styling Patterns
```css
/* Consistent spacing system */
:root {
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;
}

/* Minimal color palette */
:root {
  --color-primary: #2563eb;
  --color-text: #1f2937;
  --color-text-secondary: #6b7280;
  --color-background: #ffffff;
  --color-surface: #f9fafb;
}
```

## Code Quality Standards
- Write semantic, accessible HTML using proper heading hierarchy
- Implement responsive design breakpoints: mobile (320px), tablet (768px), desktop (1024px+)
- Include focus management for keyboard navigation
- Test across major browsers (Chrome, Firefox, Safari, Edge)
- Validate HTML and check for accessibility compliance

## Content Guidelines
- Showcase 3-6 best projects with detailed case studies
- Include clear call-to-action buttons and contact methods
- Write compelling, concise copy that highlights unique value proposition
- Ensure all links work and open appropriately (internal vs external)
- Include loading states and error handling for dynamic content

## AI Integration Guidelines

### Environment Setup
```bash
# Required environment variables
VITE_OPENAI_API_KEY=your_openai_key
VITE_ANTHROPIC_API_KEY=your_anthropic_key
# Use VITE_ prefix for client-side access in Vite
```

### Common AI Features to Implement
- **Smart Contact Forms**: Auto-suggest professional responses
- **Interactive CV**: AI chatbot answering experience questions  
- **Project Insights**: AI-generated technology explanations
- **Visitor Personalization**: Adaptive content based on interaction patterns

### Performance & Security
- Keep AI API calls on server-side when possible
- Implement loading states for AI-powered features
- Cache AI responses to reduce API costs
- Sanitize all user inputs before AI processing

## Essential Project Patterns
- Use TypeScript for better code reliability and AI integration types
- Implement error boundaries for AI feature failures
- Create fallback content when AI services are unavailable
- Focus on fast initial load, enhance progressively with AI features

Remember: Balance AI enhancement with core functionality - the portfolio should work perfectly even if AI features fail.