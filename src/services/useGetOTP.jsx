
export const useGetOtp = () => {
    const [otpLoading, setOtpLoading] = useState(false);

    const getOtp = async (body) => {
        setOtpLoading(true);
        const respone = await fetchPost('/otp/verifyEmail', body);
        if (respone.ok) {
            const data = await respone.json();
            console.log(data);
            
        }
        setOtpLoading(false);
        return respone.status;
    }

    return { otpLoading, getOtp };
}