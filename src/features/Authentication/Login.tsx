import { InputWithLabel } from "@/components/Form/InputWithLabel.tsx";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/Element/Card.tsx";
import { ChangeEvent, useContext, useState } from "react";
import { AuthService } from "@/features/Authentication/AuthService.ts";
import { UserContext } from "@/context/UserContext.tsx";
import { useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "@/routes/public.tsx";
import { Button } from "@/components/Element/Button.tsx";

export function Login() {
    const navigate = useNavigate();
    const [loginRequest, setLoginRequest] = useState<{ email: string; password: string }>({
        email: "",
        password: "",
    });
    const { setUser } = useContext(UserContext);

    function login() {
        AuthService.login(loginRequest).then((res) => {
            localStorage.setItem("token", res.token);
            setUser(res.user);
            navigate(HOME_ROUTE);
        });
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginRequest((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className={"text-xl"}>Login</CardTitle>
            </CardHeader>
            <CardContent>
                <InputWithLabel id={"email"} label={"email"} onChange={handleChange} />
                <InputWithLabel id={"password"} label={"password"} onChange={handleChange} />
            </CardContent>
            <CardFooter className={"justify-center"}>
                <Button onClick={login}>Login</Button>
            </CardFooter>
        </Card>
    );
}
