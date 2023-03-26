
import {Base64} from './Base64.js'

export const getPolicyEncode = function(policy) {
	const encodedPolicy = Base64.encode(JSON.stringify(policy));
	return encodedPolicy;
}
