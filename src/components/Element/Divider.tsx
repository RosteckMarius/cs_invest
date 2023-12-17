interface DividerProps {
    label?: string;
}

export function Divider(props: DividerProps) {
    return (
        <div className={"flex items-center"}>
            <div className={"w-full border-b-2"}></div>
            {props.label && <span className={"px-2"}>{props.label}</span>}
            <div className={"w-full border-b-2"}></div>
        </div>
    );
}
