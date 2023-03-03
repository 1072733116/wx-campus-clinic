class Request {
	
	constructor(options){
		this.options = options;
	}
	
	request(config) {
		return new Promise((resolve, reject) => {
			let option = {
				url: this.options.baseURL + config.url,
				method: config.method,
				timeout: this.options.timeout,
				header:{},
				data: config.data,
				success: (res) => {
					let result = res.data
					if(this.options.interceptors.responseSuccessFn){
							result = this.options.interceptors.responseSuccessFn(result)
					}
					resolve(result)
				},
				fail: function(err){
					reject(err)
				}
			}
			if(this.options.interceptors.requestSuccessFn){
					option = this.options.interceptors.requestSuccessFn(option)
			}
			uni.request(option)
		})
	}

	get(config) {
		return this.request({
			...config,
			method: "GET"
		})
	}
	
	post(config) {
		return this.request({
			...config,
			method: "POST"
		})
	}
	
	put(config) {
		return this.request({
			...config,
			method: "PUT"
		})
	}
	
	delete(config) {
		return this.request({
			...config,
			method: "DELETE"
		})
	}
}

export default Request;
