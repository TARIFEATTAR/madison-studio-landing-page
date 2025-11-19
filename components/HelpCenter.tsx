import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Button from './ui/Button';
import { 
  Search, ChevronDown, ChevronRight, BookOpen, CreditCard, 
  PenTool, Layers, Image as ImageIcon, Calendar, ShoppingBag, 
  Users, Link as LinkIcon, Activity, AlertCircle, Sparkles, Shield,
  LayoutGrid
} from 'lucide-react';

interface FAQItem {
  q: string;
  a: React.ReactNode;
}

interface FAQSection {
  id: string;
  title: string;
  icon: React.ElementType;
  questions: FAQItem[];
}

// Helper components
const TextBlock = ({ children }: { children?: React.ReactNode }) => <p className="mb-4 text-ink-black/80 leading-relaxed">{children}</p>;

const ListBlock = ({ items }: { items: string[] }) => (
  <ul className="list-disc pl-5 mb-4 space-y-2 text-ink-black/80 marker:text-muted-gold">
    {items.map((item, i) => <li key={i}>{item}</li>)}
  </ul>
);

const OrderedListBlock = ({ items }: { items: string[] }) => (
  <ol className="list-decimal pl-5 mb-4 space-y-2 text-ink-black/80 marker:text-ink-black/50">
    {items.map((item, i) => <li key={i}>{item}</li>)}
  </ol>
);

