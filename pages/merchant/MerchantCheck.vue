/**
* 商户审核
*/
<template>
	<view>
		<view v-if="records.length === 0" class="empty"> 暂无待审核的商户建档</view>
		<u-list>
			<u-list-item v-for="(item, index) in records">
				<view class="whole">
					<view class="merchant" @tap="toDetail(item.id)">
						<u--image :src="item.doorwayUrl" width="100rpx" height="100rpx"
							radius="20rpx"></u--image>
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
					<view class="check">
						<u-icon @tap="approveMerchant(item.id)" name="checkmark" color="#2979ff"
							label-color="#2979ff" size="24" label="通过"></u-icon>
						<u-icon @tap="reject(item.id)" name="close" color="#f98172" label-color="#f98172" size="24" label="驳回"></u-icon>
					</view>

				</view>

			</u-list-item>
		</u-list>
		<u-popup :show="rejectShow" :round="10" mode="bottom">
			<view class="reject">
				您已选择驳回该建档：
				<view style="margin-bottom: 30rpx;"><u--textarea v-model="explanation" placeholder="请填写驳回理由" ref="textarea"></u--textarea></view> 
				<view style="margin-bottom: 30rpx;"><u-button text="提交" @tap="submitReject()" type="primary"></u-button></view>
				
				<u-button text="取消" @tap="close"></u-button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import {
		getMerchantListByRecordState,
		merchantCheck
	} from '@/api/merchant.js'
	// 审核通过 recordState2, 拒绝为3
	export default {
		name: "MerchantList",
		data() {
			return {
				currPage: 1,
				auditorId: null,
				records: [
					// {
					// 	"recordId": 65,
					// 	"fullName": "华为电子通信有限公司(南京)鼓楼营业部",
					// 	"abbreviation": "华为（南京鼓楼分部）",
					// 	"location": "江苏省南京市汉口路22号",
					// 	"district": "循化撒拉族自治县",
					// 	"phoneNumber": "13682325325",
					// 	"receiptStatus": 25,
					// 	"principalInfo": "minim aliquip exercitation id officia",
					// 	"recordState": 24,
					// 	"pictureList": [{
					// 			"type": 13,
					// 			"url": "https://cdn.uviewui.com/uview/album/1.jpg"
					// 		},
					// 		{
					// 			"type": 17,
					// 			"url": "http://nkmrpfjs.es/yde"
					// 		},
					// 		{
					// 			"type": 55,
					// 			"url": "http://decuieyddl.gy/odcgwpx"
					// 		}
					// 	],
					// 	"coordinate": {
					// 		"latitude": 36,
					// 		"longitude": 74
					// 	},
					// 	"createTime": "2000-01-23 16:58:13",
					// 	"marketerId": 12,
					// 	"marketerName": "亲称群温色识"
					// },

					// {
					// 	"recordId": 46,
					// 	"fullName": "更收有取达八",
					// 	"abbreviation": "cillum in",
					// 	"location": "magna",
					// 	"district": "竹田乡",
					// 	"phoneNumber": "15",
					// 	"receiptStatus": 98,
					// 	"principalInfo": "Excepteur ipsum Ut ut anim",
					// 	"recordState": 95,
					// 	"pictureList": [{
					// 			"type": 32,
					// 			"url": "https://cdn.uviewui.com/uview/album/1.jpg"
					// 		},
					// 		{
					// 			"type": 70,
					// 			"url": "http://bwubhbxyvc.mw/sjjmcp"
					// 		},
					// 		{
					// 			"type": 30,
					// 			"url": "http://wcmiw.ye/pfkjmck"
					// 		},
					// 		{
					// 			"type": 58,
					// 			"url": "http://cuneouty.hn/sznuuzfx"
					// 		}
					// 	],
					// 	"coordinate": {
					// 		"latitude": 98,
					// 		"longitude": 8
					// 	},
					// 	"createTime": "2001-06-19 22:48:43",
					// 	"marketerId": 87,
					// 	"marketerName": "和受开学再群"
					// },
					// {
					// 	"recordId": 91,
					// 	"fullName": "质才三色",
					// 	"abbreviation": "anim irure ut",
					// 	"location": "est ad",
					// 	"district": "兴业县",
					// 	"phoneNumber": "53",
					// 	"receiptStatus": 44,
					// 	"principalInfo": "mollit ea",
					// 	"recordState": 68,
					// 	"pictureList": [{
					// 		"type": 73,
					// 		"url": "https://cdn.uviewui.com/uview/album/1.jpg"
					// 	}],
					// 	"coordinate": {
					// 		"latitude": 98,
					// 		"longitude": 8
					// 	},
					// 	"createTime": "1997-06-22 06:14:24",
					// 	"marketerId": 64,
					// 	"marketerName": "我志号别"
					// }
				],
				explanation: '',
				rejectId: 0,
				rejectShow: false,
			};
		},
		methods: {
			toDetail(id) {
				uni.navigateTo({
					url: `/pages/merchant/MerchantDetail?id=${id}`
				})
			},
			approveMerchant(merchantId) {
				merchantCheck(merchantId, this.auditorId, 2)
				uni.showToast({
					title: '已通过'
				})
				getMerchantListByRecordState(1, this.currPage).then(
					res => {
						this.records = res.data.records;
					}
				);
			},
			reject(merchantId) {
				this.rejectId = merchantId;
				this.rejectShow = true;
			},
			submitReject(){
				if(this.explanation.length === 0){
					uni.showToast({
						icon: 'error',
						title: '请填写理由'
					})
				} else {
					merchantCheck(this.rejectId, this.auditorId, 3, this.explanation)
					uni.showToast({
						title: '已驳回'
					})
					this.rejectShow = false;
					getMerchantListByRecordState(1, this.currPage).then(
						res => {
							this.records = res.data.records;
						}
					);
				}
			},
			close() {
				this.rejectShow = false;
				// console.log('close');
			}
		},
		created() {
			getMerchantListByRecordState(1, this.currPage).then(
				res => {
					this.records = res.data.records;
				}
			);
			this.auditorId = uni.getStorageSync('userInfo').id;
		}

	}
</script>

<style lang="scss">
	.empty {
		text-align: center;
		color: #787878;
		margin-top: 30rpx;

	}

	.whole {
		display: flex;
	}

	.check {
		width: 30%;
		padding: 40rpx 0;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-content: space-around;
	}

	.merchant {
		display: flex;
		flex-direction: row;
		width: 60%;
		background-color: #ffffff;
		margin: 10rpx 20rpx;
		// border-radius: 20rpx;
		padding: 10rpx 20rpx;
		align-items: center;
		border-radius: 10rpx;

		.text {
			margin-left: 20rpx;
			overflow: hidden;
			/*文本不会换行*/
			white-space: nowrap;
			/*当文本溢出包含元素时，以省略号表示超出的文本*/
			text-overflow: ellipsis;

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
	
	.reject{
		padding: 30rpx;
	}
</style>