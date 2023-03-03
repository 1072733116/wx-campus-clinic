import {
	defineStore
} from "pinia"
import {
	getAllDoctorListRequest
} from "@/service/home"
const useHomeStore = defineStore("home", {
	state: () => ({
		doctorList: []
	}),
	actions: {
		async getAllDoctorListAction() {
			const res = await getAllDoctorListRequest()
			this.doctorList = res.data;
		}
	},

});

export default useHomeStore;
