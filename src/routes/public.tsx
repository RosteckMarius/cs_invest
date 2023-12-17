import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout/Layout.tsx";
import App from "../App.tsx";
import { PriceCalculator } from "../features/price-calculator/price-calculator.tsx";
import { ErrorPage } from "../components/error-page.tsx";
import React from "react";

const PRICE_CALCULATOR_ROUTE = "/price-calculator";
const TEST_ROUTE = "/test";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <App />,
            },
            {
                path: PRICE_CALCULATOR_ROUTE,
                element: <PriceCalculator />,
            },
            {
                path: TEST_ROUTE,
                element: <h1>TEST</h1>,
            },
        ],
        errorElement: <ErrorPage />,
    },
]);

export { PRICE_CALCULATOR_ROUTE, router, TEST_ROUTE };
