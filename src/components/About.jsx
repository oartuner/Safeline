import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Diamond,
  Globe2,
  Target,
  Rocket,
} from 'lucide-react';
import Modal from './Modal';

const About = () => {
  const { t } = useTranslation();
  const [selectedVal, setSelectedVal] = useState(null);

  return (
    <section id="about" className="py-24 bg-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Centered Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-4 rounded-full bg-secondary/10 text-secondary text-xs font-black tracking-[0.2em] mb-6 border border-secondary/20">
            {t('about.tag').toUpperCase()}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-primary mb-6 tracking-tight">
            {t('about.title')}
          </h2>
          <p className="text-lg text-gray-500 font-medium leading-relaxed">
            {t('about.description')}
          </p>
        </div>

        {/* Main Content & Stats - Centered & Expanded */}
        <div className="max-w-5xl mx-auto text-center">

          <div className="relative mb-20">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 blur-3xl rounded-full pointer-events-none" />

            <h3 className="relative text-3xl sm:text-4xl font-black mb-10 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">
              Bridging Markets with Excellence
            </h3>

            <div className="grid md:grid-cols-2 gap-6 relative z-10 text-left">
              {/* Mission Card */}
              <div className="group p-8 bg-white rounded-2xl shadow-lg shadow-gray-100 border border-gray-100 hover:border-secondary/20 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="text-secondary" size={24} />
                </div>
                <h4 className="text-lg font-black text-primary mb-3 flex items-center gap-2">
                  {t('about.mission_title') || 'MISSION'}
                </h4>
                <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                  {t('about.mission_desc')}
                </p>
              </div>

              {/* Vision Card */}
              <div className="group p-8 bg-white rounded-2xl shadow-lg shadow-gray-100 border border-gray-100 hover:border-secondary/20 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="text-primary" size={24} />
                </div>
                <h4 className="text-lg font-black text-primary mb-3 flex items-center gap-2">
                  {t('about.vision_title') || 'VISION'}
                </h4>
                <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                  {t('about.vision_desc')}
                </p>
              </div>
            </div>
          </div>

          {/* Stats Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 bg-white rounded-2xl shadow-xl shadow-gray-100 border border-gray-50 text-center hover:-translate-y-1 transition-transform duration-300">
              <span className="block text-5xl font-black text-secondary mb-3">20+</span>
              <span className="text-xs text-gray-400 font-bold uppercase tracking-[0.2em]">{t('about.stat_experience')}</span>
            </div>

            {/* Card 2 */}
            <div className="p-8 bg-white rounded-2xl shadow-xl shadow-gray-100 border border-gray-50 text-center hover:-translate-y-1 transition-transform duration-300">
              <span className="block text-5xl font-black text-secondary mb-3">ISO</span>
              <span className="text-xs text-gray-400 font-bold uppercase tracking-[0.2em]">{t('about.stat_certified')}</span>
            </div>

            {/* Card 3 */}
            <div className="p-8 bg-white rounded-2xl shadow-xl shadow-gray-100 border border-gray-50 text-center hover:-translate-y-1 transition-transform duration-300">
              <span className="block text-5xl font-black text-secondary mb-3">5+</span>
              <span className="text-xs text-gray-400 font-bold uppercase tracking-[0.2em]">{t('about.stat_service_types')}</span>
            </div>
          </div>

        </div>

      </div>

      <Modal
        isOpen={!!selectedVal}
        onClose={() => setSelectedVal(null)}
        title={selectedVal?.title}
        content={selectedVal?.content}
        image={selectedVal?.image}
        icon={<Diamond />}
      />
    </section>
  );
};

export default About;
