// ==========================================
// SAFELINE MODERNIZATION - QUICK START CODE
// ==========================================

// ============ 1. GLASSMORPHISM NAVBAR ============
// components/Navbar.jsx

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'Dashboard', href: '#dashboard' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-lg border-b border-white/30'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            SafeLine
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <motion.button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </motion.button>

            {/* CTA Button */}
            <motion.button
              className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-medium shadow-lg shadow-blue-500/30"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              Start Free Trial
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden mt-4 p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-white/30"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="block py-3 text-gray-700 hover:text-blue-600 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Progress Bar */}
      {scrolled && (
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-red-500"
          initial={{ width: 0 }}
          animate={{ 
            width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%` 
          }}
        />
      )}
    </motion.nav>
  );
}


// ============ 2. HERO SECTION WITH PARTICLES ============
// components/HeroSection.jsx

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useEffect, useRef } from 'react';

export function HeroSection() {
  const canvasRef = useRef(null);

  // Particle Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 80;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = 'rgba(30, 64, 175, 0.1)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function connectParticles() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = `rgba(30, 64, 175, ${0.1 - distance / 1000})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      connectParticles();
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-yellow-50">
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6">
              🚀 Next-Gen Security System
            </span>
          </motion.div>

          <motion.h1
            className="text-6xl lg:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent">
              Secure Your
            </span>
            <br />
            Business Today
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            AI-powered threat detection, real-time monitoring, and cloud storage. 
            Protect what matters most with enterprise-grade security.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-medium shadow-lg shadow-blue-500/30 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Started Free</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.button>

            <motion.button
              className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-full font-medium flex items-center justify-center space-x-2 hover:border-blue-600 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play size={20} />
              <span>Watch Demo</span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-12 grid grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div>
              <div className="text-3xl font-bold text-gray-900">10K+</div>
              <div className="text-sm text-gray-600">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">99.9%</div>
              <div className="text-sm text-gray-600">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </motion.div>
        </div>

        {/* Right: 3D Visual / Illustration */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative w-full aspect-square">
            {/* Placeholder for 3D model or illustration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-3xl animate-pulse" />
            <img
              src="/images/hero-illustration.svg"
              alt="Security System"
              className="relative z-10 w-full h-full object-contain animate-float"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}


// ============ 3. FEATURES BENTO GRID ============
// components/FeaturesSection.jsx

import { motion } from 'framer-motion';
import { Activity, Brain, Cloud, Smartphone, BarChart, Zap } from 'lucide-react';
import { useRef } from 'react';

const features = [
  {
    id: 1,
    title: 'Real-time Monitoring',
    description: '24/7 surveillance with instant alerts',
    icon: Activity,
    gradient: 'from-blue-600 to-blue-400',
    size: 'col-span-2 row-span-2',
  },
  {
    id: 2,
    title: 'AI Threat Detection',
    description: 'Machine learning powered anomaly detection',
    icon: Brain,
    gradient: 'from-red-500 to-orange-400',
    size: 'col-span-1 row-span-1',
  },
  {
    id: 3,
    title: 'Cloud Storage',
    description: 'Secure encrypted cloud backup',
    icon: Cloud,
    gradient: 'from-green-500 to-emerald-400',
    size: 'col-span-1 row-span-1',
  },
  {
    id: 4,
    title: 'Mobile Access',
    description: 'Control from anywhere, anytime',
    icon: Smartphone,
    gradient: 'from-yellow-500 to-amber-400',
    size: 'col-span-1 row-span-1',
  },
  {
    id: 5,
    title: 'Advanced Analytics',
    description: 'Detailed insights and reporting',
    icon: BarChart,
    gradient: 'from-purple-500 to-violet-400',
    size: 'col-span-1 row-span-1',
  },
  {
    id: 6,
    title: 'Easy Integration',
    description: 'Works with your existing systems',
    icon: Zap,
    gradient: 'from-pink-500 to-rose-400',
    size: 'col-span-2 row-span-1',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600">Everything you need to secure your business</p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }) {
  const cardRef = useRef(null);
  const Icon = feature.icon;

  return (
    <motion.div
      ref={cardRef}
      className={`${feature.size} group relative bg-white rounded-3xl border-2 border-gray-100 overflow-hidden cursor-pointer`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      onMouseMove={(e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        cardRef.current.style.setProperty('--mouse-x', `${x}px`);
        cardRef.current.style.setProperty('--mouse-y', `${y}px`);
      }}
      style={{
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
      }}
    >
      {/* Gradient Border on Hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        style={{
          padding: '2px',
          borderRadius: '24px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      {/* Glow Effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.3), transparent 50%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-8 h-full flex flex-col justify-between bg-white rounded-3xl">
        <div>
          <div className={`inline-flex p-3 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-4`}>
            <Icon className="text-white" size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-gray-900">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>

        <motion.div
          className="mt-4 text-blue-600 font-medium flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity"
          whileHover={{ x: 5 }}
        >
          <span>Learn more</span>
          <ArrowRight size={16} />
        </motion.div>
      </div>
    </motion.div>
  );
}


// ============ 4. TAILWIND CONFIG ============
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#1E40AF',
          light: '#3B82F6',
          dark: '#1E3A8A',
        },
        accent: {
          main: '#FF6B6B',
          light: '#FF8787',
          dark: '#EE5A52',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Satoshi', 'Inter', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};


// ============ 5. PACKAGE.JSON ============
// package.json

{
  "name": "safeline-modern",
  "version": "2.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "next": "14.0.0",
    "framer-motion": "^10.16.0",
    "gsap": "^3.12.0",
    "lottie-react": "^2.4.0",
    "three": "^0.158.0",
    "@react-three/fiber": "^8.15.0",
    "@react-three/drei": "^9.88.0",
    "lucide-react": "^0.292.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0",
    "react-countup": "^6.5.0",
    "swiper": "^11.0.0"
  },
  "devDependencies": {
    "typescript": "^5.2.0",
    "@types/node": "^20.8.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "tailwindcss": "^3.3.0",
    "eslint": "^8.52.0",
    "eslint-config-next": "14.0.0"
  }
}


// ============ 6. GLOBAL CSS ============
// styles/globals.css

@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

@layer base {
  * {
    @apply border-border;
  }
  
  body {
    @apply bg-white text-gray-900;
    font-family: 'Inter', sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }
}

@layer utilities {
  /* Glassmorphism */
  .glass {
    @apply bg-white/70 backdrop-blur-md border border-white/30;
  }

  /* Gradient Text */
  .gradient-text {
    @apply bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent;
  }

  /* Animated Gradient Background */
  .gradient-animate {
    background: linear-gradient(270deg, #1E40AF, #3B82F6, #FF6B6B);
    background-size: 400% 400%;
    animation: gradient-x 15s ease infinite;
  }

  /* Custom Scrollbar */
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  .custom-scrollbar::-webkit-scrollbar-track {
    @apply bg-gray-100 rounded-full;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    @apply bg-blue-600 rounded-full hover:bg-blue-700;
  }
}

/* Smooth transitions for theme switching */
* {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}
