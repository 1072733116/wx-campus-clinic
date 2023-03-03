import {
	defineStore
} from "pinia"
import {
	LOGIN_USER
} from "../../constant/login/index.js";
import {
	profileChangePasswordRequest,
	updateUserInfoRequest,
	getMyStatusAppointmentByAccountRequest
} from "@/service/profile"
import cache from "../../utils/cache";
const useProfileStore = defineStore("profile", {
	state: () => ({
		readyList: [],
		getList:[],
		doneList: [],
		cancelList:[]
	}),
	actions: {
		async changePasswordAction(account) {
			await profileChangePasswordRequest(account);
		},
		async updateUserInfoAction(user) {
			const res = await updateUserInfoRequest(user)
			if (res.data) {
				cache.setCache(LOGIN_USER)
			}
		},
		async getMyStatusAppointmentAction(account, status) {
			const res = await getMyStatusAppointmentByAccountRequest(account, status);
			if(status ==="预约中"){
				this.readyList = res.data
			}else if(status === "已完成"){
				this.doneList = res.data
			}else if(status === "已取消"){
				this.cancelList = res.data
			}else{
				this.getList = res.data
			}
		}
	}
})

export default useProfileStore;
