import error from "./error.js";

export function audio(id, className)
{
    let audio =  document.createElement('audio');
    id !== undefined ? audio.id = id : null;
    className !== undefined ? audio.className = className : null;
    return audio;
}
export function block(id , className)
{
    let block =  document.createElement('div');
    id !== undefined ? block.id = id : null;
    className !== undefined ? block.className = className : null;
    return block;
}

export function button(value, id , className)
{
    if (value !== undefined && value !== null)
    {
        let button =  document.createElement('button');
        button.textContent = value;
        id !== undefined ? button.id = id : null;
        className !== undefined ? button.className = className : null;
        return button;
    }
    error.error("A button needs a value.");
}

export function image(src, id, className)
{
    let image =  document.createElement('img');
    src !== undefined ? image.src = src : null;
    id !== undefined ? image.id = id : null;
    className !== undefined ? image.className = className : null;
    return image;
}

export function inlineBlock(id, className)
{
    let inline =  document.createElement('span');
    id !== undefined ? inline.id = id : null;
    className !== undefined ? inline.className = className : null;
    return inline;
}

export function input(id , className)
{
    let input =  document.createElement('input');
    id !== undefined ? input.id = id : null;
    className !== undefined ? input.className = className : null;
    return input;
}

function isNumber(char)
{
    if (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57)
        return true;
    return false;
}

function isLower(char)
{
    if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)
        return true;
    return false;
}

function isUpper(char)
{
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90)
        return true;
    return false;
}

export function strictMask(maskText, element)
{
    element.onkeyup = function()
    {
        let i;
        if (element.value.length > maskText.length)
            element.value = element.value.slice(0, -1);
        for (i = 0; i < element.value.length; i++) {
            if (maskText[i] === "9")
            {
                if (!isNumber(element.value[i]))
                    element.value = element.value.slice(0, -1);
            }
            else if (maskText[i] === "A")
            {
                if (!isUpper(element.value[i]))
                    element.value = element.value.slice(0, -1);
            }
            else if (maskText[i] === "a")
            {
                if (!isLower(element.value[i]))
                    element.value = element.value.slice(0, -1);
            }
        }
        if (maskText[i] === " ")
            element.value += " ";
        else if (maskText[i] === "/")
            element.value += "/";
        else if (maskText[i] === "-")
            element.value += "-";
        else if (maskText[i] === "_")
            element.value += "_";
        else if (maskText[i] === ",")
            element.value += ",";
    }
}

export function text(id , className)
{
    let text =  document.createElement('p');
    id !== undefined ? text.id = id : null;
    className !== undefined ? text.className = className : null;
    return text;
}

export function title(size, id , className)
{
    let title =  document.createElement('h' + size);
    id !== undefined ? title.id = id : null;
    className !== undefined ? title.className = className : null;
    return title;
}

export function video(id, className)
{
    let video =  document.createElement('video');
    id !== undefined ? video.id = id : null;
    className !== undefined ? video.className = className : null;
    return video;
}

export default {audio, block, button, image, inlineBlock, input, text, title, video}