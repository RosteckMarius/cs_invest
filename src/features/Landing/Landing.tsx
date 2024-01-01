import { MdPaid, MdPriceChange, MdSavings } from "react-icons/md";
import { FeatureBlock } from "@/features/Landing/FeatureBlock.tsx";

export function Landing() {
    return (
        <div className={"flex flex-col items-center gap-2 pb-8 text-center"}>
            <div className={"pb-12 text-2xl font-bold md:w-2/3"}>
                Welcome to our CS Case Calculator! Our simple and efficient calculator helps you
                make informed decisions. Get ready to optimize your case opening experience with
                precision.
            </div>
            <div className={"flex flex-col gap-6"}>
                <FeatureBlock
                    text={"Determine how many cases you can open with your bankroll"}
                    icon={<MdSavings />}
                    iconFirst
                />
                <FeatureBlock
                    text={
                        "Find out the cost of opening a specific number of cases at a given price"
                    }
                    icon={<MdPaid />}
                />
                <FeatureBlock
                    text={"Explore the maximum case price based on your budget"}
                    icon={<MdPriceChange />}
                    iconFirst
                />
            </div>
        </div>
    );
}
