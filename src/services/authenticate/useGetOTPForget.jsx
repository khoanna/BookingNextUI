import { useState } from "react";
import fetchPost from "@/utils/fetchPost";

export const useGetOTPForget = () => {
    const [otpLoading, setOtpLoading] = useState(false);

    const getOtpForget = async (body) => {
        setOtpLoading(true);
        const respone = await fetchPost({ endpoint: '/api/otp/forgot_password', body });
        setOtpLoading(false);
        return respone;
    }

    return { otpLoading, getOtpForget };
}