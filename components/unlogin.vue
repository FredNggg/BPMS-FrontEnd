<template>
	<view class="content">
		<text class="title">您尚未登录，请先登录！</text>
		
		
			<button type="primary" @tap="navigateTo(`/pages/about/login`)">登录</button>

			<button type="plain" @tap="navigateTo(`/pages/about/register`)">注册</button>
	</view>
</template>

<script>
	export default {
		name: "unlogin",
		data() {
			return {

			};
		},
		methods: {
			navigateTo: function(url){
				uni.navigateTo({
					url: url
				})
			}
		}
	}
</script>

<style>
	.content {
		margin-top: 500rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

	}

	button {
		justify-content: center;
		margin-top: 30rpx;
		width: 60%;
	}

	.title {
		font-size: 36rpx;
	}
</style>
