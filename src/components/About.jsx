import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Diamond,
  Globe2,
} from 'lucide-react';
import Modal from './Modal';

const About = () => {
  const { t } = useTranslation();
  const [selectedVal, setSelectedVal] = useState(null);

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Centered Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-4 rounded-full bg-secondary/10 text-secondary text-xs font-black tracking-[0.2em] mb-6 border border-secondary/20">
            {t('about.tag').toUpperCase()}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-primary mb-6 tracking-tight">
            {t('about.title')}
          </h2>
          <p className="text-lg text-gray-500 font-medium leading-relaxed">
            {t('about.description')}
          </p>
        </div>

        {/* Main Content & Stats - Centered & Expanded */}
        <div className="max-w-5xl mx-auto text-center">

          <div className="mb-16">
            <h3 className="text-3xl font-black text-primary mb-6">
              Bridging Markets with Excellence
            </h3>
            <p className="text-lg text-gray-500 leading-relaxed mb-6 max-w-3xl mx-auto">
              {t('about.mission_desc')}
            </p>
            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-3xl mx-auto">
              {t('about.vision_desc')}
            </p>
          </div>

          {/* Stats Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 bg-white rounded-2xl shadow-xl shadow-gray-100 border border-gray-50 text-center hover:-translate-y-1 transition-transform duration-300">
              <span className="block text-5xl font-black text-secondary mb-3">20+</span>
              <span className="text-xs text-gray-400 font-bold uppercase tracking-[0.2em]">Years Experience</span>
            </div>

            {/* Card 2 */}
            <div className="p-8 bg-white rounded-2xl shadow-xl shadow-gray-100 border border-gray-50 text-center hover:-translate-y-1 transition-transform duration-300">
              <span className="block text-5xl font-black text-secondary mb-3">ISO</span>
              <span className="text-xs text-gray-400 font-bold uppercase tracking-[0.2em]">Certified</span>
            </div>

            {/* Card 3 */}
            <div className="p-8 bg-white rounded-2xl shadow-xl shadow-gray-100 border border-gray-50 text-center hover:-translate-y-1 transition-transform duration-300">
              <span className="block text-5xl font-black text-secondary mb-3">5+</span>
              <span className="text-xs text-gray-400 font-bold uppercase tracking-[0.2em]">Service Types</span>
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
