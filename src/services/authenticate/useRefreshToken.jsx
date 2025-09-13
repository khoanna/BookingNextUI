import { useState } from 'react';
import fetchPost from '@/utils/fetchPost'
import { saveToken } from '../../utils/handleToken';

export const useRefreshToken = () => {
    const [refreshLoading, setRefreshLoading] = useState(false);

    const refreshToken = async (setUser) => {
        setRefreshLoading(true);
        const respone = await fetchPost({ endpoint: '/api/authen/refresh', credentials: true });
        const data = await respone.json();

        if (data.data) {
            saveToken(data?.data?.token);
            setUser(data?.data?.infUser);
        }
        
        setRefreshLoading(false);
        return respone;
    }

    return { refreshLoading, refreshToken };
}