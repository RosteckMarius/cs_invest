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

export interface OpeningResults {
    counts: ResultCount;
    results: string[];
}

export const emptyOpeningResults = (): OpeningResults => {
    return {
        counts: emptyResultCount(),
        results: [],
    };
};

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

export interface ResultCount {
    mil_spec: number;
    restricted: number;
    classified: number;
    covert: number;
    rare: number;
}

export const emptyResultCount = (): ResultCount => {
    return {
        mil_spec: 0,
        restricted: 0,
        classified: 0,
        covert: 0,
        rare: 0,
    };
};

/**
 *
 * @param amount of cases that should be opened
 */
export const getCaseOpeningResultsFE = (amount: number): OpeningResults => {
    const myListOfDraws = [];
    const counts = emptyResultCount();

    for (let i = 0; i < amount; i++) {
        const draw = getRandomRarity();
        myListOfDraws.push(draw);
        counts[draw] = counts[draw] + 1;
    }

    return {
        results: myListOfDraws,
        counts: counts,
    };
};

const getRandomRarity = () => {
    const random = Math.random();
    if (random < 0 || random > 1) throw new Error("Should be between 0 and 1");

    if (random <= 0.7992) return "mil_spec";
    if (random <= 0.959) return "restricted";
    if (random <= 0.991) return "classified";
    if (random <= 0.9974) return "covert";
    return "rare";
};
