import { rarities } from "@/features/Rarity/types/constants.ts";
import { RarityTile } from "@/features/Rarity/components/RarityTile.tsx";
import { RarityVisualizer } from "@/features/Rarity/components/RarityVisualizer.tsx";
import { useTranslation } from "react-i18next";

export function RarityInfo() {
    const { t } = useTranslation();
    return (
        <div>
            <h2 className={"pb-4 text-center font-bold md:pb-8"}>{t("rarity.desc")}</h2>
            <div className={"flex flex-col items-center gap-12"}>
                <div className={"flex flex-wrap gap-2 md:grid md:grid-cols-5"}>
                    {rarities.map((r) => (
                        <RarityTile key={r.i18nKey} rarity={r} />
                    ))}
                </div>
                <RarityVisualizer />
            </div>
        </div>
    );
}
