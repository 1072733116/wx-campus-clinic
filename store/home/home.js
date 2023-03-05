import {
	defineStore
} from "pinia"
import {
	getAllDoctorListRequest,
	getClinicStatusRequest
} from "@/service/home"
const useHomeStore = defineStore("home", {
	state: () => ({
		clinicStatus:{},
		doctorList: []
	}),
	actions: {
		async getAllDoctorListAction() {
			const res = await getAllDoctorListRequest()
			this.doctorList = res.data;
		},
		async getClinicStatusAction(){
			const res = await getClinicStatusRequest();
			this.clinicStatus = res.data
		}
	},

});

export default useHomeStore;
