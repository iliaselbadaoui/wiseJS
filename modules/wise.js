'use strict'
import  wc from './wiseComponent.js'
import  { block } from './elements.js'

let     _app = new wc("App", block("app"), true);
let     _state = 'none';
let     _isDev = undefined;
function initiate(appId, isDev)
{
    _state = "ready"
    _app.id = appId;
    _isDev = isDev;
    document.body.appendChild(_app.baseElement);
}

async function ready(callback) {
    let interval = setInterval(() => {
        if (_state === "ready")
        {
            callback();
            clearInterval(interval);
        }
    }, 20);
}

const app = _app;
export default {initiate, ready, app, _isDev}