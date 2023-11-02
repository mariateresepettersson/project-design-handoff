import i18n from "i18next";
import { initReactI18next } from "react-i18next";
//Separate JSON translation files
import enTranslations from "./translations/en.json"
import seTranslations from "./translations/se.json"
import noTranslations from "./translations/no.json"
import daTranslations from "./translations/da.json"
import ptTranslations from "./translations/pt.json"
import mkTranslations from "./translations/mk.json"

const resources = {
    en: {
        translation: enTranslations,
    },
    se: {
        translation: seTranslations,
    },
    no: {
        translation: noTranslations,
    },
    da: {
        translation: daTranslations,
    },
    pt: {
        translation: ptTranslations,
    },
    mk:{
        translation: mkTranslations,
    },
};


i18n.use(initReactI18next).init({
    resources,
    lng: "en", // default language (key)
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;