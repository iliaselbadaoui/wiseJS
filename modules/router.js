function initiate(mainRoute, mainComponent)
{
	
	history.pushState(JSON.stringify(mainComponent), "", mainRoute);
	window.onpopstate = function () {
		alert(history.state);
	}
}

export default { initiate }