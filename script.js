import wise from './modules/wise.js';
import header from './components/header.js'
import router from "./modules/router.js"
import { getComponent } from './modules/wiseComponent.js';

wise.initiate("wiseTest", true);
wise.ready(()=>{
	wise.app.addComponent(header);
	router.initiate(getComponent("header"), "home");
	// router.listen();
})