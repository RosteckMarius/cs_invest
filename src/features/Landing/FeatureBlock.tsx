import { ReactNode } from "react";
import { cn } from "@/lib/utils.ts";

interface FeatureBlockProps {
    text: string;
    icon: ReactNode;
    iconFirst?: boolean;
}

export function FeatureBlock(props: FeatureBlockProps) {
    return (
        <div className={"flex"}>
            <span
                className={cn(
                    "flex w-1/3 justify-center text-7xl",
                    { "order-first": props.iconFirst },
                    { "order-last": !props.iconFirst },
                )}
            >
                {props.icon}
            </span>
            <div className={"my-auto w-2/3 text-center md:text-xl"}>{props.text}</div>
        </div>
    );
}
