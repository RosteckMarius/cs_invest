import "@/App.css";
import { Landing } from "@/features/Landing/Landing.tsx";
import { Route, Routes } from "react-router-dom";
import { ABOUT_US_ROUTE, CONTACT_ROUTE, FAQ_ROUTE } from "@/routes/public.tsx";
import { PriceCalculator } from "@/features/PriceCalculator/PriceCalculator.tsx";
import { Layout } from "@/components/Layout/Layout.tsx";
import { CASE_OPENING_ROUTE, PRICE_CALCULATOR_ROUTE } from "@/routes/private.tsx";
import { CaseOpeningView } from "@/features/CaseOpening/CaseOpeningView.tsx";
import { Contact } from "@/features/Footer/components/Contact.tsx";
import { About } from "@/features/Footer/components/About.tsx";
import { FAQ } from "@/features/Footer/components/Faq.tsx";
import React from "react";

export function App() {
    return (
        <Layout>
            <Routes>
                <Route path={"/"} element={<Landing />} />
                <Route path={CONTACT_ROUTE} element={<Contact />} />
                <Route path={ABOUT_US_ROUTE} element={<About />} />
                <Route path={PRICE_CALCULATOR_ROUTE} element={<PriceCalculator />} />
                <Route path={CASE_OPENING_ROUTE} element={<CaseOpeningView />} />
                <Route path={FAQ_ROUTE} element={<FAQ />} />
            </Routes>
        </Layout>
    );
}
