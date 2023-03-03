import {
	TIMEOUT,
	BASE_URL
} from "./config/index.js"
import {
	TOKEN
} from "../constant/login/index.js"
import cache from "../utils/cache.js"
import Request from "./request/index.js"
import Toast from '@vant/weapp/dist/toast/toast';
const request = new Request({
	baseURL: BASE_URL,
	timeout: TIMEOUT,
	interceptors: {
		requestSuccessFn: (option) => {
			const token = cache.getCache(TOKEN)
			if (token) {
				option.header.Authorization = `Bearer ${token}`
			}
			return option;
		},
		responseSuccessFn: (res) => {
			if (res.code !== 200) {
				Toast.fail({
					duration: 1500,
					message:res.msg
				});

				return Promise.reject(res.msg)
			}
			return res;
		}
	}
})

export default request;
