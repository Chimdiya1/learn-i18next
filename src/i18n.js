import i18next from "i18next";
import { initReactI18next } from "react-i18next";

//Import all translation files
import English from "./Translation/English.json";
import Italian from "./Translation/Italian.json";

const resources = {
    en: {
        translation: English,
    },
    it: {
        translation: Italian,
    },
}

i18next.use(initReactI18next)
.init({
  resources,
  lng:"en", //default language
});

export default i18next;