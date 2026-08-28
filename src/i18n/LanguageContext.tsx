import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { Lang } from '../types';
import { translations } from './translations';

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('pt');

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    document.documentElement.setAttribute('lang', l === 'pt' ? 'pt-BR' : l);
    document.documentElement.setAttribute('data-lang', l);
  }, []);

  const t = useCallback(
    (key: string) => translations[lang][key] ?? key,
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage precisa estar dentro de LanguageProvider');
  return ctx;
}