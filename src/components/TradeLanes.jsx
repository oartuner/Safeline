import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

const routeIcons = ['🇩🇪', '🇹🇷', '🇪🇺'];

const TradeLanes = () => {
    const { t } = useTranslation();
    const routes = t('tradeLanes.routes', { returnObjects: true });

    return (
        <section id="tradeLanes" className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Subtle background */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/[0.03] rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block py-1 px-4 rounded-full bg-secondary/10 text-secondary text-xs font-black tracking-[0.2em] mb-6 border border-secondary/20">
                        {t('tradeLanes.tag')}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-black text-primary mb-4 tracking-tight">
                        {t('tradeLanes.title')}
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        {t('tradeLanes.subtitle')}
                    </p>
                </motion.div>

                {/* Route Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {Array.isArray(routes) && routes.map((route, i) => (
                        <motion.div
                            key={i}
                            className="group relative bg-white rounded-2xl border border-gray-100 p-8 hover:border-secondary/30 hover:shadow-xl transition-all duration-300 flex flex-col"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.5, delay: i * 0.12 }}
                        >
                            {/* Route flag */}
                            <div className="text-4xl mb-5">
                                {routeIcons[i]}
                            </div>

                            {/* Route title */}
                            <h3 className="text-xl font-black text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                                {route.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">
                                {route.desc}
                            </p>

                            {/* CTA */}
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 text-sm font-bold text-secondary hover:text-primary transition-colors group/link"
                            >
                                <span>{t('tradeLanes.cta')}</span>
                                <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                            </a>

                            {/* Decorative line */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-primary rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TradeLanes;
