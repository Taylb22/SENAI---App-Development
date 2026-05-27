export function validateBody_json(body) {
    const {item, found_date, found_place,
            description, status} = body

    // const date_regex = /^\d{4}-\d{2}-\d{2}$/

    if (!item?.trim()) {
        return 1
        // return {
        //     result = 0,
        //     message = "The item name is invalid"
        // }
    }

    // if (regex.test) {

    // }
}