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
    if (src !== undefined && src !== null)
    {
        let image =  document.createElement('img');
        image.src = src;
        id !== undefined ? image.id = id : null;
        className !== undefined ? image.className = className : null;
        return image;
        error.error("Specify the image's source");
    }
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