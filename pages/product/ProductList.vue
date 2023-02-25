<template>
	<view>
		<u-sticky>
			<u-picker :show="filterShow" :columns="filterColumns" @confirm="filterConfirm" @cancel="filterShow = false">
			</u-picker>
			<u-button @tap="filterShow = true">{{filterText}}</u-button>
		</u-sticky>
		<u-list>
			<u-list-item v-for="(item, index) in products">
				<view class="product-item">
					<text class="product-name">{{item.name}}</text>

					<view class="product-description">
						{{item.description}}
					</view>
					<view class="label">
						<u-tag :color="typeColor[item.type]" :border-color="typeColor[item.type]"
							:text="type[item.type]" plain size="mini"></u-tag>
						<u-icon style="margin-left: 8px;" name="clock" :label="item.date.split(' ')[0]"></u-icon>
						<u-icon label="预约" @tap="reserve(item.id)"
						style="margin-left: auto;"  label-pos="left" name="arrow-right"></u-icon>
					</view>
				</view>
			</u-list-item>
		</u-list>
	</view>
</template>

<script>
	export default {

		data() {
			return {
				filterShow: false,
				filterText: '全部产品',
				filterColumns: [
					['借贷产品', '储蓄产品', '理财产品', '网银产品', '保险产品', '全部产品']
				],
				type: ['借贷产品', '储蓄产品', '理财产品', '网银产品', '保险产品'],
				typeColor: ['#EEB154', '#77C545', '#E47440', '#5E91E8', '#5A105D'],
				products: [{
						id: 129,
						name: "易方达蓝筹混合精选",
						type: 2,
						date: "2023-02-10 15:36:13",
						adminId: 40,
						description: "写七子重命制手维样使山器门名。太做量任开率也装易门关收始。最候和平拉光正热族候部类种和更。"
					},
					{
						id: 128,
						name: "中欧医疗健康混合A",
						type: 0,
						date: "2023-02-10 15:36:13",
						adminId: 40,
						description: "本基金主要投资于医疗健康相关行业股票,在有效控制投资组合风险的前提下,通过积极主动的资产配置,力争获得超越业绩比较基准的收益。"
					},
					{
						id: 130,
						name: "中银原油宝",
						type: 4,
						date: "2023-02-10 15:36:13",
						adminId: 40,
						description: "“原油宝”，是中国银行于2018年1月开办“原油宝”产品，为境内个人客户提供挂钩境外原油期货的交易服务。其中，美国原油品种挂钩芝加哥商品交易所（CME）的德州轻质原油（WTI）期货首行合约。"
					},
					{
						id: 130,
						name: "易方达蓝筹混合精选",
						type: 3,
						date: "2023-02-10 15:36:13",
						adminId: 40,
						description: "写七子重命制手维样使山器门名。太做量任开率也装易门关收始。最候和平拉光正热族候部类种和更。"
					},
					{
						id: 130,
						name: "易方达蓝筹混合精选",
						type: 4,
						date: "2023-02-10 15:36:13",
						adminId: 40,
						description: "写七子重命制手维样使山器门名。太做量任开率也装易门关收始。最候和平拉光正热族候部类种和更。"
					},
				]
			}
		},
		methods: {
			filterConfirm(e) {
				this.filterShow = false;
				this.filterText = e.value[0];
			},
			reserve(productId) {
				uni.navigateTo({
					url: `/pages/product/ProductReserve?id=${productId}`,
					animationType: 'slide-in-bottom',
				})
			}
		}
	}
</script>

<style lang="scss">
	.product-item {
		margin: 14rpx 20rpx;
		padding: 16rpx 24rpx;
		background-color: white;
		border-radius: 20rpx;

		.product-name {
			font-size: 32rpx;
			font-weight: bold;
		}

		.product-description {
			background-color: #f8f8f8;
			padding: 16rpx 16rpx;

			overflow: hidden;
			-webkit-box-orient: vertical;
			/*设置显示的行数，多出的部分会显示为...*/
			-webkit-line-clamp: 2;
			margin-top: 18rpx;
			margin-bottom: 18rpx;
		}

		.label {
			display: flex;
		}
	}
</style>
