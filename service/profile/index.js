import request from "@/service"
const profileChangePasswordRequest = (account) => {
	request.put({
		url: "/account/password",
		data: account
	})
}
const updateUserInfoRequest = (user) => {
	return request.put({
		url: "/user",
		data: user
	})
}


//my-reservation
const getMyStatusAppointmentByAccountRequest = (account, status) => {
	return request.get({
		url: "/appointment/status/list",
		data: {
			account:account,
			status:status
		}
	})
}


export {
	profileChangePasswordRequest,
	updateUserInfoRequest,
	getMyStatusAppointmentByAccountRequest
}
