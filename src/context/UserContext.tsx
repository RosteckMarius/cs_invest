import React, { createContext, useEffect, useState } from "react";
import { AppUser } from "@/features/Authentication/types/AppUser.ts";
import { AuthService } from "@/features/Authentication/AuthService.ts";
import { useLocalStorage } from "@/hooks/useLocalStorage.ts";

export const UserContext = createContext<{
    user?: AppUser;
    setUser: (value: AppUser | undefined) => void;
    logout: () => void;
}>({
    user: undefined,
    setUser: () => {},
    logout: () => {},
});

export default function UserContextProvider({ children }: any) {
    const [user, setUser] = useState<AppUser>();
    const { removeItem } = useLocalStorage();

    useEffect(() => {
        AuthService.getUserDetails().then((user) => setUser(user));
    }, []);

    function logout() {
        setUser(null);
        removeItem("token");
    }

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                logout,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}
