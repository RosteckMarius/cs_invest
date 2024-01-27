import { LoginRequest } from "./types/LoginRequest";
import { AuthResponse } from "./types/AuthResponse";
import { RegistrationRequest } from "./types/RegistrationRequest";
import { AppUser } from "./types/AppUser";
import { axiosAuth, axiosNoAuth } from "@/lib/axios.ts";

function login(request: LoginRequest): Promise<AuthResponse> {
    return axiosNoAuth.post("/api/v1/auth/login", request).then((res) => res.data);
}

function register(request: RegistrationRequest): Promise<AuthResponse> {
    return axiosNoAuth.post("/api/v1/auth/register", request).then((res) => res.data);
}

function getUserDetails(): Promise<AppUser> {
    return axiosAuth.get("/api/v1/user/details").then((res) => res.data);
}

export const AuthService = {
    login: (request: LoginRequest) => login(request),
    register: (request: RegistrationRequest) => register(request),
    getUserDetails: () => getUserDetails(),
};
