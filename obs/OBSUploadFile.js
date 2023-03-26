import {
	config
} from './Configuration.js';
import {
	getPolicyEncode
} from './getPolicy.js';
import {
	getSignature
} from './GetSignature.js';

import {
	getuuid
} from '@/utils/uuid.js';

export const OBSUpload = async function(filePath, callback) {
	if (!filePath) {
		wx.showToast({
			title: '文件路径不能为空',
			icon: '请重新选择路径',
		});
	} else {
		const fileName = getuuid(10, 16) + '.png'; //指定上传到OBS桶中的对象名    

		const OBSPolicy = { //设定policy内容
			"expiration": "2089-12-31T12:00:00.000Z",
			"conditions": [{
					"bucket": "bpms"
				}, //Bucket name
				{
					'key': fileName
				}
			]
		}

		const policyEncoded = getPolicyEncode(OBSPolicy); //计算policy编码值
		const signature = getSignature(policyEncoded, config.SecretKey); //计算signature

		wx.uploadFile({
			//url: config.EndPoint,
			url: config.EndPoint,
			filePath: filePath,
			name: 'file',
			header: {
				'content-type': 'multipart/form-data; boundary=-9431149156168',
			},
			formData: {
				'AccessKeyID': config.AccessKeyId,
				'policy': policyEncoded,
				'signature': signature,
				'key': fileName,
				'content-type': 'image/png',
				// 'x-obs-acl': 'public-read'
			},

			success: function(res) {
				console.log(res.statusCode); //打印响应状态码
				if (res.statusCode == '204') {
					console.log('上传图片成功', res)
					wx.showToast({
						title: '上传成功',
						icon: '成功'
					});
				} else {
					console.log('上传图片失败', res)
					wx.showToast({
						title: '上传失败',
						icon: '失败'
					});
				}
				callback(res);

			},
			fail: function(e) {
				console.log(e);
			}
		})

	}
}
