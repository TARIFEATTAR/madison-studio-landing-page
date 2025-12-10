import React, { useState, useEffect } from 'react';
import { GoogleGenAI, Modality } from "@google/genai";
import { Image as ImageIcon, Camera, Loader2, CodeXml, Sun, Moon, Leaf, ChevronRight } from 'lucide-react';

const ImageComparison: React.FC = () => {
  const [subject, setSubject] = useState("A luxury facial serum bottle");
  const [badImage, setBadImage] = useState<string | null>(null);
  const [goodImage, setGoodImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeStyle, setActiveStyle] = useState<'minimalist' | 'noir' | 'botanical'>('minimalist');

  const brandStyles = {
    minimalist: {
      id: 'minimalist',
      label: 'Minimalist',
      description: 'Warm, architectural, beige tones',
      promptSuffix: 'soft diffused natural lighting, beige and cream color palette, travertine stone textures, minimalist composition, kinfolk magazine style, architectural forms, soft shadows',
      icon: Sun
    },
    noir: {
      id: 'noir',
      label: 'Midnight',
      description: 'Moody, gold accents, deep shadows',
      promptSuffix: 'dramatic chiaroscuro lighting, deep black and rich gold color palette, velvet textures, moody atmosphere, luxury perfume ad style, sharp contrast, cinematic',
      icon: Moon
    },
    botanical: {
      id: 'botanical',
      label: 'Botanical',
      description: 'Organic, fresh, sunlight',
      promptSuffix: 'dappled sunlight through leaves, moss and wood textures, fresh green and earth tones, organic composition, nature-inspired luxury, soft focus, macro details',
      icon: Leaf
    }
  };

  const quickPrompts = [
    "A luxury facial serum bottle",
    "A silk scarf",
    "A ceramic vase",
    "A leather handbag",
    "A scented candle"
  ];

  const generateComparison = async () => {
    setLoading(true);
    setBadImage(null);
    setGoodImage(null);
    setSliderPosition(50);

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    try {
      const badPrompt = `A boring, generic, amateur e-commerce product photo of ${subject} on a plain white background. Flat front-facing lighting, no styling, no props, low effort, stock photo style.`;

      const badPromise = ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ text: badPrompt }],
        },
        config: {
          responseModalities: [Modality.IMAGE],
        },
      }).then(response => {
        const parts = response.candidates?.[0]?.content?.parts;
        if (parts && parts[0]?.inlineData) {
          return `data:image/png;base64,${parts[0].inlineData.data}`;
        }
        return null;
      }).catch(e => {
        console.error("Bad image gen failed", e);
        return null;
      });

      const styleSettings = brandStyles[activeStyle];
      const goodPrompt = `High-end editorial product photography of ${subject}. ${styleSettings.promptSuffix}. 8k resolution, highly detailed, photorealistic, commercial advertising standard, award winning photography.`;

      const goodPromise = ai.models.generateImages({
        model: 'imagen-4.0-generate-001',
        prompt: goodPrompt,
        config: {
          numberOfImages: 1,
          outputMimeType: 'image/jpeg',
          aspectRatio: '1:1',
        },
      }).then(response => {
        const bytes = response.generatedImages?.[0]?.image?.imageBytes;
        if (bytes) {
          return `data:image/jpeg;base64,${bytes}`;
        }
        return null;
      }).catch(e => {
        console.error("Good image gen failed", e);
        return null;
      });

      const [badResult, goodResult] = await Promise.all([badPromise, goodPromise]);
      setBadImage(badResult);
      setGoodImage(goodResult);

    } catch (err) {
      console.error("Comparison generation failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-28 bg-luxury-tan text-ink-black border-t border-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-5xl md:text-6xl mb-6 text-ink-black">Brand Simulator</h2>
          <p className="text-ink-black/70 text-xl md:text-2xl max-w-3xl mx-auto font-light mb-8">
            Generic AI guesses. Madison follows your specific brand guidelines. <br />
            Select a vibe to simulate how Madison adapts the <strong>same product</strong> to your aesthetic.
          </p>
        </div>

        {/* Brand Simulator Controls */}
        <div className="max-w-4xl mx-auto bg-white rounded-sm shadow-lg border border-stone-200 p-6 md:p-8 mb-12">

          {/* 1. Style Selector */}
          <div className="mb-8">
            <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">1. Select Brand Vibe</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {(Object.entries(brandStyles) as [keyof typeof brandStyles, typeof brandStyles.minimalist][]).map(([key, style]) => (
                <button
                  key={key}
                  onClick={() => setActiveStyle(key)}
                  className={`flex items-center gap-4 p-4 rounded-sm border transition-all duration-300 text-left group ${activeStyle === key
                      ? 'bg-stone-50 border-deep-green ring-1 ring-deep-green'
                      : 'border-stone-200 hover:border-stone-300 hover:bg-stone-50'
                    }`}
                >
                  <div className={`p-3 rounded-full ${activeStyle === key ? 'bg-deep-green text-white' : 'bg-stone-100 text-stone-400 group-hover:text-stone-600'}`}>
                    <style.icon size={20} />
                  </div>
                  <div>
                    <div className={`font-serif text-lg font-medium ${activeStyle === key ? 'text-deep-green' : 'text-ink-black'}`}>
                      {style.label}
                    </div>
                    <div className="text-xs text-stone-500">{style.description}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Input Area */}
          <div className="mb-8">
            <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">2. Choose Subject</label>

            {/* Quick Prompts */}
            <div className="mb-4 flex flex-wrap gap-2 items-center">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => setSubject(prompt)}
                  className={`text-sm px-4 py-2 rounded-full transition-colors border ${subject === prompt
                      ? 'bg-deep-green text-white border-deep-green'
                      : 'bg-stone-100 hover:bg-stone-200 text-ink-black/70 border-transparent'
                    }`}
                >
                  {prompt}
                </button>
              ))}
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full h-full bg-stone-50 border border-stone-300 rounded-sm text-ink-black px-5 py-4 text-lg focus:outline-none focus:border-deep-green focus:ring-1 focus:ring-deep-green placeholder:text-stone-400 transition-all"
                  placeholder="Or type your own subject..."
                />
              </div>
              <button
                onClick={generateComparison}
                disabled={loading}
                className="bg-ink-black text-white font-medium px-8 py-4 rounded-sm text-lg hover:bg-charcoal transition-all disabled:opacity-50 flex items-center justify-center gap-3 shadow-md min-w-[160px] group"
              >
                {loading ? <Loader2 className="animate-spin" size={20} /> : <Camera size={20} className="group-hover:text-muted-gold transition-colors" />}
                Generate
              </button>
            </div>
          </div>

          {/* 3. Logic Visualization (Educational part) */}
          <div className="mt-6 pt-6 border-t border-stone-100 bg-stone-50/50 -mx-6 -mb-6 md:-mx-8 md:-mb-8 px-6 py-4 md:px-8 rounded-b-sm">
            <div className="flex flex-col md:flex-row gap-6 text-sm text-stone-500">
              <div className="flex-1 border border-stone-200 bg-white p-3 rounded-sm">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-stone-300"></div>
                  <span className="uppercase tracking-wider font-bold text-[10px]">Generic Prompt</span>
                </div>
                <p className="text-ink-black/60 italic text-xs">
                  "A boring, generic, amateur e-commerce photo of <strong>{subject}</strong> on white background..."
                </p>
              </div>

              <div className="hidden md:flex items-center justify-center">
                <ChevronRight size={20} className="text-stone-300" />
              </div>

              <div className="flex-1 border border-deep-green/20 bg-white p-3 rounded-sm shadow-sm ring-1 ring-deep-green/10">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-deep-green animate-pulse"></div>
                  <span className="uppercase tracking-wider font-bold text-[10px] text-deep-green">Madison Brand Engine</span>
                </div>
                <p className="text-ink-black italic text-xs">
                  "High-end editorial photography of <strong>{subject}</strong>. {brandStyles[activeStyle].promptSuffix}..."
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Comparison Viewer */}
        <div className="max-w-5xl mx-auto">
          <div className="aspect-square md:aspect-[16/9] w-full bg-stone-200 rounded-sm border border-stone-300 overflow-hidden relative group shadow-xl">

            {!badImage && !goodImage && !loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-400 bg-stone-100">
                <ImageIcon size={64} className="mb-4 opacity-20" />
                <p className="text-xl font-medium opacity-50">Hit Generate to compare Generic AI vs. Madison</p>
              </div>
            )}

            {loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm z-50">
                <Loader2 className="animate-spin text-deep-green mb-4" size={48} />
                <p className="text-lg animate-pulse font-medium text-ink-black">Developing photos...</p>
                <p className="text-sm text-stone-500 mt-2">Applying {brandStyles[activeStyle].label} aesthetic</p>
              </div>
            )}

            {badImage && goodImage && (
              <>
                <div className="absolute inset-0">
                  <img
                    src={badImage}
                    alt="Generic AI"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-ink-black text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-sm shadow-sm border border-stone-200">
                    Generic AI
                  </div>
                </div>

                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                >
                  <img
                    src={goodImage}
                    alt="Madison AI"
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                  />
                  <div className="absolute top-6 right-6 bg-deep-green/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-sm shadow-lg border border-white/10">
                    Madison Studio ({brandStyles[activeStyle].label})
                  </div>
                </div>

                <div
                  className="absolute inset-y-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-3 shadow-xl text-deep-green transform hover:scale-110 transition-transform border border-stone-100">
                    <CodeXml size={20} strokeWidth={2.5} />
                  </div>
                </div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                  style={{ touchAction: 'none' }}
                />
              </>
            )}
          </div>

          {badImage && goodImage && (
            <div className="flex justify-between mt-4 text-sm text-ink-black/60 font-mono px-2">
              <span>Generic Input</span>
              <span>Brand Guidelines Applied</span>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default ImageComparison;