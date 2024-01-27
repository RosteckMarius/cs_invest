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
import { HOME_ROUTE, REGISTRATION_ROUTE } from "@/routes/public.tsx";
import { Button } from "@/components/Element/Button.tsx";
import { Separator } from "@/components/Element/Separator.tsx";
import { useTranslation } from "react-i18next";

export function Login() {
    const { t } = useTranslation();
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
        <Card className={"w-4/5 md:w-1/4"}>
            <CardHeader>
                <CardTitle className={"text-2xl"}>LOGIN</CardTitle>
            </CardHeader>
            <CardContent className={"flex flex-col gap-4"}>
                <InputWithLabel
                    autoFocus
                    id={"email"}
                    label={t("auth.register.email")}
                    onChange={handleChange}
                />
                <InputWithLabel
                    id={"password"}
                    label={t("auth.register.password")}
                    onChange={handleChange}
                />
            </CardContent>
            <CardFooter className={"flex flex-col justify-center gap-4 py-4"}>
                <div className={"flex flex-col"}>
                    <Button onClick={login}>{t("auth.login")}</Button>
                    <Button variant={"link"}>{t("auth.forgotpw")}</Button>
                </div>
                <Separator />
                <Button variant={"outline"} onClick={() => navigate(REGISTRATION_ROUTE)}>
                    {t("auth.register.title")}
                </Button>
            </CardFooter>
        </Card>
    );
}
