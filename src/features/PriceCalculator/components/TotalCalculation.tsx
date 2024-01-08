import { useCalcValues } from "@/features/PriceCalculator/hooks/use-calc-values.tsx";
import { DECIMAL_PATTERN } from "@/features/PriceCalculator/types/constants.ts";
import { InputWithLabel } from "@/components/Form/InputWithLabel.tsx";
import { useTranslation } from "react-i18next";

export function TotalCalculation() {
    const { t } = useTranslation();
    const { calculationValues, handleChange, getNeededBankroll } = useCalcValues("total");

    return (
        <div>
            <h2 className={"pb-8"}>{t("calc.total.desc")}</h2>
            <div className={"flex flex-col items-center gap-2 md:flex-row md:justify-center"}>
                <InputWithLabel
                    name="numberOfCases"
                    type="number"
                    pattern={DECIMAL_PATTERN}
                    value={calculationValues.numberOfCases}
                    onChange={handleChange}
                    label={t("calc.total.input1")}
                />
                <InputWithLabel
                    name="casePrice"
                    type="number"
                    pattern={DECIMAL_PATTERN}
                    value={calculationValues.casePrice}
                    onChange={handleChange}
                    label={t("calc.total.input2")}
                />
                <div className={"my-auto  px-2"}>=</div>
                <InputWithLabel
                    name="bankroll"
                    type="number"
                    disabled
                    value={getNeededBankroll().toFixed(2).toString()}
                    label={t("calc.total.input3")}
                />
            </div>
        </div>
    );
}
