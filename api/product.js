import Request from '@/utils/request.js';
import operate from '@/common/operate.js';

let request = (new Request()).http;

export const createProduct = function({
	name,
	type,
	date,
	adminId,
	description
}) {
	const data = {
		name: name,
		type: type,
		date: date,
		adminId: adminId,
		description: description
	};
	return request({
		url: '/product/creation',
		method: 'POST',
		data: data,
		
	})
};
