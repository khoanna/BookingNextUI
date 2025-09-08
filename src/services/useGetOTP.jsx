import { useState } from "react";
import fetchPost from "../utils/fetchPost";

export const useGetOtp = () => {
    const [otpLoading, setOtpLoading] = useState(false);

    const getOtp = async (body) => {
        setOtpLoading(true);
        const respone = await fetchPost({ endpoint: '/api/otp/register', body });
        setOtpLoading(false);
        return respone;
    }

    return { otpLoading, getOtp };
}