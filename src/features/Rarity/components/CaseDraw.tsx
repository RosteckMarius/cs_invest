import { openCase, rarityColor, RarityKey } from "@/features/Rarity/types/constants.ts";
import { Button } from "@/components/Element/Button.tsx";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/Element/Badge.tsx";
import { countRarities } from "@/features/Rarity/util.ts";

interface CaseDrawProps {
    amount: number;

    reroll(): void;
}

export function CaseDraw(props: CaseDrawProps) {
    const { t } = useTranslation();
    const caseOpeningResults = Array(props.amount)
        .fill("0")
        .map(() => openCase(Math.random()));

    const rarityCounts: { [key in RarityKey]: number } = countRarities(caseOpeningResults);

    const tiles = caseOpeningResults.map((e, i) => {
        return (
            <div
                key={i}
                style={{ background: rarityColor[e] }}
                className={"border-secondary h-fit w-fit border p-2"}
            >
                {" "}
            </div>
        );
    });

    return (
        <div>
            <div className={"flex min-h-[460px]  md:min-h-[160px]"}>
                <div className={"flex h-fit flex-wrap pb-8 "}>{tiles}</div>
            </div>
            <div className={"flex flex-col items-center justify-center gap-12 md:justify-between"}>
                <Button onClick={props.reroll}>{t("common.open").toUpperCase()}</Button>
                <div className={"flex flex-col flex-wrap gap-4 md:flex-row"}>
                    {Object.entries(rarityCounts).map((val, i) => (
                        <div className={"flex w-full justify-between gap-2 md:w-fit"} key={i}>
                            <div className={"rounded px-1"}>{t(`rarity.type.${val[0]}`)}</div>
                            <Badge
                                className={"min-w-[40px]"}
                                style={{ background: rarityColor[val[0]] }}
                            >
                                {val[1]}
                            </Badge>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
