import header from './components/header/header.js';
import wise from './modules/wise.js';
import router from './modules/router.js'

wise.initiate("wiseTest", true);
wise.ready(()=>{
	wise.app.addComponent(header)
	router.initiate("home", header);
})