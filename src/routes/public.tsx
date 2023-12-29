import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout/Layout.tsx";
import App from "../App.tsx";
import { PriceCalculator } from "../features/price-calculator/price-calculator.tsx";
import { ErrorPage } from "../components/error-page.tsx";
import React from "react";
import Contact from "../features/footer/components/contact.tsx";
import About from "../features/footer/components/about.tsx";
import FAQ from "../features/footer/components/faq.tsx";

const PRICE_CALCULATOR_ROUTE = "/price-calculator";
const CONTACT_ROUTE = "/contact";
const ABOUT_US_ROUTE = "/about";
const FAQ_ROUTE = "/faq";
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
                path: CONTACT_ROUTE,
                element: <Contact />,
            },
            {
                path: ABOUT_US_ROUTE,
                element: <About />,
            },
            {
                path: FAQ_ROUTE,
                element: <FAQ />,
            },
        ],
        errorElement: <ErrorPage />,
    },
]);

export {
    router,
    PRICE_CALCULATOR_ROUTE,
    TEST_ROUTE,
    CONTACT_ROUTE,
    ABOUT_US_ROUTE,
    FAQ_ROUTE,
};
