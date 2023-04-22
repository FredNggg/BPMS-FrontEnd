<template>
	<view class="success">
		<view ><u-icon  name="checkmark-circle-fill" color="#60c751" size="200rpx"></u-icon></view>
		
		<view class="text">注册成功</view>
		<view class="text">注册结果将由短信通知</view>
		<u-button size="large" width="200rpx" @tap="refresh">返回主页</u-button>
	</view>
	 
</template>

<script>
	export default {
		data() {
			return {
				
			} 
		},
		methods: {
			refresh(){
				uni.redirectTo({
					url: '/pages/index/index'
				})
			}
		}
	}
</script>

<style>
	.success{
		margin-top: 150rpx;
		padding: 30rpx;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	.text{
		width: 100%;
		font-size: 48rpx;
		text-align: center;
		margin-bottom: 20rpx;
	}
</style>