import "./MarkDownReader.css";
import Markdown from "react-markdown";

interface MarkDownReaderProps {
    markdown: string;
}

export function MarkDownReader(props: MarkDownReaderProps) {
    return <Markdown className={"md-reader"}>{props.markdown}</Markdown>;
}
