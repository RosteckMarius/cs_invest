import { useCalculation } from "@/features/PriceCalculator/hooks/use-calculation.tsx";
import { TotalCalculation } from "@/features/PriceCalculator/components/TotalCalculation.tsx";
import { CaseOpening } from "@/features/CaseOpening/components/CaseOpening.tsx";

export function AdvancedRarity() {
    const { calcValues, handleChange, result } = useCalculation("TOTAL_CALC");

    return (
        <div className={"flex flex-col gap-6"}>
            <TotalCalculation calcValues={calcValues} result={result} handleChange={handleChange} />
            <CaseOpening numberOfCases={calcValues.numberOfCases} />
        </div>
    );
}
