// AI Service for portfolio interactions
export interface AIResponse {
  content: string;
  confidence: number;
  suggestions?: string[];
}

export interface ContactAnalysis {
  sentiment: 'positive' | 'neutral' | 'negative';
  urgency: 'low' | 'medium' | 'high';
  category: 'project' | 'collaboration' | 'question' | 'other';
  suggestions: string[];
}

class AIService {
  private apiKey: string | undefined;

  constructor() {
    // In a real implementation, you'd get this from environment variables
    // For demo purposes, we'll simulate AI responses
    this.apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  }

  // Simulate AI-powered contact form analysis
  async analyzeContactMessage(message: string, subject?: string): Promise<ContactAnalysis> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Simple keyword-based analysis (in real implementation, use actual AI)
    const urgentKeywords = ['urgent', 'asap', 'immediately', 'emergency'];
    const projectKeywords = ['project', 'website', 'app', 'development', 'build'];
    const positiveKeywords = ['great', 'awesome', 'love', 'impressed', 'amazing'];
    
    const text = `${message} ${subject || ''}`.toLowerCase();
    
    const urgency = urgentKeywords.some(keyword => text.includes(keyword)) ? 'high' : 
                   projectKeywords.some(keyword => text.includes(keyword)) ? 'medium' : 'low';
    
    const sentiment = positiveKeywords.some(keyword => text.includes(keyword)) ? 'positive' : 'neutral';
    
    const category = projectKeywords.some(keyword => text.includes(keyword)) ? 'project' : 'question';

    const suggestions = this.generateResponseSuggestions(category, sentiment);

    return {
      sentiment,
      urgency,
      category,
      suggestions
    };
  }

  // Generate suggested responses based on message analysis
  private generateResponseSuggestions(category: string, sentiment: string): string[] {
    const baseSuggestions = [
      "Thank you for reaching out! I'd love to learn more about your project.",
      "I appreciate your interest in working together. Let's schedule a call to discuss further.",
      "Thanks for your message! I'll get back to you within 24 hours with more details."
    ];

    if (category === 'project') {
      return [
        "I'm excited about your project idea! Let's set up a call to discuss your requirements and timeline.",
        "Thank you for considering me for your project. I'd love to help bring your vision to life.",
        "This sounds like an interesting challenge! I can definitely help you with this type of project."
      ];
    }

    return baseSuggestions;
  }

  // Simulate AI-powered project recommendations
  async getProjectRecommendations(userInterests?: string[]): Promise<string[]> {
    await new Promise(resolve => setTimeout(resolve, 300));

    // In a real implementation, this would analyze user behavior and interests
    const allProjects = [
      "E-commerce Platform with AI Recommendations",
      "Real-time Chat Application",
      "Data Visualization Dashboard",
      "Mobile-First Progressive Web App",
      "AI-Powered Content Management System"
    ];

    // Return random selection for demo
    return allProjects.sort(() => 0.5 - Math.random()).slice(0, 3);
  }

  // Simulate AI chatbot for resume/experience questions
  async getChatbotResponse(question: string): Promise<AIResponse> {
    await new Promise(resolve => setTimeout(resolve, 400));

    // Simple keyword matching for demo (replace with actual AI in production)
    const responses = {
      experience: {
        content: "I have over [X] years of experience in full-stack development, working with modern frameworks like React, Node.js, and TypeScript. I specialize in creating responsive web applications and integrating AI features.",
        confidence: 0.9
      },
      skills: {
        content: "My core skills include React/Vue.js, TypeScript, Node.js, Python, cloud deployment (AWS/Vercel), and AI integration (OpenAI API, machine learning). I also have strong experience in UI/UX design and database management.",
        confidence: 0.9
      },
      projects: {
        content: "I've worked on various projects including e-commerce platforms, real-time applications, and AI-powered tools. Each project focuses on clean code, user experience, and modern best practices.",
        confidence: 0.85
      },
      default: {
        content: "I'd be happy to answer that! Could you be more specific about what you'd like to know about my background, skills, or experience?",
        confidence: 0.7
      }
    };

    const question_lower = question.toLowerCase();
    let response = responses.default;

    if (question_lower.includes('experience') || question_lower.includes('work')) {
      response = responses.experience;
    } else if (question_lower.includes('skill') || question_lower.includes('technology')) {
      response = responses.skills;
    } else if (question_lower.includes('project') || question_lower.includes('portfolio')) {
      response = responses.projects;
    }

    return {
      ...response,
      suggestions: [
        "What technologies do you specialize in?",
        "Tell me about your recent projects",
        "What's your development process like?"
      ]
    };
  }

  // Check if AI features are available
  isAvailable(): boolean {
    // In production, check if API key is configured
    return true; // Always true for demo
  }
}

export const aiService = new AIService();