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
            <a className="social-btn" href="#" aria-label="GitHub" title="GitHub">
              GH
            </a>
            <a className="social-btn" href="#" aria-label="LinkedIn" title="LinkedIn">
              IN
            </a>
            <a className="social-btn" href="#" aria-label="Instagram" title="Instagram">
              IG
            </a>
            <a className="social-btn" href="mailto:seuemail@exemplo.com" aria-label="Email" title="Email">
              @
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