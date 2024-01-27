export type RarityKey = "mil_spec" | "restricted" | "classified" | "covert" | "rare";

const MIL_SPEC_COLOR = "#4A69FF";
const RESTRICTED_COLOR = "#8746FF";
const CLASSIFIED_COLOR = "#D32DE5";
const COVERT_COLOR = "#EB4B4B";
const RARE_COLOR = "#E6CC5F";

export interface Rarity {
    i18nKey: RarityKey;
    colorHex: string;
    percentageChance: string;
    fractionChance: [number, number];
}

export const rarities: Rarity[] = [
    {
        i18nKey: "mil_spec",
        colorHex: MIL_SPEC_COLOR,
        percentageChance: "79,92",
        fractionChance: [4, 5],
    },
    {
        i18nKey: "restricted",
        colorHex: RESTRICTED_COLOR,
        percentageChance: "15.98",
        fractionChance: [1, 6],
    },
    {
        i18nKey: "classified",
        colorHex: CLASSIFIED_COLOR,
        percentageChance: "3.2",
        fractionChance: [1, 31],
    },
    {
        i18nKey: "covert",
        colorHex: COVERT_COLOR,
        percentageChance: "0.64",
        fractionChance: [1, 156],
    },
    {
        i18nKey: "rare",
        colorHex: RARE_COLOR,
        percentageChance: "0.26",
        fractionChance: [1, 385],
    },
];

export const rarityColor: { [key in RarityKey]: string } = {
    mil_spec: MIL_SPEC_COLOR,
    restricted: RESTRICTED_COLOR,
    classified: CLASSIFIED_COLOR,
    covert: COVERT_COLOR,
    rare: RARE_COLOR,
};
