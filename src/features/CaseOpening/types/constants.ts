export const rarities: Rarity[] = [
    {
        i18nKey: "mil_spec",
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

export const rarityColor: { [key in RarityKey]: string } = {
    mil_spec: "#4A69FF",
    restricted: "#8746FF",
    classified: "#D32DE5",
    covert: "#EB4B4B",
    rare: "#E6CC5F",
};

export type RarityKey = "mil_spec" | "restricted" | "classified" | "covert" | "rare";

export interface Rarity {
    i18nKey: RarityKey;
    colorHex: string;
    percentageChance: string;
    fractionChance: [number, number];
}

export interface OpeningResults {
    counts: {
        mil_spec: number;
        restricted: number;
        classified: number;
        covert: number;
        rare: number;
    };
    results: string[];
}

export const emptyOpeningResults = (): OpeningResults => {
    return {
        counts: {
            mil_spec: 0,
            restricted: 0,
            classified: 0,
            covert: 0,
            rare: 0,
        },
        results: [],
    };
};
