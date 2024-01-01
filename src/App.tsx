import "@/App.css";
import { Divider } from "@/components/Element/Divider.tsx";

export function App() {
    return (
        <>
            <div className={"flex flex-col gap-2 pb-8 text-center"}>
                <h1>CS INVEST</h1>
                <Divider />
                <span className={"text-lg"}>WELCOME</span>
            </div>
        </>
    );
}
