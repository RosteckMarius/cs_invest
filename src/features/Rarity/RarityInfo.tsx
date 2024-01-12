import { rarities } from "@/features/Rarity/types/constants.ts";
import { RarityTile } from "@/features/Rarity/components/RarityTile.tsx";
import { RarityVisualizer } from "@/features/Rarity/components/RarityVisualizer.tsx";

export function RarityInfo() {
    return (
        <div>
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
