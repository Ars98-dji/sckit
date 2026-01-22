
import React, { useState, useRef, useEffect } from 'react';
import { getAIResponse } from '../services/geminiService';
import { UserMessage } from '../types';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<UserMessage[]>([
    { role: 'model', text: 'Bonjour ! Je suis l\'assistant de Skict Agency. Comment puis-je vous aider aujourd\'hui ?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await getAIResponse(userText, history);
    setMessages(prev => [...prev, { role: 'model', text: response || '' }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="w-80 md:w-96 h-[500px] glass border border-white/10 rounded-2xl shadow-2xl flex flex-col animate-in fade-in zoom-in duration-300">
          <div className="p-4 border-b border-white/10 flex justify-between items-center bg-primary/10 rounded-t-2xl">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">robot_2</span>
              <span className="font-bold uppercase tracking-widest text-sm">Skict Assistant AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-primary">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-xl text-sm ${m.role === 'user' ? 'bg-primary text-black font-bold' : 'bg-white/5 border border-white/10 text-slate-300'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl animate-pulse">
                  <div className="flex gap-1">
                    <div className="size-1.5 bg-primary rounded-full animate-bounce"></div>
                    <div className="size-1.5 bg-primary rounded-full animate-bounce delay-75"></div>
                    <div className="size-1.5 bg-primary rounded-full animate-bounce delay-150"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Votre message..."
                className="flex-grow bg-white/5 border-white/10 rounded-full px-4 py-2 text-sm focus:ring-1 focus:ring-primary outline-none"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-primary text-black size-10 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
              >
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="size-16 bg-primary text-black rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all group"
        >
          <span className="material-symbols-outlined text-3xl font-bold group-hover:rotate-12 transition-transform">chat</span>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
