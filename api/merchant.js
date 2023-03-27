import Request from '@/utils/request.js';
import operate from '@/common/operate.js';

let request = (new Request()).http;

const PREFIX = '/merchants'


export const getMerchantListByMarketer = (marketerId, recordState, currPage, pageSize = 10) => {
	// return request({
	// 	url: `${PREFIX}/marketer/${marketerId}/recordState/${recordState}?currPage=${currPage}&pageSize=${pageSize}`,
	// 	method: 'GET',
	// })

	return Promise.resolve({
		"code": 0,
		"data": {
			"records": [{
					"recordId": 0,
					"fullName": "Terence Lam Production Co. ",
					"abbreviation": "小林不动产",
					"location": "Terence Lam Production & Co.",
					"district": "string",
					"phoneNumber": "17788890987",
					"receiptStatus": 0,
					"principalInfo": "string",
					"coordinate": {
						"latitude": 32.123456,
						"longitude": 118.123456
					},
					"pictureList": [{
						"type": 0,
						"url": "https://i2.hdslb.com/bfs/face/e79a36c16c6398cb59cdc077b754fe920c243323.jpg"
					}],
					"recordState": 0,
					"craeteTime": "string",
					"marketerId": 0,
					"marketerName": "string"
				},
				{
					"recordId": 1,
					"fullName": "string",
					"abbreviation": "string",
					"location": "string",
					"district": "string",
					"phoneNumber": "string",
					"receiptStatus": 0,
					"principalInfo": "string",
					"coordinate": {
						"latitude": 32.123456,
						"longitude": 118.123456
					},
					"pictureList": [{
						"type": 0,
						"url": "https://i2.hdslb.com/bfs/face/e79a36c16c6398cb59cdc077b754fe920c243323.jpg"
					}],
					"recordState": 0,
					"craeteTime": "string",
					"marketerId": 0,
					"marketerName": "string"
				}
			],
			"total": 0,
			"size": 5,
			"current": 1,
			"orders": [],
			"optimizeCountSql": true,
			"searchCount": true,
			"countId": null,
			"maxLimit": null,
			"pages": 0
		},
		"msg": "string"
	})
}

export const getMerchantDetail = (recordId) => {
	return request({
		url: `${PREFIX}/${recordId}`,
		method: 'GET',
	})
}
