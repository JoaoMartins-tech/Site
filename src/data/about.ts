import type { AboutKey, Lang } from '../types';

interface AboutContent {
  title: string;
  text: string;
}

export const aboutContent: Record<Lang, Record<AboutKey, AboutContent>> = {
  pt: {
    fullstack: {
      title: 'Desenvolvimento Full Stack',
      text: 'Sou estudante de Ciência da Computação em fase de conclusão, apaixonado por criar aplicações escaláveis e performáticas. Tenho experiência prática em frontend moderno com React e TypeScript, e domínio de conceitos de backend e arquitetura de sistemas.\n\nEmbora meu projeto principal seja o HOPE-agro-robot, essa experiência reforçou minha mentalidade de resolver problemas e me preparou para atuar em todo o ciclo de desenvolvimento de software.',
    },
    dados: {
      title: 'Dados',
      text: 'Sou apaixonado por dados e pelo desafio de transformar informações em conhecimento. O HOPE-agro-robot me deu experiência prática em levantamento de requisitos e análise de sistemas, coletando e transmitindo informações em tempo real.\n\nBusco aplicar engenharia de dados e análise para gerar insights estratégicos e desenvolver soluções de detecção de anomalias.',
    },
    automacao: {
      title: 'Automação',
      text: 'Sou entusiasta de automação e tecnologia embarcada. Meu principal projeto é o HOPE-agro-robot, um robô agrícola autônomo com Arduino e ESP32-CAM, capaz de navegar, detectar obstáculos e transmitir imagens em tempo real.\n\nEssa experiência consolidou minha mentalidade de resolver problemas, aplicando criatividade e engenharia para otimizar processos.',
    },
  },
  en: {
    fullstack: {
      title: 'Full Stack Development',
      text: 'I build fast, accessible interfaces in React/TypeScript and solid Node.js APIs, always thinking about the end user and future maintainers.\n\nMy main project, HOPE-agro-robot, gave me practical experience with automation and data collection, strengthening my problem-solving mindset.',
    },
    dados: {
      title: 'Data',
      text: 'I model, organize and automate data pipelines so decisions rely on trustworthy, timely information.\n\nThrough HOPE-agro-robot I gained hands-on experience with real-time data collection and analysis.',
    },
    automacao: {
      title: 'Automation',
      text: 'I spot repetitive tasks and build scripts and bots that give teams hours back for strategic work.\n\nHOPE-agro-robot is an autonomous agricultural robot equipped with sensors that collect data for analysis and decision-making.',
    },
  },
  es: {
    fullstack: {
      title: 'Desarrollo Full Stack',
      text: 'Construyo interfaces rápidas y accesibles en React/TypeScript y APIs sólidas en Node.js, pensando en la experiencia de uso y en quien mantiene el código después.\n\nMi proyecto principal, HOPE-agro-robot, me dio experiencia práctica en automatización y recolección de datos.',
    },
    dados: {
      title: 'Datos',
      text: 'Modelo, organizo y automatizo pipelines de datos para decisiones confiables y a tiempo.\n\nCon HOPE-agro-robot adquirí experiencia práctica en recolección y transmisión de datos en tiempo real.',
    },
    automacao: {
      title: 'Automatización',
      text: 'Detecto tareas repetitivas y creo scripts y bots que devuelven horas al equipo para trabajo estratégico.\n\nHOPE-agro-robot es un robot agrícola autónomo equipado con sensores que recolectan datos para análisis y toma de decisiones.',
    },
  },
};

export const aboutTags: Record<AboutKey, string[]> = {
  fullstack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Java', 'Swing', 'Flask', 'JUnit', 'Git/GitHub'],
  dados: ['Python', 'PostgreSQL', 'MySQL', 'SQL', 'AWS'],
  automacao: ['Python', 'Node.js', 'Docker', 'AWS'],
};