const apiUrl = import.meta.env.VITE_BASE_API;

export const fetchGet = async ({ endpoint, credentials }) => {
    const respone = await fetch(`${apiUrl}${endpoint}`, {
        method: 'GET',
        credentials: credentials ? 'include' : 'omit',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    return respone;
}