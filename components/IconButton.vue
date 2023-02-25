// 首页和功能页的图标+文字
<template>
	<view>
		<navigator :url="navUrl" class="icon">
			<image class="image" :src="imgUrl"></image>
			<text class="name">{{text}}</text>
		</navigator>
	</view>
</template>

<script>
	export default {
		name: "IconButton",
		props: ["navUrl", "imgUrl", "text"],
		data() {
			return {

			};
		}
	}
</script>

<style>
view{
	display: inline-block;
}	
	
.icon{
	width: 140rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin:0 10rpx;
}

.name{
	
}

.image{
	height: 70rpx;
	width: 70rpx;
	padding: 10rpx 0;
}
</style>
