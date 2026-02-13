import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// import translation files
import enTranslation from "../locales/en/translation.json";
import arTranslation from "../locales/ar/translation.json";
import frTranslation from "../locales/fr/translation.json";
import esTranslation from "../locales/es/translation.json";
import type { LanguageCode } from "../types/Language";

const resources = {
  en: {
    translation: enTranslation,
  },
  ar: {
    translation: arTranslation,
  },
  fr: {
    translation: frTranslation,
  },
  es: {
    translation: esTranslation,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en", // default language
    lng: "en", // initial language
    debug: true, // debug, set false in production

    interpolation: {
      escapeValue: false, // React already escapes values
    },

    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  });

const updateDirection = (lang: LanguageCode) => {
  const dir = lang === "ar" ? "rtl" : "ltr";
  document.documentElement.dir = dir;
  document.documentElement.lang = lang;
};

i18n.on("languageChanged", (lng) => {
  updateDirection(lng as LanguageCode);
});

export default i18n;
