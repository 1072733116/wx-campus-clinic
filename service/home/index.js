import request from "@/service";

const getAllDoctorListRequest = () => {
	return request.get({
		url:"/doctor"
	})
}

const getClinicStatusRequest = () => {
	return request.get({
		url:"/clinic"
	})
}
export {
	getAllDoctorListRequest,
	getClinicStatusRequest
}