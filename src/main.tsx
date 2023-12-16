import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import { ErrorPage } from "./components/error-page.tsx";
import { PriceCalculator } from "./features/price-calculator/price-calculator.tsx";

export const PRICE_CALCULATOR_ROUTE = "/price-calculator";
export const TEST_ROUTE = "/test";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: PRICE_CALCULATOR_ROUTE,
        element: <PriceCalculator />,
    },
    {
        path: TEST_ROUTE,
        element: <h1>TEST</h1>,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
