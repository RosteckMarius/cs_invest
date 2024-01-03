import { useCalcValues } from "@/features/PriceCalculator/hooks/use-calc-values.tsx";
import { DECIMAL_PATTERN } from "@/features/PriceCalculator/types/constants.ts";
import { InputWithLabel } from "@/components/Form/InputWithLabel.tsx";

export function TotalCalculation() {
    const { calculationValues, handleChange, getNeededBankroll } = useCalcValues("total");

    return (
        <div>
            <h2 className={"pb-8"}>
                Calculate how much money you need to open a certain amount of cases with a certain
                price
            </h2>
            <div className={"flex flex-col items-center gap-2 md:flex-row md:justify-center"}>
                <InputWithLabel
                    name="numberOfCases"
                    type="number"
                    pattern={DECIMAL_PATTERN}
                    value={calculationValues.numberOfCases}
                    onChange={handleChange}
                    label={"NUMBER OF CASES"}
                />
                <InputWithLabel
                    name="casePrice"
                    type="number"
                    pattern={DECIMAL_PATTERN}
                    value={calculationValues.casePrice}
                    onChange={handleChange}
                    label={"CASE PRICE"}
                />
                <div className={"my-auto  px-2"}>=</div>
                <InputWithLabel
                    name="bankroll"
                    type="number"
                    disabled
                    value={getNeededBankroll().toFixed(2).toString()}
                    label={"TOTAL PRICE"}
                />
            </div>
        </div>
    );
}
