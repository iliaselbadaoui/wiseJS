import { block, title, button } from '../modules/elements.js'
import ws   from '../modules/wiseComponent.js'


let header = new ws("header", block("header"), true),
    siteName = title(1, 'logo'),
login = button("About");
siteName.textContent = "WISE";
header.add('logo', siteName, true);
header.add("login", login, true);

export default header;