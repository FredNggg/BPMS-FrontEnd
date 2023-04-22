/**
* 人员管理
*/
<template>
	<view>
		<u-sticky>
			<u-picker :show="filterShow" :columns="filterColumns" @confirm="filterConfirm" @cancel="filterShow = false">
			</u-picker>
			<u-button @tap="filterShow = true">{{filterText}}</u-button>
		</u-sticky>
			<u-collapse>
				<u-collapse-item v-for="(item, index) in userList" :title="item.name" :value="state[item.state]">
					<u--form label-width="180rpx">
						<u-form-item label="用户id">{{item.id}}</u-form-item>
						<u-form-item label="用户姓名">{{item.name}}</u-form-item>
						<u-form-item label="手机号码">{{item.phone}}</u-form-item>
						<u-form-item label="注册时间">{{item.register_time}}</u-form-item>
						<u-form-item label="状态">{{item.state}}</u-form-item>
					</u--form>
				</u-collapse-item>
			</u-collapse>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				filterShow: false,
				filterText: '全部人员',
				filterColumns: [
					['申请中', '在职', '已离职','全部人员']
				],
				state: ['申请中', '在职', '已离职', '申请失败'],
				filterText: 'aaa',
				userList: [{
					id: 2,
					name: "张三",
					phone: "18811112222",
					institution: 4,
					register_time: "2022-11-10 19:19:30",
					state: 2 // 0 - 申请，1 - 在职，2 - 离职
				}, {
					id: 3,
					name: "张四五",
					phone: "18811112222",
					institution: 4,
					register_time: "2022-11-10 19:19:30",
					state: 1
				}, {
					id: 4,
					name: "王小明",
					phone: "18811112222",
					institution: 4,
					register_time: "2022-11-10 19:19:30",
					state: 0
				}, ]
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
