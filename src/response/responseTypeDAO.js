export const responseTypeDAO = async (data) => {

    let result = {
        "status": "ok",
        "command": data[1].command,
        "rowCount": data[1].rowCount,
        "rows": data[1].rows
    }

    return result
}