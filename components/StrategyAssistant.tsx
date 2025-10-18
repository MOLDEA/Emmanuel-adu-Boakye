
import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { getBusinessInsight } from '../services/geminiService';
import { BotIcon, CloseIcon, SendIcon, UserIcon } from './icons/Icons';

const StrategyAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const initialMessage: ChatMessage = {
      role: 'model',
      content: "Hello! I'm the Ezzmax Strategy Assistant. Ask me anything about our business plan."
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([initialMessage]);
    }
  }, [isOpen]);


  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await getBusinessInsight(input);
      const modelMessage: ChatMessage = { role: 'model', content: response };
      setMessages(prev => [...prev, modelMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = { role: 'model', content: 'Sorry, I am having trouble connecting. Please try again.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };


  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-transform duration-200 transform hover:scale-110 z-50"
        aria-label="Open Strategy Assistant"
      >
        <BotIcon className="h-8 w-8" />
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-full max-w-md h-[70vh] max-h-[600px] bg-white rounded-xl shadow-2xl flex flex-col z-50">
          <header className="flex items-center justify-between p-4 bg-primary text-white rounded-t-xl">
            <h3 className="font-bold text-lg">Ezzmax Strategy Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="p-1 rounded-full hover:bg-white/20">
              <CloseIcon className="h-6 w-6" />
            </button>
          </header>
          
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                  {msg.role === 'model' && (
                    <div className="flex-shrink-0 bg-secondary text-white rounded-full p-2">
                      <BotIcon className="h-5 w-5" />
                    </div>
                  )}
                  <div className={`px-4 py-2 rounded-lg max-w-xs md:max-w-sm ${msg.role === 'user' ? 'bg-accent text-white rounded-br-none' : 'bg-gray-200 text-dark rounded-bl-none'}`}>
                    <p className="text-sm" style={{ whiteSpace: 'pre-wrap' }}>{msg.content}</p>
                  </div>
                   {msg.role === 'user' && (
                    <div className="flex-shrink-0 bg-accent text-white rounded-full p-2">
                      <UserIcon className="h-5 w-5" />
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                 <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 bg-secondary text-white rounded-full p-2">
                      <BotIcon className="h-5 w-5" />
                    </div>
                    <div className="px-4 py-3 bg-gray-200 rounded-lg rounded-bl-none">
                        <div className="flex items-center space-x-1">
                            <span className="h-2 w-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                            <span className="h-2 w-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                            <span className="h-2 w-2 bg-gray-500 rounded-full animate-bounce"></span>
                        </div>
                    </div>
                 </div>
              )}
              <div ref={chatEndRef} />
            </div>
          </div>
          
          <div className="p-4 border-t bg-white rounded-b-xl">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about our strategy..."
                className="w-full pl-4 pr-12 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                disabled={isLoading}
              />
              <button onClick={handleSend} disabled={isLoading} className="absolute inset-y-0 right-0 flex items-center justify-center w-10 h-10 text-primary disabled:text-gray-400">
                <SendIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StrategyAssistant;
