// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { debug } from "util";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: require("/locales/English/translation.json"),
    },
    tr: {
      translation: require("/locales/Turkey/translation.json"),
    },
    nl: {
      translation: require("/locales/Dutch/translation.json"),
    },
  },
  lng: "en",
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
