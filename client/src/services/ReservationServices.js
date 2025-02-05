import customFetch from "./customFetch"

const baseUrl = "http://localhost:10000/api/reservaciones"

export const fetchReservations = async (start, end) => {
    const response = await customFetch(`${baseUrl}?start=${start}&end=${end}`)
    const data = await response.json()
    return data
}

export const fetchReservations2 = async (start, end) => {
    try {
        const response = await fetch(`${baseUrl}?start=${start}&end=${end}`, {
            method: "GET",
            credentials: "include"
        })
        if (!response.ok) {
            const error = response.json()
            throw new Error(error.message)
        }
        const data = response.json()
        return data
    } catch (error) {
        console.error(error)
        throw error
    }
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