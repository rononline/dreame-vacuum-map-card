import { en } from './en';
import { de } from './de';
import { ru } from './ru';
import { nl } from './nl';

export const locales = {
  en,
  de,
  ru,
  nl,
};

export type SupportedLanguage = keyof typeof locales;
export type { Translation } from './en';
