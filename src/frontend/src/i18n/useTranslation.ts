import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "./translations";

export type Translations = typeof translations.en;

export function useTranslation(): Translations {
  const { language } = useLanguage();
  return translations[language] as Translations;
}
