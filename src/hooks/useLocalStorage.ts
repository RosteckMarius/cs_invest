export function useLocalStorage() {
    /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
    function setItem(key: LocalStorageKey, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    function getItem(key: LocalStorageKey) {
        return JSON.parse(localStorage.getItem(key));
    }

    return { setItem, getItem };
}

export type LocalStorageKey = "TOTAL_CALC" | "NUMBER_OF_CASES_CALC" | "CASE_PRICE_CALC";
