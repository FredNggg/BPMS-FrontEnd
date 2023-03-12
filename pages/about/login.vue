<template>
	<button @tap="login(0)">
		点击以营销人员身份登录
	</button>
	<button @tap="login(1)">
		点击以管理员身份登录
	</button>
</template>

<script>
	import {
		useStore
	} from 'vuex';
	const store = useStore();

	export default {
		data() {
			return {

			}
		},
		methods: {
			login(data) {
				this.$store.commit('setRoleId', data);
				uni.login({
					provider: 'weixin', //使用微信登录
					success: function(loginRes) {
						console.log('sucess: ', loginRes);
					},
					fail: err => {
						reject(err)
					}
				});
				uni.showToast({
					title: `登录成功！`
				})
				uni.reLaunch({
					url: '/pages/index/index'
				})
			}
		}
	}
</script>

<style>
</style>
