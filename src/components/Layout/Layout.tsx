import { Outlet, useLocation } from "react-router-dom";
import { FloatingBackButton } from "./FloatingBackButton.tsx";
import { Footer } from "./Footer.tsx";

export function Layout() {
    const location = useLocation();
    const backButtonVisible = location.pathname !== "/";
    return (
        <div>
            {backButtonVisible && <FloatingBackButton />}
            <Outlet />
            <Footer></Footer>
        </div>
    );
}
