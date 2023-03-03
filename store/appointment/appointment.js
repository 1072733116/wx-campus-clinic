import {
	defineStore
} from "pinia"
import {
	createAppointmentRequest,
	getAppointmentTimeTotalRequest,
	updateAppointmentStatusRequest
} from "@/service/appointment"
const useAppointmentStore = defineStore("appointment", {
	state: () => ({
		total: 0
	}),
	actions: {
		async createAppointmentAction(appointment) {
			const res = await createAppointmentRequest(appointment)
			if (!res.data) {
				Promise.reject("预约失败")
			}
		},
		async getAppointmentTimeTotalAction(date, time) {
			const res = await getAppointmentTimeTotalRequest(date, time);
			this.total = res.data
		},
		async updateAppointmentStatusAction(appointment = {}){
			const res = await updateAppointmentStatusRequest(appointment)
			if(!res.data) Promise.reject("服务器发生异常")
		}
	}
})

export default useAppointmentStore;
