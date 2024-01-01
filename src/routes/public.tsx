import { createBrowserRouter } from "react-router-dom";
import React from "react";
import { Contact } from "@/features/footer/components/Contact.tsx";
import { About } from "@/features/footer/components/About.tsx";
import { FAQ } from "@/features/footer/components/Faq.tsx";
import { Layout } from "@/components/Layout/Layout.tsx";
import { PriceCalculator } from "@/features/price-calculator/PriceCalculator.tsx";
import { ErrorPage } from "@/components/ErrorPage.tsx";
import { App } from "@/App.tsx";

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
