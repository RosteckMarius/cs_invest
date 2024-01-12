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

export function PriceCalculator() {
    const { t } = useTranslation();
    return (
        <div>
            <div className={"flex flex-col gap-14 py-8"}>
                <Card>
                    <CardHeader>
                        <CardTitle>{t("calc.caseNumber.title")}</CardTitle>
                        <CardDescription>{t("calc.caseNumber.desc")}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <NumberOfCasesCalculation />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>{t("calc.total.title")}</CardTitle>
                        <CardDescription>{t("calc.total.desc")}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <TotalCalculation />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>{t("calc.casePrice.title")}</CardTitle>
                        <CardDescription>{t("calc.casePrice.desc")}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <CasePriceCalculation />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
