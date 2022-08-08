import * as React from 'react';
import {Language} from '../types';

interface LangContext {
  language: Language;
}

export const LanguageContext = React.createContext<LangContext>({language: 'en'});

export const Provider = LanguageContext.Provider;
