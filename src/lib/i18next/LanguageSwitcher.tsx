import i18n from "@/lib/i18next/i18n.ts";
import { useState } from "react";
import { cn } from "@/lib/utils.ts";

export function LanguageSwitcher() {
    const [language, setLanguage] = useState("de");

    function isCurrentLanguage(lang: "de" | "en") {
        return language === lang;
    }

    function changeLanguage(lang: "de" | "en") {
        i18n.changeLanguage(lang).then(() => setLanguage(lang));
    }

    return (
        <div className={"flex gap-2"}>
            <i
                className={cn("p-1", {
                    "rounded border border-gray-400": isCurrentLanguage("de"),
                })}
                onClick={() => changeLanguage("de")}
            >
                🇩🇪
            </i>
            <i
                className={cn("p-1", {
                    "rounded border border-gray-400": isCurrentLanguage("en"),
                })}
                onClick={() => changeLanguage("en")}
            >
                🇺🇸
            </i>
        </div>
    );
}
