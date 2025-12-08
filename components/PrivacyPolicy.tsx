import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Button from './ui/Button';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-ink-black bg-warm-white selection:bg-muted-gold selection:text-white">
      {/* Reusing Header for consistency, though navigations inside might just link to anchors on home */}
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
            <h1 className="font-serif text-5xl text-ink-black mb-6 leading-tight">Madison Studio Privacy Policy</h1>
            <p className="text-ink-black/60 text-lg">
              <strong>Effective Date:</strong> November 19, 2025<br />
              <strong>Last Updated:</strong> November 19, 2025
            </p>
          </div>

          {/* Content Section */}
          <div className="space-y-12 text-lg leading-relaxed text-ink-black/80">

            <section>
              <h2 className="font-serif text-3xl text-ink-black mb-4">Introduction</h2>
              <p className="mb-4">
                Madison Studio, a brand of Asala, LLC ("we," "our," or "us"), operates a luxury AI-powered brand operating system for beauty, fragrance, and creative e-commerce businesses. We are committed to protecting your privacy and handling your data with transparency and care.
              </p>
              <p className="mb-4">
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform at <span className="text-deep-green font-medium">madisonstudio.ai</span> (the "Service").
              </p>
              <p className="font-medium text-ink-black bg-stone-100 inline-block px-3 py-1 rounded">
                Legal Entity: Asala, LLC (doing business as Madison Studio)
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-ink-black mb-6">Information We Collect</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-ink-black mb-2">Information You Provide Directly</h3>
                  <ul className="list-disc pl-5 space-y-2 marker:text-muted-gold">
                    <li><strong>Account Information:</strong> Name, email address, password, and organization details.</li>
                    <li><strong>Brand Content:</strong> Brand guidelines, product information, content you create, images you upload.</li>
                    <li><strong>Profile Data:</strong> Communication preferences, billing information.</li>
                    <li><strong>User Content:</strong> All content you generate, save, or upload through our platform.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-ink-black mb-2">Information Collected Automatically</h3>
                  <ul className="list-disc pl-5 space-y-2 marker:text-muted-gold">
                    <li><strong>Usage Data:</strong> Pages visited, features used, time spent, click patterns.</li>
                    <li><strong>Device Information:</strong> Browser type, operating system, IP address.</li>
                    <li><strong>Cookies & Similar Technologies:</strong> Session identifiers, preference settings, analytics data.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-ink-black mb-2">Information From Third Parties</h3>
                  <ul className="list-disc pl-5 space-y-2 marker:text-muted-gold">
                    <li><strong>Google Services:</strong> If you authenticate with Google OAuth or sync Google Calendar, we receive basic profile information (name, email).</li>
                    <li><strong>Shopify Integration:</strong> Product data and store information when you connect your Shopify account.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-ink-black mb-4">How We Use Your Information</h2>
              <p className="mb-4">We use collected information to:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Provide, maintain, and improve the platform",
                  "Generate AI-powered content (Claude & Gemini)",
                  "Enable brand voice training features",
                  "Process marketplace listings & Shopify integrations",
                  "Sync calendar scheduling features",
                  "Communicate updates and security alerts",
                  "Analyze usage patterns",
                  "Detect and prevent fraud"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-base">
                    <span className="text-deep-green mt-1.5">●</span> {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-ink-black mb-4">AI Processing & Content Generation</h2>

              <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-ink-black mb-2">Third-Party AI Services</h3>
                <p className="mb-4">Madison Studio uses the following AI providers to generate content:</p>
                <ul className="list-disc pl-5 space-y-2 mb-6 marker:text-muted-gold">
                  <li><strong>Anthropic Claude API:</strong> Primary content generation.</li>
                  <li><strong>Google Gemini:</strong> Brand health analysis, image generation, derivative content.</li>
                </ul>

                <div className="bg-white p-4 rounded border border-stone-200">
                  <p className="font-bold text-deep-green uppercase text-xs tracking-widest mb-2">Important</p>
                  <p className="text-base mb-3">
                    When you use our content generation features, your prompts and brand information are sent to these AI services to create your content. These providers process data according to their own privacy policies:
                  </p>
                  <div className="flex gap-4 text-sm">
                    <a href="https://www.anthropic.com/legal/privacy" target="_blank" rel="noreferrer" className="text-deep-green hover:underline underline-offset-4">Anthropic Privacy Policy ↗</a>
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="text-deep-green hover:underline underline-offset-4">Google AI Privacy Policy ↗</a>
                  </div>
                </div>
              </div>
              <p className="italic">We do not use your content to train our own models or share it with third parties for their model training.</p>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-ink-black mb-4">Data Storage & Security</h2>
              <div className="space-y-4">
                <p>
                  <strong>Storage Location:</strong> Your data is stored securely using Supabase (PostgreSQL database) with encryption at rest. Generated images and documents are stored in secure cloud storage buckets with organization-scoped access controls.
                </p>
                <p>
                  <strong>Security Measures:</strong> Row-Level Security (RLS), encrypted tokens, JWT verification, and HTTPS/SSL encryption for all transmission.
                </p>
                <p>
                  <strong>Retention:</strong> Active data is retained while your account is active. Archived content is retained for 90 days. You may request deletion at any time.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-ink-black mb-4">How We Share Your Information</h2>
              <p className="mb-4">We share information only in these limited circumstances:</p>
              <ul className="list-disc pl-5 space-y-2 mb-6 marker:text-muted-gold">
                <li><strong>Service Providers:</strong> Anthropic, Google Cloud, Supabase, Stripe.</li>
                <li><strong>Legal Requirements:</strong> If required by law, court order, or to protect rights.</li>
                <li><strong>Business Transfers:</strong> If Madison Studio is acquired or merged.</li>
              </ul>
              <p className="font-bold text-ink-black">We never sell your personal information, share your content with other users, or use your brand content for marketing without permission.</p>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-ink-black mb-4">Your Privacy Rights</h2>
              <p className="mb-4">Depending on your location, you may have rights including:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <li className="bg-stone-50 p-4 rounded border border-stone-100">
                  <strong className="block text-deep-green mb-1">Access & Portability</strong>
                  View all personal data or export content.
                </li>
                <li className="bg-stone-50 p-4 rounded border border-stone-100">
                  <strong className="block text-deep-green mb-1">Correction & Deletion</strong>
                  Update info or request account deletion.
                </li>
                <li className="bg-stone-50 p-4 rounded border border-stone-100">
                  <strong className="block text-deep-green mb-1">Opt-Out & Control</strong>
                  Unsubscribe from marketing or disable integrations.
                </li>
                <li className="bg-stone-50 p-4 rounded border border-stone-100">
                  <strong className="block text-deep-green mb-1">Data Minimization</strong>
                  We collect only what is necessary.
                </li>
              </ul>
              <p>To exercise these rights, contact us at <a href="mailto:privacy@madisonstudio.io" className="text-deep-green font-bold hover:underline">privacy@madisonstudio.io</a>.</p>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-ink-black mb-4">Regional Rights</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-4 border-muted-gold pl-4">
                  <h3 className="text-lg font-bold text-ink-black mb-2">California (CCPA)</h3>
                  <p className="text-sm mb-2">Right to know what is collected, right to opt-out of sale/sharing (we don't sell), right to deletion, and right to non-discrimination.</p>
                  <p className="text-sm text-stone-500">Email with subject "California Privacy Request".</p>
                </div>
                <div className="border-l-4 border-muted-gold pl-4">
                  <h3 className="text-lg font-bold text-ink-black mb-2">Europe (GDPR)</h3>
                  <p className="text-sm mb-2">Right to access, rectification, erasure, restriction of processing, data portability, and right to withdraw consent.</p>
                </div>
              </div>
            </section>

            <section className="mt-16 pt-10 border-t border-stone-200">
              <h2 className="font-serif text-3xl text-ink-black mb-6">Contact Us</h2>
              <div className="bg-stone-100 p-8 rounded-lg flex flex-col md:flex-row justify-between items-start gap-8">
                <div>
                  <p className="text-sm font-bold tracking-widest text-stone-500 uppercase mb-2">Legal Entity</p>
                  <p className="font-bold text-lg">Asala, LLC (d/b/a Madison Studio)</p>
                  <p className="mt-2 text-ink-black/70">
                    31080 Union City Blvd, Suite 211<br />
                    Union City, CA 94587
                  </p>
                </div>
                <div>
                  <p className="text-sm font-bold tracking-widest text-stone-500 uppercase mb-2">Get in Touch</p>
                  <div className="space-y-2">
                    <p>Privacy: <a href="mailto:privacy@madisonstudio.io" className="text-deep-green font-medium hover:underline">privacy@madisonstudio.io</a></p>
                    <p>Support: <a href="mailto:support@madisonstudio.io" className="text-deep-green font-medium hover:underline">support@madisonstudio.io</a></p>
                    <p>Security: <a href="mailto:security@madisonstudio.io" className="text-deep-green font-medium hover:underline">security@madisonstudio.io</a></p>
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

export default PrivacyPolicy;