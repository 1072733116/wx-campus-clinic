import {
	defineStore
} from "pinia"
import {
	LOGIN_USER
} from "../../constant/login/index.js";
import {
	profileChangePasswordRequest,
	updateUserInfoRequest,
	getMyStatusAppointmentByAccountRequest,
	getRecordListByUsNumberRequest
} from "@/service/profile"
import cache from "../../utils/cache";
const useProfileStore = defineStore("profile", {
	state: () => ({
		readyList: [],
		getList: [],
		doneList: [],
		cancelList: [],
		recordList: []
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
			if (status === "预约中") {
				this.readyList = res.data
			} else if (status === "已完成") {
				this.doneList = res.data
			} else if (status === "已取消") {
				this.cancelList = res.data
			} else {
				this.getList = res.data
			}
		},
		async getRecordListByUsNumberAction(account) {
			const res = await getRecordListByUsNumberRequest(account);
			this.recordList = res.data;
			console.log(res);
		}
	}
})

export default useProfileStore;
