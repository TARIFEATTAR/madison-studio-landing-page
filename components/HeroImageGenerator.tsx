import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Wand2, Image as ImageIcon, Loader2, Layout } from 'lucide-react';

interface HeroImageGeneratorProps {
  onImageGenerated: (base64Image: string) => void;
}

const HeroImageGenerator: React.FC<HeroImageGeneratorProps> = ({ onImageGenerated }) => {
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generateImage = async (style: 'abstract' | 'workspace' | 'fluid') => {
    setLoading(style);
    setError(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      let prompt = "";
      switch (style) {
        case 'abstract':
          prompt = "Abstract 3D composition, deep forest green glass waves and matte gold spheres, floating in a bright warm white studio, soft ambient lighting, minimal, architectural, 8k, high end editorial style, photorealistic";
          break;
        case 'workspace':
          prompt = "Top down photography of a pristine creative workspace, cream colored desk, deep green notebook, gold fountain pen, ceramic cup, soft sunlight, shadows of leaves, ultra realistic, interior design magazine aesthetic, Kinfolk style";
          break;
        case 'fluid':
          prompt = "Swirling liquid mercury and deep green ink mixing in a slow motion macro shot, forming elegant patterns against a pale cream background, macro photography, depth of field, sophisticated, luxury brand texture, 8k";
          break;
      }

      const response = await ai.models.generateImages({
        model: 'imagen-4.0-generate-001',
        prompt: prompt,
        config: {
          numberOfImages: 1,
          outputMimeType: 'image/jpeg',
          aspectRatio: '4:3',
        },
      });

      const base64ImageBytes = response.generatedImages?.[0]?.image?.imageBytes;
      
      if (base64ImageBytes) {
        const imageUrl = `data:image/jpeg;base64,${base64ImageBytes}`;
        onImageGenerated(imageUrl);
      } else {
        setError("No image returned");
      }
    } catch (err) {
      console.error("Generation failed", err);
      setError("Failed to generate image. API Key may be missing or invalid for Imagen.");
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="inline-flex flex-col items-center">
      <div className="bg-white border border-stone-200 rounded-full shadow-sm p-1 flex items-center gap-1">
        <span className="px-3 text-[10px] font-bold tracking-widest text-stone-400 uppercase hidden sm:block">
          Suggest Hero Look
        </span>
        
        <button
          onClick={() => generateImage('abstract')}
          disabled={!!loading}
          className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-stone-50 transition-colors text-xs font-medium text-ink-black disabled:opacity-50"
          title="Generate Abstract 3D Concept"
        >
          {loading === 'abstract' ? <Loader2 size={14} className="animate-spin" /> : <Layout size={14} className="text-deep-green" />}
          <span className="hidden sm:inline">Structure</span>
        </button>

        <button
          onClick={() => generateImage('workspace')}
          disabled={!!loading}
          className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-stone-50 transition-colors text-xs font-medium text-ink-black disabled:opacity-50"
          title="Generate Workspace Concept"
        >
          {loading === 'workspace' ? <Loader2 size={14} className="animate-spin" /> : <ImageIcon size={14} className="text-muted-gold" />}
          <span className="hidden sm:inline">Workspace</span>
        </button>

        <button
          onClick={() => generateImage('fluid')}
          disabled={!!loading}
          className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-stone-50 transition-colors text-xs font-medium text-ink-black disabled:opacity-50"
          title="Generate Fluid Concept"
        >
          {loading === 'fluid' ? <Loader2 size={14} className="animate-spin" /> : <Wand2 size={14} className="text-charcoal" />}
          <span className="hidden sm:inline">Fluidity</span>
        </button>
      </div>
      {error && <p className="text-[10px] text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default HeroImageGenerator;