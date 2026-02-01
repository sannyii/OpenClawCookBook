'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

type Language = 'zh' | 'en';

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('zh');

  useEffect(() => {
    const stored = window.localStorage.getItem('openclaw-docs-language');
    if (stored === 'zh' || stored === 'en') {
      setLanguage(stored);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('openclaw-docs-language', language);
    document.documentElement.setAttribute('data-lang', language);
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
