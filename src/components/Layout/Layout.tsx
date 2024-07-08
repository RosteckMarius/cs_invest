import { Navigation } from "@/components/Layout/Navigation.tsx";
import { Footer } from "@/components/Layout/Footer.tsx";
import React from "react";

export function Layout(props: { children: React.ReactElement }) {
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
                {props.children}
            </div>
            <Footer />
        </div>
    );
}
