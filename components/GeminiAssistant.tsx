
import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, MessageSquare, Loader2 } from 'lucide-react';
import { Message } from '../types';
import { getGeminiResponse } from '../services/geminiService';

export const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Welcome to Quality Masters. I am your Strategic Concierge. How may I assist your inquiries today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const responseContent = await getGeminiResponse(messages, input);
    
    setMessages(prev => [...prev, { role: 'assistant', content: responseContent }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="glass w-[350px] md:w-[400px] h-[550px] rounded-3xl overflow-hidden flex flex-col shadow-2xl animate-in zoom-in-95 fade-in duration-300">
          <div className="p-4 bg-amber-500 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Bot className="text-slate-900" size={24} />
              <div className="flex flex-col">
                <span className="font-bold text-slate-900 text-sm">Strategic Concierge</span>
                <span className="text-[10px] text-slate-800 uppercase font-bold tracking-widest">AI Powered Intelligence</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-900 hover:scale-110 transition-transform">
              <X size={24} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950/80 scrollbar-hide">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-amber-500 text-slate-900 font-medium' 
                    : 'bg-slate-900 text-slate-300 border border-slate-800'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-900 border border-slate-800 px-4 py-3 rounded-2xl">
                  <Loader2 className="animate-spin text-amber-500" size={18} />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-slate-800 flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about our strategy..."
              className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-amber-500 transition-colors text-sm"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-amber-500 p-2.5 rounded-xl text-slate-900 hover:bg-amber-400 disabled:opacity-50 transition-all"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all group"
        >
          <MessageSquare className="text-slate-900 group-hover:rotate-12 transition-transform" size={28} />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-600"></span>
          </span>
        </button>
      )}
    </div>
  );
};
