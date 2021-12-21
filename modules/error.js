import wise from "./wise.js"

function    error(message)
{
    if (wise._isDev === true)
    {
        let err = new Error(message)
        console.error(err.stack)
    }
}

export default { error }