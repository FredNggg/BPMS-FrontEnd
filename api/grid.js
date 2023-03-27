import Request from '@/utils/request.js';
import operate from '@/common/operate.js';

let request = (new Request()).http;
const PREFIX = '/grid'

export const createGrid = function({
	name,
	type,
	state,
	createTime,
	institutionId,
	adminId,
	points
}) {
	const data = {
		name: name,
		type: type,
		state: state,
		createTime: createTime,
		institutionId: institutionId,
		adminId: adminId,
		points: points,
	};
	return request({
		url: `${PREFIX}/creation`,
		method: 'POST',
		data: data,
	})
};

export const getGridList = function(){
	return request({
		url: `${PREFIX}/list`,
		method: 'GET',
	})
}

export const getGridDetail = function(id){
	return request({
		url: `${PREFIX}/content/${id}`,
		method: 'GET',
	})
}
