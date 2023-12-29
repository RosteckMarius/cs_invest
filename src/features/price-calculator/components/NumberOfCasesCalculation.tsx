import { InputWithLabel } from "../../../components/Form/InputWithLabel.tsx";
import { DECIMAL_PATTERN } from "../types/constants.ts";
import { useCalcValues } from "../hooks/use-calc-values.tsx";

export function NumberOfCasesCalculation() {
    const { calculationValues, handleChange, getNumberOfCases } =
        useCalcValues();

    return (
        <div>
            <h2 className={"md:pb-4"}>Calculate how many cases you can open with your bankroll</h2>
            <div className={"flex flex-col md:flex-row items-center gap-2"}>
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
        </div>
    );
}
