import { Rarity } from "@/features/Rarity/types/constants.ts";
import { useTranslation } from "react-i18next";

interface RarityTileProps {
    rarity: Rarity;
}

export function RarityTile(props: RarityTileProps) {
    const { t } = useTranslation();
    const { colorHex, i18nKey, percentageChance, fractionChance } = props.rarity;
    return (
        <div
            style={{ borderColor: colorHex }}
            className={"flex flex-1 flex-col justify-between rounded-xl border-2 p-2 text-center "}
        >
            <span className={"h-full pb-1 text-xl font-semibold"}>
                {t(`rarity.type.${i18nKey}`)}
            </span>
            <div className={"grid grid-rows-2 py-1"}>
                <b> {percentageChance} %</b>
                <b>
                    {fractionChance.at(0)} {t("rarity.chanceDelimiter")} {fractionChance.at(1)}
                </b>
            </div>
        </div>
    );
}
