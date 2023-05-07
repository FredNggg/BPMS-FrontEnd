<template>
<!-- 	<button @tap="login(0)">
		点击以营销人员身份登录
	</button>
	<button @tap="login(1)">
		点击以管理员身份登录
	</button> -->
	
	<button type="primary" @tap="weChatLogin(0)">微信一键登录(管理员)</button>
	<button type="primary" @tap="weChatLogin(1)">微信一键登录(营销人员)</button>
	<button @tap="phoneLogin()">手机号码登录</button>
</template>

<script>
	import {
		wechatLogin
	} from '@/api/user.js'


	export default {
		data() {
			return {

			}
		},
		methods: {
			login(data) {

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
			},
			weChatLogin(userRole) {
				uni.login({
					provider: 'weixin', //使用微信登录
					success: function(res) {
						uni.setStorageSync(
							'wechatLoginCode',
							res.code
						);
						wechatLogin(userRole, uni.getStorageSync('wechatLoginCode')).then(res => {
							console.log(res);
							if(res.code == 200){
								uni.setStorageSync(
									'userInfo',
									res.data.userVO
								);
								uni.setStorageSync(
									'token',
									res.Authorization
								);
								uni.setStorageSync(
									'userRole',
									userRole
								);
								uni.setStorageSync(
									'instituition',
									res.data.institutionVO
								);
								uni.$u.toast('登录成功');
								uni.reLaunch({
									url: '/pages/index/index'
								});
							} else {
								uni.$u.toast(res.msg);
							}
							
						})
					},
					fail: err => {
						reject(err)
					}
				});

			},
			phoneLogin() {
				uni.navigateTo({
					url: '/pages/about/phone-login'
				})
			}
		}
	}
</script>

<style>
	
	button{
		
		margin: 30rpx 40rpx;
	}
</style>