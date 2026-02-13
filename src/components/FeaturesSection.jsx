import React from 'react';
import { motion } from 'framer-motion';
import { Ship, Plane, Truck, TrainFront, Warehouse, HardHat, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const services = [
    { key: 'sea', icon: Ship, accent: 'from-blue-500 to-cyan-400' },
    { key: 'air', icon: Plane, accent: 'from-amber-500 to-yellow-400' },
    { key: 'land', icon: Truck, accent: 'from-teal-500 to-emerald-400' },
    { key: 'rail', icon: TrainFront, accent: 'from-indigo-500 to-blue-400' },
    { key: 'project', icon: HardHat, accent: 'from-orange-500 to-red-400' },
    { key: 'warehouse', icon: Warehouse, accent: 'from-slate-500 to-gray-400' },
];

const FeaturesSection = () => {
    const { t } = useTranslation();

    return (
        <section id="services" className="py-20 bg-primary relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-white/10 text-white text-xs sm:text-sm font-bold tracking-[0.2em] mb-4 border border-white/20">
                        {t('nav.services').toUpperCase()}
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight leading-tight">
                        {t('services_bento.title')}
                    </h2>
                    <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                        {t('services_bento.subtitle')}
                    </p>
                </motion.div>

                {/* Icon Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.key}
                                className="group relative bg-white/[0.07] backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/[0.14] hover:border-white/25 transition-all duration-300"
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                            >
                                {/* Icon */}
                                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.accent} shadow-lg mb-5 w-fit group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="text-white" size={22} strokeWidth={2} />
                                </div>

                                {/* Title — pure white, sans-serif, no heading font */}
                                <h3 className="text-xl mb-2 tracking-tight" style={{ color: '#ffffff', fontFamily: "'Inter', sans-serif", fontWeight: 800 }}>
                                    {t(`services_bento.${service.key}.title`)}
                                </h3>

                                {/* One-liner */}
                                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
                                    {t(`services_bento.${service.key}.desc`)}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Single CTA at bottom */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-3 px-10 py-4 bg-white text-primary font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                    >
                        <span>{t('hero.cta1')}</span>
                        <ArrowRight size={18} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturesSection;
