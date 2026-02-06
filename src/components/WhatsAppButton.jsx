import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    const phoneNumber = '902122820045'; // Safeline WhatsApp number

    useEffect(() => {
        // Show button after 2 seconds
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2000);

        // Show tooltip after 5 seconds for first-time visitors
        const tooltipTimer = setTimeout(() => {
            const hasSeenTooltip = localStorage.getItem('wa_tooltip_seen');
            if (!hasSeenTooltip) {
                setIsTooltipVisible(true);
                localStorage.setItem('wa_tooltip_seen', 'true');
            }
        }, 5000);

        return () => {
            clearTimeout(timer);
            clearTimeout(tooltipTimer);
        };
    }, []);

    const handleClick = () => {
        window.open(`https://wa.me/${phoneNumber}?text=Merhaba, bilgi almak istiyorum.`, '_blank');
    };

    const closeTooltip = (e) => {
        e.stopPropagation();
        setIsTooltipVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed bottom-6 right-6 z-50"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                    {/* Tooltip */}
                    <AnimatePresence>
                        {isTooltipVisible && (
                            <motion.div
                                className="absolute bottom-full right-0 mb-3 bg-white rounded-xl shadow-xl border border-gray-100 p-4 w-64"
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            >
                                <button
                                    onClick={closeTooltip}
                                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <X size={16} />
                                </button>
                                <p className="text-sm text-gray-700 font-medium pr-4">
                                    💬 Sorularınız mı var? WhatsApp üzerinden bize hemen ulaşın!
                                </p>
                                <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-r border-b border-gray-100 transform rotate-45"></div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* WhatsApp Button */}
                    <button
                        onClick={handleClick}
                        className="group relative flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-2xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-110"
                        aria-label="WhatsApp ile iletişime geçin"
                    >
                        {/* Pulse ring */}
                        <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-ping opacity-30"></span>

                        {/* Icon */}
                        <svg
                            className="w-8 h-8 text-white relative z-10"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default WhatsAppButton;
