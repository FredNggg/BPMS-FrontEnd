<template>
	<view>
		{{merchantId}}
		{{history}}
		<u-collapse>
			<u-collapse-item v-for="(item, index) in history" :title="item.recordTime" >
				<u--form label-width="180rpx">
					<u-form-item label="档案id">{{item.recordId}}</u-form-item>
					<u-form-item label="商户id">{{item.merchantId}}</u-form-item>
					<u-form-item label="建档人姓名">{{item.recorderName}}</u-form-item>
					<u-form-item label="建档时间">{{item.recordTime}}</u-form-item>
					<u-form-item label="状态">{{item.state}}</u-form-item>
				
		
				</u--form>
			</u-collapse-item>
		</u-collapse>
	</view>
</template>

<script>
	import {getMerchantHistory} from '@/api/merchant.js'
	
	export default {
		data() {
			return {
				merchantId: null,
			
				history: [
					
				]
			}
		},
		methods: {
			
		},
		onLoad(option){
			this.merchantId = option.id;
			getMerchantHistory(this.merchantId).then(res => {
				this.history = res.data;
			})
		}
	}
</script>

<style>

</style>
