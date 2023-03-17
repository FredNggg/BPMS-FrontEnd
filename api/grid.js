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
	point
}) {
	const data = {
		name: name,
		type: type,
		state: state,
		createTime: createTime,
		institutionId: institutionId,
		adminId: adminId,
		point: point,
	};
	return request({
		url: `${PREFIX}/creation`,
		method: 'POST',
		data: data,
	})
};
