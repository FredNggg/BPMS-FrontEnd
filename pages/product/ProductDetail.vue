<template>
	<view class="product">
		<u--form labelPosition="left" labelWidth="180rpx">
			<u-form-item label="产品名称">
				{{product.name}}
			</u-form-item>
			<u-form-item label="产品类型">
				{{type[product.type]}}
			</u-form-item>
			<u-form-item label="创建时间">
				{{product.createTime}}
			</u-form-item>
			<u-form-item label="产品描述">
				{{product.description}}
			</u-form-item>
			<u-form-item label="预约人数">
				{{product.reserveNum}}
			</u-form-item>
		</u--form>
	</view>

</template>

<script>
	import {getProductDetail} from '@/api/product.js'
	
	export default {
		data() {
			return {
				productId: 0,
				product: {
					"id": 1,
					"name": "个人信用贷款",
					"type": 0,
					"createTime": "2023-04-17 19:30:00",
					"adminId": 21,
					"description": "融e借，轻松借，纯信用，最高80万，最快实时到账，最长5年",
					"reserveNum": 1
				},
				type: ['借贷产品', '储蓄产品', '理财产品', '网银产品', '保险产品'],
			}
		},
		methods: {

		},
		onLoad(option) {
			this.productId = option.id;
			console.log(option.id)
			getProductDetail(this.productId).then(
			res => {
				this.product = res.data;
			})
		}
	}
</script>

<style>
	.product{
		margin: 20rpx;
		padding: 20rpx;
		background-color: #ffffff;
		border-radius: 10rpx;
		border: 1rpx #aeaeae solid;
	}
</style>