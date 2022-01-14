import { isMemberExpressionBrowser } from "@vue/compiler-core";

function initiate(mainRoute, mainComponent) {
	
	history.pushState(JSON.stringify(mainComponent), "", mainRoute);
	window.onpopstate = function () {
		alert(history.state);
	}
	// window.onbeforeunload = function () {
	// 	alert("It's being unloaded")
	// }
}

export default { initiate }