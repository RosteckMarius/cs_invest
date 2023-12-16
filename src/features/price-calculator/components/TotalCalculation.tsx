import { InputWithLabel } from "../../../components/InputWithLabel.tsx";
import { DECIMAL_PATTERN } from "../types/constants.ts";
import { useCalcValues } from "../hooks/use-calc-values.tsx";

export function TotalCalculation() {
    const { calculationValues, handleChange, getNeededBankroll } = useCalcValues();

    return (
        <div className={"flex gap-2"}>
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
    );
}
