import request from "../index.js"

const accountLoginRequest = (UserAccount) => {
	return request.post({
		url: "/login",
		data: UserAccount
	})
}

const getLoginUserInfoRequest = (account) => {
	return request.get({
		url: `/user/${account}`
	})
}

const getAdminListRequest = () => {
	return request.get({
		url:"/doctor/admin/list"
	})
}

export {
	accountLoginRequest,
	getLoginUserInfoRequest,
	getAdminListRequest
}