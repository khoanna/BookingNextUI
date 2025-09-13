import { useState } from 'react';
import fetchPost from '@/utils/fetchPost'

export const useLogin = () => {
    const [loginLoading, setLoginLoading] = useState(false);

    const login = async (body) => {
        setLoginLoading(true);
        const respone = await fetchPost({ endpoint: '/api/authen/login', body, credentials: true });
        setLoginLoading(false);
        return respone;
    }

    return { loginLoading, login };
}