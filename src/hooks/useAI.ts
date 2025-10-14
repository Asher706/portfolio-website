import { useState, useEffect } from 'react';
import { aiService, type AIResponse, type ContactAnalysis } from '../services/aiService';

// Hook for AI-powered contact form
export const useAIContact = () => {
  const [analysis, setAnalysis] = useState<ContactAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeMessage = async (message: string, subject?: string) => {
    if (!message.trim()) return;
    
    setIsAnalyzing(true);
    try {
      const result = await aiService.analyzeContactMessage(message, subject);
      setAnalysis(result);
    } catch (error) {
      console.error('AI analysis failed:', error);
      setAnalysis(null);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return {
    analysis,
    isAnalyzing,
    analyzeMessage,
    clearAnalysis: () => setAnalysis(null)
  };
};

// Hook for AI chatbot functionality
export const useAIChatbot = () => {
  const [conversation, setConversation] = useState<Array<{
    id: string;
    question: string;
    response: AIResponse;
    timestamp: Date;
  }>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const askQuestion = async (question: string) => {
    if (!question.trim()) return;

    setIsLoading(true);
    try {
      const response = await aiService.getChatbotResponse(question);
      const newEntry = {
        id: Date.now().toString(),
        question,
        response,
        timestamp: new Date()
      };
      
      setConversation(prev => [...prev, newEntry]);
    } catch (error) {
      console.error('Chatbot error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    conversation,
    isLoading,
    askQuestion,
    clearConversation: () => setConversation([])
  };
};

// Hook for project recommendations
export const useProjectRecommendations = () => {
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getRecommendations = async (interests?: string[]) => {
    setIsLoading(true);
    try {
      const result = await aiService.getProjectRecommendations(interests);
      setRecommendations(result);
    } catch (error) {
      console.error('Recommendations failed:', error);
      setRecommendations([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Load initial recommendations on mount
    getRecommendations();
  }, []);

  return {
    recommendations,
    isLoading,
    getRecommendations,
    refreshRecommendations: () => getRecommendations()
  };
};