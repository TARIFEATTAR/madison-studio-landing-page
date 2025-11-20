import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, X, Send, Sparkles, ArrowUp, Minimize2, Loader2 } from 'lucide-react';
import Button from './ui/Button';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const SecretaryChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'model', 
      text: "Welcome to Madison Studio. I am the concierge. To ensure we are the right fit for your needs, may I ask what type of brand you are building?" 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // System Instruction / Knowledge Base
  const SYSTEM_INSTRUCTION = `
    You are the Concierge for Madison Studio, a luxury AI-powered brand operating system for beauty, fragrance, and creative e-commerce brands.
    Your persona is sophisticated, efficient, and helpful—like a high-end hotel concierge or a trusted executive assistant. 
    
    **Your Goals:**
    1. Qualify the user: If this is the start of the conversation, ensure you understand their brand type (e.g., beauty, fashion, agency) and their primary content challenge.
    2. Answer questions about Madison Studio using the Knowledge Base below.
    3. Encourage them to "Book a Demo" or "Enter the Studio" (Log in) if they seem interested.

    **Knowledge Base:**
    - **Product:** Madison Studio transforms scattered brand knowledge into a single living system that writes and creates exactly like the brand.
    - **Key Features:**
      - *Brand Brain:* Centralized knowledge base (voice, tone, products).
      - *The Forge:* Content creation engine (blogs, emails, social).
      - *Multiply:* Repurposing engine (turns 1 master piece into 10+ derivatives).
      - *Image Studio:* AI product photography using Google Gemini & Imagen.
      - *Calendar:* Content scheduling and planning.
    - **Pricing:**
      - *Atelier ($49/mo):* For independent creators.
      - *Studio ($199/mo):* For growing brands (most popular).
      - *Maison ($599/mo):* For agencies and holdings.
    - **Audience:** Founders, marketing teams, creative agencies.
    - **Tone:** Sophisticated, editorial, "old money" aesthetic, refined, minimalist. Avoid emojis unless necessary. Use sentence fragments for style. Be concise.

    **Behavior:**
    - If the user answers your qualification questions, acknowledge them briefly and ask how you can help with their content operations.
    - If asked about technical details not in the knowledge base, politely suggest booking a demo for a technical deep dive.
    - Act as a "velvet rope" policy: You are polite but exclusive. Madison isn't for everyone; it's for brands that care about quality.
  `;

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);
    setHasInteracted(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Construct history for the API
      // Map internal role 'model' to API role 'model' and 'user' to 'user'
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      // Add the new user message
      history.push({ role: 'user', parts: [{ text: userMessage }] });

      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: history,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7, // Balanced creativity and precision
          maxOutputTokens: 300, // Keep responses concise
        }
      });

      const responseText = response.text || "I apologize, but I am unable to access that information at the moment.";

      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I apologize, I am having trouble connecting to the Studio. Please try again in a moment." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center ${
          isOpen 
            ? 'bg-white text-ink-black border border-stone-200 rotate-90' 
            : 'bg-deep-green text-white border border-transparent'
        }`}
        aria-label="Open Concierge"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[90vw] max-w-[380px] bg-warm-white rounded-sm shadow-2xl border border-stone-200 flex flex-col transition-all duration-300 origin-bottom-right overflow-hidden ${
          isOpen 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
        }`}
        style={{ maxHeight: '600px', height: 'min(600px, 70vh)' }}
      >
        {/* Header */}
        <div className="bg-white px-6 py-4 border-b border-stone-100 flex justify-between items-center flex-shrink-0">
          <div>
            <h3 className="font-serif text-xl text-ink-black font-medium flex items-center gap-2">
              Madison Concierge
              <div className="w-2 h-2 bg-deep-green rounded-full animate-pulse"></div>
            </h3>
            <p className="text-xs text-stone-400 uppercase tracking-widest">Agency Intelligence</p>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-stone-400 hover:text-ink-black transition-colors"
          >
            <Minimize2 size={18} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-warm-white custom-scrollbar">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div 
                className={`max-w-[85%] px-5 py-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-white text-ink-black border border-stone-200 rounded-br-sm' 
                    : 'bg-deep-green text-white border border-deep-green rounded-bl-sm shadow-md'
                }`}
              >
                {msg.role === 'model' && idx === 0 && (
                  <div className="flex items-center gap-1.5 mb-2 opacity-70">
                    <Sparkles size={12} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Concierge</span>
                  </div>
                )}
                <p className="whitespace-pre-wrap">{msg.text}</p>
              </div>
              {msg.role === 'model' && idx === messages.length - 1 && !hasInteracted && messages.length === 1 && (
                <div className="mt-3 flex gap-2 animate-fade-in">
                  <button 
                    onClick={() => { setInput("I manage a Beauty/Skincare brand."); handleSend(); }}
                    className="text-xs bg-white border border-stone-200 px-3 py-2 rounded-full hover:border-muted-gold hover:text-deep-green transition-colors text-stone-500"
                  >
                    Beauty Brand
                  </button>
                  <button 
                    onClick={() => { setInput("I run a Creative Agency."); handleSend(); }}
                    className="text-xs bg-white border border-stone-200 px-3 py-2 rounded-full hover:border-muted-gold hover:text-deep-green transition-colors text-stone-500"
                  >
                    Agency
                  </button>
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start animate-fade-in">
              <div className="bg-deep-green/10 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1">
                <span className="w-1.5 h-1.5 bg-deep-green rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                <span className="w-1.5 h-1.5 bg-deep-green rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                <span className="w-1.5 h-1.5 bg-deep-green rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-stone-100 flex-shrink-0">
          <div className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              disabled={isLoading}
              className="w-full bg-stone-50 border border-stone-200 text-ink-black rounded-full pl-5 pr-12 py-3.5 focus:outline-none focus:border-deep-green focus:ring-1 focus:ring-deep-green transition-all text-sm shadow-inner placeholder:text-stone-400"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="absolute right-2 p-2 bg-deep-green text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-black transition-colors shadow-sm"
            >
              {isLoading ? <Loader2 size={16} className="animate-spin" /> : <ArrowUp size={16} />}
            </button>
          </div>
          <div className="mt-2 text-center">
             <span className="text-[10px] text-stone-400 uppercase tracking-wider">Powered by Gemini 3 Pro</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecretaryChat;