import { createBrowserRouter } from "react-router-dom";
import React from "react";
import { Contact } from "@/features/Footer/components/Contact.tsx";
import { About } from "@/features/Footer/components/About.tsx";
import { FAQ } from "@/features/Footer/components/Faq.tsx";
import { Layout } from "@/components/Layout/Layout.tsx";
import { PriceCalculator } from "@/features/PriceCalculator/PriceCalculator.tsx";
import { ErrorPage } from "@/components/ErrorPage.tsx";
import { App } from "@/App.tsx";
import { RarityInfo } from "@/features/Rarity/RarityInfo.tsx";
import { AdvancedRarity } from "@/features/AdvancedRarity/AdvancedRarity.tsx";

const PRICE_CALCULATOR_ROUTE = "/price-calculator";
const ADVANCED_PRICE_CALCULATOR_ROUTE = "/price-calculator-advanced";
const RARITY_ROUTE = "/rarity";
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
                path: ADVANCED_PRICE_CALCULATOR_ROUTE,
                element: <AdvancedRarity />,
            },
            {
                path: RARITY_ROUTE,
                element: <RarityInfo />,
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
    RARITY_ROUTE,
    ADVANCED_PRICE_CALCULATOR_ROUTE,
};
