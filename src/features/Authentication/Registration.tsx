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
import { useTranslation } from "react-i18next";

export function Registration() {
    const { t } = useTranslation();
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
        <Card className={"w-4/5 md:w-1/4"}>
            <CardHeader>
                <CardTitle className={"text-2xl"}>
                    {t("auth.register.title").toUpperCase()}
                </CardTitle>
            </CardHeader>
            <CardContent className={"flex flex-col gap-4"}>
                <InputWithLabel
                    autoFocus
                    id={"firstName"}
                    onChange={handleChange}
                    label={t("auth.register.firstname")}
                />
                <InputWithLabel
                    id={"lastName"}
                    onChange={handleChange}
                    label={t("auth.register.lastname")}
                />
                <InputWithLabel
                    id={"email"}
                    onChange={handleChange}
                    label={t("auth.register.email")}
                />
                <InputWithLabel
                    id={"password"}
                    onChange={handleChange}
                    label={t("auth.register.password")}
                />
            </CardContent>
            <CardFooter className={"items-center justify-center"}>
                <Button onClick={register}>{t("auth.register.title")}</Button>
            </CardFooter>
        </Card>
    );
}
