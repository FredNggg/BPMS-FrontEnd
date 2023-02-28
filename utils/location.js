import QQMapWX from '@/libs/qqmap-wx-jssdk.min.js';
import {
	jsonp
} from '@/utils/jsonp.js'
// let QQMapWX = require('@/libs/qqmap-wx-jssdk.js');

const key = 'PCSBZ-4U6YX-VQ44V-T25MN-4QUDH-IRFLF';

export const qqmapsdk = new QQMapWX({
	key: 'PCSBZ-4U6YX-VQ44V-T25MN-4QUDH-IRFLF'
});

export function getCoordinate() { // 获取当前坐标

};

export async function getAddress({
	longitude,
	latitude
}) {
	let res = await jsonp(
		`https://apis.map.qq.com/ws/geocoder/v1/?location=${latitude},${longitude}`, {
			key: key,
			output: 'jsonp'
		}
	)
	return res;
}
