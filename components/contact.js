import { block, title, button } from '../modules/elements.js'
import ws   from '../modules/wiseComponent.js'

let contact = new ws("contact", block("contact"), true),
    siteName = title(1, 'logo');

siteName.textContent = "CONTACT";
contact.add('logo', siteName, true);

export default contact;