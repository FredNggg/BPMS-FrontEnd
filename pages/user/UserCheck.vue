<template>
	<view>
		<u-empty mode="list" v-if="userList.length === 0"></u-empty>
		<u-collapse v-else>
			<u-collapse-item v-for="(item, index) in userList" :title="item.name" :value="state[item.state]">
				<u--form label-width="180rpx">
					<u-form-item label="用户id">{{item.id}}</u-form-item>
					<u-form-item label="用户姓名">{{item.name}}</u-form-item>
					<u-form-item label="手机号码">{{item.phone}}</u-form-item>
					<u-form-item label="注册时间">{{item.registerTime}}</u-form-item>
					<u-form-item label="状态">{{state[item.state]}}</u-form-item>
					<view class="button">
						<view class="item"><u-button @tap="setState(item.id, 1)" type="success">通过</u-button></view>
						<view class="item"><u-button @tap="setState(item.id, 3)" type="error">驳回</u-button></view>
					</view>

				</u--form>
			</u-collapse-item>
		</u-collapse>

	</view>
</template>

<script>
	import {
		getMarketersByState,
		modifyState
	} from '@/api/admin.js'

	export default {
		data() {

			return {
				state: ['申请中', '在职', '已离职', '申请失败'],
				currPage: 1,
				userList: [
					{
					id: 2,
					name: "张三",
					phone: "18811112222",
					institution: 4,
					registerTime: "2022-11-10 19:19:30",
					state: 0 // 0 - 申请，1 - 在职，2 - 离职
				}, {
					id: 3,
					name: "张四五",
					phone: "18811112222",
					institution: 4,
					registerTime: "2023-04-10 08:44:20",
					state: 0
				}, {
					id: 4,
					name: "王小明",
					phone: "18811112222",
					institution: 4,
					registerTime: "2023-04-25 19:44:50",
					state: 0
				}, 
				],

			}
		},
		methods: {
			setState(id, state) {
				modifyState(id, state).then(res => {
					this.getMarketers(this.currPage)
				})
			},
			getMarketers(pageNum) {
				getMarketersByState(0, pageNum).then(
					res => {
						this.userList = res.data.records;
					})
			}
		},
		onLoad() {
			this.getMarketers(this.currPage);
		}
	}
</script>

<style>
	.button {
		display: flex;
		justify-content: space-between;
		flex-basis: 45%
	}

	.item {
		margin: 8rpx;
		width: 300rpx;
	}
</style>