import { block, title, button } from '../modules/elements.js'
import ws   from '../modules/wiseComponent.js'


let header = new ws("header", block("header"), true),
    siteName = title(1, 'logo'),
    login = button();
siteName.textContent = "WISE";
header.add('logo', siteName, true);
export default header;