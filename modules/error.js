let     isDev;

let promise = new Promise((res) => {
    res(isDev);
})

function setIsDev(value)
{
    isDev = value;
}

function    error(message)
{
    if (isDev === true)
    {
        let err = new Error(message)
        console.error(err.stack)
    }
}

export default {setIsDev, error}