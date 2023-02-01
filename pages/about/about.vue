<template>

	<view v-if="checkLoggedIn()"><unlogin></unlogin></view>
	<view v-else>
		<button @tap="logout()">登出</button>
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
				roleId: uni.getStorageSync('roleId'),
			}
		},
		methods: {
			checkLoggedIn(){
				console.log(uni.getStorageSync('roleId').length)
				return uni.getStorageSync('roleId').length === 0;
			},
			logout(){
				uni.clearStorageSync();
				uni.reLaunch({
					url:'/pages/index/index'
				})
			}
		}
	}
</script>

<style>
</style>