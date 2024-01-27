import axios, { InternalAxiosRequestConfig } from "axios";

const BASE_URL = "http://localhost:8080";

export const axiosNoAuth = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export const axiosAuth = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
        config.headers.Accept = "application/json";
    }
    return config;
}

axiosAuth.interceptors.request.use(authRequestInterceptor);
