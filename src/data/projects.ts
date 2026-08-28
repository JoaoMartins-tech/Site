import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'hope',
    titleKey: 'projects.p1.title',
    descKey: 'projects.p1.desc',
    stack: ['Python', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    icon: 'robot',
  },
  {
    id: 'etrade',
    titleKey: 'projects.p2.title',
    descKey: 'projects.p2.desc',
    stack: ['Java 17+', 'Swing', 'JUnit', 'Git/GitHub'],
    icon: 'cart',
  },
  {
    id: 'vinil',
    titleKey: 'projects.p3.title',
    descKey: 'projects.p3.desc',
    stack: ['SQL', 'MySQL', 'Flask'],
    icon: 'orbit',
  },
  {
    id: 'landing',
    titleKey: 'projects.p4.title',
    descKey: 'projects.p4.desc',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    icon: 'browser',
  },
];