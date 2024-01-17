import { DECIMAL_PATTERN } from "@/features/PriceCalculator/types/constants.ts";
import { InputWithLabel } from "@/components/Form/InputWithLabel.tsx";
import { useTranslation } from "react-i18next";
import { useCalculation } from "@/features/PriceCalculator/hooks/use-calculation.tsx";

export function TotalCalculation() {
    const { t } = useTranslation();
    const { calcValues, handleChange, result } = useCalculation("TOTAL_CALC");

    return (
        <div className={"flex flex-col items-center gap-2 md:flex-row md:justify-center"}>
            <InputWithLabel
                name="numberOfCases"
                type="number"
                min={0}
                pattern={DECIMAL_PATTERN}
                value={calcValues.numberOfCases}
                onChange={handleChange}
                label={t("calc.total.input1")}
            />
            <InputWithLabel
                name="casePrice"
                type="number"
                min={0}
                pattern={DECIMAL_PATTERN}
                value={calcValues.casePrice}
                onChange={handleChange}
                label={t("calc.total.input2")}
            />
            <div className={"my-auto  px-2"}>=</div>
            <InputWithLabel
                name="bankroll"
                type="number"
                disabled
                value={result.toFixed(2).toString()}
                label={t("calc.total.input3")}
            />
        </div>
    );
}
