import { useTranslation } from "react-i18next";
import { CONTACT_EMAIL } from "@/util/constants.ts";
import { Link } from "@tanstack/react-router";
import { buttonVariants } from "@/components/ui/Button.tsx";

export function Footer() {
    const { t } = useTranslation();
    return (
        <div className={"w-full border-t-2 py-4"}>
            <div className={"flex items-center justify-center"}>
                <Link className={buttonVariants({ variant: "link" })} to={"/privacy-policy"}>
                    {t("footer.privacy")}
                </Link>
                {t("footer.contact", { email: CONTACT_EMAIL })}
            </div>
        </div>
    );
}
