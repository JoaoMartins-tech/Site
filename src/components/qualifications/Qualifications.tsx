import { useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { awards, certificates, volunteering } from '../../data/qualifications';
import OrbitDecoration from '../solar-system/OrbitDecoration';
import type { QualificationItem } from '../../types';

type TabKey = 'premiacoes' | 'certificados' | 'voluntariado';

const tabData: Record<TabKey, QualificationItem[]> = {
  premiacoes: awards,
  certificados: certificates,
  voluntariado: volunteering,
};

export default function Qualifications() {
  const { t } = useLanguage();
  const head = useReveal<HTMLDivElement>();
  const tabsRef = useReveal<HTMLDivElement>();
  const [activeTab, setActiveTab] = useState<TabKey>('premiacoes');

  return (
    <section id="qualificacoes">
      <OrbitDecoration
        orbits={[
          { size: 160, top: -40, right: -30, duration: 19, balls: [15, 190] },
          { size: 120, bottom: -40, left: -40, duration: 14, reverse: true, balls: [60] },
        ]}
      />
      <div className="wrap">
        <div className={`section-head ${head.className}`} ref={head.ref}>
          <div>
            <p className="eyebrow">{t('quals.eyebrow')}</p>
            <h2>{t('quals.title')}</h2>
          </div>
          <p>{t('quals.subtitle')}</p>
        </div>

        <div className={`tabs-bar ${tabsRef.className}`} ref={tabsRef.ref}>
          {(Object.keys(tabData) as TabKey[]).map((key) => (
            <button
              key={key}
              className={`tab-btn${activeTab === key ? ' active' : ''}`}
              onClick={() => setActiveTab(key)}
            >
              {t(`quals.tab.${key === 'premiacoes' ? 'awards' : key === 'certificados' ? 'certs' : 'volunteer'}`)}
            </button>
          ))}
        </div>

        <div className="tab-panel active">
          {tabData[activeTab].map((item) => (
            <div className="qual-card reveal in-view" key={item.id}>
              <div className="qual-icon">{item.icon}</div>
              <h4>{item.titleKey}</h4>
              <p>{item.descKey}</p>
              <span className="qual-date">{item.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}