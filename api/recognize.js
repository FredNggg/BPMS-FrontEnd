import Request from '@/utils/request.js';
import operate from '@/common/operate.js';

let request = (new Request()).http;
const PREFIX = '/recognize';

export const licenseRecognize = function(file) {
	const data = {file: file};
	return request({
		url: `${PREFIX}/businessLicence`,
		method: 'POST',
		hasFile: true,
		data: data,
	})
	
}


