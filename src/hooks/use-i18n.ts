import React from 'react';
import {getI18N} from '../i18n';
import {useLanguage} from './use-language';

export const useI18N = (): ReturnType<typeof getI18N> => {
  const [lang] = useLanguage();
  const i18n = React.useRef<ReturnType<typeof getI18N>>();
  React.useEffect(() => {
    if (lang) {
      i18n.current = getI18N(lang);
    }
  }, [lang]);

  return i18n.current ?? (*() => '';
};
