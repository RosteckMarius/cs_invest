import { InputWithLabel } from "@/components/Form/InputWithLabel.tsx";
import { DECIMAL_PATTERN } from "@/features/PriceCalculator/types/constants.ts";
import { useTranslation } from "react-i18next";
import { useCalculation } from "@/features/PriceCalculator/hooks/use-calculation.tsx";

export function NumberOfCasesCalculation() {
    const { t } = useTranslation();

    const { calcValues, handleChange, result } = useCalculation("NUMBER_OF_CASES_CALC");

    return (
        <div className={"flex flex-col items-center gap-2 md:flex-row md:justify-center"}>
            <InputWithLabel
                name="bankroll"
                type="number"
                min={0}
                pattern={DECIMAL_PATTERN}
                value={calcValues.bankroll}
                onChange={handleChange}
                label={t("calc.caseNumber.input1")}
            />
            <InputWithLabel
                name="casePrice"
                type="number"
                min={0}
                pattern={DECIMAL_PATTERN}
                value={calcValues.casePrice}
                onChange={handleChange}
                label={t("calc.caseNumber.input2")}
            />
            <div className={"my-auto px-2"}>=</div>
            <InputWithLabel
                name="numberOfCases"
                type="number"
                value={result.toString()}
                disabled
                label={t("calc.caseNumber.input3")}
            />
        </div>
    );
}
