import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { X, ArrowUp, MessageSquare, Minimize2, Loader2, Feather, Calendar } from 'lucide-react';
declare global {
  interface Window {
    Cal?: any;
  }
}

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

  const openCalendar = () => {
    // Just open the link in a new tab if embed fails, or use the direct link which has the overlay param
    // But ideally we want the popup.
    // For now, let's try the simplest "open in new tab" or a custom modal handler if we had the package.
    // Since we don't have @calcom/embed-react installed, I will use a direct window.open or a standard link behavior 
    // BUT the user asked for "inline buttons", not an embed.
    // I will use a standard anchor tag styled as a button for safety, 
    // OR try to use the `data-cal-link` attribute if the script is loaded?
    // Let's stick to opening the URL provided. The URL has `overlayCalendar=true` which implies it might be intended for an iframe, 
    // but opening it directly works too.
    // Actually, to make it "Contextual", I'll just open the link.
    window.open('https://cal.com/team/madison-studio/demo?overlayCalendar=true', '_blank');
  };

  const shouldShowCalendarButton = (text: string) => {
    const lower = text.toLowerCase();
    return lower.includes('demo') || lower.includes('schedule') || lower.includes('book') || lower.includes('calendar');
  };

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

    **Knowledge Base:**
    
    **Identity:** 
    Madison Studio is not generic AI. It is an AI Editorial Director that turns scattered brand knowledge into a single, living system. It is designed for beauty, fragrance, and creative e-commerce brands.
    
    **Core Problems Solved:**
    - Scattered content in docs/emails.
    - Inconsistent brand voice from freelancers/AI.
    - No central source of truth for products.
    - "Generic" AI output that sounds robotic.

    **Key Features & Capabilities:**
    - **Brand Brain:** Centralized knowledge base (Voice, Tone, Values, Products). Learns your "Voice Fingerprint" via document upload (PDF/DOCX), website scanning, or manual input.
    - **The Forge:** Content creation engine for Blog posts, Emails, Social media (IG, LinkedIn, TikTok), Product descriptions, Press releases.
    - **Multiply:** Repurposing engine. Turns 1 master piece into 10+ derivatives (e.g., Blog -> Tweets, Emails, Posts).
    - **Image Studio:** AI product photography generator (uses Google Gemini/Imagen) that follows visual brand guidelines.
    - **Calendar:** Schedule and organize content. Syncs with Google Calendar.
    - **Marketplace:** Generate listings for Shopify, Etsy, TikTok Shop.
    - **Think Mode:** A strategic brainstorming chat to explore angles before generating content.

    **Pricing Tiers:**
    - **Atelier ($49/mo):** For independent creators. 1 org, 25 products, 50 master pieces.
    - **Studio ($199/mo):** Most popular. For growing brands. 3 orgs, 100 products, unlimited master content.
    - **Maison ($599/mo):** For agencies. Unlimited orgs/products/content, white-label options.
    - *Annual billing saves 20%.*
    - *14-day free trial available (no credit card required).*

    **Integrations:**
    - **Current:** Shopify (full sync), Google Calendar, Anthropic Claude, Google Gemini.
    - **Roadmap:** Klaviyo, Zapier, Buffer/Hootsuite.

    **Brand Health:**
    A score (0-100) tracking brand definition. Higher scores = better AI content. Categories: Core Identity, Voice, Audience, Products, Collections.

    **Technical & Privacy:**
    - **Privacy:** Content is encrypted, never shared, and NEVER used to train public AI models.
    - **Copyright:** You own full commercial rights to all generated text and images.
    - **Tech:** Uses Anthropic Claude Sonnet 4 (text) and Google Gemini (analysis/images).

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

      const history = messages.slice(1).map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash',
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

  return (
    <>
      {/* Refined Concierge Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 group flex items-center gap-3 transition-all duration-500 ${isOpen
          ? 'opacity-0 pointer-events-none translate-y-4'
          : 'opacity-100 translate-y-0'
          }`}
        aria-label="Open Concierge"
      >
        <span className="hidden md:block font-serif italic text-lg text-ink-black pr-2 border-r border-brass/30">
          Concierge
        </span>
        <div className="bg-ink-black text-white p-3 rounded-full shadow-lg border border-brass/50 group-hover:bg-brass group-hover:text-ink-black transition-colors duration-300">
          <MessageSquare size={18} strokeWidth={1.5} />
        </div>
      </button>

      {/* Elegant Chat Window */}
      <div
        className={`fixed bottom-0 sm:bottom-6 right-0 sm:right-6 z-50 w-full sm:w-[380px] bg-warm-white sm:rounded-sm shadow-2xl border-t sm:border border-stone-200 flex flex-col transition-all duration-500 origin-bottom-right overflow-hidden ${isOpen
          ? 'h-[85vh] sm:h-[600px] opacity-100 translate-y-0'
          : 'h-0 opacity-0 translate-y-12 pointer-events-none'
          }`}
      >
        {/* Header */}
        <div className="bg-warm-white px-6 py-4 border-b border-stone-100 flex justify-between items-center flex-shrink-0">
          <div>
            <h3 className="font-serif text-xl text-ink-black italic flex items-center gap-2">
              Madison Concierge
            </h3>
            <p className="text-[10px] text-brass uppercase tracking-[0.2em] font-medium">Always Available</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-stone-400 hover:text-ink-black transition-colors p-2 hover:bg-stone-100 rounded-full"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white/50 custom-scrollbar">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] px-5 py-4 text-sm leading-relaxed shadow-sm ${msg.role === 'user'
                  ? 'bg-ink-black text-white rounded-t-xl rounded-bl-xl border border-ink-black'
                  : 'bg-warm-white text-ink-black border border-stone-200 rounded-t-xl rounded-br-xl'
                  }`}
              >
                {msg.role === 'model' && idx === 0 && (
                  <div className="flex items-center gap-1.5 mb-2 opacity-100 text-brass">
                    <Feather size={12} strokeWidth={2} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Madison</span>
                  </div>
                )}
                <p className="whitespace-pre-wrap font-lato">{msg.text}</p>

                {/* Inline Action Buttons */}
                {msg.role === 'model' && shouldShowCalendarButton(msg.text) && (
                  <div className="mt-3 pt-3 border-t border-stone-200">
                    <button
                      onClick={openCalendar}
                      className="flex items-center gap-2 text-xs bg-ink-black text-white px-4 py-2 rounded-full hover:bg-brass transition-all duration-300 shadow-sm group/btn"
                    >
                      <Calendar size={12} />
                      <span>Book a Demo</span>
                      <ArrowUp size={12} className="rotate-45 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                )}
              </div>

              {/* Contextual Quick Replies */}
              {msg.role === 'model' && idx === messages.length - 1 && !hasInteracted && messages.length === 1 && (
                <div className="mt-4 flex flex-wrap gap-2 animate-fade-in pl-1">
                  {['Beauty Brand', 'Agency', 'Founder'].map((label) => (
                    <button
                      key={label}
                      onClick={() => { setInput(`I represent a ${label}.`); handleSend(); }}
                      className="text-xs bg-white border border-stone-200 text-stone-600 px-4 py-2 rounded-full hover:border-brass hover:text-ink-black transition-all duration-300 font-lato"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start animate-fade-in">
              <div className="bg-warm-white border border-stone-100 px-4 py-3 rounded-t-xl rounded-br-xl flex gap-1 shadow-sm">
                <span className="w-1 h-1 bg-ink-black rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                <span className="w-1 h-1 bg-ink-black rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                <span className="w-1 h-1 bg-ink-black rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-warm-white border-t border-stone-100 flex-shrink-0">
          <div className="relative flex items-center group">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask Madison..."
              disabled={isLoading}
              className="w-full bg-white border border-stone-200 text-ink-black rounded-sm pl-4 pr-12 py-3.5 focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass transition-all text-sm shadow-sm placeholder:text-stone-400 font-lato"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="absolute right-2 p-2 text-ink-black hover:text-brass transition-colors disabled:opacity-30"
            >
              {isLoading ? <Loader2 size={18} className="animate-spin" /> : <ArrowUp size={18} strokeWidth={2} />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecretaryChat;