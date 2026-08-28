import { useLanguage } from '../../i18n/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { projects } from '../../data/projects';
import OrbitDecoration from '../solar-system/OrbitDecoration';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const { t } = useLanguage();
  const head = useReveal<HTMLDivElement>();

  return (
    <section id="projetos">
      <OrbitDecoration
        orbits={[
          { size: 200, top: -20, left: -60, duration: 24, balls: [50, 200] },
          { size: 130, bottom: 0, right: -50, duration: 17, reverse: true, balls: [120, 300] },
        ]}
      />
      <div className="wrap">
        <div className={`section-head ${head.className}`} ref={head.ref}>
          <div>
            <p className="eyebrow">{t('projects.eyebrow')}</p>
            <h2>{t('projects.title')}</h2>
          </div>
          <p>{t('projects.subtitle')}</p>
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}