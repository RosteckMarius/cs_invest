import { useCalcValues } from "@/features/PriceCalculator/hooks/use-calc-values.tsx";
import { InputWithLabel } from "@/components/Form/InputWithLabel.tsx";
import { DECIMAL_PATTERN } from "@/features/PriceCalculator/types/constants.ts";
import { useTranslation } from "react-i18next";

export function NumberOfCasesCalculation() {
    const { t } = useTranslation();
    const { calculationValues, handleChange, getNumberOfCases } = useCalcValues("amount");

    return (
        <div className={"flex flex-col items-center gap-2 md:flex-row md:justify-center"}>
            <InputWithLabel
                name="bankroll"
                type="number"
                pattern={DECIMAL_PATTERN}
                value={calculationValues.bankroll}
                onChange={handleChange}
                label={t("calc.caseNumber.input1")}
            />
            <InputWithLabel
                name="casePrice"
                type="number"
                pattern={DECIMAL_PATTERN}
                value={calculationValues.casePrice}
                onChange={handleChange}
                label={t("calc.caseNumber.input2")}
            />
            <div className={"my-auto px-2"}>=</div>
            <InputWithLabel
                name="numberOfCases"
                type="number"
                value={getNumberOfCases().toString()}
                disabled
                label={t("calc.caseNumber.input3")}
            />
        </div>
    );
}
