import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, User, Send, MessageCircle, Sparkles } from 'lucide-react';
import { useAIChatbot } from '../hooks/useAI';

const AIChatSection = () => {
  const [inputValue, setInputValue] = useState('');
  const { conversation, isLoading, askQuestion } = useAIChatbot();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversation]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const question = inputValue;
    setInputValue('');
    await askQuestion(question);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
  };

  const quickQuestions = [
    "What's Asher's educational background?",
    "Tell me about his technical skills",
    "What projects has he worked on?",
    "What are his hobbies and interests?",
    "How can I contact Asher?",
    "What's his experience with web development?"
  ];

  return (
    <section id="ai-chat" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ask My AI Assistant
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about my background, skills, or experience? 
            Chat with my AI assistant to learn more about me!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-primary-600 text-white p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">AI Assistant</h3>
                  <p className="text-white/80">Ask me anything about Asher - check browser console for AI status</p>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                  <Sparkles size={24} className="text-white/60" />
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="h-96 overflow-y-auto p-6 bg-gray-50">
              {conversation.length === 0 && (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle size={32} className="text-primary-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    👋 Hi! I'm Asher's AI Assistant
                  </h4>
                  <p className="text-gray-600 mb-6">
                    I can answer questions about Asher's education, skills, projects, hobbies, and more!
                  </p>
                  
                  {/* Quick Questions Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto">
                    {quickQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(question)}
                        className="text-left p-3 bg-white rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors text-sm text-gray-700 hover:text-primary-700"
                      >
                        <span className="font-medium">💬</span> {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {conversation.map((entry) => (
                <div key={entry.id} className="mb-6">
                  {/* User Question */}
                  <div className="flex justify-end mb-3">
                    <div className="flex items-start gap-3 max-w-xs lg:max-w-md">
                      <div className="bg-primary-600 text-white p-4 rounded-2xl rounded-br-sm">
                        <p className="text-sm">{entry.question}</p>
                      </div>
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <User size={16} className="text-primary-600" />
                      </div>
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex justify-start">
                    <div className="flex items-start gap-3 max-w-xs lg:max-w-md">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot size={16} className="text-gray-600" />
                      </div>
                      <div className="bg-white p-4 rounded-2xl rounded-bl-sm border border-gray-200">
                        <p className="text-sm text-gray-800 leading-relaxed">{entry.response.content}</p>
                        {entry.response.suggestions && entry.response.suggestions.length > 0 && (
                          <div className="mt-3 space-y-2">
                            <p className="text-xs text-gray-500 font-medium">Try asking:</p>
                            {entry.response.suggestions.slice(0, 2).map((suggestion, index) => (
                              <button
                                key={index}
                                onClick={() => handleSuggestionClick(suggestion)}
                                className="block text-xs text-primary-600 hover:text-primary-700 hover:underline bg-primary-50 px-2 py-1 rounded"
                              >
                                {suggestion}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <Bot size={16} className="text-gray-600" />
                    </div>
                    <div className="bg-white p-4 rounded-2xl rounded-bl-sm border border-gray-200">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-6 bg-white border-t border-gray-200">
              <form onSubmit={handleSubmit} className="flex gap-3">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about Asher's experience, skills, projects..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                >
                  <Send size={16} />
                  <span className="hidden sm:inline">Send</span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIChatSection;