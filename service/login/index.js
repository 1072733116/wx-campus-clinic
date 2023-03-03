import request from "../index.js"

export const accountLoginRequest = (UserAccount) => {
	return request.post({
		url: "/login",
		data: UserAccount
	})
}

export const getLoginUserInfoRequest = (account) => {
	return request.get({
		url: `/user/${account}`
	})
}
