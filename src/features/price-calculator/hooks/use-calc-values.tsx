import { ChangeEvent, useState } from "react";
import { CalculationValues } from "../types/types.ts";
import { defaultCalculationValues } from "../types/constants.ts";
import { KEY_PRICE } from "../../../util/constants.ts";

export const useCalcValues = () => {

    const [calculationValues, setCalculationValues] =
        useState<CalculationValues>(defaultCalculationValues);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {

        setCalculationValues((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.valueAsNumber
            };
        });
    }

    function getNeededBankroll() {
        const { numberOfCases, casePrice } = calculationValues;
        return numberOfCases * casePrice + numberOfCases * KEY_PRICE;
    }

    function getCasePrice() {
        const { bankroll, numberOfCases } = calculationValues;
        return (bankroll - numberOfCases * KEY_PRICE) / numberOfCases;
    }

    function getNumberOfCases() {
        const { casePrice, bankroll } = calculationValues;
        return Math.floor(bankroll / (casePrice + KEY_PRICE));
    }


    return { calculationValues, handleChange, getCasePrice, getNumberOfCases, getNeededBankroll };
};