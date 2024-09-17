import { useEffect, useState } from "react";
import { MarkDownReader } from "@/components/MarkDown/MarkDownReader.tsx";
import { useTranslation } from "react-i18next";

export function PrivacyPolicy() {
    const { t } = useTranslation();
    const [markdownText, setMarkDownText] = useState("");
    useEffect(() => {
        fetch("../../../public/privacy-policy.md").then((res) =>
            res.text().then((res) => setMarkDownText(res)),
        );
    }, []);

    return (
        <div>
            <h1 className={"mb-4 text-4xl"}>{t("privacyPolicy.header")}</h1>
            <MarkDownReader markdown={markdownText}></MarkDownReader>
        </div>
    );
}
