import { InputWithLabel } from "@/components/Form/InputWithLabel.tsx";
import { DECIMAL_PATTERN, INTEGER_PATTERN } from "@/features/PriceCalculator/types/constants.ts";
import { useCalcValues } from "@/features/PriceCalculator/hooks/use-calc-values.tsx";
import { useTranslation } from "react-i18next";

export function CasePriceCalculation() {
    const { t } = useTranslation();
    const { calculationValues, handleChange, getCasePrice } = useCalcValues("case-price");

    return (
        <div>
            <h2 className={"pb-8"}>{t("calc.casePrice.desc")}</h2>
            <div className={"flex flex-col items-center gap-2 md:flex-row md:justify-center"}>
                <InputWithLabel
                    name="numberOfCases"
                    type="number"
                    pattern={INTEGER_PATTERN}
                    onChange={handleChange}
                    value={calculationValues.numberOfCases}
                    label={t("calc.casePrice.input1")}
                />
                <InputWithLabel
                    name="bankroll"
                    type="number"
                    pattern={DECIMAL_PATTERN}
                    value={calculationValues.bankroll}
                    onChange={handleChange}
                    label={t("calc.casePrice.input2")}
                />
                <div className={"my-auto px-2"}>=</div>
                <InputWithLabel
                    name="casePrice"
                    type="number"
                    value={getCasePrice().toFixed(2).toString()}
                    disabled
                    label={t("calc.casePrice.input3")}
                />
            </div>
        </div>
    );
}
