import { block, title } from "../../modules/elements.js";
import wc from "../../modules/wiseComponent.js";

let header = new wc("header", block("header"), true),
	logo = title(1, "logo");

logo.textContent = "WiseJS"
header.add("logo", logo, true);

export default header;