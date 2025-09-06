
export const useLogout = () => {
    const [logoutLoading, setLogoutLoading] = useState(false);

    const logout = async (body) => {
        logoutLoading(true);
        const respone = await fetchPost('/api/authen/logout', body);
        if (respone.ok) {
            const data = await respone.json();
            console.log(data);
        }
        logoutLoading(false);
        return respone.status;
    }

    return { logoutLoading, logout };
}