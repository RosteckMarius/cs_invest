import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import "./lib/i18next/i18n.ts";
import UserContextProvider from "@/context/UserContext.tsx";
import { App } from "@/App.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <UserContextProvider>
            <BrowserRouter>
                <App></App>
            </BrowserRouter>
        </UserContextProvider>
    </React.StrictMode>,
);
