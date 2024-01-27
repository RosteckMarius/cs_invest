import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/Element/Card.tsx";
import { Button } from "@/components/Element/Button.tsx";
import { InputWithLabel } from "@/components/Form/InputWithLabel.tsx";
import { AuthService } from "@/features/Authentication/AuthService.ts";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useContext, useState } from "react";
import { UserContext } from "@/context/UserContext.tsx";
import { RegistrationRequest } from "@/features/Authentication/types/RegistrationRequest.ts";
import { HOME_ROUTE } from "@/routes/public.tsx";

export function Registration() {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const [regRequest, setRegRequest] = useState({} as RegistrationRequest);

    async function register() {
        return AuthService.register(regRequest).then((res) => {
            localStorage.setItem("token", res.token);
            setUser(res.user);
            navigate(HOME_ROUTE);
        });
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setRegRequest((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className={"text-xl"}>Registration</CardTitle>
            </CardHeader>
            <CardContent>
                <section className={"flex flex-col gap-2"}>
                    <InputWithLabel id={"firstName"} onChange={handleChange} label={"Vorname"} />
                    <InputWithLabel id={"lastName"} onChange={handleChange} label={"Nachname"} />
                    <InputWithLabel id={"email"} onChange={handleChange} label={"email"} />
                    <InputWithLabel id={"password"} onChange={handleChange} label={"password"} />
                </section>
            </CardContent>
            <CardFooter className={"justify-center"}>
                <Button onClick={register}>Sign Up</Button>
            </CardFooter>
        </Card>
    );
}