// FAQ Data
const faqData: FAQSection[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: BookOpen,
    questions: [
      {
        q: "What is Madison Studio?",
        a: <>
          <TextBlock>Madison Studio is a luxury AI-powered brand operating system designed specifically for beauty, fragrance, and creative e-commerce businesses. It helps you create, multiply, and manage brand-consistent content across all your marketing channels—from product descriptions to Instagram posts to email sequences.</TextBlock>
        </>
      },
      {
        q: "Who is Madison Studio for?",
        a: <>
          <TextBlock>Madison Studio is built for:</TextBlock>
          <ListBlock items={[
            "Luxury beauty & fragrance brands (perfume, skincare, cosmetics, candles)",
            "E-commerce businesses selling premium products ($100+ price points)",
            "Creative agencies managing multiple client brands",
            "Small marketing teams (2-10 people) needing consistent brand voice",
            "Solo entrepreneurs who want agency-quality content without agency costs"
          ]} />
        </>
      },
      {
        q: "How is Madison different from other AI writing tools?",
        a: <>
          <TextBlock>Unlike generic AI tools trained on internet marketing content, Madison is trained on legendary advertising principles from David Ogilvy, Claude Hopkins, Bill Bernbach, and other Madison Avenue masters. This means:</TextBlock>
          <ListBlock items={[
            "Sophisticated copy that matches luxury positioning (not hype or urgency tactics)",
            "Brand voice consistency across all channels",
            "E-commerce optimization built-in (Shopify, Etsy integration)",
            "Multi-channel repurposing (create once, multiply everywhere)",
            "Visual + verbal content in one platform"
          ]} />
        </>
      },
      {
        q: "How long does it take to get started?",
        a: <>
          <TextBlock>Most users are creating their first content within 10-15 minutes:</TextBlock>
          <OrderedListBlock items={[
            "Sign up (2 minutes)",
            "Upload brand guidelines or let Madison scan your website (3-5 minutes)",
            "Generate your first content piece (2-3 minutes)",
            "Save to library and start multiplying"
          ]} />
        </>
      },
      {
        q: "Do you need technical skills to use Madison?",
        a: <TextBlock>No! Madison is designed for creative professionals, not developers. If you can use Google Docs or Canva, you can use Madison. The interface is intuitive, and Madison's AI assistant guides you through every step.</TextBlock>
      },
      {
        q: "Is there a free trial?",
        a: <TextBlock>Yes! We offer a 14-day free trial with full access to all features. No credit card required to start. You can explore Create, Multiply, Library, Image Studio, and Calendar before committing to a paid plan.</TextBlock>
      },
      {
        q: "What happens after my free trial ends?",
        a: <TextBlock>After 14 days, you'll be prompted to choose a subscription plan (Starter, Growth, or Studio). Your content and brand settings are preserved. If you don't upgrade, you can still access your content in read-only mode for 30 days.</TextBlock>
      }
    ]
  },
  {
    id: 'account-billing',
    title: 'Account & Billing',
    icon: CreditCard,
    questions: [
      {
        q: "How do I change my subscription plan?",
        a: <TextBlock>Go to Settings → Billing and select your desired plan. Changes take effect immediately (upgrades) or at the end of your current billing period (downgrades).</TextBlock>
      },
      {
        q: "Can I cancel anytime?",
        a: <TextBlock>Yes! You can cancel your subscription anytime from Settings → Billing. You'll retain access until the end of your current billing period. No refunds for partial months.</TextBlock>
      },
      {
        q: "What payment methods do you accept?",
        a: <TextBlock>We accept all major credit cards (Visa, Mastercard, Amex, Discover) through Stripe. We do not currently accept PayPal or cryptocurrency.</TextBlock>
      },
      {
        q: "Do you offer annual billing discounts?",
        a: <TextBlock>Yes! Annual plans save you 20% compared to monthly billing. You can switch from monthly to annual anytime in Settings → Billing.</TextBlock>
      },
      {
        q: "What if I need to update my billing information?",
        a: <TextBlock>Go to Settings → Billing → Payment Method to update your credit card. Changes take effect for your next billing cycle.</TextBlock>
      },
      {
        q: "Can I get a refund?",
        a: <TextBlock>We offer refunds within 30 days of your first paid subscription if you're not satisfied. After that, we don't provide refunds for partial months, but you can cancel anytime.</TextBlock>
      },
      {
        q: "Do you offer discounts for nonprofits or educators?",
        a: <TextBlock>Yes! Contact support@madisonstudio.io with documentation of your nonprofit status or educational affiliation for a 30% discount.</TextBlock>
      }
    ]
  },
  {
    id: 'brand-setup',
    title: 'Brand Setup & Knowledge',
    icon: LayoutGrid,
    questions: [
      {
        q: "How does Madison learn my brand voice?",
        a: <>
          <TextBlock>Madison learns your brand through three methods:</TextBlock>
          <OrderedListBlock items={[
            "Document Upload: Upload brand guidelines, style guides, or marketing decks (PDF, DOCX)",
            "Website Scanning: Madison analyzes your existing website copy, product pages, and About section",
            "Manual Input: Fill in voice, tone, values, and audience details directly in Settings"
          ]} />
          <TextBlock>The more information you provide, the better Madison understands your brand.</TextBlock>
        </>
      },
      {
        q: "What documents should I upload?",
        a: <>
          <TextBlock>The best documents to upload are:</TextBlock>
          <ListBlock items={[
            "Brand style guides",
            "Voice & tone guidelines",
            "Mission/vision/values statements",
            "Existing product descriptions",
            "Sample blog posts or emails",
            "Competitor positioning docs",
            "Target audience personas"
          ]} />
        </>
      },
      {
        q: "Can Madison scan my website?",
        a: <TextBlock>Yes! Go to Settings → Brand Guidelines → Scan Website, enter your URL, and Madison will extract brand voice patterns, product descriptions, company story, visual style cues, and target audience signals. This takes 2-3 minutes and gives Madison a solid foundation to work from.</TextBlock>
      },
      {
        q: "How do I add products to my catalog?",
        a: <TextBlock>Go to Settings → Products → Add Product. Fill in the product name, SKU, category, key attributes (scent notes, ingredients, formulation), price point, and unique selling points. Products are then available when generating content in The Forge.</TextBlock>
      },
      {
        q: "What are Collections?",
        a: <>
          <TextBlock>Collections are themed product groupings that help organize your brand story. Madison Studio uses four core collections:</TextBlock>
          <ListBlock items={[
            "Humanities (story-driven, emotional)",
            "Reserve (premium, exclusive)",
            "Purity (clean, transparent)",
            "Elemental (core essentials)"
          ]} />
          <TextBlock>You can customize these in Settings → Collections.</TextBlock>
        </>
      },
      {
        q: "Can I update my brand information later?",
        a: <TextBlock>Yes! Your brand knowledge is always editable. Go to Settings → Brand Guidelines to update voice, tone, values, or upload new documents. Changes apply to all future content generation.</TextBlock>
      },
      {
        q: "How does Madison handle multiple brands?",
        a: <TextBlock>If you're an agency or manage multiple brands, you can create separate Organizations for each. Switch between them using the organization dropdown in the top navigation. Each organization has its own brand knowledge, products, and content library.</TextBlock>
      }
    ]
  },
  {
    id: 'content-creation',
    title: 'Content Creation (The Forge)',
    icon: PenTool,
    questions: [
      {
        q: "What types of content can Madison create?",
        a: <>
          <TextBlock>Madison generates 40+ content formats including:</TextBlock>
          <ListBlock items={[
            "Blog posts (500-2000+ words)",
            "Email newsletters (single or multi-part sequences)",
            "Social media posts (Instagram, LinkedIn, Facebook, Twitter/X, TikTok)",
            "Product descriptions (e-commerce optimized)",
            "Marketplace listings (Etsy, Shopify, Amazon)",
            "Video scripts (YouTube, TikTok)",
            "SMS messages (160 character limit)",
            "Press releases",
            "Ad copy"
          ]} />
        </>
      },
      {
        q: "How do I create my first piece of content?",
        a: <>
          <OrderedListBlock items={[
            "Click Create in the sidebar",
            "Select a deliverable format (e.g., \"Blog Post\")",
            "Fill in the brief (product, goal, audience, instructions)",
            "Click Generate",
            "Review, edit, and save to Library"
          ]} />
          <TextBlock>The whole process takes 2-5 minutes.</TextBlock>
        </>
      },
      {
        q: "What is Think Mode?",
        a: <TextBlock>Think Mode is Madison's strategic brainstorming feature. Before you commit to generating final content, you can chat with Madison to explore different angles, test positioning ideas, get customer awareness insights, and refine your content strategy. It's like having a creative director to bounce ideas off before you write.</TextBlock>
      },
      {
        q: "Can I customize the tone or style?",
        a: <TextBlock>Yes! When creating content, you can select a Style Overlay (elegant, educational, conversational, bold), add Custom Instructions (e.g., "Include a story about the founder"), and choose Tone (refined, warm, authoritative, playful). Madison adapts while maintaining your core brand voice.</TextBlock>
      },
      {
        q: "How long does it take to generate content?",
        a: <TextBlock>Most content generates in 10-30 seconds depending on length. Short social posts take 10-15 seconds, while email sequences may take 30-45 seconds.</TextBlock>
      },
      {
        q: "Can I edit the generated content?",
        a: <TextBlock>Absolutely! All generated content appears in an editable text area. You can edit directly in the interface, copy to your preferred editor, ask Madison to refine specific sections, or regenerate entirely if needed.</TextBlock>
      },
      {
        q: "Can I save content as a draft?",
        a: <TextBlock>Yes! Click Save to Library and your content is automatically saved. All content starts as a draft until you mark it as published or scheduled.</TextBlock>
      },
      {
        q: "Can I upload my own content brief templates?",
        a: <TextBlock>Yes! Use the Worksheet Upload feature to upload pre-filled content briefs in DOCX or PDF format. Madison extracts the details and auto-fills the brief form.</TextBlock>
      }
    ]
  },
  {
    id: 'multiply',
    title: 'Content Repurposing (Multiply)',
    icon: Layers,
    questions: [
      {
        q: "What is Multiply?",
        a: <TextBlock>Multiply is Madison's content repurposing engine. It takes one master piece (like a blog post) and transforms it into 10+ channel-specific derivatives—all while maintaining your brand voice and narrative consistency.</TextBlock>
      },
      {
        q: "What derivative formats can Madison create?",
        a: <>
          <TextBlock>Madison can multiply your content into:</TextBlock>
          <ListBlock items={[
            "Email sequences (3-part, 5-part, 7-part)",
            "Instagram carousel posts",
            "LinkedIn professional posts",
            "Facebook community posts",
            "Twitter/X threads",
            "YouTube video descriptions",
            "TikTok video scripts",
            "Pinterest pin descriptions",
            "SMS messages (160 char)",
            "Product descriptions (short & long)"
          ]} />
        </>
      },
      {
        q: "How do I multiply content?",
        a: <TextBlock>Go to Multiply in the sidebar, select a master content piece, choose which derivative types you want (or use Smart Amplify for AI recommendations), and click Generate Derivatives. Madison generates all derivatives in 30-60 seconds.</TextBlock>
      },
      {
        q: "What is Smart Amplify?",
        a: <TextBlock>Smart Amplify is Madison's AI recommendation engine. It analyzes your master content and suggests the best derivative formats based on content type, length, typical channels, engagement patterns, and platform-specific best practices.</TextBlock>
      },
      {
        q: "Can I create email sequences?",
        a: <TextBlock>Yes! Madison specializes in multi-part email sequences with narrative arcs (3-part, 5-part, or 7-part). Each email maintains continuity while advancing the story.</TextBlock>
      },
      {
        q: "Can I edit derivatives before publishing?",
        a: <TextBlock>Absolutely! Every derivative appears in a preview card where you can edit the content, approve or reject, copy to clipboard, schedule for later, or export as PDF/DOCX.</TextBlock>
      }
    ]
  },
  {
    id: 'library-organization',
    title: 'Library & Organization',
    icon: BookOpen,
    questions: [
      {
        q: "What is The Library?",
        a: <TextBlock>The Library (also called The Archives) is your central content repository. It stores master content, derivatives, generated images, and outputs. Everything you create lives here.</TextBlock>
      },
      {
        q: "How do I search for content?",
        a: <TextBlock>Use the search bar at the top of the Library to search by title, headline, content body text, product name, collection type, or date range. Results appear instantly as you type.</TextBlock>
      },
      {
        q: "Can I filter content by type?",
        a: <TextBlock>Yes! Use the filter panel to show only master content, derivatives, images, archived items, or filter by collection (Humanities, Reserve, Purity, Elemental) and date.</TextBlock>
      },
      {
        q: "How do I organize content?",
        a: <TextBlock>Madison offers several organization methods: Collections (brand themes), Tags (custom searchable markers), Archive (hide old content), and Folders (custom groups for campaigns).</TextBlock>
      },
      {
        q: "Can I export content?",
        a: <TextBlock>Yes! You can export any content piece as PDF (formatted), DOCX (editable), TXT (plain), or CSV (for bulk). Click on any content card → Export → Choose format.</TextBlock>
      },
      {
        q: "What does \"Archive\" do?",
        a: <TextBlock>Archiving hides content from your main library view without deleting it. This is useful for old seasonal content, retired products, or outdated campaigns. Archived content can be restored anytime.</TextBlock>
      },
      {
        q: "Can I bulk delete or archive?",
        a: <TextBlock>Yes! Select multiple items using the checkboxes, then choose Archive Selected, Delete Selected, or Export Selected.</TextBlock>
      },
      {
        q: "How do I view content history?",
        a: <TextBlock>Click on any content piece to see its full history: creation date, creator, edit history with timestamps, derivative count, publishing status, and performance data (coming soon).</TextBlock>
      }
    ]
  },
  {
    id: 'image-studio',
    title: 'Image Studio',
    icon: ImageIcon,
    questions: [
      {
        q: "What is Image Studio?",
        a: <TextBlock>Image Studio is Madison's AI-powered product photography generator. It creates professional product images with your brand's visual style—no photographer needed.</TextBlock>
      },
      {
        q: "What AI model does Image Studio use?",
        a: <TextBlock>Madison uses Google Gemini's NanaBanana image generation model, which specializes in photorealistic product imagery with excellent composition and lighting.</TextBlock>
      },
      {
        q: "How do I generate images?",
        a: <>
           <OrderedListBlock items={[
             "Go to Image Studio in the sidebar",
             "Name your session (e.g., \"Rose Serum Product Shots\")",
             "Choose aspect ratio (1:1, 4:5, 16:9, etc.)",
             "Upload a reference image of your product (optional)",
             "Describe the scene you want",
             "Click Generate"
           ]} />
           <TextBlock>Madison creates up to 10 images per session in 30-60 seconds.</TextBlock>
        </>
      },
      {
        q: "What is a reference image?",
        a: <TextBlock>A reference image is a photo of your actual product. When you upload one, Madison places your product into new scenes while maintaining its appearance.</TextBlock>
      },
      {
        q: "Can Madison create images without a product photo?",
        a: <TextBlock>Yes! If you don't have a product photo, Madison can generate images from text descriptions alone. Just describe what you want in detail (colors, materials, lighting, composition).</TextBlock>
      },
      {
        q: "How does Madison enforce brand style?",
        a: <TextBlock>When you upload brand guidelines with visual standards (colors, lighting, mood), Madison automatically applies them to all image generation. This ensures consistent color palettes and brand-appropriate compositions.</TextBlock>
      },
      {
        q: "What aspect ratios are available?",
        a: <TextBlock>Madison supports all common aspect ratios: 1:1, 4:5, 16:9, 9:16, 21:9, plus custom dimensions.</TextBlock>
      },
      {
        q: "Can I use generated images commercially?",
        a: <TextBlock>Yes! All images generated through Madison Studio are yours to use commercially in product listings, marketing materials, social media, website content, and advertising. You retain full commercial rights.</TextBlock>
      }
    ]
  },
  {
    id: 'calendar-scheduling',
    title: 'Calendar & Scheduling',
    icon: Calendar,
    questions: [
      {
        q: "What is The Planner?",
        a: <TextBlock>The Planner is Madison's content calendar where you schedule, organize, and track all your content across channels. It includes month view, week view, and agenda view.</TextBlock>
      },
      {
        q: "Can I schedule content directly to social media?",
        a: <TextBlock>Not yet. Currently, The Planner helps you organize and schedule content internally. You can then copy scheduled content and post manually or use your preferred social media scheduler. Direct publishing is on the roadmap for 2026.</TextBlock>
      },
      {
        q: "Does Madison sync with Google Calendar?",
        a: <TextBlock>Yes! You can connect your Google Calendar for two-way synchronization. Events created in Madison appear in Google Calendar, and important dates from Google Calendar are visible in Madison. Go to Settings → Integrations → Connect Google Calendar.</TextBlock>
      },
      {
        q: "How do I schedule a piece of content?",
        a: <TextBlock>Go to your Library, click on any content piece, click Schedule, choose date and time, optionally add to Google Calendar, and Save. The content appears on your calendar with a colored dot indicator.</TextBlock>
      },
      {
        q: "Can I set recurring content?",
        a: <TextBlock>Yes! When scheduling, you can set daily, weekly, monthly, or custom recurrence. Perfect for recurring newsletters or weekly social posts.</TextBlock>
      },
      {
        q: "What is DIP Week?",
        a: <TextBlock>DIP Week (Days In Production) is a 4-week content production cycle used by creative teams. Madison tracks which week you're in: Week 1 (Ideation), Week 2 (Creation), Week 3 (Review), Week 4 (Scheduling & Publishing).</TextBlock>
      }
    ]
  },
  {
    id: 'marketplace',
    title: 'Marketplace & E-Commerce',
    icon: ShoppingBag,
    questions: [
      {
        q: "What marketplaces does Madison support?",
        a: <TextBlock>Madison currently supports Shopify (full sync), Etsy (listing generation & CSV), TikTok Shop (listing generation & CSV), and Amazon (coming soon).</TextBlock>
      },
      {
        q: "How do I connect my Shopify store?",
        a: <TextBlock>Go to Settings → Integrations → Shopify, click Connect Shopify, enter your store URL, and authorize Madison. Your products will sync automatically.</TextBlock>
      },
      {
        q: "Can Madison update my existing Shopify products?",
        a: <TextBlock>Yes! Once connected, you can sync your existing product catalog, generate new descriptions, push updated descriptions back to Shopify, and bulk update multiple products.</TextBlock>
      },
      {
        q: "How do I generate marketplace listings?",
        a: <TextBlock>Go to Marketplace in the sidebar, select platform, choose a product, and click Generate Listing. Madison creates platform-optimized copy including title, description, tags, and key features.</TextBlock>
      },
      {
        q: "What's the difference between Shopify and Etsy listings?",
        a: <TextBlock>Madison adapts copy for each platform. Shopify gets premium positioning and brand storytelling. Etsy gets artisan focus and search-optimized casual tone. TikTok Shop gets short, snappy, conversion-focused copy.</TextBlock>
      },
      {
        q: "Can I export listings for bulk upload?",
        a: <TextBlock>Yes! After generating listings, click Export to CSV. The file is formatted for direct upload to Etsy, TikTok Shop, or Shopify.</TextBlock>
      }
    ]
  },
  {
    id: 'team',
    title: 'Team Collaboration',
    icon: Users,
    questions: [
      {
        q: "Can I invite team members?",
        a: <TextBlock>Yes! Go to Settings → Team → Invite Member. Enter their email and select a role: Owner (full access), Admin (content & settings), or Member (content creation only).</TextBlock>
      },
      {
        q: "How many team members can I have?",
        a: <TextBlock>Starter plan includes 3 members. Growth plan includes 10 members. Studio plan includes unlimited team members.</TextBlock>
      },
      {
        q: "Can multiple people edit the same content?",
        a: <TextBlock>Currently, Madison doesn't support real-time collaborative editing. If two people edit the same content simultaneously, the last save wins. Real-time collaboration is planned for Q2 2026.</TextBlock>
      },
      {
        q: "Can I see who created each piece of content?",
        a: <TextBlock>Yes! Every content piece shows creator name, creation date, last editor, and edit history. Click on any content card to view full history.</TextBlock>
      }
    ]
  },
  {
    id: 'integrations',
    title: 'Integrations',
    icon: LinkIcon,
    questions: [
      {
        q: "What integrations does Madison offer?",
        a: <TextBlock>Currently available: Google Calendar, Shopify, Anthropic Claude, and Google Gemini. Coming soon: Buffer/Hootsuite, Stripe (billing), Zapier, and Klaviyo.</TextBlock>
      },
      {
        q: "How do I connect Google Calendar?",
        a: <TextBlock>Go to Settings → Integrations, click Connect Google Calendar, sign in, and authorize Madison. Madison creates events for scheduled content automatically.</TextBlock>
      },
      {
        q: "Does Madison integrate with Klaviyo or Mailchimp?",
        a: <TextBlock>Not yet, but it's on the roadmap. Currently, you can generate content in Madison and copy/paste into your email platform or export as HTML.</TextBlock>
      }
    ]
  },
  {
    id: 'brand-health',
    title: 'Brand Health',
    icon: Activity,
    questions: [
      {
        q: "What is Brand Health?",
        a: <TextBlock>Brand Health is Madison's brand intelligence analyzer. It scores your brand documentation completeness (0-100%) and identifies gaps that could affect content quality.</TextBlock>
      },
      {
        q: "How is my Brand Health score calculated?",
        a: <TextBlock>Your score is based on eight categories: Core Identity (30 pts), Voice & Tone (20 pts), Target Audience (15 pts), Products (15 pts), Collections (10 pts), Transparency (5 pts), and Content Created (10 pts).</TextBlock>
      },
      {
        q: "What's a good Brand Health score?",
        a: <TextBlock>85-100 is Excellent. 70-84 is Good. 50-69 is Fair. Below 50 Needs Improvement.</TextBlock>
      },
      {
        q: "Does my score affect content quality?",
        a: <TextBlock>Yes! Higher scores mean more accurate brand voice, better product descriptions, more sophisticated copy, fewer generic phrases, and stronger differentiation.</TextBlock>
      }
    ]
  },
  {
    id: 'technical',
    title: 'Technical Issues',
    icon: AlertCircle,
    questions: [
      {
        q: "Why is content generation slow?",
        a: <TextBlock>Content generation usually takes 10-30 seconds. If slower, check your internet, refresh the page, or simplify your prompt. Complex requests (1500+ words) naturally take longer.</TextBlock>
      },
      {
        q: "I'm getting an error when generating content. What do I do?",
        a: <TextBlock>Try refreshing the page, checking your subscription status, clearing browser cache, or using a different browser (Chrome/Safari). If the problem persists, contact support@madisonstudio.io.</TextBlock>
      },
      {
        q: "Why can't I see my uploaded brand documents?",
        a: <TextBlock>Check file format (PDF/DOCX only) and size (max 10MB). Large docs take 2-3 minutes to process. Ad blockers may also interfere.</TextBlock>
      },
      {
        q: "I can't log in. What should I do?",
        a: <TextBlock>Reset your password, check your email (spam folder), try Google OAuth if used for signup, or clear browser cookies.</TextBlock>
      }
    ]
  },
  {
    id: 'ai-quality',
    title: 'AI & Content Quality',
    icon: Sparkles,
    questions: [
      {
        q: "How does Madison's AI work?",
        a: <TextBlock>Madison uses Anthropic Claude Sonnet 4 for primary content generation and Google Gemini for analysis and image generation. Both processes use your specific brand data.</TextBlock>
      },
      {
        q: "Does Madison learn from my feedback?",
        a: <TextBlock>Currently, Madison doesn't automatically learn from single edits, but your brand knowledge compounds as you upload more documents and refine your settings. Adaptive learning is on the 2026 roadmap.</TextBlock>
      },
      {
        q: "Why does generated content sometimes feel generic?",
        a: <TextBlock>This usually means your Brand Health score is low (&lt;70%). Upload more documents, fill in voice details, and add specific product attributes to fix this.</TextBlock>
      },
      {
        q: "Can Madison fact-check information?",
        a: <TextBlock>No. Madison generates content based on your inputs but does not independently verify facts. Always review scientific claims, specs, and pricing.</TextBlock>
      }
    ]
  },
  {
    id: 'privacy',
    title: 'Privacy & Security',
    icon: Shield,
    questions: [
      {
        q: "Is my content private?",
        a: <TextBlock>Yes! Your content is organization-scoped, encrypted in transit and at rest, never shared with other users, and never used for training our models.</TextBlock>
      },
      {
        q: "Does Madison sell my data?",
        a: <TextBlock>No. We do not sell, rent, or trade your personal information or content to anyone.</TextBlock>
      },
      {
        q: "What AI providers see my data?",
        a: <TextBlock>Anthropic (Claude) and Google (Gemini) process data to generate content. Neither provider uses your data to train their public AI models.</TextBlock>
      },
      {
        q: "Is Madison GDPR compliant?",
        a: <TextBlock>Yes! We comply with GDPR requirements including rights to access, export, and delete your data.</TextBlock>
      },
      {
        q: "How do I delete my account and all data?",
        a: <TextBlock>Go to Settings → Account → Delete Account. This is permanent and deletes all content within 30 days.</TextBlock>
      }
    ]
  }
];

