import request from "@/service";

const getAllDoctorListRequest = () => {
	return request.get({
		url:"/doctor"
	})
}

export {
	getAllDoctorListRequest
}