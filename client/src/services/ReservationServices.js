import customFetch from "./customFetch"

const baseUrl = "http://localhost:10000/api/reservaciones"

export const editReservation = async (id, reservationData) => {
    const options = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reservationData)
    }
    const response = await customFetch(`${baseUrl}/${id}`, options)
    const data = await response.json()
    return data
}

export const fetchReservationById = async (id) => {
    const response = await customFetch(`${baseUrl}/${id}`)
    const data = await response.json()
    return data
}

export const fetchReservations = async ({ page = 1, limit = 10, start, end, status } = {}) => {
    let queryString = ""
    if (start && end) {
        queryString += `&start=${start}&end=${end}`
    }
    if (status) {
        queryString += `&status=${status}`
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