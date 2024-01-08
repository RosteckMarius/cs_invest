import { useTranslation } from "react-i18next";

export function FAQ() {
    const { t } = useTranslation();

    return <div>{t("faq")}</div>;
}
