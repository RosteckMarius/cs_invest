import { Link } from "react-router-dom";
import { ABOUT_US_ROUTE, CONTACT_ROUTE, FAQ_ROUTE } from "@/routes/public.tsx";

export function Footer() {
    return (
        <div className={"w-full border-t-2  py-4"}>
            <div className={"flex justify-center gap-4"}>
                <Link to={CONTACT_ROUTE}>
                    <span>Contact</span>
                </Link>
                <Link to={ABOUT_US_ROUTE}>
                    <span>About Us</span>
                </Link>
                <Link to={FAQ_ROUTE}>
                    <span>FAQs</span>
                </Link>
            </div>
        </div>
    );
}
