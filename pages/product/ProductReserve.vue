<template>
	<view class="reserve-form">
		<view class="product">
			<view style="font-weight: bold;">您正在预约的产品是：</view>
			<view style="text-align: center;line-height: 80rpx;">{{product.name}}</view>
			<view style="font-weight: bold;">产品id：{{product.productId}}</view>
		</view>
		<u--form :model="model" ref="reserveForm" label-position="top" label-width="200px">
			<u-form-item label="客户姓名" prop="product.customerName" borderBottom ref="customoerName">
				<u--input v-model="model.product.customerName" placeholder="请输入客户姓名"></u--input>

			</u-form-item>
			<u-form-item label="客户身份证号" prop="product.customerId" borderBottom ref="customoerId">
				<u--input v-model="model.product.customerId" placeholder="请输入客户18位身份证号"></u--input>
			</u-form-item>
			<u-form-item label="客户手机号" prop="product.contact" borderBottom ref="contact">
				<u--input value="number" v-model="model.product.contact" placeholder="请输入客户手机号"></u--input>
			</u-form-item>
			<u-form-item label="预约地点" prop="product.reserveLocation" borderBottom ref="reserveLocation">
				<u--input style="width: 60%;" v-model="model.product.reserveLocation" suffixIcon="map-fill"
					suffixIconStyle="color: #909399" placeholder="请定位" disabled></u--input>
				<template #right>
					<u-button @tap="getAddressText()">点击定位</u-button>
				</template>
			</u-form-item>
		</u--form>
		<u-button type="primary">提交</u-button>
	</view>
</template>

<script>
	import {
		getAddress,
		qqmapsdk
	} from '../../utils/location.js'

	export default {
		data() {
			return {
				product: {
					marketerId: 1,
					productId: 130,
					name: '中欧医疗混合基金A',
					customerName: '',
					customerId: '423232399345666644', // 身份证号
					contact: '13588842522',
					reserveTime: '2022-02-02 19:22:33',
					reserveLocation: '江苏省南京市鼓楼区汉口路22号'
				},
				model: {
					product: {
						marketerId: 1,
						productId: 130,
						customerName: '',
						customerId: '', // 身份证号
						contact: '',
						reserveLocation: '',
					}
				},
				rules: {
					'product.cutomerName': {
						type: 'string',
						required: true,
						message: '请填写姓名',
						trigger: ['blur', 'change'],
					},
					'product.customerId': {
						type: 'string',
						required: true,
						message: '请填写身份证号',
						trigger: ['blur', 'change'],
					},
					'product.contact': [{
						type: 'string',
						required: true,
						message: '请填写手机号',
						trigger: ['blur', 'change'],
					}, {
						validator: (rule, value, callback) => {
							return uni.$u.test.mobile(value);
						},
						message: '手机号码不正确',
						trigger: ['change', 'blur'],
					}],
				},
				location: {
					longitude: 66.66,
					latitude: 13.33,
				}
			}
		},
		methods: {
			getAddressText: function() {
				uni.getLocation({
					success: (res) => {
						this.location.longitude = res.longitude;
						this.location.latitude = res.latitude;
						qqmapsdk.reverseGeocoder({
							location: this.location,
							success: (res) => {
								console.log(res.result, '详细地址信息'); //这里边就是你需要的定位数据了
								this.product.reserveLocation = res.result.address;
								this.model.product.reserveLocation = res.result.address;
							},
						})
					},
					fail: (res) => {
						uni.showToast({
							'title': '获取定位失败！请检查是否开启定位权限。'
						})
					},
					complete: (res) => {
						// getAddress(this.location).then(res => {
						// 	console.log(res.result)
						// 	this.product.reserveLocation = res.result.address;
						// 	this.model.product.reserveLocation = res.result.address;
						// })


					}
				})

			}
		},
		onLoad() {
			// this.getAddressText()
			// getAddress()
		},
		onReady() {
			this.$refs.reserveForm.setRules(this.rules);
		}
	}
</script>

<style lang="scss">
	.reserve-form{
		margin: 10rpx 20rpx;
		padding: 40rpx 20rpx;
		border-radius: 20rpx;
		background-color: #ffffff;
		.product{
			border-radius: 20rpx;
			border: solid 1rpx #c8c7cc;
			padding: 20rpx 20rpx;
		}
	}
</style>
