import wise from './modules/wise.js';
import header from './components/header.js'
import card from "./components/card.js"

wise.initiate("wiseTest", true);
wise.ready(()=>{
	wise.app.addComponent(card);
	// router.listen();
})