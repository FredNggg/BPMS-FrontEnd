import App from './App'
import store from './store'
import uviewPlus from '@/uni_modules/uview-plus'
import { VueJsonp } from 'vue-jsonp'

// #ifndef VUE3



Vue.prototype.$store = store
Vue.use(VueJsonp)
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
	app.use(uviewPlus)
	// app.use(VueJsonp)
	app.use(store)
	
	return {
		app,
	}
	
}
// #endif
