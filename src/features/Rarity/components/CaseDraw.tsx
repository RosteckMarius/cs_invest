import { openCase, rarityColor, RarityType } from "@/features/Rarity/types/constants.ts";
import { Button } from "@/components/Element/Button.tsx";

interface CaseDrawProps {
    amount: number;

    reroll(): void;
}

export function CaseDraw(props: CaseDrawProps) {
    const caseOpeningResults = Array(props.amount)
        .fill("0")
        .map(() => openCase(Math.random()));

    const rarityCounts: { [key in RarityType]: number } = caseOpeningResults.reduce(
        (counts, rarity) => {
            counts[rarity] = counts[rarity] + 1;
            return counts;
        },
        {
            MIL_SPEC_GRADE: 0,
            RESTRICTED: 0,
            CLASSIFIED: 0,
            COVERT: 0,
            EXCEEDINGLY_RARE: 0,
        },
    );

    const tiles = caseOpeningResults.map((e, i) => {
        return (
            <div
                key={i}
                style={{ background: rarityColor[e] }}
                className={" border border-gray-800 p-2"}
            >
                {" "}
            </div>
        );
    });

    return (
        <div>
            <div className={"flex flex-wrap pb-8"}>{tiles}</div>
            <div className={"flex flex-col items-center justify-center gap-8 md:justify-between"}>
                <div className={"flex flex-col flex-wrap gap-4 md:flex-row"}>
                    {Object.entries(rarityCounts).map((val, i) => (
                        <div className={"flex w-full justify-between  md:w-fit"} key={i}>
                            <div className={"rounded px-1"}>{val[0]}</div>
                            <div
                                style={{ background: rarityColor[val[0]] }}
                                className={"min-w-[40px] rounded px-1 text-center"}
                            >
                                {val[1]}
                            </div>
                        </div>
                    ))}
                </div>
                <Button className={"whitespace-nowrap bg-gray-600 px-8"} onClick={props.reroll}>
                    OPEN
                </Button>
            </div>
        </div>
    );
}
