import { Link } from "react-router-dom";

interface MenuTileProps {
    label: string;
    to: string;
}

export function MenuTile(props: MenuTileProps) {
    return (
        <Link
            className={
                "w-full rounded bg-gray-600 px-4 py-8 text-center text-white hover:text-yellow-200"
            }
            to={props.to}
        >
            <span className={"text-lg"}>{props.label.toUpperCase()}</span>
        </Link>
    );
}
