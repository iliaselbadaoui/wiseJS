function initiate(mainComponent, mainRoute) {
	// let url = new URL(mainRoute);
	history.pushState(JSON.stringify(mainComponent), undefined, mainRoute);
	console.log(window.location);
}

function add(component, route) {
	history.pushState(JSON.stringify(component), undefined, route);
}

// function listen() {
	
// }

export default {initiate, add};