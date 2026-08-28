import { useLanguage } from '../../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contato">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <strong>João Martins</strong>
            <span>{t('footer.title')}</span>
          </div>
          <div className="socials">
            
              className="social-btn"
              href="https://github.com/JoaoMartins-tech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.7.5.5 5.7.5 12c0 5 3.3 9.3 7.9 10.8.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5Z" />
              </svg>
            </a>
            
              className="social-btn"
              href="https://www.linkedin.com/in/jo%C3%A3o-martins-/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.94 8.5H3.56V21H6.94V8.5ZM5.25 3a1.96 1.96 0 1 0 0 3.92A1.96 1.96 0 0 0 5.25 3ZM20.5 21h-3.38v-6.4c0-1.53-.03-3.5-2.13-3.5-2.14 0-2.46 1.67-2.46 3.4V21H9.15V8.5h3.24v1.7h.05c.45-.85 1.56-1.75 3.2-1.75 3.43 0 4.86 2.26 4.86 6.16V21Z" />
              </svg>
            </a>
            <a className="social-btn" href="#" aria-label="Instagram" title="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.3" cy="6.7" r="1" />
              </svg>
            </a>
            
              className="social-btn"
              href="https://forms.gle/ais9GN5gSCi3oVKw8"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contato"
              title="Contato"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
                <path d="m3.5 6 8.5 7 8.5-7" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{t('footer.madeWith')}</span>
          <br />
          <span>Copyright © 2026 João Martins</span>
        </div>
      </div>
    </footer>
  );
}
