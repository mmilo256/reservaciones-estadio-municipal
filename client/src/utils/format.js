export const formatDate = (date) => {
    const year = date.getUTCFullYear().toString()
    const month = (date.getUTCMonth() + 1).toString().length > 1 ? date.getUTCMonth() + 1 : `0${date.getUTCMonth() + 1}`
    const day = date.getUTCDate().toString().length > 1 ? date.getUTCDate() : `0${date.getUTCDate()}`
    return `${year}-${month}-${day}`
}