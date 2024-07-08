import { useTranslation } from "react-i18next";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover.tsx";
import { Label } from "@/components/ui/label.tsx";
import { MdOutlineSettings } from "react-icons/md";
import { LanguageSwitcher } from "@/features/Settings/LanguageSwitcher.tsx";
import React from "react";
import { KeyPriceSelector } from "@/features/Settings/KeyPriceSelector.tsx";

export function Settings() {
    const { t } = useTranslation();
    return (
        <Popover>
            <PopoverTrigger className={"text-2xl"}>
                <MdOutlineSettings />
            </PopoverTrigger>
            <PopoverContent>
                <div className="grid gap-6">
                    <h4 className="mb-4 font-medium leading-none">{t("settings.title")}</h4>
                    <KeyPriceSelector />
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label>{t("settings.lang.label")}</Label>
                        <div className={"col-span-3 flex"}>
                            <LanguageSwitcher />
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}
