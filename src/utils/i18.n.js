import i18next from "i18next";
import en from "../locales/en";
import heb from "../locales/heb";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  fallbackLng: "en",
  resources: {
    en,
    heb,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
