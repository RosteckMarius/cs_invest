import { useTranslation } from "react-i18next";
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
                <Link className={buttonVariants({ variant: "link" })} to={"/legal-notice"}>
                    {t("footer.impressum")}
                </Link>
            </div>
        </div>
    );
}
