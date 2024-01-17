import { InputWithLabel } from "@/components/Form/InputWithLabel.tsx";
import { DECIMAL_PATTERN, INTEGER_PATTERN } from "@/features/PriceCalculator/types/constants.ts";
import { useTranslation } from "react-i18next";
import { useCalculation } from "@/features/PriceCalculator/hooks/use-calculation.tsx";

export function CasePriceCalculation() {
    const { t } = useTranslation();

    const { calcValues, handleChange, result } = useCalculation("CASE_PRICE_CALC");

    return (
        <div className={"flex flex-col items-center gap-2 md:flex-row md:justify-center"}>
            <InputWithLabel
                name="numberOfCases"
                type="number"
                min={0}
                pattern={INTEGER_PATTERN}
                onChange={handleChange}
                value={calcValues.numberOfCases}
                label={t("calc.casePrice.input1")}
            />
            <InputWithLabel
                name="bankroll"
                type="number"
                min={0}
                pattern={DECIMAL_PATTERN}
                value={calcValues.bankroll}
                onChange={handleChange}
                label={t("calc.casePrice.input2")}
            />
            <div className={"my-auto px-2"}>=</div>
            <InputWithLabel
                name="casePrice"
                type="number"
                value={result.toFixed(2).toString()}
                disabled
                label={t("calc.casePrice.input3")}
            />
        </div>
    );
}
