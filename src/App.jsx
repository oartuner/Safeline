import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesSection from './components/FeaturesSection';
import About from './components/About';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import TrustBanner from './components/TrustBanner';
import TrustLogos from './components/TrustLogos';
import CookieConsent from './components/CookieConsent';
import OurValues from './components/OurValues';

function App() {
  React.useEffect(() => {
    try {
      const saved = localStorage.getItem('language');
      if (saved === 'tr') {
        localStorage.setItem('language', 'en');
        // i18n instance is global, so this will trigger re-render if using useTranslation hook
        import('./i18n').then(module => {
          module.default.changeLanguage('en');
        });
      }
    } catch (e) {
      console.error('Storage access error:', e);
    }
  }, []);

  return (
    <div className="app">
      <TrustBanner />
      <Navbar />
      <Hero />
      <TrustLogos />
      <FeaturesSection />
      <About />
      <OurValues />
      <Certifications />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
}

export default App;
