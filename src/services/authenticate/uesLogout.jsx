import { useState } from "react";
import fetchPost from "@/utils/fetchPost";

export const useLogout = () => {
    const [logoutLoading, setLogoutLoading] = useState(false);

    const logout = async (body) => {
        setLogoutLoading(true);
        const respone = await fetchPost('/api/authen/logout', body);
        if (respone.ok) {
            const data = await respone.json();
            console.log(data);
        }
        setLogoutLoading(false);
        return respone.status;
    }

    return { logoutLoading, logout };
}