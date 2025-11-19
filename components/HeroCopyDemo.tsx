import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Bot, RefreshCcw } from 'lucide-react';

const HeroCopyDemo: React.FC = () => {
  const [prompt, setPrompt] = useState("Write a launch tweet for our new midnight silk pajamas.");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<'generic' | 'madison' | null>(null);
  const [loading, setLoading] = useState(false);

  const generateCopy = async (selectedMode: 'generic' | 'madison') => {
    setLoading(true);
    setMode(selectedMode);
    setOutput("");

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      let systemInstruction = "";
      if (selectedMode === 'madison') {
        systemInstruction = "You are Madison, an elite brand editorial director. Your tone is sophisticated, understated, and confident. You use sensory language but keep it concise. Avoid emojis unless strictly necessary and minimal. Focus on the feeling of the product. Use sentence fragments for effect. Do not be salesy.";
      } else {
        systemInstruction = "You are a basic AI assistant. Write generic, enthusiastic marketing copy. Use lots of emojis and exclamation marks. Be very salesy and cliché.";
      }

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        }
      });

      setOutput(response.text || "Could not generate text.");
    } catch (e) {
      console.error(e);
      setOutput("Error generating copy.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl bg-white rounded-sm shadow-xl border border-stone-200 overflow-hidden animate-fade-in relative z-20 mt-10">
      {/* Toolbar */}
      <div className="bg-stone-50 border-b border-stone-200 p-4 flex items-center gap-3">
        <div className="flex gap-2 mr-4">
          <div className="w-3.5 h-3.5 rounded-full bg-red-300"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-amber-300"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-green-300"></div>
        </div>
      </div>

      <div className="p-8">
        {/* Input Area */}
        <div className="mb-8">
          <label className="block text-sm font-bold text-ink-black uppercase mb-3 tracking-wide">Your Request</label>
          <div className="relative">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full bg-stone-50 border border-stone-200 rounded-sm py-4 px-5 text-lg text-ink-black focus:outline-none focus:ring-2 focus:ring-deep-green/20 focus:border-deep-green transition-all shadow-inner"
            />
            <button 
              onClick={() => setPrompt("Write a product description for a ceramic coffee mug.")}
              className="absolute right-3 top-3 text-xs text-stone-400 hover:text-deep-green bg-white border border-stone-200 px-3 py-1.5 rounded-sm hover:border-deep-green transition-colors"
            >
              Try Another
            </button>
          </div>
        </div>

        {/* Output Area */}
        <div className="min-h-[160px] relative bg-warm-white/50 rounded-sm border border-dashed border-stone-300 p-4 md:p-6 flex flex-col justify-center transition-all duration-500">
          {loading ? (
            <div className="flex flex-col items-center gap-4 opacity-50">
              <RefreshCcw className="animate-spin text-deep-green" size={28} />
              <span className="text-base font-serif italic">Drafting...</span>
            </div>
          ) : output ? (
            <div className="animate-slide-up w-full">
               {mode === 'madison' ? (
                 <div className="bg-deep-green text-white p-6 md:p-8 rounded-sm shadow-lg text-left border border-stone-800">
                   <div className="text-[10px] font-bold tracking-widest opacity-70 uppercase mb-3 text-stone-300">Generated Output</div>
                   <p className="font-serif text-xl md:text-2xl leading-relaxed">
                     "{output}"
                   </p>
                 </div>
               ) : (
                 <div className="p-2">
                    <div className="flex justify-between items-start mb-4">
                        <span className="text-xs font-bold uppercase px-3 py-1.5 rounded-sm bg-stone-200 text-stone-500">
                        Generic Draft
                        </span>
                    </div>
                    <p className="text-xl md:text-2xl leading-relaxed font-sans text-stone-500">
                        "{output}"
                    </p>
                 </div>
               )}
            </div>
          ) : (
            <div className="text-center text-stone-400">
              <p className="text-lg">Select a mode below to generate copy.</p>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="flex gap-5 mt-8">
          <button
            onClick={() => generateCopy('generic')}
            disabled={loading}
            className="flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-sm border border-stone-200 bg-white text-ink-black hover:bg-stone-50 transition-all font-medium text-lg group"
          >
            <Bot size={20} className="text-stone-400 group-hover:text-ink-black transition-colors" />
            Generic AI
          </button>
          <button
            onClick={() => generateCopy('madison')}
            disabled={loading}
            className="flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-sm bg-soft-gray text-white shadow-lg hover:bg-stone-500 hover:scale-[1.02] transition-all font-medium text-lg"
          >
            <Sparkles size={20} className="text-white" />
            Madison Magic
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroCopyDemo;