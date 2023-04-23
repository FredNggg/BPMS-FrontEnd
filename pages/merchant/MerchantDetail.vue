<template>
	<view>
		<view class="form">
			<u--form labelPosition="left" labelWidth="160rpx"
				labelStyle="border-left: solid 10rpx #48BFFF;padding-left: 10rpx;">
				<u-form-item label="商户简称">
					{{merchant.abbreviation}}
				</u-form-item>
				<u-form-item label="商户全名">
					{{merchant.fullName}}
				</u-form-item>
				<u-form-item label="商户地址">
					{{merchant.location}}
				</u-form-item>
				<u-form-item label="道路/商圈">
					{{merchant.district}}
				</u-form-item>
				<u-form-item label="联系方式">
					{{merchant.phoneNumber}}
				</u-form-item>
				<u-form-item label="实际负责人信息">
					{{merchant.principalInfo}}
				</u-form-item>
				<u-form-item label="照片">
					<u-album :urls="merchant.pictureList" keyName="url"></u-album>
				</u-form-item>
				
			</u--form>
		</view>
		<u-collapse>
			<u-collapse-item title="营业执照相关">
				<u--form labelPosition="left" labelWidth="160rpx"
					labelStyle="border-left: solid 10rpx #48BFFF;padding-left: 10rpx;">
					<u-form-item label="统一社会信用代码">
						{{merchant.creditCode}}
					</u-form-item>
					<u-form-item label="单位名称">
						{{merchant.unitName}}
					</u-form-item>
					<u-form-item label="地址">
						{{merchant.address}}
					</u-form-item>
					<u-form-item label="组成形式">
						{{merchant.compositionForm}}
					</u-form-item>
					<u-form-item label="经营范围">
						{{merchant.businessScope}}
					</u-form-item>
					<u-form-item label="成立日期">
						{{merchant.establishmentDate}}
					</u-form-item>
					<u-form-item label="法人姓名">
						{{merchant.legalPersonName}}
					</u-form-item>
					<u-form-item label="法人联系方式">
						{{merchant.legalPersonContact}}
					</u-form-item>
					<u-form-item label="注册资本">
						{{merchant.registeredCapital}}
					</u-form-item>
					<u-form-item label="证件编号">
						{{merchant.idNumber}}
					</u-form-item>
					<u-form-item label="有效期">
						{{merchant.validityTime}}
					</u-form-item>
					<u-form-item label="核准日期">
						{{merchant.approvalDate}}
					</u-form-item>
					<u-form-item label="公司类型">
						{{merchant.companyType}}
					</u-form-item>
			
				</u--form>
				
			</u-collapse-item>
			<u-collapse-item title="实际负责人信息">
				<u--form labelPosition="left" labelWidth="160rpx"
					labelStyle="border-left: solid 10rpx #48BFFF;padding-left: 10rpx;">
					<u-form-item label="姓名">
						{{merchant.chargeName}}
					</u-form-item>
					<u-form-item label="性别">
						{{merchant.chargeGender === 0? '男':'女'}}
					</u-form-item>
					<u-form-item label="出生日期">
						{{merchant.chargeBirth}}
					</u-form-item>
					<u-form-item label="民族">
						{{merchant.chargeNationality}}
					</u-form-item>
					<u-form-item label="联系方式">
						{{merchant.chargeContact}}
					</u-form-item>
					<u-form-item label="住址">
						{{merchant.chargeAddress}}
					</u-form-item>
					<u-form-item label="身份证号码">
						{{merchant.chargeIdNumber}}
					</u-form-item>
					<u-form-item label="身份证签发日期">
						{{merchant.idCardIssueDate}}
					</u-form-item>
					<u-form-item label="身份证失效日期">
						{{merchant.idCardExpiryDate}}
					</u-form-item>
				</u--form>
			</u-collapse-item>
		</u-collapse>
		<u-divider></u-divider>
		<view class="title">建档信息</view>
		<view class="form">
			<u--form labelPosition="left" labelWidth="160rpx"
				labelStyle="border-left: solid 10rpx #FF689A;padding-left: 10rpx;">
				<u-form-item label="建档时间">
					{{merchant.createTime}}
				</u-form-item>
				<u-form-item label="建档编号">
					{{merchant.marketerId}}
				</u-form-item>
				<u-form-item label="建档姓名">
					{{merchant.marketerName}}
				</u-form-item>
			</u--form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				merchant: {
					"recordId": 65,
					"fullName": "华为电子通信有限公司(南京)鼓楼营业部",
					"abbreviation": "华为（南京鼓楼分部）",
					"location": "江苏省南京市汉口路22号",
					"district": "循化撒拉族自治县",
					"phoneNumber": "13682325325",
					"receiptStatus": 25,
					"principalInfo": "minim aliquip exercitation id officia",
					"recordState": 24,
					"pictureList": [{ //0 - 营业执照，1 - 身份证证明，2 - 身份证背面，3 - 商户门头，4 - 其他照片
							"type": 0,
							"url": "https://cdn.uviewui.com/uview/album/1.jpg"
						},
						{
							"type": 1,
							"url": "https://cdn.uviewui.com/uview/album/2.jpg"
						},
						{
							"type": 2,
							"url": "https://cdn.uviewui.com/uview/album/3.jpg"
						},
						{
							"type": 2,
							"url": "https://cdn.uviewui.com/uview/album/3.jpg"
						},
						{
							"type": 2,
							"url": "https://cdn.uviewui.com/uview/album/3.jpg"
						}
					],
					"coordinate": {
						"latitude": 36,
						"longitude": 74
					},
					"createTime": "2000-01-23 16:58:13",
					"marketerId": 12,
					"marketerName": "孟晚舟",
					"creditCode": "ABCDE123456789",
					"unitName": "金拱门（中国）有限公司",
					"address": "江苏省南京市鼓楼区广州路19号",
					"compositionForm": "",
					"businessScope": "餐饮业",
					"establishmentDate": "2019-09-01",
					"legalPersonName": "liulu",
					"legalPersonContact": "17352252954",
					"registeredCapital": "1000万",
					"idNumber": "1000000000",
					"validityTime": "2020-09-01",
					"approvalDate": "2060-09-01",
					"companyType": "有限责任公司",
					"chargeName": "liulu",
					"chargeGender": 1,
					"chargeBirth": "2002-09-24",
					"chargeNationality": "汉",
					"chargeContact": "17352252954",
					"chargeAddress": "南京大学陶园南楼",
					"chargeIdNumber": "620123000000000000",
					"idCardIssueDate": "2019-07-01",
					"idCardExpiryDate": "2029-07-01",
					"currentState": 2,
					"lastTime": "2023-04-16 19:26:42",
					"marketerId": 1,
					"marketerLocation": {
						"latitude": 33.050361,
						"longitude": 118.782421
					},
				},
			}
		},
		methods: {
			generatePictureUrlArray(list) { // 把 pictureList 中的图片url提取到array中
				const res = [];
				for (let item in list) {
					res.push(item.url);
				}
				return res;
			}
		}
	}
</script>

<style>
	.title {
		text-align: center;
	}

	.form {
		padding: 0rpx 20rpx;
	}
</style>