const apiUrl = import.meta.env.VITE_BASE_API;

export default async function fetchGet({ endpoint, credentials }) {
    const respone = await fetch(`${apiUrl}${endpoint}`, {
        method: 'GET',
        credentials: credentials ? 'include' : 'omit',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    return respone;
}