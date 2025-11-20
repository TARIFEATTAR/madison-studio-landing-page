import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemStrip from './components/ProblemStrip';
import HowItWorks from './components/HowItWorks';
import FeatureGrid from './components/FeatureGrid';
import MadisonPersona from './components/MadisonPersona';
import MicroAgents from './components/MicroAgents';
import TargetAudience from './components/TargetAudience';
import Integrations from './components/Integrations';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ImageComparison from './components/ImageComparison';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import HelpCenter from './components/HelpCenter';
import Pricing from './components/Pricing';
import SecretaryChat from './components/SecretaryChat';

// Extract Home Page for cleaner routing and rendering
const Home: React.FC = () => (
  <div className="min-h-screen flex flex-col font-sans text-ink-black bg-warm-white selection:bg-deep-green selection:text-white">
    <Header />
    <main className="flex-grow">
      <Hero />
      <ProblemStrip />
      <ImageComparison />
      <HowItWorks />
      <FeatureGrid />
      <MadisonPersona />
      <MicroAgents />
      <TargetAudience />
      <Integrations />
      <FinalCTA />
    </main>
    <Footer />
    <SecretaryChat />
  </div>
);

const App: React.FC = () => {
  // Use lazy initialization to get the hash immediately on mount
  // This prevents the "flash" of the wrong page and ensures 
  // correct rendering before effects run.
  const [currentHash, setCurrentHash] = useState<string>(() => window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      setCurrentHash(hash);
      
      // Scroll handling
      // If it's a page route (starts with #/ or is root), scroll to top
      if (hash.startsWith('#/') || hash === '' || hash === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // If it's an anchor link (e.g. #features), scroll to the element
        const id = hash.replace('#', '');
        if (id) {
          // Small delay to ensure DOM is ready if we just switched views
          setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }
      }
    };

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Normalized routing logic
  const route = currentHash || '#/';

  // Common wrapper to include the Chat on all pages
  const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <>
      {children}
      <SecretaryChat />
    </>
  );

  // Exact match or starts with for nested routes
  if (route.startsWith('#/pricing')) {
    return <PageWrapper><Pricing /></PageWrapper>;
  }
  
  if (route.startsWith('#/privacy')) {
    return <PageWrapper><PrivacyPolicy /></PageWrapper>;
  }

  if (route.startsWith('#/terms')) {
    return <PageWrapper><TermsOfService /></PageWrapper>;
  }

  if (route.startsWith('#/help')) {
    return <PageWrapper><HelpCenter /></PageWrapper>;
  }

  // Default to Home Page
  return <Home />;
};

export default App;
