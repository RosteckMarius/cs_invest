import { InputWithLabel } from "../../../components/InputWithLabel.tsx";
import { DECIMAL_PATTERN, INTEGER_PATTERN } from "../types/constants.ts";
import { useCalcValues } from "../hooks/use-calc-values.tsx";

export function CasePriceCalculation() {
    const { calculationValues, handleChange, getCasePrice } = useCalcValues();

    return (
        <div className={"flex gap-2"}>
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
    );
}
