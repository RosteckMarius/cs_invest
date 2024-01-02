export function useLocalStorage() {
    /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
    function setItem(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    function getItem(key: string) {
        return JSON.parse(localStorage.getItem(key));
    }

    return { setItem, getItem };
}
