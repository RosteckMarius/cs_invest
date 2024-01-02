import { useCalcValues } from "@/features/PriceCalculator/hooks/use-calc-values.tsx";
import { InputWithLabel } from "@/components/Form/InputWithLabel.tsx";
import { DECIMAL_PATTERN } from "@/features/PriceCalculator/types/constants.ts";
import { MdSavings } from "react-icons/md";

export function NumberOfCasesCalculation() {
    const { calculationValues, handleChange, getNumberOfCases } = useCalcValues("amount");

    return (
        <div>
            <span className={"flex items-center gap-2 pb-4 text-4xl"}>
                <MdSavings />
                <h2>Calculate how many cases you can open with your bankroll</h2>
            </span>
            <div className={"flex flex-col items-center gap-2 md:flex-row md:justify-center"}>
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
