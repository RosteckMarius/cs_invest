import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { PRICE_CALCULATOR_ROUTE, RARITY_ROUTE } from "@/routes/public.tsx";
import { MdAttachMoney } from "react-icons/md";
import React from "react";
import { LanguageSwitcher } from "@/lib/i18next/LanguageSwitcher.tsx";
import { useTranslation } from "react-i18next";

export function Navigation() {
    const { t } = useTranslation();
    return (
        <div
            className={
                "flex w-full items-center gap-2 overflow-auto border-b-2 px-4 py-4 md:justify-center"
            }
        >
            <div className={"flex items-center gap-2 text-4xl md:absolute md:left-4"}>
                <MdAttachMoney />
                <span className={"whitespace-nowrap text-2xl font-bold"}>{t("app.name")}</span>
            </div>
            <NavItem name={t("navi.home")} to={"/"} />
            <NavItem name={t("navi.chance")} to={RARITY_ROUTE} />
            <NavItem name={t("navi.calc")} to={PRICE_CALCULATOR_ROUTE} />
            <div className={"flex items-center gap-2 md:absolute md:right-4"}>
                <LanguageSwitcher />
            </div>
        </div>
    );
}

interface NavItemProps {
    name: string;
    to: string;
}

function NavItem(props: NavItemProps) {
    const location = useLocation();
    const isActiveItem = location.pathname === props.to;
    return (
        <Link
            to={props.to}
            className={classNames("rounded p-2 hover:bg-gray-700", {
                "underline  underline-offset-4": isActiveItem,
            })}
        >
            <span className={"text-2xl"}>{props.name}</span>
        </Link>
    );
}
