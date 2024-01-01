import { InputWithLabel } from "@/components/Form/InputWithLabel.tsx";
import {
    DECIMAL_PATTERN,
    INTEGER_PATTERN,
} from "@/features/price-calculator/types/constants.ts";
import { useCalcValues } from "@/features/price-calculator/hooks/use-calc-values.tsx";

export function CasePriceCalculation() {
    const { calculationValues, handleChange, getCasePrice } = useCalcValues();

    return (
        <div>
            <h2 className={"md:pb-4"}>
                Calculate how expensive the case can be if you know the amount
                you want to open and your bankroll
            </h2>
            <div className={"flex flex-col items-center gap-2 md:flex-row"}>
                <InputWithLabel
                    name="numberOfCases"
                    type="number"
                    pattern={INTEGER_PATTERN}
                    onChange={handleChange}
                    value={calculationValues.numberOfCases}
                    label={"CASES I WANT TO OPEN"}
                />
                <InputWithLabel
                    name="bankroll"
                    type="number"
                    pattern={DECIMAL_PATTERN}
                    value={calculationValues.bankroll}
                    onChange={handleChange}
                    label={"BANKROLL"}
                />
                <div className={"my-auto px-2"}>=</div>
                <InputWithLabel
                    name="casePrice"
                    type="number"
                    value={getCasePrice().toFixed(2).toString()}
                    disabled
                    label={"POSSIBLE CASE PRICE"}
                />
            </div>
        </div>
    );
}
