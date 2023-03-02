import Request from '@/utils/request.js';
import operate from '@/common/operate.js';

let request = (new Request()).http;
const PREFIX = '/product'

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
		url: `${PREFIX}/creation`,
		method: 'POST',
		data: data,
	})
};

export const getAllProducts = function(currPage, pageSize = 10) {
	return request({
		url: `${PREFIX}/all?currPage=${currPage}&pageSize=${pageSize}`,
		method: 'GET',
	})
}

export const getProductsByType = function(type, currPage, pageSize = 10) {
	return request({
		url: `${PREFIX}/type/${type}?currPage=${currPage}&pageSize=${pageSize}`,
		method: 'GET',
	})
}
