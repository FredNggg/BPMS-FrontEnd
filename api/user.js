import Request from '@/utils/request.js';
import operate from '@/common/operate.js';

let request = (new Request()).http;
const PREFIX = '/user'

export const register = function(name, phone, institutionId, position, state) {
	const data = {
		name: name,
		phone: phone,
		institutionId: institutionId,
		position: position,
		state: state
	};
	return request({
		url: `${PREFIX}/register/marketer`,
		method: 'POST',
		data: data,
	})
}

export const sendVerificationCode = function(phone){
	return request({
		url: `${PREFIX}/verificationCode/send/?phone=${phone}`,
		method: 'GET',
	})
}

export const checkVerificationCode = function(phone, code){
	return request({
		url: `${PREFIX}/verificationCode/check/?phone=${phone}&code=${code}`,
		method: 'GET',
	})
}