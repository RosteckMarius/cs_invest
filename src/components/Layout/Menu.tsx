import { MenuTile } from "../MenuTile.tsx";
import { PRICE_CALCULATOR_ROUTE } from "../../routes/public.tsx";

export function Menu() {
    return (
        <div className={"grid grid-flow-col gap-2"}>
            <MenuTile label={"case prices"} to={PRICE_CALCULATOR_ROUTE} />
        </div>
    );
}
