import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorks from './components/HowItWorks';
import WhoItsFor from './components/WhoItsFor';
import SocialProof from './components/SocialProof';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import HelpCenter from './components/HelpCenter';
import Pricing from './components/Pricing';
import SecretaryChat from './components/SecretaryChat';

// Home Page with new content structure
const Home: React.FC = () => (
  <div className="min-h-screen flex flex-col font-sans text-ink-black bg-vellum selection:bg-brass selection:text-parchment">
    <Header />
    <main className="flex-grow">
      <Hero />
      <ProblemSection />
      <FeaturesSection />
      <HowItWorks />
      <WhoItsFor />
      <SocialProof />
      <FinalCTA />
    </main>
    <Footer />
    <SecretaryChat />
  </div>
);

const App: React.FC = () => {
  const [currentHash, setCurrentHash] = useState<string>(() => window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      setCurrentHash(hash);

      if (hash.startsWith('#/') || hash === '' || hash === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const id = hash.replace('#', '');
        if (id) {
          setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const route = currentHash || '#/';

  const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <>
      {children}
      <SecretaryChat />
    </>
  );

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

  return <Home />;
};

export default App;
