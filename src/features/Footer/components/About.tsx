import { useTranslation } from "react-i18next";

export function About() {
    const { t } = useTranslation();
    return <div>{t("about")}</div>;
}
