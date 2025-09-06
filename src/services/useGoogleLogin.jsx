
export const useGoogleLogin = () => {
    const [googleLoginLoading, setLoginLoading] = useState(false);

    const googleLogin = async (body) => {
        setLoginLoading(true);
        const respone = await fetchPost('/login/oauth2/code/google', body);
        if (respone.ok) {
            const data = await respone.json();
            console.log(data);
        }
        setLoginLoading(false);
        return respone.status;
    }

    return { googleLoginLoading, googleLogin };
}