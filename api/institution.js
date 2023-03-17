import Request from '@/utils/request.js';
import operate from '@/common/operate.js';

let request = (new Request()).http;
const PREFIX = '/institution'

export const searchInstitution = function(keyword, currPage, pageSize = 20) {
	return request({
		url: `${PREFIX}/search?keyword=${keyword}&currPage=${currPage}&pageSize=${pageSize}`,
		method: 'GET',
	})
}