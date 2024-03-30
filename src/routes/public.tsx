import { CASE_OPENING_ROUTE, PRICE_CALCULATOR_ROUTE } from "@/routes/private.tsx";

export const HOME_ROUTE = "/";
export const CONTACT_ROUTE = "/contact";
export const ABOUT_US_ROUTE = "/about";
export const FAQ_ROUTE = "/faq";

export const publicNavigationItems: { route: string; label: string }[] = [
    { route: HOME_ROUTE, label: "navi.home" },
    { route: CASE_OPENING_ROUTE, label: "navi.chance" },
    { route: PRICE_CALCULATOR_ROUTE, label: "navi.calc" },
];
