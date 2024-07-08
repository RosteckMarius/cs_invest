import { useTranslation } from "react-i18next";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Input } from "@/components/Form/Input.tsx";
import { MdOutlineSettings, MdSave } from "react-icons/md";
import { LanguageSwitcher } from "@/features/Settings/LanguageSwitcher.tsx";
import React, { useState } from "react";
import { Button } from "@/components/ui/Button.tsx";
import { useLocalStorage } from "@/hooks/useLocalStorage.ts";
import { DEFAULT_KEY_PRICE } from "@/util/constants.ts";
import { useToast } from "@/components/ui/use-toast.ts";

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

function KeyPriceSelector() {
    const { t } = useTranslation();
    const { setItem, getItem } = useLocalStorage();
    const { toast } = useToast();
    const [keyPrice, setKeyPrice] = useState(getItem("KEY_PRICE") ?? DEFAULT_KEY_PRICE);

    const onKeyPriceChange = () => {
        setItem("KEY_PRICE", keyPrice);
        toast({
            description: t("settings.keyprice.updated"),
        });
    };

    return (
        <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="width">{t("settings.keyprice.label")}</Label>
            <div className={"col-span-3 flex h-8 gap-2"}>
                <Input
                    className={"w-2/3"}
                    onChange={(e) => setKeyPrice(e.target.value)}
                    value={keyPrice}
                />
                <Button variant={"secondary"} className={"w-1/3"} onClick={onKeyPriceChange}>
                    <MdSave />
                </Button>
            </div>
        </div>
    );
}
