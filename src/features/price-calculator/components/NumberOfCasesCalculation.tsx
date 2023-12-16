import { InputWithLabel } from "../../../components/InputWithLabel.tsx";
import { DECIMAL_PATTERN } from "../types/constants.ts";
import { useCalcValues } from "../hooks/use-calc-values.tsx";

export function NumberOfCasesCalculation() {
    const { calculationValues, handleChange, getNumberOfCases } =
        useCalcValues();

    return (
        <div className={"flex gap-2"}>
            <InputWithLabel
                name="bankroll"
                type="number"
                pattern={DECIMAL_PATTERN}
                value={calculationValues.bankroll}
                onChange={handleChange}
                label={"BANKROLL"}
            />
            <InputWithLabel
                name="casePrice"
                type="number"
                pattern={DECIMAL_PATTERN}
                value={calculationValues.casePrice}
                onChange={handleChange}
                label={"CASE PRICE"}
            />
            <div className={"my-auto px-2"}>=</div>
            <InputWithLabel
                name="numberOfCases"
                type="number"
                value={getNumberOfCases().toString()}
                disabled
                label={"POSSIBLE CASES"}
            />
        </div>
    );
}
