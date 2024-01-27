export const getCaseOpeningResults = async (numberOfCases: number) => {
    return fetch(`http://localhost:8080/api/v1/skin-case?numberOfCases=${numberOfCases}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
};
