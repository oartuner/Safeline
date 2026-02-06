import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import WorldMapAnimation from './WorldMapAnimation';
import LogisticsVisual from './LogisticsVisual';
import AnimatedCounter from './AnimatedCounter';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-[75vh] flex items-center pt-16 pb-20 overflow-hidden bg-white">
      {/* World Map Background - subtle & high quality */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden">
        <div className="absolute inset-0 opacity-100">
          <WorldMapAnimation />
        </div>
        {/* Visual Overlay for Readability - reduced opacity for visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/70 via-white/40 to-blue-50/70 mix-blend-overlay" />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[0.5px]" />
      </div>

      {/* Background Gradients for Depth */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Experience Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary/10 text-secondary rounded-full text-sm font-bold tracking-widest mb-10 border border-secondary/20 backdrop-blur-md shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
              </span>
              {t('hero.badge')}
            </span>
          </motion.div>

          {/* Epic Main Title */}
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 leading-[1.1] text-primary tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="block mb-2">{t('hero.title1')}</span>
            <span className="bg-gradient-to-r from-secondary via-secondary-light to-primary-light bg-clip-text text-transparent">
              {t('hero.title2')}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-text-muted mb-10 leading-relaxed max-w-2xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('hero.description')}
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a href="#services" className="group px-10 py-5 bg-gradient-to-r from-primary to-primary-light !text-white rounded-full font-bold shadow-2xl shadow-primary/30 flex items-center justify-center gap-4 hover:scale-105 transition-all">
              <span className="!text-white">{t('hero.cta1')}</span>
              <ArrowRight className="w-5 h-5 !text-white group-hover:translate-x-1 transition-transform" />
            </a>

            <a href="#contact" className="px-10 py-5 bg-white/80 backdrop-blur-md border-2 border-border-light text-primary rounded-full font-bold flex items-center justify-center gap-2 hover:border-secondary hover:text-secondary transition-all hover:bg-white shadow-xl">
              <span>{t('hero.cta2')}</span>
            </a>
          </motion.div>

          {/* Professional Stats Bar */}
          <motion.div
            className="mt-8 flex items-center justify-center gap-12 pt-6 border-t border-border-light/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="text-center group cursor-default">
              <div className="text-5xl font-black text-primary font-heading group-hover:text-secondary transition-colors duration-300 flex justify-center items-center gap-1">
                <AnimatedCounter from={0} to={150} duration={2.5} />
                <span>+</span>
              </div>
              <p className="text-xs text-text-muted font-black uppercase tracking-[0.2em] mt-2 opacity-80">{t('hero.stat1')}</p>
            </div>
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-border-light to-transparent"></div>
            <div className="text-center group cursor-default">
              <div className="text-5xl font-black text-secondary font-heading group-hover:text-primary transition-colors duration-300 flex justify-center items-center gap-1">
                <AnimatedCounter from={0} to={20} duration={2} />
                <span>+</span>
              </div>
              <p className="text-xs text-text-muted font-black uppercase tracking-[0.2em] mt-2 opacity-80">{t('hero.stat2')}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section >
  );
};

export default Hero;
