import { useLanguage } from '../../i18n/LanguageContext';
import SolarSystem from '../solar-system/SolarSystem';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy reveal in-view">
          <p className="eyebrow">{t('hero.eyebrow')}</p>
          <h1>
            João <em>Martins</em>
          </h1>
          <p className="hero-title">{t('hero.title')}</p>
          <p className="hero-desc">{t('hero.desc')}</p>
          <div className="hero-btns">
            <a href="#projetos" className="btn btn-primary">
              {t('hero.btnProjects')}
            </a>
            <a
              href="https://drive.google.com/file/d/1hAEAHXGLd6PQLyIqG-cQIqqsUjS3ewOa/view?usp=sharing"
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('hero.btnResume')}
            </a>
          </div>
        </div>

        <div className="hero-photo reveal in-view">
          <SolarSystem />
        </div>
      </div>
    </section>
  );
}
