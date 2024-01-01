import { Outlet } from "react-router-dom";
import { Navigation } from "@/components/Layout/Navigation.tsx";
import { Footer } from "@/components/Layout/Footer.tsx";

export function Layout() {
    return (
        <div className={"flex min-h-screen flex-col"}>
            <Navigation />
            <div className={"flex flex-grow flex-col items-center justify-center px-4 py-8"}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
