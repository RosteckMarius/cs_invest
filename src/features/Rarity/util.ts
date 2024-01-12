import { RarityKey } from "@/features/Rarity/types/constants.ts";

export function countRarities(raritiesArray: RarityKey[]) {
    return raritiesArray.reduce(
        (counts, rarity) => {
            counts[rarity] = counts[rarity] + 1;
            return counts;
        },
        {
            milSpec: 0,
            restricted: 0,
            classified: 0,
            covert: 0,
            rare: 0,
        },
    );
}
