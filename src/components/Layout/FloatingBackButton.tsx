import { Button } from "../Element/Button.tsx";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export function FloatingBackButton() {
    const navigate = useNavigate();

    return (
        <Button onClick={() => navigate(-1)} className={"fixed left-4 top-4"}>
            <MdArrowBack />
        </Button>
    );
}
