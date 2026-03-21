import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { translations, Language, TranslationKeys } from './translations';
import { createStorage, STORAGE_KEYS } from '../utils/storage';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

// Validation function for language
const isValidLanguage = (value: unknown): value is Language => {
  return typeof value === 'string' && ['en', 'pt', 'es'].includes(value);
};

// Create storage manager for language
const languageStorage = createStorage<Language>({
  key: STORAGE_KEYS.LANGUAGE,
  defaultValue: 'en',
  validate: isValidLanguage,
});

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    return languageStorage.get();
  });

  useEffect(() => {
    // Persist language whenever it changes
    languageStorage.set(language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const value: I18nContextType = {
    language,
    setLanguage,
    t: translations[language]
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
};
