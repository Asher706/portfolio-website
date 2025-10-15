import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';
import { useAIChatbot } from '../hooks/useAI';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const { conversation, isLoading, askQuestion } = useAIChatbot();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  console.log('AIChatbot component rendered, isOpen:', isOpen);

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
    "What's your experience with React?",
    "Tell me about your recent projects",
    "What technologies do you work with?",
    "How do you approach new projects?"
  ];

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => {
            console.log('Chatbot button clicked!');
            setIsOpen(true);
          }}
          className="fixed bottom-6 right-6 w-16 h-16 bg-blue-600 text-white rounded-full shadow-xl hover:bg-blue-700 transition-all duration-300 z-50 flex items-center justify-center hover:scale-110 border-4 border-white"
          title="Chat with AI Assistant"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-6 right-6 w-96 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-primary-600 text-white rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="font-semibold">AI Assistant</h3>
                  <p className="text-xs text-white/80">Ask about Asher's experience</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {conversation.length === 0 && (
                <div className="text-center text-gray-500 py-8">
                  <Bot size={32} className="mx-auto mb-2 text-primary-600" />
                  <p className="text-sm mb-4">Hi! I'm Asher's AI assistant. Ask me anything about his experience, skills, or projects!</p>
                  <div className="space-y-2">
                    {quickQuestions.map((question) => (
                      <button
                        key={question}
                        onClick={() => handleSuggestionClick(question)}
                        className="block w-full text-left text-xs bg-gray-50 hover:bg-gray-100 p-2 rounded-lg transition-colors"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {conversation.map((entry) => (
                <div key={entry.id} className="space-y-3">
                  {/* User Question */}
                  <div className="flex justify-end">
                    <div className="flex items-start gap-2 max-w-xs">
                      <div className="bg-primary-600 text-white p-3 rounded-2xl rounded-br-sm">
                        <p className="text-sm">{entry.question}</p>
                      </div>
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <User size={14} className="text-primary-600" />
                      </div>
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex justify-start">
                    <div className="flex items-start gap-2 max-w-xs">
                      <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot size={14} className="text-gray-600" />
                      </div>
                      <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-sm">
                        <p className="text-sm mb-2">{entry.response.content}</p>
                        {entry.response.suggestions && entry.response.suggestions.length > 0 && (
                          <div className="space-y-1 mt-2">
                            {entry.response.suggestions.slice(0, 2).map((suggestion) => (
                              <button
                                key={suggestion}
                                onClick={() => handleSuggestionClick(suggestion)}
                                className="block text-xs text-primary-600 hover:text-primary-700 hover:underline"
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
                <div className="flex justify-start">
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                      <Bot size={14} className="text-gray-600" />
                    </div>
                    <div
                      className="bg-gray-100 p-3 rounded-2xl rounded-bl-sm"
                      aria-live="polite"
                      aria-label="AI response loading"
                    >
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce ai-bounce-dot"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce ai-bounce-dot" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce ai-bounce-dot" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about Asher's experience..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;

/* Accessibility: Reduce bounce animation for users who prefer reduced motion */
const style = document.createElement('style');
style.innerHTML = `
@media (prefers-reduced-motion: reduce) {
  .ai-bounce-dot {
    animation: none !important;
  }
}
`;
document.head.appendChild(style);