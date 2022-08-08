import StringFormatter from 'quickstring';
import {Language} from '../types';

import english from './en.json';
import swedish from './sv.json';

const languageMap: Record<Language, unknown> = {
  en: english,
  sv: swedish,
};

type GetString = (key: string, replacementMap?: Record<string, any>) => string;

export const getI18N = (language: Language): GetString => {
  const strings = languageMap[language] as typeof english;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const {getString: getFn} = new StringFormatter(strings) as {
    getString: GetString;
  };
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const {getString: getEnFn} = new StringFormatter(english) as {
    getString: GetString;
  };

  const getString: typeof getFn = (key, replacementMap) => {
    let string = getFn(key, replacementMap);
    if (string === key) {
      string = getEnFn(key, replacementMap);
    }

    return string;
  };

  return getString;
};
