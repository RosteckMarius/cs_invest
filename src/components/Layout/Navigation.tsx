import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { PRICE_CALCULATOR_ROUTE } from "@/routes/public.tsx";
import { MdAttachMoney } from "react-icons/md";
import React from "react";

export function Navigation() {
    return (
        <div className={"flex items-center justify-center gap-2 overflow-auto border-b-2 py-4"}>
            <div className={"absolute left-4 flex items-center gap-2 text-4xl"}>
                <MdAttachMoney />
                <span className={"text-2xl font-bold"}>CS INVEST</span>
            </div>
            <NavItem name={"Home"} to={"/"} />
            <NavItem name={"Calculator"} to={PRICE_CALCULATOR_ROUTE} />
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
