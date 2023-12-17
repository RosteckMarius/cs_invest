import { Input } from "./Input.tsx";

interface InputWithLabelProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export function InputWithLabel(props: InputWithLabelProps) {
    return (
        <div>
            <label className={"block"} htmlFor={props.label}>
                {props.label}
            </label>
            <Input
                className={"rounded p-2"}
                id={props.label}
                {...props}
            ></Input>
        </div>
    );
}
