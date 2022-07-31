import {useLocalStorage} from './use-localstorage';

export type Language = 'en' | 'sv';

type UseLanguageResult = [Language, (lang: Language) => void];

export const useLanguage = (): UseLanguageResult =>
  useLocalStorage<Language>('lang', 'en');
