import { Button } from "@/components/Element/Button.tsx";
import React, { useState } from "react";
import { Spinner } from "@/components/Element/Spinner.tsx";
import { Card } from "@/components/Element/Card.tsx";
import { CASE_OPNENING_DELAY } from "@/util/constants.ts";
import {
    emptyOpeningResults,
    getCaseOpeningResults,
    OpeningResults,
} from "@/features/CaseOpening/api/getOpeningResults.ts";
import { rarityColor } from "@/features/CaseOpening/types/constants.ts";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/Element/Badge.tsx";

interface CaseDrawProps {
    numberOfCases: number;
}

export function CaseOpening(props: CaseDrawProps) {
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);

    const [openingResults, setOpeningResults] = useState<OpeningResults>(emptyOpeningResults);

    const newOpening = () => {
        getCaseOpeningResults(props.numberOfCases).then((results) => setOpeningResults(results));
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
        newOpening();
        setTimeout(() => {
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
                                className={"min-w-[40px]"}
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
