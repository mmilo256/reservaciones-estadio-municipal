import useAuthStore from "../stores/useAuthStore"

const customFetch = async (url, options = {}) => {
    options = {
        ...options,
        credentials: "include"
    }

    const response = await fetch(url, options)
    if (!response.ok) {
        if (response.status === 403 || response.status === 401) {
            const { logoutUser } = useAuthStore.getState()
            await logoutUser()
        }
        const error = await response.json()
        throw new Error(error.message || "Error desconocido")
    }
    return response
}

export default customFetch