import { openCase, rarityColor, RarityKey } from "@/features/Rarity/types/constants.ts";
import { Button } from "@/components/Element/Button.tsx";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/Element/Badge.tsx";
import { countRarities } from "@/features/Rarity/util.ts";
import React, { useState } from "react";
import { Spinner } from "@/components/Element/Spinner.tsx";
import { Card } from "@/components/Element/Card.tsx";
import { CASE_OPNENING_DELAY } from "@/util/constants.ts";

interface CaseDrawProps {
    amount: number;
}

export function CaseDraw(props: CaseDrawProps) {
    const { t } = useTranslation();
    const [reroll, setReroll] = useState(false);
    const [loading, setLoading] = useState(false);

    const [openingResults, setOpeningResults] = useState<RarityKey[]>([]);

    const newOpening = () => {
        const results = Array(props.amount || 0)
            .fill("0")
            .map(() => openCase(Math.random()));
        setOpeningResults(results);
    };

    const rarityCounts: { [key in RarityKey]: number } = countRarities(openingResults);

    const renderTiles = () => {
        return openingResults.map((e, i) => {
            return (
                <div
                    key={i}
                    style={{ background: rarityColor[e] }}
                    className={"h-fit w-fit border border-secondary p-2"}
                >
                    {" "}
                </div>
            );
        });
    };

    const onOpen = () => {
        newOpening();
        setLoading(true);
        setTimeout(() => {
            setReroll((prevState) => !prevState);
            setLoading(false);
        }, CASE_OPNENING_DELAY);
    };

    return (
        <div className={"flex flex-col gap-6"}>
            <Card
                className={
                    "flex min-h-[460px] w-full items-center justify-center border-2 p-2 md:min-h-[160px]"
                }
            >
                <div className={"flex  h-full w-full flex-wrap items-center justify-center"}>
                    {loading ? <Spinner /> : renderTiles().slice(0, props.amount)}
                </div>
            </Card>
            <div className={"flex flex-col items-center justify-center gap-12 md:justify-between"}>
                <Button onClick={onOpen}>{t("common.open").toUpperCase()}</Button>
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
