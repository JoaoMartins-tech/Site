import { useLanguage } from '../../i18n/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import OrbitDecoration from '../solar-system/OrbitDecoration';

export default function Recommendations() {
  const { t } = useLanguage();
  const head = useReveal<HTMLDivElement>();
  const card = useReveal<HTMLDivElement>();

  return (
    <section id="recomendacoes">
      <OrbitDecoration
        orbits={[
          { size: 180, top: -30, left: -50, duration: 21, balls: [80, 260] },
          { size: 110, bottom: -20, right: -30, duration: 13, reverse: true, balls: [150] },
        ]}
      />
      <div className="wrap">
        <div className={`section-head ${head.className}`} ref={head.ref}>
          <div>
            <p className="eyebrow">{t('recs.eyebrow')}</p>
            <h2>{t('recs.title')}</h2>
          </div>
          <p>{t('recs.subtitle')}</p>
        </div>

        <div className="rec-grid">
          <div className={`rec-card ${card.className}`} ref={card.ref}>
            <div className="rec-quote">"</div>
            <p className="rec-text">Franklin, vai fazer a recomendação ainda.</p>
            <div className="rec-person">
              <div className="rec-avatar">FD</div>
              <div>
                <strong>Franklin Dantas</strong>
                <span>Recomendação Pessoal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}