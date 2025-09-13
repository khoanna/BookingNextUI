import { useState } from "react";
import fetchGet from "@/utils/fetchGet";

export const useGoogleLogin = () => {
    const [googleLoginLoading, setLoginLoading] = useState(false);

    const googleLogin = async () => {
        setLoginLoading(true);
        const respone = await fetchGet({ endpoint: '/login/oauth2/code/google' });
        setLoginLoading(false);
        return respone.status;
    }

    return { googleLoginLoading, googleLogin };
}