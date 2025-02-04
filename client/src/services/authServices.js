const baseUrl = "http://localhost:10000/auth"

export const fetchAuthData = async () => {
    try {
        const response = await fetch("http://localhost:10000/auth/check", {
            method: "GET",
            credentials: 'include'
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const login = async (userData) => {
    try {
        const response = await fetch(`${baseUrl}/login`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        if (!response.ok) {
            const error = await response.json()
            throw new Error(error.message || "Ha ocurrido un error")
        }
        const data = await response.json()
        return data
    } catch (error) {
        throw error.message
    }
}