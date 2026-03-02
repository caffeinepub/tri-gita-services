import { useLanguage } from '../contexts/LanguageContext';
import { translations } from './translations';
import type { Translations } from './translations';

export function useTranslation(): Translations {
  const { language } = useLanguage();
  return translations[language] as Translations;
}
