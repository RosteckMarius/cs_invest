import { MdPaid, MdPriceChange, MdSavings } from "react-icons/md";
import { FeatureBlock } from "@/features/Landing/FeatureBlock.tsx";
import { useTranslation } from "react-i18next";

export function Landing() {
    const { t } = useTranslation();
    return (
        <div className={"flex flex-col items-center gap-2 pb-8 text-center"}>
            <div className={"pb-12 text-2xl font-bold md:w-2/3"}>{t("landing.welcome")}</div>
            <div className={"flex flex-col gap-6"}>
                <FeatureBlock text={t("landing.feat1")} icon={<MdSavings />} iconFirst />
                <FeatureBlock text={t("landing.feat2")} icon={<MdPaid />} />
                <FeatureBlock text={t("landing.feat3")} icon={<MdPriceChange />} iconFirst />
            </div>
        </div>
    );
}
