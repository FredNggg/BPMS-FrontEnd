<template>
	<view>

		<u-collapse>
			<u-collapse-item v-for="(item, index) in history" :title="item.recordTime" :value="state[item.recordState]">
				<u--form label-width="180rpx">
					<u-form-item label="档案id">{{item.recordId}}</u-form-item>
					<u-form-item label="商户id">{{item.merchantId}}</u-form-item>
					<u-form-item :label="item.recordState==1?'建档者':'审核人员'">{{item.recorderName}}</u-form-item>
					<u-form-item :label="item.recordState==1?'建档时间':'审核时间'">{{item.recordTime}}</u-form-item>
					<u-form-item label="状态">{{state[item.recordState]}}</u-form-item>
					<u-form-item v-if="item.recordState == 3" label="驳回理由">{{item.recordContent}}</u-form-item>

				</u--form>
			</u-collapse-item>
		</u-collapse>
		
		<u-steps current="1" direction="column">
			<u-steps-item v-for="(item, index) in history.slice().reverse()" :desc="item.recordTime"  :error="item.recordState==3" :title="state[item.recordState]">
				<text>
					<u-form-item :label="item.recordState==1?'建档者':'审核人员'">{{item.recorderName}}</u-form-item>
					<u-form-item :label="item.recordState==1?'建档时间':'审核时间'">{{item.recordTime}}</u-form-item>
				</text>
			</u-steps-item>
		</u-steps>
	</view>
</template>

<script>
	import {
		getMerchantHistory
	} from '@/api/merchant.js'

	export default {
		data() {
			return {
				merchantId: null,
				state: ['草稿状态', '审核中', '审核通过', '审核拒绝'],
				history: [

				]
			}
		},
		methods: {

		},
		onLoad(option) {
			this.merchantId = option.id;
			getMerchantHistory(this.merchantId).then(res => {
				this.history = res.data;
			})
		}
	}
</script>

<style>

</style>