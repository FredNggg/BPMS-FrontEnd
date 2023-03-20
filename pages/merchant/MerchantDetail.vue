<template>
	<view>
		<u--form labelPosition="left" labelWidth="160rpx">
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
		<u-divider></u-divider>
		<view class="title">建档信息</view>
		<u--form labelPosition="left" labelWidth="160rpx">
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
					"marketerName": "孟晚舟"
				},
			}
		},
		methods: {
			generatePictureUrlArray(list){ // 把 pictureList 中的图片url提取到array中
				const res = [];
				for(let item in list){
					res.push(item.url);
				}
				return res;
			}
		}
	}
</script>

<style>
	.title{
		text-align: center;
	}
	
</style>
