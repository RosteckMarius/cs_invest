import { Outlet, useLocation } from "react-router-dom";
import { FloatingBackButton } from "./FloatingBackButton.tsx";
import { Footer } from "./Footer.tsx";

export function Layout() {
    const location = useLocation();
    const backButtonVisible = location.pathname !== "/";
    return (
        <div className={"flex min-h-screen flex-col"}>
            {backButtonVisible && <FloatingBackButton />}
            <div
                className={
                    "flex flex-grow flex-col items-center justify-center p-4"
                }
            >
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
