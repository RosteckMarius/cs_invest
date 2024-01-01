import { InputWithLabel } from "@/components/Form/InputWithLabel.tsx";
import { DECIMAL_PATTERN, INTEGER_PATTERN } from "@/features/PriceCalculator/types/constants.ts";
import { useCalcValues } from "@/features/PriceCalculator/hooks/use-calc-values.tsx";
import { MdPriceChange } from "react-icons/md";

export function CasePriceCalculation() {
    const { calculationValues, handleChange, getCasePrice } = useCalcValues();

    return (
        <div>
            <span className={"flex items-center gap-2 pb-4 text-4xl"}>
                <MdPriceChange />
                <h2>
                    Calculate how expensive the case can be if you know the amount you want to open
                    and your bankroll
                </h2>
            </span>
            <div className={"flex flex-col items-center gap-2 md:flex-row md:justify-center"}>
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
