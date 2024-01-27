import { useState } from "react";
import { Input } from "@/components/Form/Input.tsx";
import { CaseOpening } from "@/features/CaseOpening/components/CaseOpening.tsx";
import { useTranslation } from "react-i18next";

export function Visualizer() {
    const { t } = useTranslation();
    const [amount, setAmount] = useState(385);

    return (
        <div className={"flex w-full flex-col md:gap-10"}>
            <div className={"flex flex-col flex-wrap items-center gap-2"}>
                <b>{t("visualizer.descLeft")}</b>
                <div className={"w-fit text-center"}>
                    <Input
                        type={"number"}
                        autoFocus
                        className={"w-fit text-center font-bold"}
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                    />
                </div>
                <b>{t("visualizer.descRight")}</b>
            </div>
            <CaseOpening numberOfCases={amount} />
        </div>
    );
}
