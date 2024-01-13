import { MdPaid, MdPercent, MdPriceChange, MdSavings, MdStar } from "react-icons/md";
import { FeatureBlock } from "@/features/Landing/FeatureBlock.tsx";
import { useTranslation } from "react-i18next";

export function Landing() {
    const { t } = useTranslation();
    return (
        <div className={"flex flex-col items-center gap-4 p-8 text-center md:gap-16"}>
            <div className={"flex flex-col items-center gap-4"}>
                <div className={"pb-4 text-2xl font-bold md:w-2/3 md:text-5xl"}>
                    {t("landing.title").toUpperCase()}
                </div>
                <div className={"pb-12 text-xl font-bold md:w-2/3"}>{t("landing.desc")}</div>
            </div>
            <div className={"flex flex-col gap-16"}>
                <FeatureBlock text={t("landing.feat4")} icon={<MdPercent />} iconFirst />
                <FeatureBlock text={t("landing.feat5")} icon={<MdStar />} />
                <FeatureBlock text={t("landing.feat1")} icon={<MdSavings />} iconFirst />
                <FeatureBlock text={t("landing.feat2")} icon={<MdPaid />} />
                <FeatureBlock text={t("landing.feat3")} icon={<MdPriceChange />} iconFirst />
            </div>
        </div>
    );
}
