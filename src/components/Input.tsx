import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

function Input(props: InputProps) {
    return <input className={"bg-red-500"} {...props}></input>;
}

export { Input };
