import {getI18N} from '../i18n';
import {useLanguage} from './use-language';

export const useI18N = () => {
  const [lang] = useLanguage();
  const i18n = getI18N(lang);

  return i18n;
};
