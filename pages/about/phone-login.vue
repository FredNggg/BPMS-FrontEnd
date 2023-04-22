<template>
	<view class="form">
		<u--form labelPosition="left" labelWidth="180rpx" :model="userInfo" :rules="rules" ref="form1">

			<u-form-item label="手机号码" prop="phone" borderBottom ref="phone">
				<u--input v-model="userInfo.phone" placeholder="请输入11位手机号码" border="none"></u--input>

			</u-form-item>
			<u-form-item label="用户类别" prop="userRole" borderBottom ref="userRole">
				<u-radio-group
				    v-model="userInfo.userRole"
				  >
				    <u-radio
				      :customStyle="{marginRight: '8px'}"
				      v-for="(item, index) in roleList"
				      :key="index"
				      :label="item.name"
				      :name="item.value"
				    >
				    </u-radio>
				  </u-radio-group>
			</u-form-item>
			<u-form-item label="验证码" borderBottom prop="code" ref="code">
				<u--input width="120rpx" v-model="userInfo.code" placeholder="请填写验证码" border="none"></u--input>
				<template #right>
					<view>
						<u-button type="success" size="mini" @tap="getCode" :text="tips"></u-button>
						<u-toast ref="uToast"></u-toast>
						<u-code :seconds="seconds" ref="uCode" @change="codeChange"></u-code>
					</view>
				</template>

			</u-form-item>

		</u--form>
		<u-button type="primary" @tap="login">登录</u-button>
	</view>
</template>

<script>
	import {
		checkVerificationCode,
		sendVerificationCode,
		phoneLogin
	} from '@/api/user.js';

	export default {
		data() {
			return {
				userInfo: {
					phone: '',
					name: '',
					code: '',
					userRole: null,
				},
				roleList: [{
					name: '管理员',
					disabled: false,
					value: 0,
				}, {
					name: '营销人员',
					disabled: false,
					value: 1,
				}, ],
				tips: '',
				rules: {
					'name': {
						required: true,
						message: '请填写姓名',
						trigger: ['blur', 'change']
					},
					'code': {
						type: 'string',
						required: true,
						len: 6,
						message: '请填写6位验证码',
						trigger: ['blur']
					},
					'userRole':{
						type: 'number',
						required: true,
						message: '请选择用户类别',
					},
					'phone': [{
							required: true,
							message: '请输入手机号',
							trigger: ['change', 'blur'],
						},
						{
							// 自定义验证函数，见上说明
							validator: (rule, value, callback) => {
								// 上面有说，返回true表示校验通过，返回false表示不通过
								// uni.$u.test.mobile()就是返回true或者false的
								return uni.$u.test.mobile(value);
							},
							message: '手机号码不正确',
							// 触发器可以同时用blur和change
							trigger: ['change', 'blur'],
						}
					]
				}
			}
		},
		mounted() {
			this.$refs.form1.setRules(this.rules);
		},
		methods: {
			codeChange(text) {
				this.tips = text;
			},
			login() {
				this.$refs.form1.validate().then(
					res => {
						phoneLogin(this.userInfo.userRole, this.userInfo.phone, this.userInfo.code).then(res => {
							console.log(res)
							const data = res.data
							if (res.code == 200) {
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
									this.userInfo.userRole
								);
								uni.setStorageSync(
									'instituition',
									res.data.institutionVO
								);
								uni.$u.toast('登录成功');
								uni.reLaunch({
									url: '/pages/index/index'
								});
							} //验证成功
							else {
								uni.$u.toast(res.msg);
							}
						})


					}
				).catch(err => {
					uni.$u.toast(err.msg)

				})
			},
			getCode() {
				if (!uni.$u.test.mobile(this.userInfo.phone)) {
					uni.$u.toast('手机号填写不正确');
					return;
				}
				if (this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					})
					setTimeout(() => {
						uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖
						sendVerificationCode(this.userInfo.phone).then(
							res => {
								if (res.data) {
									uni.$u.toast('验证码已发送');
								} else {
									uni.$u.toast('验证码发送失败');
								}
							}).catch(err => {
							uni.$u.toast('验证码发送失败');
						})

						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					}, 2000);
				} else {
					uni.$u.toast('倒计时结束后再发送');
				}
			},
		}
	}
</script>

<style>
	.form {
		padding: 90rpx 30rpx;
	}
</style>