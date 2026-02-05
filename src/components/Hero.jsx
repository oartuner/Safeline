import React, { useEffect, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Hero = () => {
  const { t } = useTranslation();
  const [init, setInit] = useState(false);

  // Initialize particles
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          grab: {
            distance: 140,
            links: {
              opacity: 0.5
            }
          },
        },
      },
      particles: {
        color: {
          value: "#2d87c2", // Secondary color
        },
        links: {
          color: "#233778", // Primary color
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-bg-light via-white to-bg-alt">

      {/* Particles Background */}
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          className="absolute inset-0 z-0 pointer-events-none"
        />
      )}

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-bold tracking-wide mb-6 border border-secondary/20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
              </span>
              {t('hero.badge')}
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl lg:text-7xl font-bold mb-6 leading-tight text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="block">{t('hero.title1')}</span>
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              {t('hero.title2')}
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-text-muted mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a href="#services" className="group px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-white rounded-full font-semibold shadow-lg shadow-primary/30 flex items-center justify-center gap-2 hover:scale-105 transition-transform">
              <span>{t('hero.cta1')}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a href="#contact" className="px-8 py-4 bg-white border-2 border-border-light text-primary rounded-full font-semibold flex items-center justify-center gap-2 hover:border-secondary hover:text-secondary transition-colors hover:bg-secondary/5">
              <span>{t('hero.cta2')}</span>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-12 flex items-center gap-8 pt-8 border-t border-border-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div>
              <p className="text-3xl font-extrabold text-primary font-heading">150+</p>
              <p className="text-sm text-text-muted font-medium">{t('hero.stat1')}</p>
            </div>
            <div className="w-px h-12 bg-border-light"></div>
            <div>
              <p className="text-3xl font-extrabold text-secondary font-heading">20+</p>
              <p className="text-sm text-text-muted font-medium">{t('hero.stat2')}</p>
            </div>
          </motion.div>
        </div>

        {/* 3D/Visual Placeholder */}
        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative w-full aspect-square max-w-[600px] mx-auto">
            {/* Animated Blob Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-full blur-3xl animate-pulse"></div>

            {/* Interactive Card Stack */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80"
                alt="Modern Logistics"
                className="rounded-3xl shadow-2xl border-4 border-white w-full object-cover h-[500px]"
              />

              {/* Floating Elements */}
              <div className="absolute -right-8 top-20 bg-white p-4 rounded-2xl shadow-xl border border-border-light animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Status</p>
                    <p className="text-sm font-bold text-primary">Delivered</p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-8 bottom-32 bg-white/90 backdrop-blur p-5 rounded-2xl shadow-xl border border-border-light" style={{ animationDelay: '2s' }}>
                <div className="flex gap-4">
                  <div className="text-center">
                    <p className="text-xs text-text-muted">Global</p>
                    <p className="text-lg font-bold text-secondary">98%</p>
                  </div>
                  <div className="w-px h-8 bg-border-light"></div>
                  <div className="text-center">
                    <p className="text-xs text-text-muted">Local</p>
                    <p className="text-lg font-bold text-primary">100%</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