const HelpCenter: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('getting-started');
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleQuestion = (id: string) => {
    const newExpanded = new Set(expandedQuestions);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedQuestions(newExpanded);
  };

  // Filter data based on search
  const filteredData = searchQuery
    ? faqData.map(section => ({
        ...section,
        questions: section.questions.filter(q => 
          q.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
          (typeof q.a === 'string' && q.a.toLowerCase().includes(searchQuery.toLowerCase()))
        )
      })).filter(section => section.questions.length > 0)
    : faqData;

  // Function to handle scroll to section
  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-ink-black bg-warm-white selection:bg-deep-green selection:text-white">
      <Header />
      
      <main className="flex-grow pt-24 md:pt-32 pb-16">
        
        {/* Hero Search Section */}
        <div className="bg-deep-green text-white py-16 md:py-24 px-4 mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl mb-6">How can we help you?</h1>
            <p className="text-xl text-stone-300 mb-10 font-light">Browse our guides or search for specific questions.</p>
            
            <div className="relative max-w-2xl mx-auto">
              <input 
                type="text" 
                placeholder="Search for answers (e.g. 'Shopify integration', 'Billing')" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-4 pl-14 pr-6 rounded-md text-ink-black text-lg focus:outline-none focus:ring-4 focus:ring-muted-gold/50 shadow-xl"
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-stone-400" size={24} />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sidebar Navigation (Desktop) */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-32 space-y-1 max-h-[calc(100vh-160px)] overflow-y-auto pr-2 custom-scrollbar">
                <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4 px-3">Categories</p>
                {faqData.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-sm text-left transition-colors ${
                      activeSection === section.id && !searchQuery
                        ? 'bg-white shadow-sm text-deep-green font-medium' 
                        : 'text-ink-black/70 hover:bg-stone-100 hover:text-ink-black'
                    }`}
                  >
                    <section.icon size={18} className={activeSection === section.id && !searchQuery ? 'text-muted-gold' : 'opacity-50'} />
                    <span className="text-sm">{section.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Navigation (Dropdown style or horizontal scroll) */}
            <div className="lg:hidden overflow-x-auto pb-4 flex gap-2 no-scrollbar snap-x">
              {faqData.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full border snap-start ${
                    activeSection === section.id 
                      ? 'bg-deep-green text-white border-deep-green' 
                      : 'bg-white text-ink-black border-stone-200'
                  }`}
                >
                  <section.icon size={14} />
                  <span className="text-sm whitespace-nowrap">{section.title}</span>
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="flex-1 min-w-0">
              {/* Back Home Link */}
              <div className="mb-8">
                 <Button 
                   variant="ghost" 
                   size="sm" 
                   onClick={() => window.location.hash = ''}
                   className="pl-0 hover:pl-2 text-stone-500"
                 >
                   ← Back to Home
                 </Button>
              </div>

              {filteredData.length === 0 && (
                <div className="text-center py-20 bg-white rounded-sm border border-stone-100">
                  <Search className="mx-auto h-12 w-12 text-stone-300 mb-4" />
                  <h3 className="text-xl font-medium text-ink-black mb-2">No results found</h3>
                  <p className="text-stone-500">Try searching for a different keyword or category.</p>
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="mt-4 text-deep-green font-medium hover:underline"
                  >
                    Clear search
                  </button>
                </div>
              )}

              <div className="space-y-12">
                {filteredData.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-32">
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-200">
                      <div className="p-2 bg-white rounded-sm shadow-sm text-deep-green">
                        <section.icon size={24} />
                      </div>
                      <h2 className="font-serif text-3xl text-ink-black">{section.title}</h2>
                    </div>

                    <div className="grid gap-4">
                      {section.questions.map((item, idx) => {
                        const qId = `${section.id}-${idx}`;
                        const isExpanded = expandedQuestions.has(qId) || searchQuery !== '';
                        
                        return (
                          <div 
                            key={idx} 
                            className={`bg-white border transition-all duration-300 rounded-sm overflow-hidden ${
                              isExpanded ? 'border-muted-gold shadow-md' : 'border-stone-100 hover:border-stone-300'
                            }`}
                          >
                            <button
                              onClick={() => toggleQuestion(qId)}
                              className="w-full text-left px-6 py-5 flex justify-between items-start gap-4 focus:outline-none"
                            >
                              <span className={`text-lg font-medium transition-colors ${isExpanded ? 'text-deep-green' : 'text-ink-black'}`}>
                                {item.q}
                              </span>
                              <span className="flex-shrink-0 mt-1 text-stone-400">
                                {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                              </span>
                            </button>
                            
                            <div 
                              className={`px-6 text-base border-t border-stone-50 bg-stone-50/30 transition-all duration-300 ease-in-out ${
                                isExpanded ? 'max-h-[500px] opacity-100 py-6 overflow-y-auto' : 'max-h-0 opacity-0 py-0 overflow-hidden'
                              }`}
                            >
                              {item.a}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </section>
                ))}
              </div>

              {/* Still Need Help Section */}
              <div className="mt-20 p-8 md:p-12 bg-luxury-tan rounded-sm border border-stone-200 text-center">
                <h3 className="font-serif text-3xl mb-4 text-ink-black">Still need help?</h3>
                <p className="text-lg text-ink-black/70 mb-8 max-w-2xl mx-auto">
                  Our support team is available Monday through Friday to assist with any questions Madison can't answer yet.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" onClick={() => window.location.href = 'mailto:support@madisonstudio.io'}>
                    Email Support
                  </Button>
                  <Button variant="outline" onClick={() => window.location.href = 'https://cal.com/team/madison-studio/demo'}>
                    Book a Training Call
                  </Button>
                </div>
                <p className="mt-6 text-sm text-stone-500">Response time: Within 24 hours</p>
              </div>

            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HelpCenter;