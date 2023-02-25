import App from './App.vue'
import store from './store'
// #ifndef VUE3
import Vue from 'vue'
import uviewPlus from '@/uni_modules/uview-plus' 

Vue.use(uView);
Vue.prototype.$store = store
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	store,
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'

export function createApp() {
	const app = createSSRApp(App)
	app.use(store);
	app.use(uviewPlus);
	return {
		app,
	}
}
// #endif
