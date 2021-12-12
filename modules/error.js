import wise from './wise.js'

function    error(message)
{
    let err = new Error(message)
    console.error(err.stack)
}

export default { error }