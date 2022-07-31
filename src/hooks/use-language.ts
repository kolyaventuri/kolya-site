import {useLocalStorage} from './use-localstorage';

type Language = 'en' | 'sv';

type UseLanguageResult = [Language, (lang: Language) => void];

export const useLanguage = (): UseLanguageResult =>
  useLocalStorage<Language>('lang', 'en');
