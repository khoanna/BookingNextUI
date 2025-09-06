import fetchPost from '../utils/fetchPost'

export const useLogin = () => {
    const [loginLoading, setLoginLoading] = useState(false);

    const login = async (body) => {
        setLoginLoading(true);
        const respone = await fetchPost('/api/authen/login', body);
        if (respone.ok) {
            const data = await respone.json();
            console.log(data);
        }
        setLoginLoading(false);
        return respone.status;
    }

    return { loginLoading, login };
}