import { useTranslation } from "react-i18next";
import { useLocalStorage } from "@/hooks/useLocalStorage.ts";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { DEFAULT_KEY_PRICE } from "@/util/constants.ts";
import { Label } from "@/components/ui/label.tsx";
import { Input } from "@/components/Form/Input.tsx";
import { Button } from "@/components/ui/Button.tsx";
import { MdSave } from "react-icons/md";

export function KeyPriceSelector() {
    const { t } = useTranslation();
    const { setItem, getItem } = useLocalStorage();
    const navigate = useNavigate();

    const [keyPrice, setKeyPrice] = useState(getItem("KEY_PRICE") ?? DEFAULT_KEY_PRICE);

    const onKeyPriceChange = () => {
        setItem("KEY_PRICE", keyPrice);
        navigate(0);
    };

    const isInvalidKeyPrice = () => {
        const keyPriceIsEmpty = keyPrice.length === 0;
        return keyPriceIsEmpty || Number(keyPrice) < 0;
    };

    return (
        <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="width">{t("settings.keyprice.label")}</Label>
            <div className={"col-span-3 flex h-8 gap-2"}>
                <Input
                    className={"w-2/3"}
                    type={"number"}
                    min={0}
                    step={0.05}
                    onChange={(e) => setKeyPrice(e.target.value)}
                    value={keyPrice}
                />
                <Button
                    variant={"secondary"}
                    className={"w-1/3"}
                    disabled={isInvalidKeyPrice()}
                    onClick={onKeyPriceChange}
                >
                    <MdSave />
                </Button>
            </div>
        </div>
    );
}
