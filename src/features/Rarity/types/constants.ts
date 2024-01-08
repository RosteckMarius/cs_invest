export const rarities: Rarity[] = [
    {
        i18nKey: "milSpec",
        colorHex: "#4A69FF",
        percentageChance: "79,92",
        fractionChance: [4, 5],
    },
    {
        i18nKey: "restricted",
        colorHex: "#8746FF",
        percentageChance: "15.98",
        fractionChance: [1, 6],
    },
    {
        i18nKey: "classified",
        colorHex: "#D32DE5",
        percentageChance: "3.2",
        fractionChance: [1, 31],
    },
    {
        i18nKey: "covert",
        colorHex: "#EB4B4B",
        percentageChance: "0.64",
        fractionChance: [1, 156],
    },
    {
        i18nKey: "rare",
        colorHex: "#E6CC5F",
        percentageChance: "0.26",
        fractionChance: [1, 385],
    },
];
/**
 *
 * @param random must be between 0 and 1
 */
export const openCase = (random: number): RarityKey => {
    if (random <= 0.0026) return "rare";
    if (random <= 0.0064) return "covert";
    if (random <= 0.032) return "classified";
    if (random <= 0.1598) return "restricted";
    else return "milSpec";
};

export const rollCaseColor2 = (random: number) => {
    if (random <= 0.0026) return "#E6CC5F";
    if (random <= 0.0064) return "#EB4B4B";
    if (random <= 0.032) return "#D32DE5";
    if (random <= 0.1598) return "#8746FF";
    else return "#4A69FF";
};

export type RarityType =
    | "MIL_SPEC_GRADE"
    | "RESTRICTED"
    | "CLASSIFIED"
    | "COVERT"
    | "EXCEEDINGLY_RARE";

export const rarityColor: { [key in RarityKey]: string } = {
    milSpec: "#4A69FF",
    restricted: "#8746FF",
    classified: "#D32DE5",
    covert: "#EB4B4B",
    rare: "#E6CC5F",
};

export type RarityKey = "milSpec" | "restricted" | "classified" | "covert" | "rare";

export interface Rarity {
    i18nKey: RarityKey;
    colorHex: string;
    percentageChance: string;
    fractionChance: [number, number];
}
