import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Clock, Globe, Headphones } from 'lucide-react';

const TrustBanner = () => {
    const { t } = useTranslation();

    const trustItems = [
        {
            icon: Shield,
            text: t('trust.iso_certified') || 'ISO 9001 Sertifikalı'
        },
        {
            icon: Clock,
            text: t('trust.experience') || '20+ Yıl Tecrübe'
        },
        {
            icon: Globe,
            text: t('trust.global_network') || '150+ Global Ajan'
        },
        {
            icon: Headphones,
            text: t('trust.support') || '7/24 Destek'
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
