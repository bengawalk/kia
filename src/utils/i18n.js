import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import knLocaleStrings from "../assets/locales/kn";
import enLocaleStrings from "../assets/locales/en";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enLocaleStrings,
    },
    kn: {
      translation: knLocaleStrings,
    },
  },
  fallbackLng: "en",
  debug: false, // process.env.NODE_ENV === 'development',

  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
