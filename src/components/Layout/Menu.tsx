import { MenuTile } from "../MenuTile.tsx";
import { PRICE_CALCULATOR_ROUTE, TEST_ROUTE } from "../../routes/public.tsx";

export function Menu() {
    return (
        <div className={"grid grid-cols-2 gap-2"}>
            <MenuTile label={"case prices"} to={PRICE_CALCULATOR_ROUTE} />
            <MenuTile label={"Test page"} to={TEST_ROUTE} />
        </div>
    );
}
