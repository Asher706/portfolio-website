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
  private openAIKey: string | null = null;
  private useMockAI: boolean = false;

  constructor() {
    this.openAIKey = import.meta.env.VITE_OPENAI_API_KEY || null;
    
    this.useMockAI = !this.openAIKey;
    
    if (this.openAIKey) {
      console.log('AI Service initialized with real OpenAI API');
    } else {
      console.log('AI Service initialized in mock mode (no API key found)');
    }
  }

  async analyzeContactMessage(message: string, subject?: string): Promise<ContactAnalysis> {
    await new Promise(resolve => setTimeout(resolve, 500));

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

  async getProjectRecommendations(userInterests?: string[]): Promise<string[]> {
    await new Promise(resolve => setTimeout(resolve, 300));

    
    const allProjects = [
      "E-commerce Platform with AI Recommendations",
      "Real-time Chat Application",
      "Data Visualization Dashboard",
      "Mobile-First Progressive Web App",
      "AI-Powered Content Management System"
    ];

    return allProjects.sort(() => 0.5 - Math.random()).slice(0, 3);
  }

  
  async getChatbotResponse(question: string): Promise<AIResponse> {
    console.log('🤖 AI REQUEST:', question);
    console.log('🔧 CONFIG:', { useMockAI: this.useMockAI, hasApiKey: !!this.openAIKey });

    if (this.useMockAI) {
      console.log('⚠️ USING MOCK AI - No real OpenAI connection');
      await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
      const response = this.getIntelligentMockResponse(question);
      response.content = "🤖 [MOCK AI] " + response.content;
      return response;
    } else {
      console.log('🚀 ATTEMPTING REAL OPENAI API CALL...');
      const response = await this.getOpenAIResponse(question);
      if (response.content.includes('🤖 [MOCK AI]')) {
        console.log('❌ OPENAI FAILED - Fell back to mock');
      } else {
        console.log('✅ REAL OPENAI SUCCESS!');
        response.content = "🤖 [REAL AI] " + response.content;
      }
      return response;
    }
  }

  private async getOpenAIResponse(question: string): Promise<AIResponse> {
    try {
      console.log('🌐 Making OpenAI API request for:', question);
      console.log('🔑 API Key present:', this.openAIKey ? 'Yes' : 'No');
      console.log('🔑 API Key length:', this.openAIKey?.length || 0);
      
      const requestPayload = {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `You are an AI assistant representing Asher Levin's portfolio website. You should answer questions about Asher in a friendly, professional, and conversational tone. Here's everything you know about Asher:

EDUCATION & BACKGROUND:
- Has an Associates degree in IT from Raritan Valley Community College
- Got started with programming when his father taught him how to make websites as a child
- This early exposure sparked a lifelong passion for technology

TECHNICAL SKILLS:
- Frontend: React, TypeScript, modern JavaScript, responsive web design
- Backend: Node.js, Python, API development
- Database management and design
- Full-stack development capabilities
- Experience with AI integration (like this very chatbot!)

PROJECTS:
- Created an Employee Management System that demonstrates his full-stack skills
- The project files are available for download on his portfolio
- Focuses on clean code, user experience, and modern development practices

HOBBIES & INTERESTS:
- Avid reader of science fiction novels
- Enjoys board games and video games
- Participates in TTRPGs (tabletop role-playing games) like D&D
- Practices dog training (which teaches patience and problem-solving skills useful in coding)

CONTACT INFORMATION:
- Email: levinasher37@gmail.com
- Phone: (908) 638-6954
- Location: Hunterdon County, New Jersey

PERSONALITY:
- Passionate about technology with a balanced lifestyle
- Creative and adaptable
- Enjoys continuous learning and problem-solving
- Methodical approach to challenges
- Friendly and open to collaboration

Keep your responses engaging, informative, and around 2-3 sentences. Connect his diverse interests to his professional skills when relevant.`
          },
          {
            role: 'user',
            content: question
          }
        ],
        max_tokens: 300,
        temperature: 0.8
      };

      console.log('📤 Request payload:', JSON.stringify(requestPayload, null, 2));

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.openAIKey}`,
        },
        body: JSON.stringify(requestPayload)
      });

      console.log('📥 Response status:', response.status);
      console.log('📥 Response headers:', Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ OpenAI API error response:', errorText);
        
        let errorData;
        try {
          errorData = JSON.parse(errorText);
        } catch {
          errorData = { error: { message: errorText } };
        }
        
        throw new Error(`OpenAI API error: ${response.status} - ${errorData.error?.message || errorText}`);
      }

      const data = await response.json();
      console.log('✅ OpenAI API response received:', data);
      
      const aiContent = data.choices[0].message.content.trim();
      console.log('🤖 AI Response content:', aiContent);
      
      return {
        content: aiContent,
        confidence: 0.95,
        suggestions: this.getContextualSuggestions(question)
      };
    } catch (error) {
      console.error('❌ OpenAI API error:', error);
      console.log('🔄 Falling back to intelligent mock response');
      
      const mockResponse = this.getIntelligentMockResponse(question);
      mockResponse.content = "🤖 [MOCK AI - API Failed] " + mockResponse.content + 
        " (OpenAI API call failed - this is a fallback response)";
      return mockResponse;
    }
  }

  private getIntelligentMockResponse(question: string): AIResponse {
    const q = question.toLowerCase();
    
    
    const responses: Record<string, { content: string; confidence: number }> = {
      greeting: {
        content: "Hi there! I'm Asher's AI assistant. I'm here to help you learn about his background, skills, and experience. What would you like to know about him?",
        confidence: 0.9
      },
      experience: {
        content: "Asher's journey with technology began early when his father introduced him to web development as a child. This sparked a lifelong passion that led him to pursue an Associates degree in IT at Raritan Valley Community College. He's since developed expertise in full-stack development, combining his academic foundation with hands-on project experience.",
        confidence: 0.9
      },
      skills_technical: {
        content: "Asher has strong technical skills across the full development stack. On the frontend, he specializes in React and TypeScript for building interactive user interfaces. For backend development, he works with Node.js and Python, and he's experienced with database management and API development. He also has hands-on experience integrating AI features into applications, as you can see with this very chatbot!",
        confidence: 0.9
      },
      projects: {
        content: "Asher's standout project is his Employee Management System, which showcases his full-stack development capabilities. It demonstrates his ability to build complete applications from database design to user interface. You can actually download the project files directly from his portfolio to see his coding style and architectural approach. He focuses on clean code, user experience, and modern development practices.",
        confidence: 0.85
      },
      education: {
        content: "Asher earned his Associates degree in Information Technology from Raritan Valley Community College. His education provided a solid foundation in IT fundamentals, which he's continuously built upon through self-directed learning and practical project work. He believes in combining formal education with hands-on experience to stay current with rapidly evolving technology.",
        confidence: 0.9
      },
      hobbies: {
        content: "Outside of coding, Asher has a rich set of interests that keep him creative and well-rounded. He's an avid reader of science fiction novels, which often inspire innovative thinking in his tech work. He enjoys both board games and video games, appreciating good game design and strategy. He's also into TTRPGs (tabletop role-playing games) like D&D, which exercises creativity and problem-solving skills. Additionally, he practices dog training, which requires patience, consistency, and understanding of behavioral patterns - skills that translate well to debugging code!",
        confidence: 0.8
      },
      contact: {
        content: "Asher is always excited to connect with fellow developers, potential collaborators, or anyone interested in technology! You can reach him via email at levinasher37@gmail.com or give him a call at (908) 638-6954. He's based in Hunterdon County, New Jersey. Whether you're interested in discussing projects, sharing ideas, or just talking tech, he'd love to hear from you.",
        confidence: 0.9
      },
      personality: {
        content: "From what I can tell, Asher is passionate about technology but maintains a healthy balance with diverse interests. His early start in web development shows natural curiosity, while his varied hobbies suggest creativity and adaptability. He seems to approach problems methodically (useful in both coding and dog training!) and enjoys continuous learning, whether through formal education or exploring new technologies.",
        confidence: 0.8
      }
    };

    let bestMatch = 'greeting';

    if (/^(hi|hello|hey|greetings)/i.test(q)) {
      bestMatch = 'greeting';
    }
    else if (/(experience|background|journey|story|started|began)/i.test(q)) {
      bestMatch = 'experience';
    }
    else if (/(skill|technology|tech|programming|languages|framework|development)/i.test(q)) {
      bestMatch = 'skills_technical';
    }
    else if (/(project|portfolio|work|built|created|employee.management)/i.test(q)) {
      bestMatch = 'projects';
    }
    else if (/(education|school|college|degree|study|learn)/i.test(q)) {
      bestMatch = 'education';
    }
    else if (/(hobby|interest|fun|games?|reading|books?|sci.?fi|ttrpg|rpg|dog|training)/i.test(q)) {
      bestMatch = 'hobbies';
    }
    else if (/(contact|reach|email|phone|call|location|where|hire|work.with)/i.test(q)) {
      bestMatch = 'contact';
    }
    else if (/(who|personality|person|like|describe|tell.me.about)/i.test(q)) {
      bestMatch = 'personality';
    }

    const response = responses[bestMatch] || responses.greeting;
    
    return {
      ...response,
      suggestions: this.getContextualSuggestions(question, bestMatch)
    };
  }

  private getContextualSuggestions(question: string, category?: string): string[] {
    const allSuggestions = [
      "What's Asher's educational background?",
      "Tell me about his technical skills",
      "What projects has he worked on?",
      "What are his hobbies outside of coding?",
      "How did he get started in programming?",
      "What programming languages does he use?",
      "Can you describe his personality?",
      "How can I get in touch with Asher?",
      "What makes him passionate about technology?",
      "Tell me about his Employee Management project"
    ];

    const filtered = allSuggestions.filter(s => 
      !s.toLowerCase().includes(category || '') && 
      !question.toLowerCase().includes(s.toLowerCase().split(' ')[2] || '')
    );
    
    return filtered.sort(() => 0.5 - Math.random()).slice(0, 3);
  }

  isAvailable(): boolean {
    return true;
  }
}

export const aiService = new AIService();