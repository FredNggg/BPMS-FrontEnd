/**
* 商户建档
*/
<template>
	<view>
		<u--form :model="recordInfo" ref="createForm" label-position="top" label-width="200rpx">
			<u-form-item label="商户名称" prop="fullName" borderBottom ref="fullName">
				<u--input v-model="recordInfo.fullName" placeholder="请输入商户名称"></u--input>
			</u-form-item>
			<u-form-item label="商户简称" prop="abbreviation" borderBottom ref="abbreviation">
				<u--input v-model="recordInfo.abbreviation" placeholder="请输入商户简称"></u--input>
			</u-form-item>
			<u-form-item label="商户联系方式" prop="phoneNumber" borderBottom ref="phoneNumber">
				<u--input v-model="recordInfo.phoneNumber" placeholder="请输入商户联系方式"></u--input>
			</u-form-item>
			<u-form-item label="商户名称" prop="fullName" borderBottom ref="name">
				<u--input v-model="recordInfo.fullName" placeholder="请输入商户名称"></u--input>
			</u-form-item>
			<u-form-item label="实际负责人信息" prop="fullName" borderBottom ref="name">
				<u--textarea v-model="recordInfo.principalInfo" placeholder="请输入实际负责人信息"></u--textarea>
			</u-form-item>
			<u-form-item label="商户位置" prop="location" borderBottom>
				<u--input style="width: 60%;" v-model="recordInfo.location" suffixIcon="map-fill"
					suffixIconStyle="color: #909399" placeholder="请定位" disabled></u--input>
				<template #right>
					<u-button @tap="getAddressText">点击定位</u-button>
				</template>
			</u-form-item>
			<u-form-item label="商圈位置" prop="location" borderBottom>
				<u--input style="width: 60%;" v-model="recordInfo.district" suffixIcon="map-fill"
					suffixIconStyle="color: #909399" placeholder="请先定位, 系统自动识别" disabled></u--input>
			</u-form-item>
		</u--form>
	</view>
</template>

<script>
	import {
		getAddress,
		qqmapsdk
	} from '../../utils/location.js';
	export default {
		data() {
			return {

				recordInfo: {
					recordId: 0,
					fullName: "",
					abbreviation: "",
					location: "",
					district: "",
					phoneNumber: "",
					coordinate: {
						latitude: 32.123456,
						longitude: 118.123456
					},
					receiptStatus: 0,
					principalInfo: "",
					pictureList: [{
						type: 0,
						url: "",
					}],
					recordState: 0
				},
				model: {

				}

			}
		},
		methods: {
			getAddressText() {
				uni.getLocation({
					success: (res) => {
						this.recordInfo.coordinate.longitude = res.longitude;
						this.recordInfo.coordinate.latitude = res.latitude;
						console.log(this.recordInfo.coordinate)
						qqmapsdk.reverseGeocoder({
							location: this.location,
							success: (res) => {
								const result = res.result;
								console.log(result, '详细地址信息'); //这里边就是你需要的定位数据了
								this.recordInfo.location = result.address;
								const districtText = `${result.address_component.province}-${result.address_component.city}-${result.address_component.district}-${result.address_reference.business_area.title}`
								this.recordInfo.district = districtText;
							},
						})
					},
					fail: (res) => {
						uni.showToast({
							'title': '获取定位失败！请检查是否开启定位权限。'
						})
					},
					complete: (res) => {
						
					}
				})
			}
		}
	}
</script>

<style>

</style>
