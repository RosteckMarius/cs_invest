import { Outlet, useLocation } from "react-router-dom";
import { FloatingBackButton } from "./FloatingBackButton.tsx";

export function Layout() {
    const location = useLocation();
    const backButtonVisible = location.pathname !== "/";
    return (
        <>
            {backButtonVisible && <FloatingBackButton />}
            <Outlet />
        </>
    );
}
