import * as React from 'react';

import {LanguageContext} from '../context/language';
import {Language} from '../types';
import {useLocalStorage} from './use-localstorage';

type UseLanguageResult = [Language, (lang: Language) => void, boolean];

export const useLanguage = (): UseLanguageResult => {
  const langContext = React.useContext(LanguageContext);

  const [lang, setLangFn, loading] = useLocalStorage<Language>('lang', 'en');
  const setLang = (language: Language) => {
    langContext.language = language;
    setLangFn(language);
  };

  React.useEffect(() => {
    if (lang) {
      setLang(lang);
    }
  }, [lang]);

  return [langContext.language, setLang, loading];
};
