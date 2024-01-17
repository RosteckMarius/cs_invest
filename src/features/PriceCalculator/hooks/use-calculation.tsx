import { ChangeEvent, useState } from "react";
import { CalculationValues } from "@/features/PriceCalculator/types/types.ts";
import { LocalStorageKey, useLocalStorage } from "@/hooks/useLocalStorage.ts";
import { KEY_PRICE } from "@/util/constants.ts";
import { getDefaultCalcValues } from "@/features/PriceCalculator/types/constants.ts";

export const useCalculation = (key: LocalStorageKey) => {
    const { setItem, getItem } = useLocalStorage();
    const [calcValues, setCalcValues] = useState<Partial<CalculationValues>>(
        getItem(key) ?? getDefaultCalcValues(key),
    );

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setCalcValues((prevState) => {
            const newValues = {
                ...prevState,
                [e.target.name]: e.target.valueAsNumber,
            };
            setItem(key, newValues);
            return newValues;
        });
    }

    const result = () => {
        const { casePrice, numberOfCases, bankroll } = calcValues;

        if (key === "TOTAL_CALC") {
            return numberOfCases * (casePrice + KEY_PRICE);
        }
        if (key === "NUMBER_OF_CASES_CALC") {
            return Math.floor(bankroll / (casePrice + KEY_PRICE));
        }
        if (key === "CASE_PRICE_CALC") {
            return (bankroll - numberOfCases * KEY_PRICE) / numberOfCases;
        }
    };

    return {
        calcValues,
        handleChange,
        result: result(),
    };
};
