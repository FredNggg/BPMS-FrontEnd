/**
* 建档列表
*/
<template>

	<view>
		<u-sticky>
			<u-search placeholder="请输入商户名称" @change="search" :clearabled="true" v-model="keyword"></u-search>
		</u-sticky>
		<u-list>
			<u-list-item v-for="(item, index) in records">
				<view class="merchant" @tap="toDetail(item.id, item.fullName)">
					<u--image :src="item.doorwayUrl" width="100rpx" height="100rpx" radius="20rpx"></u--image>
					<view class="text">
						<view class="title">{{item.abbreviation}}</view>
						<view class="info">
							<u-icon name="level" color="#999" label-color="#999" label-size="24rpx"
								:label="item.fullName">
							</u-icon>
						</view>
						<view class="info">
							<u-icon name="map" color="#999" label-color="#999" label-size="24rpx"
								:label="item.location">
							</u-icon>
						</view>
						<view class="info">
							<u-icon name="clock" color="#999" label-color="#999" label-size="24rpx"
								:label="item.lastTime"></u-icon>
						</view>
					</view>
				</view>



			</u-list-item>
		</u-list>
	</view>
</template>

<script>
	import {
		getMerchantListByMarketer,
		getAllMerchants,
		searchMerchant
	} from '@/api/merchant.js'

	export default {
		name: "MerchantList",
		props: ['mode'],
		data() {
			return {
				keyword: '',
				currPage: 1,
				userId: null,
				records: [{
						"recordId": 65,
						"fullName": "华为电子通信有限公司(南京)鼓楼营业部",
						"abbreviation": "华为（南京鼓楼分部）",
						"location": "江苏省南京市汉口路22号",
						"district": "循化撒拉族自治县",
						"phoneNumber": "13682325325",
						"receiptStatus": 25,
						"principalInfo": "minim aliquip exercitation id officia",
						"recordState": 24,
						"pictureList": [{
								"type": 13,
								"url": "https://cdn.uviewui.com/uview/album/1.jpg"
							},
							{
								"type": 17,
								"url": "http://nkmrpfjs.es/yde"
							},
							{
								"type": 55,
								"url": "http://decuieyddl.gy/odcgwpx"
							}
						],
						"coordinate": {
							"latitude": 36,
							"longitude": 74
						},
						"createTime": "2000-01-23 16:58:13",
						"marketerId": 12,
						"marketerName": "亲称群温色识"
					},

					{
						"recordId": 46,
						"fullName": "更收有取达八",
						"abbreviation": "cillum in",
						"location": "magna",
						"district": "竹田乡",
						"phoneNumber": "15",
						"receiptStatus": 98,
						"principalInfo": "Excepteur ipsum Ut ut anim",
						"recordState": 95,
						"pictureList": [{
								"type": 32,
								"url": "https://cdn.uviewui.com/uview/album/1.jpg"
							},
							{
								"type": 70,
								"url": "http://bwubhbxyvc.mw/sjjmcp"
							},
							{
								"type": 30,
								"url": "http://wcmiw.ye/pfkjmck"
							},
							{
								"type": 58,
								"url": "http://cuneouty.hn/sznuuzfx"
							}
						],
						"coordinate": {
							"latitude": 98,
							"longitude": 8
						},
						"createTime": "2001-06-19 22:48:43",
						"marketerId": 87,
						"marketerName": "和受开学再群"
					},
					{
						"recordId": 91,
						"fullName": "质才三色",
						"abbreviation": "anim irure ut",
						"location": "est ad",
						"district": "兴业县",
						"phoneNumber": "53",
						"receiptStatus": 44,
						"principalInfo": "mollit ea",
						"recordState": 68,
						"pictureList": [{
							"type": 73,
							"url": "https://cdn.uviewui.com/uview/album/1.jpg"
						}],
						"coordinate": {
							"latitude": 98,
							"longitude": 8
						},
						"createTime": "1997-06-22 06:14:24",
						"marketerId": 64,
						"marketerName": "我志号别"
					}
				],
			};
		},
		methods: {
			toDetail(id, fullName) {
				if (this.mode == 0) {
					const item = {
						merchantId: id,
						merchantName: fullName
					};

					uni.$emit('selectedMerchant', item)
					// uni.setStorageSync('selectedInstitution',item)
					uni.navigateBack({
						delta: 1
					});
				} else if (this.mode == 1) {
					uni.navigateTo({
						url: `/pages/merchant/MerchantDetail?id=${id}`
					})
				}

			},
			getMerchantList(mode) { // mode==1 管理员获取全部, mode==0 营销人员预约选择
				if (mode == 1) {
					getAllMerchants(this.currPage).then(res => {
						this.records = res.data.records;
					})
				} else if (mode == 0) {
					getMerchantListByMarketer(this.userId, this.currPage).then(
						res => {
							this.records = res.data.records;
						});
				}
			},
			search(value) {
				this.currPage = 1;
				searchMerchant(value, this.currPage).then(
					res => {
						const data = res.data.records;
						this.records = data;
					})
			},
		},
		created() {
			this.userId = uni.getStorageSync('userInfo').id;
			this.getMerchantList(this.mode);
		}

	}
</script>

<style lang="scss">
	.merchant {
		display: flex;
		flex-direction: row;
		width: 100%;
		background-color: #ffffff;
		margin: 10rpx 20rpx;
		// border-radius: 20rpx;
		padding: 10rpx 20rpx;
		align-items: center;

		.text {
			margin-left: 20rpx;

			.title {
				font-weight: bolder;
				font-size: 32rpx;
			}

			.info {
				font-size: 24rpx;
				margin-bottom: 5rpx;
				color: $uni-text-color-grey;
			}
		}
	}
</style>