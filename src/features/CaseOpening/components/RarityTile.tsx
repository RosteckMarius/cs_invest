import { Rarity } from "@/features/CaseOpening/types/constants.ts";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/Element/Card.tsx";
import React from "react";

interface RarityTileProps {
    rarity: Rarity;
}

export function RarityTile(props: RarityTileProps) {
    const { t } = useTranslation();
    const { colorHex, i18nKey, percentageChance, fractionChance } = props.rarity;
    return (
        <Card className={"flex flex-1 flex-col justify-between rounded-xl p-2 text-center"}>
            <CardHeader>
                <CardTitle style={{ color: colorHex }} className={"capitalize md:text-xl"}>
                    {t(`rarity.type.${i18nKey}`)}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className={"grid grid-rows-2 py-1"}>
                    <b> {percentageChance} %</b>
                    <b>
                        {fractionChance.at(0)} {t("rarity.chanceDelimiter")} {fractionChance.at(1)}
                    </b>
                </div>
            </CardContent>
        </Card>
    );
}
