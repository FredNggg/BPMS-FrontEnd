/**
* 产品发布
*/
<template>
	<view class="reserve-form">
		<u--form :model="model" ref="createForm" label-position="top" label-width="200rpx">
			<u-form-item label="产品名称" prop="product.name" borderBottom ref="name">
				<u--input v-model="model.product.name" placeholder="请输入产品名称"></u--input>
			</u-form-item>
			<u-form-item @tap="filterShow = true" label="产品类型" prop="product.typeText" borderBottom ref="type">
				<u--input v-model="model.product.typeText" disabled disabledColor="#ffffff" placeholder="请选择产品类型">
				</u--input>
				<template #right>
					<u-icon name="arrow-right"></u-icon>
				</template>
			</u-form-item>
			<u-form-item label="产品描述" prop="product.description" borderBottom ref="description">
				<u--textarea value="description" v-model="model.product.description" placeholder="请输入产品描述">
				</u--textarea>
			</u-form-item>
		</u--form>
		<u-picker :show="filterShow" :columns="filterColumns" @confirm="filterConfirm" @cancel="filterShow = false">
		</u-picker>
		<u-button type="primary" @tap="submit">发布</u-button>
		<u-button style="margin-top: 20rpx;" @tap="reset">重置</u-button>
	</view>
</template>

<script>
	import {
		createProduct
	} from '@/api/product.js';
import dayjs from 'dayjs';
	export default {
		data() {
			return {
				product: {
					name: "产品1",
					typeNum: 1,
					date: "",
					adminId: 1,
					description: "产品1的描述"
				},
				model: {
					product: {
						name: "",
						typeText: '',
						typeNum: -1,
						date: "",
						adminId: 1,
						description: ""
					}
				},
				rules: {
					'product.name': {
						type: 'string',
						required: true,
						message: '请填写产品名称',
						trigger: ['blur', 'change'],
					},
					'product.description': {
						type: 'string',
						required: true,
						message: '请填写产品描述',
						trigger: ['blur', 'change'],
					},
					'product.typeText': {
						type: 'string',
						required: true,
						message: '请选择产品类型',
						trigger: ['blur', 'change'],
					},

				},
				filterColumns: [
					['借贷产品', '储蓄产品', '理财产品', '网银产品', '保险产品']
				],
				filterShow: false,
			}
		},
		methods: {
			filterConfirm(e) {
				const typeNum = e.indexs[0],
					typeText = e.value[0];
				this.model.product.typeNum = typeNum;
				this.model.product.typeText = typeText;
				this.filterShow = false;
			},
			submit() {
				
				this.$refs.createForm.validate().then(
					res => {
						this.product = this.model.product;
						const dateText = new dayjs(new Date()).format("YYYY-MM-DD hh:mm:ss");
						createProduct({
							name: this.product.name,
							type: this.product.typeNum,
							description: this.product.description,
							date: dateText,
							adminId: 6,
						}).then(res => {
							console.log(res)
						})
						uni.showToast({
							title: '提交成功',
						})
					}).catch(
					err => {
						uni.showToast({
							title: '资料不完整',
							icon: "error",
						})
					}
				)
			},
			reset() {
				this.$refs.createForm.resetFields();
			}
		},
		onReady() {
			this.$refs.createForm.setRules(this.rules);
		}
	}
</script>

<style>
	.reserve-form {
		margin: 10rpx 20rpx;
		padding: 40rpx 20rpx;
		border-radius: 20rpx;
		background-color: #ffffff;
	}
</style>
