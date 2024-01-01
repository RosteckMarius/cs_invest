import { MdAttachMoney, MdPriceChange, MdSavings } from "react-icons/md";
import { FeatureBlock } from "@/features/Landing/FeatureBlock.tsx";

export function Landing() {
    return (
        <div className={"flex flex-col items-center gap-2 pb-8 text-center"}>
            <div className={"pb-8 md:w-2/3"}>
                <h1>CS INVEST</h1>
                <p className={"text-2xl"}>
                    Welcome to our CS Case Calculator! Whether you're a CS enthusiast or new to the
                    world of skins, our simple and efficient calculator helps you make informed
                    decisions. Get ready to optimize your case experience with precision. Start
                    calculating now!
                </p>
            </div>
            <div className={"flex flex-col gap-8 pt-8"}>
                <FeatureBlock
                    text={"Determine how many cases you can open with your bankroll"}
                    icon={<MdSavings />}
                    iconFirst={true}
                />
                <FeatureBlock
                    text={
                        "Find out the cost of opening a specific number of cases at a given price"
                    }
                    icon={<MdAttachMoney />}
                    iconFirst={false}
                />
                <FeatureBlock
                    text={"Explore the maximum case price based on your budget"}
                    icon={<MdPriceChange />}
                    iconFirst={true}
                />
            </div>
        </div>
    );
}
