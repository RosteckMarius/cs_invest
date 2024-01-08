import { useState } from "react";
import { Input } from "@/components/Form/Input.tsx";
import { CaseDraw } from "@/features/Rarity/components/CaseDraw.tsx";
import { useTranslation } from "react-i18next";

export function RarityVisualizer() {
    const { t } = useTranslation();
    const [reroll, setReroll] = useState(false);
    const [amount, setAmount] = useState(385);

    return (
        <div className={"flex flex-col gap-8 md:gap-4"}>
            <div className={"flex flex-wrap justify-center gap-2"}>
                <b>{t("visualizer.descLeft")}</b>
                <div className={"w-full text-center"}>
                    <Input
                        className={"w-fit text-center font-bold"}
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                    />
                </div>
                <b>{t("visualizer.descRight")}</b>
            </div>
            <CaseDraw amount={amount} reroll={() => setReroll((prevState) => !prevState)} />
        </div>
    );
}
