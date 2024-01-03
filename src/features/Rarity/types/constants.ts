export const rarities: Rarity[] = [
    {
        name: "Mil-Spec grade",
        colorHex: "#4A69FF",
        percentageChance: "79,92",
        fractionChance: "4 in 5",
    },
    {
        name: "Restriced",
        colorHex: "#8746FF",
        percentageChance: "15.98",
        fractionChance: "1 in 6",
    },
    {
        name: "Classified",
        colorHex: "#D32DE5",
        percentageChance: "3.2",
        fractionChance: "1 in 31",
    },
    {
        name: "Covert",
        colorHex: "#EB4B4B",
        percentageChance: "0.64",
        fractionChance: "1 in 156",
    },
    {
        name: "Exceedingly rare",
        colorHex: "#E6CC5F",
        percentageChance: "0.26",
        fractionChance: "1 in 385",
    },
];
/**
 *
 * @param random must be between 0 and 1
 */
export const openCase = (random: number): RarityType => {
    if (random <= 0.0026) return "EXCEEDINGLY_RARE";
    if (random <= 0.0064) return "COVERT";
    if (random <= 0.032) return "CLASSIFIED";
    if (random <= 0.1598) return "RESTRICTED";
    else return "MIL_SPEC_GRADE";
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

export const rarityColor = {
    MIL_SPEC_GRADE: "#4A69FF",
    RESTRICTED: "#8746FF",
    CLASSIFIED: "#D32DE5",
    COVERT: "#EB4B4B",
    EXCEEDINGLY_RARE: "#E6CC5F",
};

export interface Rarity {
    name: string;
    colorHex: string;
    percentageChance: string;
    fractionChance: string;
}
