'use strict'
import  wc from './wiseComponent.js'
import  { block } from './elements.js'

let    _app = new wc("App", block("app"), true);

function initiate(appId, isDev)
{
    _app.id = appId;
    document.body.appendChild(_app.baseElement);
}

const app = _app;
export default {initiate, app}