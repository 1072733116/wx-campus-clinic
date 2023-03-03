import App from './App'
import {
	createSSRApp
} from 'vue'
import * as Pinia from 'pinia'
import "@/static/iconfont/iconfont.css";
export function createApp() {
	const app = createSSRApp(App)
	app.use(Pinia.createPinia())
	return {
		app,
		Pinia
	}
}
