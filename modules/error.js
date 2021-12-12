import  wise from './wise.js'
export default function    error(message)
{
    if (wise.dev === true)
    {
        let err = new Error(message)
        console.error(err.stack)
    }
}
