'use client';

import { useLanguage } from './LanguageProvider';

interface BilingualProps {
  zh: React.ReactNode;
  en: React.ReactNode;
}

export function Bilingual({ zh, en }: BilingualProps) {
  const { language } = useLanguage();
  return <>{language === 'zh' ? zh : en}</>;
}
