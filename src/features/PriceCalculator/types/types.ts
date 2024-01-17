type CalculationValues = {
    numberOfCases: number;
    casePrice: number;
    bankroll: number;
};

type TotalOperands = Omit<CalculationValues, "bankroll">;
type CasePriceOperands = Omit<CalculationValues, "casePrice">;
type NumberOfCasesOperands = Omit<CalculationValues, "numberOfCases">;

export type { CalculationValues, TotalOperands, CasePriceOperands, NumberOfCasesOperands };
