import { useState } from "react";
import { Input } from "@/components/Form/Input.tsx";
import { CaseDraw } from "@/features/Rarity/components/CaseDraw.tsx";

export function RarityVisualizer() {
    const [reroll, setReroll] = useState(false);
    const [amount, setAmount] = useState(385);

    return (
        <div className={"flex flex-col gap-8 md:gap-4"}>
            <div className={"flex flex-wrap justify-center gap-2"}>
                <b>This is what opening</b>
                <Input
                    className={"w-fit text-center font-bold"}
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                />
                <b> cases could look like...</b>
            </div>
            <CaseDraw amount={amount} reroll={() => setReroll((prevState) => !prevState)} />
        </div>
    );
}
