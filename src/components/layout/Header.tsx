import { useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { useTheme } from '../../theme/ThemeContext';
import type { Lang } from '../../types';

const langLabels: Record<Lang, string> = {
  pt: 'Português',
  en: 'English',
  es: 'Español',
};

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="site-header">
      <div className="header-inner">
        <a href="#hero" className="brand">
          <strong>João Martins</strong>
          <span>{t('brand.tag')}</span>
        </a>

        <nav className="main-nav">
          <a href="#sobre">{t('nav.about')}</a>
          <a href="#projetos">{t('nav.projects')}</a>
          <a href="#qualificacoes">{t('nav.quals')}</a>
          <a href="#recomendacoes">{t('nav.recs')}</a>
          <a href="#contato">{t('nav.contact')}</a>
        </nav>

        <div className="header-controls">
          <button
            className="icon-btn"
            id="globe-btn"
            aria-label="Selecionar idioma"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="12" cy="12" r="9.5" />
              <path d="M2.5 12h19M12 2.5c2.8 2.6 4.3 6 4.3 9.5s-1.5 6.9-4.3 9.5c-2.8-2.6-4.3-6-4.3-9.5S9.2 5.1 12 2.5Z" />
            </svg>
          </button>

          <div className={`lang-menu${menuOpen ? ' open' : ''}`}>
            {(Object.keys(langLabels) as Lang[]).map((l) => (
              <button
                key={l}
                className={l === lang ? 'active' : ''}
                onClick={() => {
                  setLang(l);
                  setMenuOpen(false);
                }}
              >
                {langLabels[l]}
              </button>
            ))}
          </div>

          <button className="icon-btn" id="theme-btn" aria-label="Alternar tema" onClick={toggleTheme}>
            <span className="theme-icon">
              <svg
                className="sun"
                style={{ opacity: theme === 'dark' ? 0 : 1 }}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <circle cx="12" cy="12" r="4.3" />
                <path d="M12 2.5v2.4M12 19.1v2.4M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7" />
              </svg>
              <svg
                className="moon"
                style={{ opacity: theme === 'dark' ? 1 : 0 }}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path d="M20.5 14.7A8.5 8.5 0 1 1 9.3 3.5a7 7 0 0 0 11.2 11.2Z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}