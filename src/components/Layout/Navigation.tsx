import { Link, useLocation } from "react-router-dom";
import * as classNames from "classnames";
import { PRICE_CALCULATOR_ROUTE } from "../../routes/public.tsx";

export default function Navigation() {
    return (
        <div
            className={
                "flex justify-center gap-2 overflow-auto border-b-2 py-4"
            }
        >
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
                "bg-gray-700": isActiveItem,
            })}
        >
            {props.name}
        </Link>
    );
}
