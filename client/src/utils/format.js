export const formatDate = (datee) => {
    const date = new Date(datee)
    const year = date.getUTCFullYear().toString()
    const month = (date.getUTCMonth() + 1).toString().length > 1 ? date.getUTCMonth() + 1 : `0${date.getUTCMonth() + 1}`
    const day = date.getUTCDate()
    console.log({ year, month, day })
    return `${year}-${month}-${day}`
}