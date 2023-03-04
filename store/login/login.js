import {
	defineStore
} from "pinia"
import {
	TOKEN,
	LOGIN_USER
} from "../../constant/login/index.js";
import {
	accountLoginRequest,
	getLoginUserInfoRequest,
	getAdminListRequest
} from "../../service/login/index.js"
import cache from "../../utils/cache.js";
const useLoginStore = defineStore("login", {
	state: () => ({
		user: cache.getCache(LOGIN_USER) ?? {},
		token: cache.getCache(TOKEN) ?? "",
		adminList:[]
	}),
	actions: {
		async userLoginAction(userAccount) {
			const loginResult = await accountLoginRequest(userAccount);
			this.token = loginResult.data.token;
			cache.setCache(TOKEN, this.token)
			const userResult = await getLoginUserInfoRequest(loginResult.data.account)
			this.user = userResult.data
			cache.setCache(LOGIN_USER, this.user)
		},
		async getAdminList(){
			const res = await getAdminListRequest();
			this.adminList = res.data
		}
	},

});

export default useLoginStore;
