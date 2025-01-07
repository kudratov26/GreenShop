import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsEn from "./translationsEn";
import translationsRu from "./translationsRu";
import translationsUz from "./translationsUz";

i18n.use(initReactI18next).init({
  resources:{
    en:{translation: translationsEn},
    ru:{translation: translationsRu},
    uz:{translation: translationsUz}
  },
  lng:"en",
  fallbackLng:"en"
})

export const changeLang = (value) => {
  i18n.changeLanguage(value);
};

export default i18n;

