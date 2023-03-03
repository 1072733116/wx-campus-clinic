import request from "@/service"


//发起预约
const createAppointmentRequest = (appointment) => {
	return request.post({
		url: "/appointment",
		data: appointment
	})
}

//获取时间段的预约数
const getAppointmentTimeTotalRequest = (date, time) => {
	return request.get({
		url: "/appointment/total",
		data: {
			date,
			time
		}
	})
}

//修改预约
const updateAppointmentStatusRequest = (appointment) => {
	return request.put({
		url:"/appointment",
		data:appointment
	})
}

export {
	createAppointmentRequest,
	getAppointmentTimeTotalRequest,
	updateAppointmentStatusRequest
}
