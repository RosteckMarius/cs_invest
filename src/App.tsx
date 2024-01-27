import "@/App.css";
import { Landing } from "@/features/Landing/Landing.tsx";
import { Route, Routes } from "react-router-dom";
import { Login } from "@/features/Authentication/Login.tsx";
import {
    ABOUT_US_ROUTE,
    CONTACT_ROUTE,
    FAQ_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
} from "@/routes/public.tsx";
import { Registration } from "@/features/Authentication/Registration.tsx";
import { PriceCalculator } from "@/features/PriceCalculator/PriceCalculator.tsx";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext.tsx";
import { Layout } from "@/components/Layout/Layout.tsx";
import {
    ADVANCED_PRICE_CALCULATOR_ROUTE,
    CASE_OPENING_ROUTE,
    PRICE_CALCULATOR_ROUTE,
} from "@/routes/private.tsx";
import { AdvancedRarity } from "@/features/AdvancedRarity/AdvancedRarity.tsx";
import { CaseOpeningView } from "@/features/CaseOpening/CaseOpeningView.tsx";
import { Contact } from "@/features/Footer/components/Contact.tsx";
import { About } from "@/features/Footer/components/About.tsx";
import { FAQ } from "@/features/Footer/components/Faq.tsx";

export function App() {
    const { user } = useContext(UserContext);

    const authOnlyRoutes = (
        <>
            <Route path={LOGIN_ROUTE} element={<Login />} />
            <Route path={PRICE_CALCULATOR_ROUTE} element={<PriceCalculator />} />
            <Route path={CASE_OPENING_ROUTE} element={<CaseOpeningView />} />
            <Route path={ADVANCED_PRICE_CALCULATOR_ROUTE} element={<AdvancedRarity />} />
            <Route path={REGISTRATION_ROUTE} element={<Registration />} />
            <Route path="*" element={<h1>No Match</h1>} />
        </>
    );

    const alwaysAvailableRoutes = (
        <>
            <Route path={"/"} element={<Landing />} />
            <Route path={CONTACT_ROUTE} element={<Contact />} />
            <Route path={ABOUT_US_ROUTE} element={<About />} />
            <Route path={FAQ_ROUTE} element={<FAQ />} />
        </>
    );

    const noAuthOnlyRoutes = (
        <>
            <Route path={LOGIN_ROUTE} element={<Login />} />
            <Route path={REGISTRATION_ROUTE} element={<Registration />} />
            <Route path="*" element={<Login />} />
        </>
    );

    return (
        <Layout>
            <Routes>
                {alwaysAvailableRoutes}
                {user ? authOnlyRoutes : noAuthOnlyRoutes}
            </Routes>
        </Layout>
    );
}
