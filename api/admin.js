import Request from '@/utils/request.js';
import operate from '@/common/operate.js';

let request = (new Request()).http;
const PREFIX = '/marketer'

export const getAllMarketers = function(currPage, pageSize = 10){
	return request({
		url: `${PREFIX}/all?currPage=${currPage}&pageSize=${pageSize}`,
		method: 'GET',
	})
}

export const getMarketersByState = function(state, currPage, pageSize = 10){
	return request({
		url: `${PREFIX}/${state}?currPage=${currPage}&pageSize=${pageSize}`,
		method: 'GET',
	})
}

export const modifyState = function(id, state){
	return request({
		url: `${PREFIX}/state/${id}?state=${state}`,
		method: 'POST',
	})
}