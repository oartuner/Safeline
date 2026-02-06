import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Clock, Globe, Headphones, Award } from 'lucide-react';

const TrustBanner = () => {
    const { t } = useTranslation();

    const trustItems = [
        {
            id: 1,
            icon: Shield,
            text: t('trust.iso_certified') || 'ISO 9001 Certified'
        },
        {
            id: 2,
            icon: Award,
            text: t('trust.experience') || '20+ Years Experience'
        },
        {
            id: 3,
            icon: Globe,
            text: t('trust.global_network') || '150+ Global Agents'
        },
        {
            id: 4,
            icon: Clock,
            text: t('trust.support') || '24/7 Support'
        }
    ];

    return (
        <div className="bg-primary text-white py-2.5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-center gap-6 md:gap-12 flex-wrap">
                    {trustItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 text-xs md:text-sm font-medium opacity-90 hover:opacity-100 transition-opacity"
                        >
                            <item.icon size={14} className="text-secondary-light" />
                            <span>{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustBanner;
