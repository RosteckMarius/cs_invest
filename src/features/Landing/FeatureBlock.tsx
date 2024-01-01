import classNames from "classnames";
import { ReactNode } from "react";

interface FeatureBlockProps {
    text: string;
    icon: ReactNode;
    iconFirst?: boolean;
}

export function FeatureBlock(props: FeatureBlockProps) {
    return (
        <div className={"flex"}>
            <span
                className={classNames(
                    "flex w-1/3 justify-center text-8xl",
                    { "order-first": props.iconFirst },
                    { "order-last": !props.iconFirst },
                )}
            >
                {props.icon}
            </span>
            <div className={"my-auto w-2/3 text-center text-xl "}>{props.text}</div>
        </div>
    );
}
