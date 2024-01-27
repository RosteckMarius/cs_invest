import { rarities } from "@/features/CaseOpening/types/constants.ts";
import { RarityTile } from "@/features/CaseOpening/components/RarityTile.tsx";
import { Visualizer } from "@/features/CaseOpening/components/Visualizer.tsx";

export function CaseOpeningView() {
    return (
        <div className={"flex flex-col items-center gap-12"}>
            <div className={"flex flex-wrap gap-2 md:grid md:grid-cols-5"}>
                {rarities.map((r) => (
                    <RarityTile key={r.i18nKey} rarity={r} />
                ))}
            </div>
            <Visualizer />
        </div>
    );
}
