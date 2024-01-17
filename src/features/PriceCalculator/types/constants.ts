import { DEFAULT_BANKROLL, DEFAULT_KEY_PRICE, DEFAULT_NUMBER_OF_CASES } from "@/util/constants.ts";
import { CalculationValues } from "./types.ts";
import { LocalStorageKey } from "@/hooks/useLocalStorage.ts";

const defaultTotalCalcValues: Partial<CalculationValues> = {
    numberOfCases: DEFAULT_NUMBER_OF_CASES,
    casePrice: DEFAULT_KEY_PRICE,
};
const defaultCasePriceCalcValues: Partial<CalculationValues> = {
    numberOfCases: DEFAULT_NUMBER_OF_CASES,
    bankroll: DEFAULT_BANKROLL,
};
const defaultNumberOfCasesCalcValues: Partial<CalculationValues> = {
    casePrice: DEFAULT_KEY_PRICE,
    bankroll: DEFAULT_BANKROLL,
};

export const getDefaultCalcValues = (key: LocalStorageKey) => {
    switch (key) {
        case "TOTAL_CALC":
            return defaultTotalCalcValues;
        case "CASE_PRICE_CALC":
            return defaultCasePriceCalcValues;
        case "NUMBER_OF_CASES_CALC":
            return defaultNumberOfCasesCalcValues;
    }
};

export const INTEGER_PATTERN = "[0-9]*";
export const DECIMAL_PATTERN = "[0-9]+([,.][0-9]+)?";
