
<template>
	<view>
		<view style="margin-left: 40rpx;">该商户的预约记录：</view>
		<view>
			<u-collapse>
				<u-collapse-item v-for="(item, index) in records" :title="item.customerName" :value="item.reserveTime">
					<u--form label-width="180rpx">
						<!-- <u-form-item label="预约单号">{{item.id}}</u-form-item> -->
						<u-form-item label="预约产品号">{{item.productId}}</u-form-item>
						<u-form-item label="预约产品名">{{item.productName}}</u-form-item>
						<u-form-item label="预约商户">{{item.merchantFullName}}</u-form-item>
						<u-form-item label="预约者">{{item.customerName}}</u-form-item>
						
						<u-form-item label="联系方式">{{item.contact}}</u-form-item>
						<u-form-item label="预约时间">{{item.reserveTime}}</u-form-item>
						<u-form-item label="预约地点">{{item.reserveLocation}}</u-form-item>
					</u--form>
				</u-collapse-item>
			</u-collapse>
		</view>

	</view>
</template>

<script>
	import {
		getMerchantReserveList
	} from '@/api/product.js'

	export default {
		data() {
			return {
				merchantId: 0,
				records: [{
						"id": 100,
						"marketerId": 1,
						"productId": 80,
						customerName: "张学良",
						"cardId": "11111111",
						"customerId": "22222222",
						"contact": "33333333",
						"reserveTime": "2023-02-26 19:22:19",
						"reserveLocation": "[32.132635, 118.957374]"
					},
					{
						"id": 101,
						"marketerId": 1,
						"productId": 80,
						"customerName": "小美",
						"cardId": "11111111",
						"customerId": "22222222",
						"contact": "33333333",
						"reserveTime": "2023-02-26 19:22:28",
						"reserveLocation": "[32.132635, 118.957374]"
					},
					{
						"id": 102,
						"marketerId": 1,
						"productId": 80,
						"customerName": "皮卡丘",
						"cardId": "11111111",
						"customerId": "22222222",
						"contact": "33333333",
						"reserveTime": "2023-02-26 19:22:35",
						"reserveLocation": "[32.132635, 118.957374]"
					}
				],

				currPage: 1,
			}
		},
		methods: {

		},
		onLoad(option) {
			this.merchantId = option.id;
			console.log(option.id)
			getMerchantReserveList(this.merchantId, this.currPage).then(res => {
				this.records = res.data.records;
			})
		},
		onReachBottom() {
			getMerchantReserveList(this.merchantId, this.currPage + 1).then(res => {
				if(res.data.records.length > 0){
					this.records = this.records.concat(res.data.records);
					this.currPage++;
				}
			})
		}
	}
</script>

<style>
	.u-collapse {
		background-color: #ffffff;
	}
</style>
