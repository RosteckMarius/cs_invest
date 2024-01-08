import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "@/lib/i18next/translations/en.json";
import deTranslations from "@/lib/i18next/translations/de.json";

i18n.use(initReactI18next).init({
    debug: true,
    lng: "de",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
    },

    resources: {
        en: {
            translation: enTranslations,
        },
        de: {
            translation: deTranslations,
        },
    },
});

export default i18n;
