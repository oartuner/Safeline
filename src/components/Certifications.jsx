import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Shield, BadgeCheck, X, ZoomIn } from 'lucide-react';

const Certifications = () => {
    const { t } = useTranslation();
    const [lightboxImage, setLightboxImage] = useState(null);

    // Certificate images extracted from presentation (Page 8)
    const certificates = [
        {
            id: 1,
            name: 'ISO 9001:2015',
            issuer: 'TÜV AUSTRIA',
            description: t('certifications.iso_desc') || 'Quality Management System',
            image: '/certificates/page8_img3.jpeg',
        },
        {
            id: 2,
            name: t('certifications.auth_cert') || 'Yetki Belgesi',
            issuer: t('certifications.ministry') || 'T.C. Ulaştırma Bakanlığı',
            description: t('certifications.auth_desc') || 'Official Transport Authorization',
            image: '/certificates/page8_img4.jpeg',
        },
        {
            id: 3,
            name: t('certifications.trademark') || 'Marka Tescil',
            issuer: 'Türk Patent',
            description: t('certifications.trademark_desc') || 'Registered Trademark',
            image: '/certificates/page8_img5.jpeg',
        },
    ];

    // Membership images extracted from presentation (Page 9)
    const memberships = [
        {
            id: 1,
            name: 'UTİKAD',
            year: '2025',
            description: t('certifications.utikad_desc') || 'Uluslararası Taşımacılık ve Lojistik Derneği',
            image: '/certificates/page9_img3.jpeg',
        },
        {
            id: 2,
            name: 'FIATA',
            year: '2025',
            description: t('certifications.fiata_desc') || 'International Federation of Freight Forwarders',
            image: '/certificates/page9_img4.jpeg',
        },
        {
            id: 3,
            name: 'TİM',
            year: '2024',
            description: t('certifications.tim_desc') || 'Türkiye İhracatçılar Meclisi',
            image: '/certificates/page9_img5.jpeg',
        },
        {
            id: 4,
            name: 'JCTRANS',
            year: '2021-2026',
            description: t('certifications.jctrans_desc') || 'GCP Membership Certificate',
            image: '/certificates/page9_img6.jpeg',
        },
        {
            id: 5,
            name: 'OLO',
            year: '2024',
            description: t('certifications.olo_desc') || 'Orange Logistics Organization',
            image: '/certificates/page9_img7.jpeg',
        },
    ];

    const openLightbox = (image, name) => {
        setLightboxImage({ src: image, alt: name });
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxImage(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <>
            <section id="certifications" className="py-28 sm:py-36 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-primary/5 text-primary text-xs sm:text-sm font-bold tracking-[0.2em] mb-6 border border-primary/10">
                            <Award size={16} />
                            {t('certifications.tag') || 'SERTİFİKALAR & ÜYELİKLER'}
                        </div>

                        <h2 className="text-4xl sm:text-5xl font-black mb-6 text-primary tracking-tight">
                            {t('certifications.title') || 'Kalite ve Güvenilirlik'}
                        </h2>

                        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                            {t('certifications.subtitle') || 'Uluslararası standartlarda hizmet kalitesi ve güvenilirliği belgelerimiz.'}
                        </p>
                    </motion.div>

                    {/* Certificates Section */}
                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <Shield className="text-secondary" size={24} />
                            <h3 className="text-2xl font-black text-primary">
                                {t('certifications.certificates') || 'Sertifikalar'}
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {certificates.map((cert, index) => (
                                <motion.div
                                    key={cert.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer"
                                    onClick={() => openLightbox(cert.image, cert.name)}
                                >
                                    {/* Certificate Image - DISABLED
                                    <div className="relative h-64 overflow-hidden bg-gray-50">
                                        <img
                                            src={cert.image}
                                            alt={cert.name}
                                            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 bg-white rounded-full shadow-lg">
                                                <ZoomIn size={24} className="text-primary" />
                                            </div>
                                        </div>
                                    </div>
                                    */}

                                    {/* Certificate Info */}
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-3">
                                            <p className="text-xs font-bold text-secondary uppercase tracking-wider">
                                                {cert.issuer}
                                            </p>
                                            <ZoomIn size={16} className="text-gray-300 group-hover:text-primary transition-colors" />
                                        </div>
                                        <h4 className="text-xl font-black text-primary mb-2">
                                            {cert.name}
                                        </h4>
                                        <p className="text-sm text-gray-500 leading-relaxed">
                                            {cert.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Memberships Section */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <BadgeCheck className="text-secondary" size={24} />
                            <h3 className="text-2xl font-black text-primary">
                                {t('certifications.memberships') || 'Üyelikler'}
                            </h3>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                            {memberships.map((member, index) => (
                                <motion.div
                                    key={member.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-secondary/30 transition-all duration-500 overflow-hidden cursor-pointer"
                                    onClick={() => openLightbox(member.image, member.name)}
                                >
                                    {/* Membership Image - DISABLED
                                    <div className="relative h-40 overflow-hidden bg-gray-50">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 bg-white rounded-full shadow-lg">
                                                <ZoomIn size={18} className="text-primary" />
                                            </div>
                                        </div>
                                    </div>
                                    */}

                                    {/* Membership Info */}
                                    <div className="p-6 text-center flex flex-col items-center justify-center h-full min-h-[100px]">
                                        <h4 className="text-lg font-black text-primary mb-1">
                                            {member.name}
                                        </h4>
                                        <p className="text-xs text-secondary font-bold">
                                            {member.year}
                                        </p>
                                        <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <ZoomIn size={14} className="text-gray-400" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {lightboxImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] overflow-y-auto bg-black/95 backdrop-blur-sm"
                        onClick={closeLightbox}
                    >
                        {/* Close Button - Fixed position */}
                        <button
                            onClick={closeLightbox}
                            className="fixed top-4 right-4 p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors z-[210]"
                        >
                            <X size={28} className="text-white" />
                        </button>

                        {/* Scrollable Image Container */}
                        <div className="min-h-screen flex items-center justify-center p-4 py-16">
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                                className="relative bg-white rounded-lg shadow-2xl overflow-hidden"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={lightboxImage.src}
                                    alt={lightboxImage.alt}
                                    className="block max-w-[95vw] h-auto"
                                />

                                {/* Image Title */}
                                <div className="p-3 bg-primary text-center">
                                    <p className="text-white font-bold text-base">
                                        {lightboxImage.alt}
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Click anywhere hint */}
                        <p className="fixed bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm">
                            {t('certifications.click_to_close') || 'Kapatmak için tıklayın'}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Certifications;
