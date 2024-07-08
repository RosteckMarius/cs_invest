import { ReactNode } from "react";
import { cn } from "@/lib/utils.ts";

interface FeatureBlockProps {
    text: string;
    icon: ReactNode;
    iconFirst?: boolean;
}

export function FeatureBlock(props: FeatureBlockProps) {
    return (
        <div className={"flex items-center"}>
            <span
                className={cn(
                    "feature flex w-1/3 justify-center text-6xl md:text-8xl",
                    { "order-first": props.iconFirst },
                    { "order-last": !props.iconFirst },
                )}
            >
                {props.icon}
            </span>
            <div className={cn("my-auto w-2/3 text-center font-semibold md:text-xl")}>
                {props.text}
            </div>
        </div>
    );
}
