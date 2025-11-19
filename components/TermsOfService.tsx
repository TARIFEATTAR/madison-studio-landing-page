import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Button from './ui/Button';

const TermsOfService: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-ink-black bg-warm-white selection:bg-deep-green selection:text-white">
      <Header />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Navigation Back */}
          <div className="mb-10">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => window.location.hash = ''}
              className="pl-0 hover:pl-2 transition-all"
            >
              ← Back to Home
            </Button>
          </div>

          {/* Header Section */}
          <div className="border-b border-stone-200 pb-10 mb-10">
            <h1 className="font-serif text-5xl text-ink-black mb-6 leading-tight">Madison Studio Terms of Service</h1>
            <p className="text-ink-black/60 text-lg">
              <strong>Effective Date:</strong> November 19, 2025<br />
              <strong>Last Updated:</strong> November 19, 2025
            </p>
          </div>

          {/* Content Section */}
          <div className="space-y-12 text-lg leading-relaxed text-ink-black/80">
            
            <section>
              <h2 className="font-serif text-3xl text-ink-black mb-4">Acceptance of Terms</h2>
              <p className="mb-4">
                Welcome to Madison Studio, a brand of Asala, LLC. By accessing or using our platform at <span className="text-deep-green font-medium">madisonstudio.ai</span> (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service.
              </p>
              <p className="mb-4">
                These Terms constitute a legally binding agreement between you (individually or on behalf of your organization) and Asala, LLC, doing business as Madison Studio ("we," "our," or "us").
              </p>
              <p className="font-medium text-ink-black bg-stone-100 inline-block px-3 py-1 rounded">
                Legal Entity: Asala, LLC (d/b/a Madison Studio)
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-ink-black mb-4">Description of Service</h2>
              <p className="mb-4">Madison Studio is a luxury AI-powered brand operating system designed for beauty, fragrance, and creative e-commerce businesses. The Service provides:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "AI content generation (Claude & Gemini)",
                  "Content repurposing & multi-channel adaptation",
                  "Brand knowledge management",
                  "AI image generation for product photography",
                  "Content scheduling & calendar management",
                  "Marketplace listing optimization",
                  "Product catalog management",
                  "Team collaboration tools"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-base">
                    <span className="text-deep-green mt-1.5">●</span> {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-ink-black mb-4">Eligibility & Registration</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-ink-black mb-2">Eligibility</h3>
                  <p>You must be at least 18 years old and capable of forming a binding contract to use Madison Studio. If you use the Service on behalf of an organization, you represent that you have authority to bind that organization.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink-black mb-2">Account Security</h3>
                  <p>You are responsible for maintaining the confidentiality of your login credentials and all activities that occur under your account. You agree to provide accurate, current, and complete information.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-ink-black mb-4">User Content & Intellectual Property</h2>
              <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 space-y-6">
                <div>
                    <strong className="block text-lg text-deep-green mb-2">Your Content</strong>
                    <p>You retain all ownership rights to content you create, upload, or generate through Madison Studio ("User Content").</p>
                </div>
                <div>
                    <strong className="block text-lg text-deep-green mb-2">License to Us</strong>
                    <p>By using the Service, you grant us a limited license to store, process, and display your User Content solely to provide the Service. This license ends when you delete content or close your account.</p>
                </div>
                <div>
                    <strong className="block text-lg text-deep-green mb-2">Our IP</strong>
                    <p>The Madison Studio platform, software, designs, and trademarks are owned by Asala, LLC. You may not reverse engineer or copy our platform.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-ink-black mb-4">AI-Generated Content</h2>
              <div className="space-y-4">
                <p>
                  <strong>Ownership:</strong> You own the content generated through Madison Studio.
                </p>
                <p>
                  <strong>Disclaimer:</strong> AI-generated content is provided "as is" and may contain factual inaccuracies. You are solely responsible for reviewing, verifying, and approving all content before use.
                </p>
                <p>
                  <strong>Prohibited Uses:</strong> You may not use Madison Studio to generate content that violates laws, infringes IP rights, contains hate speech, or violates third-party marketplace policies (Shopify, Etsy, etc.).
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-ink-black mb-4">Usage Guidelines</h2>
              <p className="mb-4">You agree to use Madison Studio only for lawful purposes. You will not:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-muted-gold">
                <li>Violate any applicable laws or regulations.</li>
                <li>Upload viruses, malware, or malicious code.</li>
                <li>Attempt to gain unauthorized access to our systems.</li>
                <li>Scrape, harvest, or collect user data without permission.</li>
                <li>Resell or redistribute the Service without authorization.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-ink-black mb-4">Subscription & Payment</h2>
              <div className="space-y-4">
                <p><strong>Billing:</strong> Subscriptions are billed monthly or annually in advance via Stripe. Prices are subject to change with 30 days' notice.</p>
                <p><strong>Cancellation:</strong> You may cancel at any time. Cancellation takes effect at the end of your current billing period. No refunds for partial months.</p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-ink-black mb-4">Disclaimers & Limitation of Liability</h2>
              <p className="mb-4 uppercase tracking-widest font-bold text-xs text-stone-500">Read Carefully</p>
              <div className="space-y-4">
                 <p>
                   The Service is provided "AS IS" and "AS AVAILABLE" without warranties of any kind. We do not guarantee continuous availability or specific business results.
                 </p>
                 <p>
                   To the maximum extent permitted by law, Madison Studio shall not be liable for indirect, incidental, or consequential damages, or lost profits. Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim.
                 </p>
              </div>
            </section>

            <section>
               <h2 className="font-serif text-3xl text-ink-black mb-4">Dispute Resolution</h2>
               <p className="mb-4">
                 These Terms are governed by the laws of California. Any dispute not resolved informally shall be resolved through binding arbitration, rather than in court. You waive any right to participate in class actions.
               </p>
            </section>

            <section className="mt-16 pt-10 border-t border-stone-200">
              <h2 className="font-serif text-3xl text-ink-black mb-6">Contact Us</h2>
              <div className="bg-stone-100 p-8 rounded-lg flex flex-col md:flex-row justify-between items-start gap-8">
                <div>
                  <p className="text-sm font-bold tracking-widest text-stone-500 uppercase mb-2">Legal Entity</p>
                  <p className="font-bold text-lg">Asala, LLC (d/b/a Madison Studio)</p>
                  <p className="mt-2 text-ink-black/70">
                    31080 Union City Blvd, Suite 211<br/>
                    Union City, CA 94587
                  </p>
                </div>
                <div>
                  <p className="text-sm font-bold tracking-widest text-stone-500 uppercase mb-2">Inquiries</p>
                  <div className="space-y-2">
                    <p>Legal: <a href="mailto:legal@madisonstudio.io" className="text-deep-green font-medium hover:underline">legal@madisonstudio.io</a></p>
                    <p>Support: <a href="mailto:support@madisonstudio.io" className="text-deep-green font-medium hover:underline">support@madisonstudio.io</a></p>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;