class Cache {

	setCache(key, value) {
		if (key) {
			uni.setStorage({
				key,
				data: JSON.stringify(value)
			})
		}
	}

	getCache(key) {
		const value = uni.getStorageSync(key)
		if (value) {
			return JSON.parse(value)
		}
	}

	removeCache(key) {
		uni.removeStorage({
			key
		})
	}

	clearCache() {
		uni.clearStorage();
	}
}

const cache = new Cache();
export default cache;
