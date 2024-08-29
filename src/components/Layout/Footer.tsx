import { useTranslation } from "react-i18next";
import { CONTACT_EMAIL } from "@/util/constants.ts";

export function Footer() {
    const { t } = useTranslation();
    return (
        <div className={"w-full border-t-2 py-4"}>
            <div className={"flex justify-center"}>
                {t("footer.contact", { email: CONTACT_EMAIL })}
            </div>
        </div>
    );
}
