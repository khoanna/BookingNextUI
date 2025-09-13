import { useState } from "react";
import fetchPost from "@/utils/fetchPost";

export const useGetOtpRegister = () => {
    const [otpLoading, setOtpLoading] = useState(false);

    const getOtpRegister = async (body) => {
        setOtpLoading(true);
        const respone = await fetchPost({ endpoint: '/api/otp/register', body });
        setOtpLoading(false);
        return respone;
    }

    return { otpLoading, getOtpRegister };
}