import { Link } from "react-router-dom";
import { ABOUT_US_ROUTE, CONTACT_ROUTE, FAQ_ROUTE } from "@/routes/public.tsx";
import { useTranslation } from "react-i18next";

export function Footer() {
    const { t } = useTranslation();
    return (
        <div className={"w-full border-t-2  py-4"}>
            <div className={"flex justify-center gap-4"}>
                <Link to={CONTACT_ROUTE}>
                    <span>{t("footer.contact")}</span>
                </Link>
                <Link to={ABOUT_US_ROUTE}>
                    <span>{t("footer.about")}</span>
                </Link>
                <Link to={FAQ_ROUTE}>
                    <span>{t("footer.faq")}</span>
                </Link>
            </div>
        </div>
    );
}
