<template>
	<view class="content">
		<swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1500">
			<swiper-item class="swiper-item" v-for="(item,index) in headerList" :key="index">

				<image :src="item.imgUrl" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<u-divider></u-divider>
	</view>
	<view class="news">

		<view style="font-size: 40rpx;border-left: #1a7bfd solid 15rpx;
			padding-left: 10rpx;margin-bottom: 20rpx;">金融新闻</view>
		<view class="news-list">

			<div v-for="news in newsList" :key="news.title" class="news-item">
				<h3 class="news-title">{{ news.title }}</h3>
				<p class="news-summary">{{ news.summary }}</p>
				<span class="news-time">{{ news.time }}</span>
			</div>

		</view>
	</view>

	<!-- <u-list>
		<u-list-item v-for="(item, index) in newsList">
			{{item}}
		</u-list-item>
	</u-list> -->
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
				}, ],
				newsList: [{
						"title": "英国央行维持利率不变",
						"summary": "英国央行周四宣布维持基准利率不变，即0.1%，并表示将继续购买政府和企业债券以支持经济复苏。该决定符合市场预期。",
						"time": "2023-05-06 14:00:00"
					},
					{
						"title": "美国经济增长超预期",
						"summary": "美国经济在上个季度增长了6.4%，超过了预期。这是由于消费者支出和商业投资的强劲表现，以及政府的财政刺激措施。",
						"time": "2023-05-05 08:30:00"
					},
					{
						"title": "中国制造业活动增速放缓",
						"summary": "中国制造业活动增速在4月份放缓，制造业采购经理人指数（PMI）从上个月的51.9下降到51.1。这是由于原材料短缺和物流问题所导致的。",
						"time": "2023-05-04 10:00:00"
					},
					{
						"title": "国际油价上涨超过70美元",
						"summary": "国际油价在周三上涨，布伦特原油价格超过了70美元/桶。这是由于全球经济复苏和沙特阿拉伯宣布将进一步减产所带来的供需变化所导致的。",
						"time": "2023-05-03 16:45:00"
					},
					{
						"title": "欧元区通胀率上升",
						"summary": "欧元区4月份通胀率达到2.0%，高于预期。这是由于能源和食品价格上涨所带来的影响。",
						"time": "2023-05-02 13:15:00"
					}
				]


			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.news{
		padding: 20rpx;
	}
	
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

	.news-list {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.news-item {
		display: flex;
		flex-direction: column;
		gap: 8px;
		border: 1px solid #ccc;
		padding: 12px;
		border-radius: 4px;
	}

	.news-title {
		font-size: 18px;
		font-weight: bold;
	}

	.news-summary {
		font-size: 16px;
		line-height: 1.5;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		/* 设置两行文字 */
		-webkit-box-orient: vertical;
	}

	.news-time {
		font-size: 14px;
		color: #999;
	}
</style>