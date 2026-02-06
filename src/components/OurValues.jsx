import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    Users,
    Users2,
    Leaf,
    Target,
    Shield,
    Award,
    Globe2,
    Scale,
    TrendingUp,
} from 'lucide-react';

const OurValues = () => {
    const { t } = useTranslation();
    const [showDrawer, setShowDrawer] = useState(false);

    return (
        <section id="values" className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <span className="inline-block py-1 px-4 rounded-full bg-secondary/10 text-secondary text-xs font-black tracking-[0.2em] mb-6 border border-secondary/20">
                        {t('about.tag')?.toUpperCase() || 'OUR FOUNDATION'}
                    </span>
                    <h2
                        id="values-heading"
                        className="text-3xl sm:text-4xl font-black text-primary mb-6 tracking-tight"
                    >
                        {t('about.values_title') || 'OUR VALUES'}
                    </h2>
                    <p className="text-lg text-gray-500 font-medium leading-relaxed mb-8">
                        {t('about.values_subtitle')}
                    </p>

                    {/* View All Values Button */}
                    <button
                        onClick={() => setShowDrawer(true)}
                        className="group px-10 py-5 bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 mx-auto"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>{t('about.explore_values', { count: (t('about.values', { returnObjects: true }) || []).length })}</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                </div>

            </div>

            {/* Drawer Panel */}
            {showDrawer && (
                <>
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-fadeIn"
                        onClick={() => setShowDrawer(false)}
                    />

                    {/* Drawer */}
                    <div className="fixed inset-y-0 right-0 w-full sm:w-[600px] lg:w-[800px] bg-white shadow-2xl z-50 overflow-y-auto animate-slideInRight">
                        {/* Drawer Header */}
                        <div className="sticky top-0 bg-gradient-to-r from-primary to-secondary text-white p-6 sm:p-8 z-10 shadow-lg">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-2xl sm:text-3xl font-black mb-2">{t('about.core_values_drawer_title')}</h3>
                                    <p className="text-sm text-white/80">{t('about.core_values_drawer_subtitle')}</p>
                                </div>
                                <button
                                    onClick={() => setShowDrawer(false)}
                                    className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-200 hover:rotate-90"
                                    aria-label="Close drawer"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Drawer Content */}
                        <div className="p-6 sm:p-8 space-y-6">
                            {(t('about.values', { returnObjects: true }) || []).map((value, index) => {
                                const descriptions = t('about.values_desc', { returnObjects: true }) || [];
                                const valueIcons = [
                                    Users, Users2, Leaf, Target, Shield, Award, Globe2, Scale, TrendingUp,
                                ];
                                const IconComponent = valueIcons[index];

                                return (
                                    <div
                                        key={index}
                                        className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-secondary/30 transition-all duration-300"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center flex-shrink-0">
                                                <IconComponent className="text-secondary" size={24} strokeWidth={2} />
                                            </div>

                                            <div className="flex-1">
                                                <h4 className="text-lg font-black text-primary mb-3">{value}</h4>
                                                <p className="text-sm text-gray-600 leading-relaxed">{descriptions[index]}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Drawer Footer */}
                        <div className="sticky bottom-0 bg-gradient-to-t from-white via-white to-transparent p-6 sm:p-8">
                            <button
                                onClick={() => setShowDrawer(false)}
                                className="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all duration-200"
                            >
                                {t('about.close')}
                            </button>
                        </div>
                    </div>
                </>
            )}

            <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInRight {
          from { 
            transform: translateX(100%);
            opacity: 0;
          }
          to { 
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideInRight {
          animation: slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
        </section>
    );
};

export default OurValues;
