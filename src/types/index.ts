export type Lang = 'pt' | 'en' | 'es';
export type Theme = 'light' | 'dark';
export type AboutKey = 'fullstack' | 'dados' | 'automacao';

export interface Project {
  id: string;
  titleKey: string;
  descKey: string;
  stack: string[];
  icon: 'robot' | 'cart' | 'orbit' | 'browser';
}

export interface QualificationItem {
  id: string;
  icon: string;
  titleKey: string;
  descKey: string;
  date: string;
}

export interface OrbitConfig {
  size: number;
  duration: number;
  reverse?: boolean;
  balls: { angleDeg: number; ballSize: number }[];
}