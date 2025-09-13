import { useState } from "react";
import fetchPost from "@/utils/fetchPost";

export const useRegister = () => {
    const [registerLoading, setRegisterLoading] = useState(false);

    const register = async (body) => {
        setRegisterLoading(true);
        const respone = await fetchPost({ endpoint: '/api/register', body });
        setRegisterLoading(false);
        return respone;
    }

    return { registerLoading, register };
}