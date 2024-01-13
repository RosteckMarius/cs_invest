import { Outlet } from "react-router-dom";
import { Navigation } from "@/components/Layout/Navigation.tsx";
import { Footer } from "@/components/Layout/Footer.tsx";

export function Layout() {
    return (
        <div className={"flex min-h-screen flex-col items-center justify-center"}>
            <div className={"bg-background sticky top-0 w-full"}>
                <Navigation />
            </div>
            <div
                className={
                    "flex w-full max-w-[1280px] flex-grow flex-col items-center justify-center px-4 py-8"
                }
            >
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
