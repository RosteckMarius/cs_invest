import { Navigation } from "@/components/Layout/Navigation.tsx";
import { Footer } from "@/components/Layout/Footer.tsx";
import React from "react";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Toaster } from "@/components/ui/toaster.tsx";

export function Layout() {
    return (
        <div className={"flex min-h-screen flex-col items-center justify-center"}>
            <div className={"sticky top-0 w-full bg-background"}>
                <Navigation />
            </div>
            <div
                className={
                    "flex w-full max-w-[1280px] flex-grow flex-col items-center justify-center px-4 py-8"
                }
            >
                <Outlet />
                <Toaster />
                <TanStackRouterDevtools />
            </div>
            <Footer />
        </div>
    );
}
