<template>

	
	<view v-if="!loggedIn" class="unlogin">
		<unlogin></unlogin>
	</view>
	<view v-else class="icon-wall">
		<view v-for="item in functionList">
			<view class="title">{{item.title}}</view>
			<view v-for="func in item.functions">
	
				<icon-button :nav-url="func.pagePath" :img-url="func.iconPath" :text="func.name"></icon-button>
			</view>
			<view style="width: 100%;">
				<u-divider></u-divider>
			</view>
	
	
	
		</view>
	
	</view>

	


</template>

<script>
	import unlogin from '@/components/unlogin.vue'
	import IconButton from '@/components/IconButton.vue'
	import {
		MARKETER_LIST,
		ADMIN_LIST
	} from "../../common/function-menu";

	export default {
		components: {
			IconButton,
			unlogin
		},

		data() {
			return {
				functionList: [],
				loggedIn: false,
			}
		},
		methods: {
			checkLoggedIn() {
				// console.log(Object.keys(this.userInfo))
				// if(Object.keys(uni.getStorageSync('userInfo')).length === 0) return false;
				return uni.getStorageSync('userInfo');
			},
		},
		onLoad() {
			this.loggedIn = this.checkLoggedIn();
			this.functionList = uni.getStorageSync('userRole') === 1 ? MARKETER_LIST : ADMIN_LIST;
		}
	}
</script>

<style lang="less">
	
	.unlogin{
		
		// view{
		// 	width: 100%;
		// }
		// margin: 0 auto;
		// display: flex;
		// justify-content: center;
		width: 100%;
	}
	.icon-wall {
		.title {
			width: 100%;
			font-size: 36rpx;
			font-weight: bold;
			border-left: #1a7bfd solid 15rpx;
			padding-left: 10rpx;
			margin-bottom: 20rpx;
		}
		margin: 0rpx 40 rpx;
		padding: 0rpx 20rpx;
		display: flex;
		flex-wrap: wrap;
		color: #585b65;
	}

	
</style>