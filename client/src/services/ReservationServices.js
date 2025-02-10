import customFetch from "./customFetch"

const baseUrl = "http://localhost:10000/api/reservaciones"

export const fetchReservationById = async (id) => {
    const response = await customFetch(`${baseUrl}/${id}`)
    const data = await response.json()
    return data
}

export const fetchReservations = async ({ page = 1, limit = 10, startDate, endDate } = {}) => {
    let queryString = ""
    if (startDate && endDate) {
        queryString = `&start=${startDate}&end=${endDate}`
    }
    const response = await customFetch(`${baseUrl}?page=${page}&limit=${limit}${queryString}`)
    const data = await response.json()
    return data
}

export const createReservation = async (reservation) => {
    try {
        const response = await fetch(baseUrl, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reservation)
        })
        if (!response.ok) {
            const error = await response.json()
            throw new Error(error.message || "Ha ocurrido un error")
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error.message)
        throw error
    }
}