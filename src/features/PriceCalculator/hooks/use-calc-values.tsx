import { ChangeEvent, useState } from "react";
import { CalculationValues } from "@/features/PriceCalculator/types/types.ts";
import { KEY_PRICE } from "@/util/constants.ts";
import { useLocalStorage } from "@/hooks/useLocalStorage.ts";
import { defaultCalculationValues } from "@/features/PriceCalculator/types/constants.ts";

export const useCalcValues = (storageKey: "total" | "case-price" | "amount") => {
    const { setItem, getItem } = useLocalStorage();

    const [calculationValues, setCalculationValues] = useState<CalculationValues>(
        getItem(storageKey) ?? defaultCalculationValues,
    );

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setCalculationValues((prevState) => {
            const newValues = {
                ...prevState,
                [e.target.name]: e.target.valueAsNumber,
            };
            setItem(storageKey, newValues);
            return newValues;
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

    return {
        calculationValues,
        handleChange,
        getCasePrice,
        getNumberOfCases,
        getNeededBankroll,
    };
};
