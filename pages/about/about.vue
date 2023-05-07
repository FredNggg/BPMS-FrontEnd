<template>
	<view v-if="!loggedIn">
		<unlogin></unlogin>
	</view>
	
	<view class="info" v-else> 
	
			<view class="abstract">
				<view v-if="roleId===1">营销人员端</view>
				<view v-if="roleId===0">管理员端</view>
				
				尊敬的{{userInfo.name}}，您好！
				所属支行：{{userInfo}}
			</view>
			<view class="others">
				<button class="quit" type="primary" @tap="bindWechat">绑定微信</button>
				<button class="quit">查看个人资料</button>
				<button type="warn" class="quit" @tap="logout()">登出</button>
			</view>
		

	</view>

</template>

<script>
	import unlogin from '@/components/unlogin.vue'
	import {wechatBind} from '@/api/user.js'
	export default {
		components: {
			unlogin
		},
		data() {
			return {
				roleId: null,
				userInfo: {},
				loggedIn: false,
			}
		},
		methods: {
			checkLoggedIn() {
				// console.log(Object.keys(this.userInfo))
				// if(Object.keys(uni.getStorageSync('userInfo')).length === 0) return false;
				return uni.getStorageSync('userInfo');
			},
			logout() {
				uni.clearStorageSync();
				uni.reLaunch({
					url: '/pages/index/index'
				})
			},
			bindWechat(){
				wechatBind(this.roleId, this.userInfo.phone, uni.getStorageSync('wechatLoginCode')).then(res=>{
					console.log(res);
				})
			}
		},
		beforeMount() {
			
			this.userInfo = uni.getStorageSync('userInfo');
			this.roleId = uni.getStorageSync('userRole');
			this.loggedIn = this.checkLoggedIn();
			console.log(this.checkLoggedIn())
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
