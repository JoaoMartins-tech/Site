import type { Project } from '../../types';
import { useLanguage } from '../../i18n/LanguageContext';
import { useReveal } from '../../hooks/useReveal';

const icons: Record<Project['icon'], JSX.Element> = {
  robot: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="10" width="16" height="9" rx="2" />
      <circle cx="8" cy="19" r="1.6" />
      <circle cx="16" cy="19" r="1.6" />
      <path d="M9 10V6a3 3 0 0 1 3-3 3 3 0 0 1 3 3v4" />
      <circle cx="12" cy="3" r="1" />
    </svg>
  ),
  cart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="19.5" r="1.4" />
      <circle cx="17" cy="19.5" r="1.4" />
      <path d="M2.5 3.5h2l2.4 12.2a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 2-1.6L21 7.5H6.2" />
    </svg>
  ),
  orbit: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.2" />
    </svg>
  ),
  browser: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4.5" width="18" height="15" rx="2" />
      <path d="M3 8.5h18" />
    </svg>
  ),
};

export default function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage();
  const { ref, className } = useReveal<HTMLDivElement>();

  return (
    <div className={`project-card ${className}`} ref={ref}>
      <div className="project-thumb">{icons[project.icon]}</div>
      <div className="project-body">
        <h3>{t(project.titleKey)}</h3>
        <p>{t(project.descKey)}</p>
        <div className="project-stack">
          {project.stack.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
        <a href="#" className="project-link">
          {t('projects.viewMore')}
        </a>
      </div>
    </div>
  );
}