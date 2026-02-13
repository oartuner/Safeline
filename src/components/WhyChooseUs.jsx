import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FileCheck, Clock, Zap, UserCheck, Handshake } from 'lucide-react';

const icons = [FileCheck, Clock, Zap, UserCheck, Handshake];

const WhyChooseUs = () => {
    const { t } = useTranslation();
    const items = t('whyUs.items', { returnObjects: true });

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Subtle background accent */}
            <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-primary/[0.03] to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/[0.04] rounded-full blur-3xl pointer-events-none -translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-20 items-start">

                    {/* Left Column — Header & Closing */}
                    <motion.div
                        className="lg:sticky lg:top-32"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-4 rounded-full bg-secondary/10 text-secondary text-xs font-black tracking-[0.2em] mb-6 border border-secondary/20">
                            {t('whyUs.tag')}
                        </span>

                        <h2 className="text-4xl sm:text-5xl font-black text-primary leading-[1.1] tracking-tight mb-4">
                            {t('whyUs.title')}
                        </h2>

                        <p className="text-lg text-gray-500 leading-relaxed mb-8">
                            {t('whyUs.subtitle')}
                        </p>

                        {/* Closing tagline */}
                        <div className="border-l-4 border-secondary pl-6 mt-8">
                            <p className="text-lg font-bold text-primary/90 leading-relaxed">
                                {t('whyUs.closing')}
                            </p>
                            <p className="text-base text-gray-500 mt-1 leading-relaxed">
                                {t('whyUs.closing2')}
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column — Timeline Items */}
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-6 top-4 bottom-4 w-px bg-gradient-to-b from-secondary/30 via-secondary/10 to-transparent hidden sm:block" />

                        <div className="space-y-6">
                            {Array.isArray(items) && items.map((item, i) => {
                                const Icon = icons[i] || ShieldCheck;
                                return (
                                    <motion.div
                                        key={i}
                                        className="group relative flex gap-5 sm:gap-6 items-start"
                                        initial={{ opacity: 0, y: 24 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: '-60px' }}
                                        transition={{ duration: 0.45, delay: i * 0.1 }}
                                    >
                                        {/* Number indicator + icon */}
                                        <div className="relative flex-shrink-0">
                                            <div className="w-12 h-12 rounded-xl bg-white border-2 border-gray-100 group-hover:border-secondary/40 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-105">
                                                <Icon size={20} className="text-secondary" strokeWidth={2.2} />
                                            </div>
                                            <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
                                                {i + 1}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 pb-6 border-b border-gray-100 group-last:border-b-0 group-hover:border-secondary/10 transition-colors">
                                            <h3 className="text-base sm:text-lg font-bold text-primary mb-1.5 group-hover:text-secondary transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
