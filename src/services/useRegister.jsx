
export const useRegister = () => {
    const [registerLoading, setRegisterLoading] = useState(false);

    const register = async (body) => {
        setRegisterLoading(true);
        const respone = await fetchPost('/users/register', body);
        if (respone.ok) {
            const data = await respone.json();
            console.log(data);
        }
        setRegisterLoading(false);
        return respone.status;
    }

    return { registerLoading, register };
}