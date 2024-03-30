import { NumberOfCasesCalculation } from "@/features/PriceCalculator/components/NumberOfCasesCalculation.tsx";
import { TotalCalculation } from "@/features/PriceCalculator/components/TotalCalculation.tsx";
import { CasePriceCalculation } from "@/features/PriceCalculator/components/CasePriceCalculation.tsx";
import { useTranslation } from "react-i18next";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/Element/Card.tsx";
import React, { ReactNode } from "react";
import { useCalculation } from "@/features/PriceCalculator/hooks/use-calculation.tsx";

export function PriceCalculator() {
    const { t } = useTranslation();
    const { calcValues, handleChange, result } = useCalculation("TOTAL_CALC");

    const calculationComponents: { title: string; desc: string; component: ReactNode }[] = [
        {
            title: "calc.caseNumber.title",
            desc: "calc.caseNumber.desc",
            component: <NumberOfCasesCalculation />,
        },
        {
            title: "calc.total.title",
            desc: "calc.total.desc",
            component: (
                <TotalCalculation
                    calcValues={calcValues}
                    result={result}
                    handleChange={handleChange}
                />
            ),
        },

        {
            title: "calc.casePrice.title",
            desc: "calc.casePrice.desc",
            component: <CasePriceCalculation />,
        },
    ];

    return (
        <div>
            <div className={"flex flex-col gap-14 py-8"}>
                {calculationComponents.map((value) => (
                    <Card key={value.title}>
                        <CardHeader>
                            <CardTitle>{t(value.title)}</CardTitle>
                            <CardDescription>{t(value.desc)}</CardDescription>
                        </CardHeader>
                        <CardContent>{value.component}</CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
