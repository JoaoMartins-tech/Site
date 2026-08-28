import { useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { aboutContent, aboutTags } from '../../data/about';
import OrbitDecoration from '../solar-system/OrbitDecoration';
import type { AboutKey } from '../../types';

const keys: AboutKey[] = ['fullstack', 'dados', 'automacao'];

export default function About() {
  const { t, lang } = useLanguage();
  const head = useReveal<HTMLDivElement>();
  const btns = useReveal<HTMLDivElement>();
  const card = useReveal<HTMLDivElement>();

  const [current, setCurrent] = useState<AboutKey>('fullstack');
  const [fading, setFading] = useState(false);

  function handleSelect(key: AboutKey) {
    if (key === current) return;
    setFading(true);
    setTimeout(() => {
      setCurrent(key);
      setFading(false);
    }, 220);
  }

  const content = aboutContent[lang][current];

  return (
    <section id="sobre">
      <OrbitDecoration
        orbits={[
          { size: 170, top: -50, right: -40, duration: 20, balls: [30, 210] },
          { size: 110, bottom: -30, left: -30, duration: 15, reverse: true, balls: [90] },
        ]}
      />
      <div className="wrap">
        <div className={`section-head ${head.className}`} ref={head.ref}>
          <div>
            <p className="eyebrow">{t('about.eyebrow')}</p>
            <h2>{t('about.title')}</h2>
          </div>
          <p>{t('about.subtitle')}</p>
        </div>

        <div className="about-grid">
          <div className={`theme-btns ${btns.className}`} ref={btns.ref}>
            {keys.map((key) => (
              <button
                key={key}
                className={`theme-btn${key === current ? ' active' : ''}`}
                onClick={() => handleSelect(key)}
              >
                <span className="dot" />
                <span>{t(`about.btn.${key}`)}</span>
              </button>
            ))}
          </div>

          <div className={`about-card ${card.className}`} ref={card.ref}>
            <h2 style={{ opacity: fading ? 0 : 1, transition: 'opacity .35s ease' }}>
              {content.title}
            </h2>
            <p className={`about-text${fading ? ' fade' : ''}`} style={{ whiteSpace: 'pre-line' }}>
              {content.text}
            </p>
            <div className={`tags${fading ? ' fade' : ''}`}>
              {aboutTags[current].map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}