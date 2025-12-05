import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    fr: { translation: { hello: "Bonjour" } },
    en: { translation: { hello: "Hello" } },
  },
  lng: "fr",
  fallbackLng: "en",
});

export default i18n;
