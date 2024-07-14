import i18n from "@/lib/i18next/i18n.ts";
import { useState } from "react";
import { cn } from "@/lib/utils.ts";
import { Button } from "@/components/ui/Button.tsx";

export function LanguageSwitcher() {
    const [language, setLanguage] = useState("de");

    function isCurrentLanguage(lang: "de" | "en") {
        return language === lang;
    }

    function changeLanguage(lang: "de" | "en") {
        i18n.changeLanguage(lang).then(() => setLanguage(lang));
    }

    return (
        <div className={"grid grid-cols-2 gap-2"}>
            <Button
                variant={"ghost"}
                className={cn("flex justify-center p-1", {
                    "rounded border-2 border-gray-400": isCurrentLanguage("de"),
                })}
                onClick={() => changeLanguage("de")}
            >
                🇩🇪
            </Button>
            <Button
                variant={"ghost"}
                className={cn(" flex justify-center p-1", {
                    "rounded border-2 border-gray-400": isCurrentLanguage("en"),
                })}
                onClick={() => changeLanguage("en")}
            >
                🇺🇸
            </Button>
        </div>
    );
}
