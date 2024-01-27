import { Link, useLocation, useNavigate } from "react-router-dom";
import { HOME_ROUTE, publicNavigationItems } from "@/routes/public.tsx";
import { MdAttachMoney } from "react-icons/md";
import React, { useContext } from "react";
import { LanguageSwitcher } from "@/lib/i18next/LanguageSwitcher.tsx";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils.ts";
import { privateNavigationItems } from "@/routes/private.tsx";
import { UserContext } from "@/context/UserContext.tsx";
import { Button } from "@/components/Element/Button.tsx";

export function Navigation() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { user, logout } = useContext(UserContext);
    const navItems = () => {
        const availableRoutes = user ? privateNavigationItems : publicNavigationItems;
        return availableRoutes.map((item) => (
            <NavItem key={item.label} name={item.label} to={item.route} />
        ));
    };

    return (
        <div
            className={
                "flex w-full items-center gap-2 overflow-auto border-b-2 px-4 py-4 md:justify-center"
            }
        >
            <div className={"flex items-center gap-2 text-4xl md:absolute md:left-4"}>
                <MdAttachMoney />
                <span
                    onClick={() => navigate(HOME_ROUTE)}
                    className={"whitespace-nowrap text-2xl font-bold"}
                >
                    {t("app.name")}
                </span>
            </div>
            {navItems()}
            <div className={"flex items-center gap-2 md:absolute md:right-4"}>
                <LanguageSwitcher />
                {user && (
                    <Button variant={"outline"} onClick={logout}>
                        {t("auth.logout")}
                    </Button>
                )}
            </div>
        </div>
    );
}

interface NavItemProps {
    name: string;
    to: string;
}

function NavItem(props: NavItemProps) {
    const { t } = useTranslation();
    const location = useLocation();
    const isActiveItem = location.pathname === props.to;
    return (
        <Link
            to={props.to}
            className={cn("rounded p-2 hover:bg-gray-700", {
                "underline underline-offset-4": isActiveItem,
            })}
        >
            <span className={"text-2xl"}>{t(props.name)}</span>
        </Link>
    );
}
