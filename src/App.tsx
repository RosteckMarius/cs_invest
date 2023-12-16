import { PRICE_CALCULATOR_ROUTE, TEST_ROUTE } from "./main.tsx";
import "./App.css";
import { MenuTile } from "./components/MenuTile.tsx";
import { Divider } from "./components/Divider.tsx";

function App() {
    return (
        <>
            <div className={"flex flex-col gap-2 pb-8 text-center"}>
                <h1 className={"text-3xl"}>CS INVEST</h1>
                <Divider></Divider>
                <p>WELCOME TO CS INVEST</p>
            </div>

            <div className={"grid grid-cols-2 gap-2"}>
                <MenuTile label={"case prices"} to={PRICE_CALCULATOR_ROUTE} />
                <MenuTile label={"Test page"} to={TEST_ROUTE} />
            </div>
        </>
    );
}

export default App;
