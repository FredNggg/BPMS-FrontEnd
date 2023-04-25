import Request from '@/utils/request.js';
import operate from '@/common/operate.js';

let request = (new Request()).http;

const PREFIX = '/merchants'


export const getAllMerchants = (currPage, pageSize = 10) => {
	return request({
		url: `${PREFIX}/all/?currPage=${currPage}&pageSize=${pageSize}`,
		method: 'GET',
	})
}

export const getMerchantListByMarketer = (marketerId, currPage, pageSize = 10) => {
	return request({
		url: `${PREFIX}/marketer/${marketerId}?currPage=${currPage}&pageSize=${pageSize}`,
		method: 'GET',
	})


}

export const getMerchantDetail = (recordId) => {
	return request({
		url: `${PREFIX}/detail/${recordId}`,
		method: 'GET',
	})
}

export const getMerchantListByRecordState = (recordState, currPage, pageSize = 10) => {
	return request({
		url: `${PREFIX}/recordState/${recordState}?currPage=${currPage}&pageSize=${pageSize}`,
		method: 'GET',
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
	marketerId,
	marketerLocation,
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
		currentState: 1,
		marketerId: marketerId,
		marketerLocation: marketerLocation,
	};
	return request({
		url: `${PREFIX}/submission`,
		method: 'POST',
		data: data,
	})
};

export const merchantCheck = (merchantId, auditorId, recordState, explanation = '') => {
	return request({
		url: `${PREFIX}/audit/${merchantId}?auditorId=${auditorId}&recordState=${recordState}&explanation=${explanation}`,
		method: 'POST',
	})
}

export const getTrackByMarketerId = (marketerId, date) => {
	return request({
		url: `${PREFIX}/track/${marketerId}/date?date=${date}`,
		method: 'GET',
	})
}