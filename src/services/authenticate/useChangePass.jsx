import { useState } from 'react';
import fetchPost from '@/utils/fetchPost'

export const useChangePass = () => {
    const [changePassLoading, setChangePassLoading] = useState(false);

    const changePass = async (body) => {
        setChangePassLoading(true);
        const respone = await fetchPost({ endpoint: '/api/otp/changePassword', body });
        setChangePassLoading(false);
        return respone;
    }

    return { changePassLoading, changePass };
}