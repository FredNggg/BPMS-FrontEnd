<template>
	<view>
		<view class="title">您选择了 {{list.length}} 个网格:</view>
		<u-list height="800rpx" width="100%">
			<u-list-item v-for="(item, index) in list">
				<u-cell :title="item.name" :label="item.address" isLink></u-cell>
			</u-list-item>
		</u-list>
	</view>
</template>

<script>
	export default {
		name: "GridList",
		props: ['list'],
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
.title{
	font-size: 36rpx;
	font-weight: bold;
	padding: 20rpx 20rpx;
}
</style>
