import Request from '@/utils/request.js';
import operate from '@/common/operate.js';

let request = (new Request()).http;
const PREFIX_USER = '/user'
const PREFIX_MARKETER = '/marketer'

export const register = function(name, phone, institutionId, position, state) {
	const data = {
		name: name,
		phone: phone,
		institutionId: institutionId,
		position: position,
		state: state
	};
	return request({
		url: `${PREFIX_MARKETER}/register`,
		method: 'POST',
		data: data,
	})
}

export const sendVerificationCode = function(phone){
	return request({
		url: `${PREFIX_USER}/verificationCode/send/?phone=${phone}`,
		method: 'GET',
	})
}

export const checkVerificationCode = function(phone, code){
	return request({
		url: `${PREFIX_USER}/verificationCode/check/?phone=${phone}&code=${code}`,
		method: 'GET',
	})
}

export const phoneLogin = function(userRole, phone, code){
	return request({
		url: `${PREFIX_USER}/login/phone?userRole=${userRole}&phone=${phone}&code=${code}`,
		method: 'POST',
	})
}

export const wechatLogin = function(userRole, weChatLoginCode){
	return request({
		url: `${PREFIX_USER}/login/wechat?userRole=${userRole}&weChatLoginCode=${weChatLoginCode}`,
		method: 'POST',
	})
}

export const wechatBind = function(userRole, phone, weChatLoginCode){
	return request({
		url: `${PREFIX_USER
		}/bind/wechat?userRole=${userRole}&phone=${phone}&weChatLoginCode=${weChatLoginCode}`,
		method: 'POST',
	})
}