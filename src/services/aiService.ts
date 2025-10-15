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
  constructor() {
    // For demo purposes, we'll simulate AI responses
    // In production, you'd configure real AI API keys
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
        content: "Asher is an IT major with an associates degree in IT from Raritan Valley Community College. He's been working with computers since his father first showed him how to make websites when he was young. His passion for technology started early and has grown into professional expertise.",
        confidence: 0.9
      },
      skills: {
        content: "Asher specializes in frontend development with React and TypeScript, backend development with Node.js and Python, and modern web technologies. He's also skilled in database management and has experience with AI integration. His recent work includes the Employee Management System project.",
        confidence: 0.9
      },
      projects: {
        content: "Asher's notable project is the Employee Management System, which demonstrates his full-stack development capabilities. You can download the project files from his portfolio to see his coding style and approach to building complete applications.",
        confidence: 0.85
      },
      education: {
        content: "Asher earned his associates degree in IT from Raritan Valley Community College. His education provided a strong foundation in information technology, which he's built upon with hands-on project experience and continuous learning.",
        confidence: 0.9
      },
      hobbies: {
        content: "When he's not coding, Asher enjoys reading sci-fi novels, playing board games and video games, participating in TTRPGs (tabletop role-playing games), and dog training. These diverse interests help him stay creative and bring fresh perspectives to his development work.",
        confidence: 0.8
      },
      contact: {
        content: "You can reach Asher at levinasher37@gmail.com or call him at (908) 638-6954. He's located in Hunterdon County, New Jersey. He's always excited to discuss new projects and collaboration opportunities!",
        confidence: 0.9
      },
      default: {
        content: "I'd be happy to answer that! You can ask me about Asher's education, technical skills, projects, hobbies, or how to get in touch with him. What would you like to know?",
        confidence: 0.7
      }
    };

    const question_lower = question.toLowerCase();
    let response = responses.default;

    if (question_lower.includes('experience') || question_lower.includes('work') || question_lower.includes('background')) {
      response = responses.experience;
    } else if (question_lower.includes('skill') || question_lower.includes('technology') || question_lower.includes('tech') || question_lower.includes('programming')) {
      response = responses.skills;
    } else if (question_lower.includes('project') || question_lower.includes('portfolio') || question_lower.includes('employee management')) {
      response = responses.projects;
    } else if (question_lower.includes('education') || question_lower.includes('school') || question_lower.includes('college') || question_lower.includes('degree')) {
      response = responses.education;
    } else if (question_lower.includes('hobby') || question_lower.includes('hobbies') || question_lower.includes('interest') || question_lower.includes('fun') || question_lower.includes('games') || question_lower.includes('reading')) {
      response = responses.hobbies;
    } else if (question_lower.includes('contact') || question_lower.includes('email') || question_lower.includes('phone') || question_lower.includes('reach') || question_lower.includes('location')) {
      response = responses.contact;
    }

    const suggestions = [
      "What's Asher's educational background?",
      "Tell me about his technical skills",
      "What projects has he worked on?",
      "What are his hobbies and interests?",
      "How can I contact Asher?",
      "What's his experience with web development?"
    ];

    return {
      ...response,
      suggestions: suggestions.sort(() => 0.5 - Math.random()).slice(0, 3)
    };
  }

  // Check if AI features are available
  isAvailable(): boolean {
    // In production, check if API key is configured
    return true; // Always true for demo
  }
}

export const aiService = new AIService();