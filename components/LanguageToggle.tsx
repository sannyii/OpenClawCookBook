'use client';

import { useLanguage } from './LanguageProvider';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="lang-toggle" role="group" aria-label="Language toggle">
      <button
        type="button"
        className={language === 'zh' ? 'active' : ''}
        onClick={() => setLanguage('zh')}
      >
        中文
      </button>
      <button
        type="button"
        className={language === 'en' ? 'active' : ''}
        onClick={() => setLanguage('en')}
      >
        English
      </button>
    </div>
  );
}
