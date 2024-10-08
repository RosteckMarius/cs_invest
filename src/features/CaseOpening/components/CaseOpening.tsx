import { Button } from "@/components/ui/Button.tsx";
import React, { useState } from "react";
import { Spinner } from "@/components/ui/Spinner.tsx";
import { Card } from "@/components/ui/Card.tsx";
import { CASE_OPENING_DELAY } from "@/util/constants.ts";
import {
    emptyOpeningResults,
    getCaseOpeningResultsFE,
    OpeningResults,
    rarityColor,
} from "@/features/CaseOpening/types/constants.ts";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/Badge.tsx";

interface CaseDrawProps {
    numberOfCases: number;
}

export function CaseOpening(props: CaseDrawProps) {
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);

    const [openingResults, setOpeningResults] = useState<OpeningResults>(emptyOpeningResults);

    const drawCases = () => {
        setOpeningResults(getCaseOpeningResultsFE(props.numberOfCases));
    };

    const renderTiles = () => {
        return openingResults.results.map((e, i) => {
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
        setLoading(true);
        drawCases();
        setTimeout(() => {
            setLoading(false);
        }, CASE_OPENING_DELAY);
    };

    return (
        <div className={"flex flex-col gap-6"}>
            <Card
                className={
                    "flex min-h-[460px] w-full items-center justify-center border-2 p-2 md:min-h-[160px]"
                }
            >
                <div className={"flex  h-full w-full flex-wrap items-center justify-center"}>
                    {loading ? <Spinner /> : renderTiles().slice(0, props.numberOfCases)}
                </div>
            </Card>
            <div className={"flex flex-col items-center justify-center gap-12 md:justify-between"}>
                <Button onClick={onOpen}>{t("common.open").toUpperCase()}</Button>
                <div className={"flex flex-col flex-wrap gap-4 md:flex-row"}>
                    {Object.entries(openingResults.counts).map((val, i) => (
                        <div className={"flex w-full justify-between gap-2 md:w-fit"} key={i}>
                            <div className={"rounded px-1"}>{t(`rarity.type.${val.at(0)}`)}</div>
                            <Badge
                                className={"min-w-[50px]"}
                                style={{ background: rarityColor[val.at(0)] }}
                            >
                                {val.at(1)}
                            </Badge>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
