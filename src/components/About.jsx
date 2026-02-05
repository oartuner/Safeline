import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Diamond } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';
import Modal from './Modal';

const About = () => {
  const { t } = useTranslation();
  const [selectedVal, setSelectedVal] = useState(null);

  // Get arrays/objects from i18n
  const values = t('about.values', { returnObjects: true }) || [];
  const valuesDesc = t('about.values_desc', { returnObjects: true }) || [];

  // Images for each value (indices must match 'values' array)
  // All images are formal, corporate settings with professionals in business attire
  const valueImages = [
    'https://images.unsplash.com/photo-1560439514-4e9645039924?auto=format&fit=crop&q=80', // Müşteri Odaklılık: Profesyonel iş toplantısı
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80', // Takım Ruhu: Ofiste takım çalışması
    'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80', // Sürdürülebilirlik: Modern ofis alanı
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80', // Sonuç Odaklılık: Dizüstü bilgisayarla analiz
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80', // Dürüstlük ve Şeffaflık: Profesyonel el sıkışma
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80', // Güvenilirlik: Ofiste profesyonel kadın
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80', // Çevreye Saygı: Modern cam bina (sürdürülebilir mimari)
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80', // Etik Değerler: Sözleşme imzalama
    'https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&q=80', // Değişim ve Gelişim: Strateji toplantısı
  ];

  const handleValueClick = (index) => {
    setSelectedVal({
      title: values[index],
      content: valuesDesc[index] || t('about.description'), // Fallback
      image: valueImages[index] // Pass the specific image
    });
  };

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="about-grid">
          <div className="about-visual">
            <div className="image-main">
              <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80" alt="Safeline Team" />
              <div className="experience-badge">
                <span className="number">20<sup>+</sup></span>
                <span className="text">{t('hero.experience_badge')}</span>
              </div>
            </div>
            <div className="floating-card">
              <div className="fc-icon">🌍</div>
              <div className="fc-text">
                <strong>150+ {t('hero.active_agents')}</strong>
                <span>{t('hero.global_network')}</span>
              </div>
            </div>
          </div>

          <div className="about-content">
            <span className="section-tag">{t('about.tag')}</span>
            <h2 className="section-title">{t('about.title')}</h2>
            <p className="lead">{t('about.description')}</p>

            <div className="mv-cards">
              <div className="mv-card">
                <span className="mv-icon">🎯</span>
                <h4>{t('about.mission_title')}</h4>
                <p>{t('about.mission_desc')}</p>
              </div>
              <div className="mv-card">
                <span className="mv-icon">🚀</span>
                <h4>{t('about.vision_title')}</h4>
                <p>{t('about.vision_desc')}</p>
              </div>
            </div>

            <div className="values-section mt-12 pt-8 border-t border-border-light">
              <h4 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-secondary rounded-full"></span>
                {t('about.values_title')}
              </h4>
              <div className="values-grid">
                {values.map((val, i) => (
                  <button
                    key={i}
                    className="value-tag interactable"
                    onClick={() => handleValueClick(i)}
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="policies-grid">
          <div className="policy-card">
            <span className="policy-icon">✅</span>
            <h3>{t('about.quality_title')}</h3>
            <p>{t('about.quality_desc')}</p>
          </div>
          <div className="policy-card">
            <span className="policy-icon">🤝</span>
            <h3>{t('about.satisfaction_title')}</h3>
            <p>{t('about.satisfaction_desc')}</p>
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

      <style jsx="true">{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 5rem;
          align-items: center;
          margin-bottom: 5rem;
        }

        .about-visual {
          position: relative;
        }

        .image-main {
          position: relative;
        }

        .image-main img {
          width: 100%;
          height: 450px;
          object-fit: cover;
          border-radius: 16px;
          box-shadow: var(--shadow-lg);
        }

        .experience-badge {
          position: absolute;
          bottom: -20px; right: -20px;
          background: linear-gradient(135deg, var(--secondary) 0%, var(--secondary-light) 100%);
          padding: 1.5rem;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 12px 32px var(--secondary-glow);
        }

        .experience-badge .number {
          font-family: 'Outfit', sans-serif;
          font-size: 2.5rem;
          font-weight: 800;
          color: white;
          line-height: 1;
        }

        .experience-badge .number sup { font-size: 1.2rem; }

        .experience-badge .text {
          display: block;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: rgba(255, 255, 255, 0.9);
          margin-top: 0.3rem;
        }

        .floating-card {
          position: absolute;
          top: 20px; left: -30px;
          background: white;
          border: 1px solid var(--border-light);
          padding: 1rem 1.2rem;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          box-shadow: var(--shadow);
          animation: float 4s ease-in-out infinite;
        }

        .fc-icon { font-size: 1.5rem; }

        .fc-text strong {
          display: block;
          font-size: 0.9rem;
          color: var(--primary);
        }

        .fc-text span {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .lead {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.9;
          margin-bottom: 2.5rem;
        }

        .mv-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .mv-card {
          background: var(--bg-light);
          border: 1px solid var(--border-light);
          border-radius: 12px;
          padding: 1.2rem;
          transition: var(--transition);
        }

        .mv-card:hover {
          border-color: var(--secondary);
        }

        .mv-icon {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          display: block;
        }

        .mv-card h4 {
          font-size: 0.8rem;
          letter-spacing: 1px;
          color: var(--secondary);
          margin-bottom: 0.5rem;
        }

        .mv-card p {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .values-section h4 {
          font-size: 0.8rem;
          letter-spacing: 1px;
          color: var(--primary);
          margin-bottom: 1rem;
        }

        .values-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .value-tag {
          background: var(--bg-light);
          border: 1px solid var(--border-light);
          padding: 0.4rem 0.8rem;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-muted);
          transition: var(--transition);
          cursor: pointer;
        }

        .value-tag:hover {
          border-color: var(--secondary);
          color: var(--secondary);
          background: white;
          transform: translateY(-2px);
          box-shadow: var(--shadow-sm);
        }

        .policies-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .policy-card {
          background: var(--bg-light);
          border: 1px solid var(--border-light);
          border-radius: 16px;
          padding: 2rem;
          transition: var(--transition);
        }

        .policy-card:hover {
          border-color: var(--success);
          box-shadow: var(--shadow);
        }

        .policy-icon {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          display: block;
        }

        .policy-card h3 {
          font-size: 0.9rem;
          letter-spacing: 1px;
          color: var(--success);
          margin-bottom: 0.8rem;
        }

        .policy-card p {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.7;
        }

        @media (max-width: 992px) {
          .about-grid { grid-template-columns: 1fr; gap: 4rem; }
          .experience-badge { right: 10px; bottom: -15px; }
          .floating-card { left: 10px; }
          .policies-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 576px) {
          .mv-cards { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default About;
