import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, X, ArrowUp, Sparkles, Minimize2, Loader2 } from 'lucide-react';

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

  // Extended Knowledge Base derived from site content
  const SYSTEM_INSTRUCTION = `
    You are the Concierge for Madison Studio, a luxury AI-powered brand operating system.
    Your persona is sophisticated, efficient, and helpful—like a high-end hotel concierge or a trusted executive assistant.
    
    **Your Goals:**
    1. Qualify the user: Ensure you understand their brand type (e.g., beauty, fashion, agency) and content challenges.
    2. Answer questions using the Knowledge Base below.
    3. Guide them to "Book a Demo" or "Enter the Studio" (Log in).

    **IMPORTANT FORMATTING RULES:**
    - Do NOT use markdown formatting.
    - Do NOT use bold (**text**) or italics (*text*).
    - Do NOT use headers (# Header).
    - Use plain text only.

    **Knowledge Base:**
    
    **Identity:** 
    Madison Studio is not generic AI. It is an AI Editorial Director that turns scattered brand knowledge into a single, living system. It is designed for beauty, fragrance, and creative e-commerce brands.

    **Core Problems Solved:**
    - Scattered content in docs/emails.
    - Inconsistent brand voice from freelancers/AI.
    - No central source of truth for products.
    - "Generic" AI output that sounds robotic.

    **Key Features:**
    - **Brand Brain:** A centralized knowledge base that stores voice, tone, values, and products. It learns your "Voice Fingerprint".
    - **The Forge:** Content creation engine for blogs, emails, social, press releases.
    - **Multiply:** Repurposing engine. Turns 1 master piece (e.g., blog) into 10+ derivatives (tweets, emails, posts).
    - **Image Studio:** AI product photography generator (uses Google Gemini/Imagen) that follows visual brand guidelines.
    - **Calendar:** Schedule and organize content. Syncs with Google Calendar.
    - **Marketplace:** Generate listings for Shopify, Etsy, TikTok Shop.

    **Pricing Tiers:**
    - **Atelier ($49/mo):** For independent creators. 1 org, 25 products, 50 master pieces.
    - **Studio ($199/mo):** Most popular. For growing brands. 3 orgs, 100 products, unlimited master content, marketplace integrations.
    - **Maison ($599/mo):** For agencies. Unlimited orgs/products/content, white-label options.
    - *Note: Yearly billing saves ~20% (2 months free).*

    **Brand Health:**
    A score (0-100) tracking how well defined your brand is. Higher scores = better AI content.

    **Integrations:**
    Shopify, Google Calendar, Anthropic Claude, Google Gemini. (Coming soon: Klaviyo, Zapier).

    **Tone Guidelines:**
    - Sophisticated, editorial, "old money" aesthetic.
    - Concise, precise, confident.
    - Avoid emojis (use sparingly if needed).
    - Use sentence fragments for stylistic effect.
    - No "AI slop" (hype, exclamation marks, clichés).

    **Behavior:**
    - If the user answers your qualification question, acknowledge it and pivot to how Madison solves their specific problems.
    - If asked technical questions not here, suggest booking a demo.
    - Maintain the "Velvet Rope" vibe: We are for serious brands who care about quality.
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
      
      // Filter out the initial greeting from history to prevent role ordering issues
      const history = messages.slice(1).map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: [...history, { role: 'user', parts: [{ text: userMessage }] }],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
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

  // Helper to strip markdown aggressively
  const cleanMessage = (text: string) => {
    return text
      .replace(/\*\*/g, '')   // Remove all double asterisks
      .replace(/\*/g, '')     // Remove all single asterisks
      .replace(/__/g, '')     // Remove double underscores
      .replace(/_/g, '')      // Remove single underscores
      .replace(/#+\s/g, '')   // Remove headers
      .replace(/`/g, '');     // Remove backticks
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-[100] p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center ${
          isOpen 
            ? 'bg-white text-ink-black border border-stone-200 rotate-90 md:rotate-90 rotate-0 hidden md:flex' // Hide toggle on mobile when open
            : 'bg-deep-green text-white border border-transparent'
        }`}
        aria-label="Open Concierge"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed z-[100] bg-warm-white flex flex-col transition-all duration-300 overflow-hidden 
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
          
          /* Mobile Styles: Full Screen */
          inset-0 w-full h-[100dvh] rounded-none
          ${isOpen ? 'translate-y-0 scale-100' : 'translate-y-12 scale-95'}
          
          /* Desktop Styles: Widget */
          md:inset-auto md:bottom-24 md:right-6 md:w-[380px] md:h-[70vh] md:max-h-[600px] md:rounded-sm md:shadow-2xl md:border md:border-stone-200 md:origin-bottom-right
          ${isOpen ? 'md:translate-y-0 md:scale-100' : 'md:translate-y-4 md:scale-95'}
        `}
      >
        {/* Header */}
        <div className="bg-white px-6 py-4 border-b border-stone-100 flex justify-between items-center flex-shrink-0">
          <div>
            <h3 className="font-serif text-xl text-ink-black font-medium flex items-center gap-2">
              Madison Concierge
              <div className="w-2 h-2 bg-deep-green rounded-full animate-pulse"></div>
            </h3>
            <p className="text-xs text-stone-400 uppercase tracking-widest">Gemini 3 Pro Preview</p>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-stone-400 hover:text-ink-black transition-colors p-2 md:p-0"
          >
            {/* Show X on mobile (since toggle is hidden) and Minimize on desktop */}
            <X size={24} className="md:hidden" />
            <Minimize2 size={18} className="hidden md:block" />
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
                <p className="whitespace-pre-wrap">{msg.role === 'model' ? cleanMessage(msg.text) : msg.text}</p>
              </div>
              {msg.role === 'model' && idx === messages.length - 1 && !hasInteracted && messages.length === 1 && (
                <div className="mt-3 flex flex-wrap gap-2 animate-fade-in">
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
                   <button 
                    onClick={() => { setInput("I'm a Founder."); handleSend(); }}
                    className="text-xs bg-white border border-stone-200 px-3 py-2 rounded-full hover:border-muted-gold hover:text-deep-green transition-colors text-stone-500"
                  >
                    Founder
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
        <div className="p-4 bg-white border-t border-stone-100 flex-shrink-0 safe-area-bottom">
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
        </div>
      </div>
    </>
  );
};

export default SecretaryChat;