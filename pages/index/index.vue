<template>
	<view class="content">
		<swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1500">
			<swiper-item class="swiper-item" v-for="(item,index) in headerList" :key="index">
			
				<image :src="item.imgUrl" mode="aspectFill"></image>
			</swiper-item>
		</swiper>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				headerList: [{
					imgUrl: '/static/image/header1.jpg',
					linkUrl: '',
				}, {
					imgUrl: '/static/image/header2.jpg',
					linkUrl: '',
				}, ]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.swiper {
		height: 400rpx;
		padding: 20rpx;
		
	}

	.swiper-item {
		display: block;
		height: 400rpx;
		line-height: 400rpx;
		text-align: center;
		border-radius: 20rpx;
	}

	.swiper-item image {
		width: 100%;
		height: 400rpx;
	}

	

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
