export function validateId(id) {
    if (!Number.isInteger(id) || id <= 0) {
        return false
    }
    return true
}