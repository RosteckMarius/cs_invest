import { rarities } from "@/features/Rarity/types/constants.ts";
import { RarityTile } from "@/features/Rarity/components/RarityTile.tsx";
import { RarityVisualizer } from "@/features/Rarity/components/RarityVisualizer.tsx";

export function RarityInfo() {
    return (
        <div>
            <h2 className={"pb-4 text-center md:pb-8 font-bold"}>
                There are 5 kinds of items you can get from a standard case
            </h2>
            <div className={"flex flex-col items-center gap-12"}>
                <div className={"flex flex-wrap gap-2 md:grid md:grid-cols-5"}>
                    {rarities.map((r, i) => (
                        <RarityTile key={i} rarity={r} />
                    ))}
                </div>
                <RarityVisualizer />
            </div>
        </div>
    );
}
