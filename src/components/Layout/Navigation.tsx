import { MdAttachMoney } from "react-icons/md";
import React from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils.ts";
import { Settings } from "@/features/Settings/Settings.tsx";
import { Link } from "@tanstack/react-router";
import { CASE_OPENING_ROUTE, HOME_ROUTE, PRICE_CALCULATOR_ROUTE } from "@/util/constants.ts";

export function Navigation() {
    const { t } = useTranslation();

    return (
        <div
            className={
                "flex w-full items-center gap-2 overflow-auto border-b-2 px-4 py-4 md:justify-center"
            }
        >
            <div className={"md:absolute md:left-4"}>
                <Link to={"/"}>
                    <div className={"flex items-center text-4xl "}>
                        <MdAttachMoney />
                        {t("app.name").toUpperCase()}
                    </div>
                </Link>
            </div>

            <NavItem name={t("navi.home")} to={HOME_ROUTE} />
            <NavItem name={t("navi.chance")} to={CASE_OPENING_ROUTE} />
            <NavItem name={t("navi.calc")} to={PRICE_CALCULATOR_ROUTE} />

            <div className={"flex items-center gap-2 md:absolute md:right-4"}>
                <Settings />
            </div>
        </div>
    );
}

interface NavItemProps {
    name: string;
    to: string;
}

function NavItem({ name, to }: NavItemProps) {
    const isActiveItem = location.pathname === to;
    return (
        <Link
            to={to}
            className={cn("rounded p-2 hover:bg-gray-700", {
                "underline underline-offset-4": isActiveItem,
            })}
        >
            <span className={"text-2xl"}>{name}</span>
        </Link>
    );
}

0;
