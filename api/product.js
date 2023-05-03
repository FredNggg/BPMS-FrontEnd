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

export const reserveProduct = function(
	{marketerId, productId, customerName, cardId, customerId, contact, reserveTime, reserveLocation}
){
	const data = {marketerId: marketerId,
		productId: productId,
		customerName: customerName,
		cardId: cardId,
		customerId: customerId,
		contact: contact,
		reserveLocation: reserveLocation};
	return request({
		url: `${PREFIX}/reservation/creation`,
		method: 'POST',
		data: data,
	})
}

export const getAllProducts = function(currPage, pageSize = 10) {
	return request({
		url: `${PREFIX}/all?currPage=${currPage}&pageSize=${pageSize}`,
		method: 'GET',
	})
}

export const getProductDetail = function(productId) {
	return request({
		url: `${PREFIX}/${productId}`,
		method: 'GET',
	})
}

export const getProductsByType = function(type, currPage, pageSize = 10) {
	return request({
		url: `${PREFIX}/type/${type}?currPage=${currPage}&pageSize=${pageSize}`,
		method: 'GET',
	})
}

export const getReserveRecord = function(marketerId, currPage, pageSize = 10){
	return request({
		url: `${PREFIX}/reservation/marketer/${marketerId}?currPage=${currPage}&pageSize=${pageSize}`,
		method: 'GET',
	})
} 

export const productSearch = function(searchContent, currPage, pageSize = 10){
	return request({
		url: `${PREFIX}/search/?searchContent=${searchContent}&currPage=${currPage}&pageSize=${pageSize}`,
		method: 'GET',
	})
}
