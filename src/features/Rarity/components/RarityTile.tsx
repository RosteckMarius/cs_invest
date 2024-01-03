import { Rarity } from "@/features/Rarity/types/constants.ts";

interface RarityTileProps {
    rarity: Rarity;
}

export function RarityTile(props: RarityTileProps) {
    const { colorHex, name, percentageChance, fractionChance } = props.rarity;
    return (
        <div
            style={{ borderColor: colorHex }}
            className={"flex flex-1 flex-col rounded-xl border-2 p-2 text-center "}
        >
            <span className={"pb whitespace-nowrap pb-1 text-center text-xl font-semibold"}>
                {name}
            </span>
            <div className={"grid grid-rows-2 py-1"}>
                <b> {percentageChance} %</b>
                <b> {fractionChance}</b>
            </div>
        </div>
    );
}
