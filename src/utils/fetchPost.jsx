const apiUrl = import.meta.env.VITE_BASE_API;

export default fetchPost = async ({ endpoint, body, credentials }) => {
    const respone = await fetch(`${apiUrl}${endpoint}`, {
        method: 'POST',
        credentials: credentials ? 'include' : 'omit',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
    return respone;
}