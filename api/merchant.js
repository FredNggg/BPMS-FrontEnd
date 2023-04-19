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

export const getMerchantListByRecordState = (recordState, currPage, pageSize = 10) => {
	// return request({
	// 	url: `${PREFIX}/marketer/recordState/${recordState}?currPage=${currPage}&pageSize=${pageSize}`,
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

export const createMerchant = function({
	recordId,
	fullName,
	abbreviation,
	location,
	district,
	phoneNumber,
	coordinate,
	receiptStatus,
	principalInfo,
	pictureList,
	recordState,
	// 以下为营业执照信息ocr
	creditCode, //统一社会信用代码
	unitName, // 单位名称
	address, // 地址
	compositionForm, // 组成形式
	businessScope, // 经营范围
	establishmentDate, // 成立日期
	legalPersonName, // 法人姓名
	legalPersonContact, // 法人联系方式
	registeredCapital, // 注册资本
	idNumber, // 证件编号
	validityTime, // 有效期
	approvalDate, // 核准日期
	companyType, // 公司类型
	// 以下为身份证ocr
	chargeName, // 实际负责人姓名
	chargeGender, // 实际负责人性别
	chargeBirth, // 实际负责人出生
	chargeNationality, // 实际负责人民族
	chargeContact, // 实际负责人联系方式
	chargeAddress, // 实际负责人住址
	chargeIdNumber, // 实际负责人身份证号码
	idCardIssueDate, // 负责人身份证签发日期
	idCardExpiryDate, // 负责人身份证失效日期
}) {
	const data = {
		recordId: recordId,
		fullName: fullName,
		abbreviation: abbreviation,
		location: location,
		district: district,
		phoneNumber: phoneNumber,
		coordinate: coordinate,
		receiptStatus: receiptStatus,
		principalInfo: principalInfo,
		pictureList: pictureList,
		recordState: recordState,
		creditCode: creditCode,
		unitName: unitName,
		address: address,
		compositionForm: compositionForm,
		businessScope: businessScope,
		establishmentDate: establishmentDate,
		legalPersonName: legalPersonName,
		legalPersonContact: legalPersonContact,
		registeredCapital: registeredCapital,
		idNumber: idNumber,
		validityTime: validityTime,
		approvalDate: approvalDate,
		companyType: companyType,
		chargeName: chargeName,
		chargeGender: chargeGender,
		chargeBirth: chargeBirth,
		chargeNationality: chargeNationality,
		chargeContact: chargeContact,
		chargeAddress: chargeAddress,
		chargeIdNumber: chargeIdNumber,
		idCardIssueDate: idCardIssueDate,
		idCardExpiryDate: idCardExpiryDate,
	};
	return request({
		url: `${PREFIX}/submission`,
		method: 'POST',
		data: data,
	})
};