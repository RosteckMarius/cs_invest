import { NumberOfCasesCalculation } from "./components/NumberOfCasesCalculation.tsx";
import { CasePriceCalculation } from "./components/CasePriceCalculation.tsx";
import { TotalCalculation } from "./components/TotalCalculation.tsx";
import { Divider } from "../../components/Divider.tsx";

export function PriceCalculator() {
    return (
        <div>
            <div>
                <h1 className={"text-3xl"}>PRICE CALCULATOR</h1>
            </div>
            <Divider />
            <div className={"flex flex-col gap-8 py-8"}>
                <NumberOfCasesCalculation />
                <TotalCalculation />
                <CasePriceCalculation />
            </div>
        </div>
    );
}
