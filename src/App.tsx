import "./App.css";
import { Divider } from "./components/Element/Divider.tsx";
import { Menu } from "./components/Layout/Menu.tsx";

function App() {
    return (
        <>
            <div className={"flex flex-col gap-2 pb-8 text-center"}>
                <h1 className={"text-3xl"}>CS INVEST</h1>
                <Divider />
                <p>WELCOME</p>
            </div>
            <Menu />
        </>
    );
}

export default App;
