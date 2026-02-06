import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const TrustLogos = () => {
    const { t } = useTranslation();

    const partners = [
        { name: "MAERSK", type: "Freight" },
        { name: "MSC", type: "Shipping" },
        { name: "TURKISH CARGO", type: "Air" },
        { name: "DHL", type: "Logistics" },
        { name: "HAPAG-LLOYD", type: "Sea" },
        { name: "FEDEX", type: "Global" },
        { name: "CMA CGM", type: "Maritime" },
        { name: "EMIRATES SKYCARGO", type: "Air" }
    ];

    // Double the array for seamless infinite loop
    const doubledPartners = [...partners, ...partners];

    return (
        <div className="py-12 bg-white border-b border-gray-50 overflow-hidden select-none">
            <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
                    {t('trust.trusted_by') || 'TRUSTED PARTNERS & CARRIER NETWORK'}
                </p>
            </div>

            <div className="relative flex">
                <motion.div
                    className="flex gap-16 md:gap-24 items-center whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {doubledPartners.map((partner, i) => (
                        <div
                            key={i}
                            className="group flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-30 hover:opacity-100"
                        >
                            <span className="text-xl md:text-2xl font-black tracking-tighter text-primary">
                                {partner.name}
                            </span>
                            <span className="text-[8px] font-bold text-secondary tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                {partner.type}
                            </span>
                        </div>
                    ))}
                </motion.div>

                {/* Gradient Fades for Smooth Edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
            </div>
        </div>
    );
};

export default TrustLogos;
