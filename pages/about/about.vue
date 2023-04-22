<template>

	<view v-if="checkLoggedIn()">
		<unlogin></unlogin>
	</view>
	
	<view class="info" v-else> 
	
			<view class="abstract">
				<view v-if="roleId===1">营销人员端</view>
				<view v-if="roleId===0">管理员端</view>
				尊敬的***，您好！
				登录结果：
			</view>
			<view class="others">
				<button class="quit">查看个人资料</button>
				<button type="warn" class="quit" @tap="logout()">登出</button>
			</view>
		

	</view>

</template>

<script>
	import unlogin from '@/components/unlogin.vue'

	export default {
		components: {
			unlogin
		},
		data() {
			return {
				roleId: uni.getStorageSync('userRole'),
				userInfo: uni.getStorageInfoSync('userInfo')
			}
		},
		methods: {
			checkLoggedIn() {
				return uni.getStorageSync('userRole').length === 0;
			},
			logout() {
				uni.clearStorageSync();
				uni.reLaunch({
					url: '/pages/index/index'
				})
			}
		}
	}
</script>

<style>

	.info {
		display: flex;
		flex-direction: column;
		background-color: #67d3fa;
		flex: 1;
		height: 100%;
	}

	.abstract {
		height: 300rpx;
		
		
	
	}

	.others {
		flex: 1;
		background-color: #f8f8f8;
		border-top-left-radius: 80rpx;
		border-top-right-radius: 80rpx;
	}

	.quit {
		width: 80%;
	}
</style>
