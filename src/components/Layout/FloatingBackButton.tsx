import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Element/Button.tsx";

export function FloatingBackButton() {
    const navigate = useNavigate();

    return (
        <Button
            onClick={() => navigate(-1)}
            className={"fixed left-4 top-4 p-2"}
        >
            <MdArrowBack />
        </Button>
    );
}
