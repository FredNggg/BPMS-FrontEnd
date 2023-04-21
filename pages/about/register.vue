<template>
	<view class="form">
		<u--form labelPosition="left" labelWidth="180rpx" :model="userInfo" :rules="rules" ref="form1">
			<u-form-item label="姓名" prop="userInfo.name" borderBottom ref="name">
				<u--input v-model="userInfo.name" placeholder="请输入姓名" border="none"></u--input>
			</u-form-item>
			<u-form-item label="手机号码" prop="userInfo.phone" borderBottom ref="phone">
				<u--input v-model="userInfo.phone" placeholder="请输入11位手机号码" border="none"></u--input>
			</u-form-item>
			<u-form-item label="验证码" borderBottom ref="phone" prop="code">
				<u--input width="120rpx" v-model="verificationCode" placeholder="请填写验证码" border="none"></u--input>

				<template #right>
					<view>
						<u-button type="success" size="mini" @tap="getCode" :text="tips"></u-button>
						<u-toast ref="uToast"></u-toast>
						<u-code :seconds="seconds" @end="end" @start="start" ref="uCode" @change="codeChange"></u-code>
					</view>
				</template>
			</u-form-item>
			<u-form-item @tap="navigateToInstitutionSelection" label="所属机构" prop="userInfo.institutionId" borderBottom ref="institutionId">
				<u--input v-model="userInfo.institutionName" placeholder="请选择所属机构" border="none"></u--input>
				<template #right>
					<u-icon name="arrow-right"></u-icon>
				</template>
			</u-form-item>
		</u--form>
		<u-button type="primary" @tap="submit">注册</u-button>
	</view>
	<view>


	</view>
</template>

<script>
	import {
		checkVerificationCode,
		sendVerificationCode,
		register
	} from '@/api/user.js';

	export default {
		data() {
			return {
				userInfo: {
					name: '',
					phone: '',
					institutionId: '',
					position: '营销人员',
					state: 0,
					institutionName: '',
				},
				verificationCode: '',
				tips: '',
			}
		},
		mounted() {
			// this.$refs.createForm.setRules(this.rules);
		
			uni.$on(
				'selectedInstitution',
				(data) => {
					this.userInfo.institutionId = data.institutionId;
					this.userInfo.institutionName = data.institutionName;
					console.log('this.userInfo.institutionId:', this.userInfo.institutionId)
				}
			)
		},
		methods: {
			codeChange(text) {
				this.tips = text;
			},
			getCode() {
				if (this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					})
					setTimeout(() => {
						uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖
						uni.$u.toast('验证码已发送');
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					}, 2000);
				} else {
					uni.$u.toast('倒计时结束后再发送');
				}
			},
			end() {
				uni.$u.toast('倒计时结束');
			},
			start() {
				uni.$u.toast('倒计时开始');
			},
			navigateToInstitutionSelection() {
				uni.navigateTo({
					url: '/pages/institution/InstitutionList'
				})
			},
			submit(){
				
			}
		},
		destroyed() {
			uni.$off('selectedInstitution');
		}
	}
</script>

<style>
	.form {
		padding: 30rpx;
	}
</style>