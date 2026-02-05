import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Ship, Plane, Truck, TrainFront, Warehouse, Briefcase, ArrowRight, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Modal from './Modal';

const FeaturesSection = () => {
    const { t } = useTranslation();
    const [selectedService, setSelectedService] = useState(null);

    const features = [
        {
            id: 1,
            serviceKey: 'sea',
            title: t('services_bento.sea.title'),
            description: t('services_bento.sea.desc'),
            content: t('services_bento.sea.content'),
            icon: Ship,
            gradient: 'from-blue-600 to-cyan-400',
            glowColor: 'rgba(37, 99, 235, 0.3)',
            image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&q=80',
        },
        {
            id: 2,
            serviceKey: 'air',
            title: t('services_bento.air.title'),
            description: t('services_bento.air.desc'),
            content: t('services_bento.air.content'),
            icon: Plane,
            gradient: 'from-amber-500 to-yellow-400',
            glowColor: 'rgba(245, 158, 11, 0.3)',
            image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80',
        },
        {
            id: 3,
            serviceKey: 'land',
            title: t('services_bento.land.title'),
            description: t('services_bento.land.desc'),
            content: t('services_bento.land.content'),
            icon: Truck,
            gradient: 'from-cyan-500 to-teal-400',
            glowColor: 'rgba(20, 184, 166, 0.3)',
            image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80',
        },
        {
            id: 4,
            serviceKey: 'rail',
            title: t('services_bento.rail.title'),
            description: t('services_bento.rail.desc'),
            content: t('services_bento.rail.content'),
            icon: TrainFront,
            gradient: 'from-emerald-500 to-green-400',
            glowColor: 'rgba(16, 185, 129, 0.3)',
            image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80',
        },
        {
            id: 5,
            serviceKey: 'warehouse',
            title: t('services_bento.warehouse.title'),
            description: t('services_bento.warehouse.desc'),
            content: t('services_bento.warehouse.content'),
            icon: Warehouse,
            gradient: 'from-purple-500 to-violet-400',
            glowColor: 'rgba(139, 92, 246, 0.3)',
            image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80',
        },
        {
            id: 6,
            serviceKey: 'project',
            title: t('services_bento.project.title'),
            description: t('services_bento.project.desc'),
            content: t('services_bento.project.content'),
            icon: Briefcase,
            gradient: 'from-pink-500 to-rose-400',
            glowColor: 'rgba(236, 72, 153, 0.3)',
            image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80',
        },
    ];

    return (
        <section id="services" className="py-20 sm:py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16 sm:mb-24"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-primary/5 text-primary text-xs sm:text-sm font-bold tracking-[0.2em] mb-6 border border-primary/10">
                        <Sparkles size={16} />
                        {t('nav.services').toUpperCase()}
                    </div>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-primary tracking-tight">
                        {t('nav.services') || 'Lojistik Çözümler'}
                    </h2>

                    <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        {t('hero.description') || 'Küresel lojistik ihtiyaçlarınız için uçtan uca entegre çözümler.'}
                    </p>
                </motion.div>

                {/* Grid - Uniform 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                features={t(`services.items.${selectedService?.serviceKey}.features`, { returnObjects: true })}
                icon={selectedService ? <selectedService.icon size={32} /> : null}
            />
        </section>
    );
}

function FeatureCard({ feature, index, onClick }) {
    const Icon = feature.icon;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative rounded-[2rem] overflow-hidden cursor-pointer flex flex-col bg-[#F8FAFC] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 h-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            {/* Image section */}
            <div className="relative overflow-hidden h-64">
                <img
                    src={feature.image}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
            </div>

            {/* Content Section - The "Bottom Space" for High Readability */}
            <div className="p-8 flex flex-col flex-grow bg-white relative z-10 border-t border-gray-50">
                {/* Icon Badge - Positioned to slightly overlap */}
                <div className={`absolute -top-7 left-8 inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-xl group-hover:-translate-y-1 transition-transform duration-300`}>
                    <Icon className="text-white" size={24} />
                </div>

                <div className="mt-4">
                    <h3 className="text-2xl font-black mb-3 text-primary tracking-tight leading-tight group-hover:text-secondary transition-colors duration-300">
                        {feature.title}
                    </h3>

                    <p className="text-gray-500 font-medium text-sm sm:text-base leading-relaxed mb-6 line-clamp-2">
                        {feature.description}
                    </p>
                </div>

                <div className="mt-auto flex items-center gap-3 text-secondary font-bold text-sm tracking-widest uppercase items-center">
                    <span className="group-hover:mr-2 transition-all duration-300">İncele</span>
                    <div className="p-2 rounded-full bg-secondary/10 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                        <ArrowRight size={16} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default FeaturesSection;
