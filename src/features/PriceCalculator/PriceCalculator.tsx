import { NumberOfCasesCalculation } from "@/features/PriceCalculator/components/NumberOfCasesCalculation.tsx";
import { TotalCalculation } from "@/features/PriceCalculator/components/TotalCalculation.tsx";
import { CasePriceCalculation } from "@/features/PriceCalculator/components/CasePriceCalculation.tsx";
import { useTranslation } from "react-i18next";

export function PriceCalculator() {
    const { t } = useTranslation();
    return (
        <div>
            <h1 className={"text-center text-3xl font-bold"}>{t("calc.title")}</h1>
            <div className={"flex flex-col gap-14 py-8"}>
                <div className={"rounded-2xl border-2 border-gray-500 p-4"}>
                    <NumberOfCasesCalculation />
                </div>
                <div className={"rounded-2xl border-2 border-gray-500 p-4"}>
                    <TotalCalculation />
                </div>
                <div className={"rounded-2xl border-2 border-gray-500 p-4"}>
                    <CasePriceCalculation />
                </div>
            </div>
        </div>
    );
}
