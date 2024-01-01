import { Divider } from "@/components/Element/Divider.tsx";
import { NumberOfCasesCalculation } from "@/features/price-calculator/components/NumberOfCasesCalculation.tsx";
import { TotalCalculation } from "@/features/price-calculator/components/TotalCalculation.tsx";
import { CasePriceCalculation } from "@/features/price-calculator/components/CasePriceCalculation.tsx";

export function PriceCalculator() {
    return (
        <div>
            <div>
                <h1 className={"text-center text-3xl "}>PRICE CALCULATOR</h1>
                <Divider />
            </div>
            <div className={"flex flex-col gap-8 py-8"}>
                <NumberOfCasesCalculation />
                <TotalCalculation />
                <CasePriceCalculation />
            </div>
        </div>
    );
}
