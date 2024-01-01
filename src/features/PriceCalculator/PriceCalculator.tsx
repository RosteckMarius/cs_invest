import { NumberOfCasesCalculation } from "@/features/PriceCalculator/components/NumberOfCasesCalculation.tsx";
import { TotalCalculation } from "@/features/PriceCalculator/components/TotalCalculation.tsx";
import { CasePriceCalculation } from "@/features/PriceCalculator/components/CasePriceCalculation.tsx";

export function PriceCalculator() {
    return (
        <div>
            <h1 className={"text-center text-3xl font-bold"}>PRICE CALCULATOR</h1>
            <div className={"flex flex-col gap-14 py-8"}>
                <NumberOfCasesCalculation />
                <TotalCalculation />
                <CasePriceCalculation />
            </div>
        </div>
    );
}
