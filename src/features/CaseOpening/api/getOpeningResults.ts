import { axiosAuth } from "@/lib/axios.ts";

export const getCaseOpeningResults = async (numberOfCases: number): Promise<OpeningResults> => {
    return axiosAuth
        .get(`/api/v1/skin-case?numberOfCases=${numberOfCases}`)
        .then((res) => res.data);
};

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
