import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Brain, Globe, ShieldCheck, BarChart, Zap, ArrowRight, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Modal from './Modal';

const FeaturesSection = () => {
    const { t } = useTranslation();
    const [selectedService, setSelectedService] = useState(null);

    const features = [
        {
            id: 1,
            title: t('services_bento.sea.title'),
            description: t('services_bento.sea.desc'),
            content: t('services_bento.sea.content'),
            icon: Globe,
            gradient: 'from-blue-600 to-blue-400',
            size: 'md:col-span-2 md:row-span-2',
        },
        {
            id: 2,
            title: t('services_bento.air.title'),
            description: t('services_bento.air.desc'),
            content: t('services_bento.air.content'),
            icon: Zap,
            gradient: 'from-amber-500 to-yellow-400',
            size: 'md:col-span-1 md:row-span-1',
        },
        {
            id: 3,
            title: t('services_bento.land.title'),
            description: t('services_bento.land.desc'),
            content: t('services_bento.land.content'),
            icon: Activity,
            gradient: 'from-cyan-500 to-blue-400',
            size: 'md:col-span-1 md:row-span-1',
        },
        {
            id: 4,
            title: t('services_bento.rail.title'),
            description: t('services_bento.rail.desc'),
            content: t('services_bento.rail.content'),
            icon: ShieldCheck,
            gradient: 'from-emerald-500 to-green-400',
            size: 'md:col-span-1 md:row-span-1',
        },
        {
            id: 5,
            title: t('services_bento.warehouse.title'),
            description: t('services_bento.warehouse.desc'),
            content: t('services_bento.warehouse.content'),
            icon: BarChart,
            gradient: 'from-purple-500 to-violet-400',
            size: 'md:col-span-1 md:row-span-1',
        },
        {
            id: 6,
            title: t('services_bento.project.title'),
            description: t('services_bento.project.desc'),
            content: t('services_bento.project.content'),
            icon: Brain,
            gradient: 'from-pink-500 to-rose-400',
            size: 'md:col-span-2 md:row-span-1',
        },
    ];

    return (
        <section id="features" className="py-24 bg-bg-light relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary text-sm font-bold tracking-wider mb-4 border border-secondary/20">
                        {t('nav.services').toUpperCase()}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary font-heading">
                        {t('nav.services') || 'Logistic Solutions'}
                    </h2>
                    <p className="text-xl text-text-muted max-w-2xl mx-auto">
                        {t('hero.description') || 'Discover our end-to-end logistics capabilities designed for efficiency and scale.'}
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 auto-rows-[minmax(180px,auto)]">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={feature.id}
                            feature={feature}
                            index={index}
                            onClick={() => setSelectedService(feature)}
                        />
                    ))}
                </div>
            </div>

            <Modal
                isOpen={!!selectedService}
                onClose={() => setSelectedService(null)}
                title={selectedService?.title}
                content={selectedService?.content}
                icon={selectedService ? <selectedService.icon size={32} /> : null}
            />
        </section>
    );
}

function FeatureCard({ feature, index, onClick }) {
    const cardRef = useRef(null);
    const Icon = feature.icon;

    return (
        <motion.div
            ref={cardRef}
            onClick={onClick}
            className={`${feature.size} group relative bg-white rounded-3xl border border-border-light overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.01 }}
            onMouseMove={(e) => {
                if (!cardRef.current) return;
                const rect = cardRef.current.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                cardRef.current.style.setProperty('--mouse-x', `${x}px`);
                cardRef.current.style.setProperty('--mouse-y', `${y}px`);
            }}
        >
            {/* Hover Gradient Overlay */}
            <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                style={{
                    zIndex: 0,
                    opacity: 0.05
                }}
            />

            {/* Mouse Glow Effect */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
                style={{
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(45, 135, 194, 0.15), transparent 40%)`,
                    zIndex: 1
                }}
            />

            {/* Content */}
            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div>
                    <div className={`inline-flex p-3 rounded-2xl mb-4 bg-bg-alt group-hover:bg-white transition-colors shadow-sm`}>
                        <Icon className="text-primary group-hover:text-secondary transition-colors" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-text-main group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-text-muted group-hover:text-text-main/80 transition-colors">{feature.description}</p>
                </div>

                <motion.div
                    className="mt-4 text-secondary font-medium flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0"
                >
                    <span>{feature.title} Detayları</span>
                    <ArrowRight size={16} />
                </motion.div>
            </div>
        </motion.div>
    );
}

export default FeaturesSection;
