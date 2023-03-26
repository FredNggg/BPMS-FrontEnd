
import {
	Crypto
} from './crypto.js'
import {Base64} from './Base64.js'
//利用SK计算Signature信息
export const getSignature = function(policyEncoded, SecretKey) {
	const bytes = Crypto.HMAC(Crypto.SHA1, policyEncoded, SecretKey, {
		asBytes: true
	});

	const signature = Crypto.util.bytesToBase64(bytes);
	return signature;
}


