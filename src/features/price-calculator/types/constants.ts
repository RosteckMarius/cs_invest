import { DEFAULT_BANKROLL, DEFAULT_KEY_PRICE, DEFAULT_NUMBER_OF_CASES } from "../../../util/constants.ts";
import { CalculationValues } from "./types.ts";

export const defaultCalculationValues: CalculationValues = {
    numberOfCases: DEFAULT_NUMBER_OF_CASES,
    casePrice: DEFAULT_KEY_PRICE,
    bankroll: DEFAULT_BANKROLL
};

export const INTEGER_PATTERN = "[0-9]*";
export const DECIMAL_PATTERN = "[0-9]+([,.][0-9]+)?";
