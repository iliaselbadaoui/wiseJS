import { block, title, button } from '../modules/elements.js'
import ws   from '../modules/wiseComponent.js'

let about = new ws("about", block("about"), true),
    siteName = title(1, 'logo');

siteName.textContent = "ABOUT";
about.add('logo', siteName, true);

export default about;