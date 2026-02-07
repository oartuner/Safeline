import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import logo from '../assets/logo.webp';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' }
];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredItem, setHoveredItem] = useState(null);

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      // Calculate scroll progress
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);

      // Detect active section
      const sections = ['contact', 'certifications', 'values', 'about', 'services', 'home'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && scrollY >= el.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem('language', code);
    setLangOpen(false);
  };

  const menuItems = [
    { label: t('nav.home'), href: '#home', id: 'home' },
    { label: t('nav.services'), href: '#services', id: 'services' },
    { label: t('nav.about'), href: '#about', id: 'about' },
    { label: t('nav.values'), href: '#values', id: 'values' },
    { label: t('nav.certifications'), href: '#certifications', id: 'certifications' },
    { label: t('nav.contact'), href: '#contact', id: 'contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/95 backdrop-blur-lg shadow-lg shadow-black/5'
        : 'bg-white/80 backdrop-blur-sm'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Mobile-first container */}
      <div className="px-4 py-3 sm:px-6 sm:py-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex-shrink-0 z-50 block">
            <img
              src={logo}
              alt="Safeline Logistics"
              className="h-[72px] w-auto object-contain block"
              style={{ height: '72px', width: 'auto' }}
            />
          </a>

          {/* Desktop Menu - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-1 bg-white/50 backdrop-blur-md rounded-full px-2 py-1.5 border border-gray-200/50 shadow-sm">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className="relative px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 group"
              >
                {/* Hover/Active Background Hook */}
                <div className={`absolute inset-0 rounded-full transition-all duration-300 ${activeSection === item.id
                  ? 'opacity-0'
                  : 'bg-primary opacity-0 group-hover:opacity-100'
                  }`} />

                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg shadow-primary/20"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span
                  className="relative z-10 transition-colors duration-300"
                  style={{
                    color: (activeSection === item.id || hoveredItem === item.id) ? '#FFFFFF' : 'rgba(35, 55, 120, 0.7)'
                  }}
                >
                  {item.label}
                </span>
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-xs font-bold text-gray-700">{currentLang.label}</span>
                <ChevronDown
                  size={12}
                  className={`text-gray-500 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-24 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-1 z-50"
                  >
                    {['en', 'de'].map((lng) => (
                      <button
                        key={lng}
                        onClick={() => changeLanguage(lng)}
                        className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 hover:bg-gray-50 transition-colors ${lng === i18n.language
                          ? 'bg-secondary/10 text-secondary font-bold'
                          : 'text-gray-700'
                          }`}
                      >
                        <span className="font-medium">{lng.toUpperCase()}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Toggle */}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="lg:hidden mt-4 bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-4 space-y-1">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3.5 rounded-xl font-semibold text-base transition-colors ${activeSection === item.id
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-secondary/20'
                      : 'text-gray-700 hover:bg-primary/90 hover:text-white'
                      }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.label}
                  </motion.a>
                ))}

                {/* Mobile CTA */}
                <motion.a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3.5 rounded-xl bg-gradient-to-r from-secondary to-secondary-light text-white font-bold text-center mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    <Sparkles size={18} />
                    {t('nav.quote')}
                  </span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary to-secondary transition-all duration-100"
        style={{
          width: `${scrollProgress}%`,
          opacity: scrolled ? 1 : 0
        }}
      />
    </motion.nav>
  );
};

export default Navbar;
