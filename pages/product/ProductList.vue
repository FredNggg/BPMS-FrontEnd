<template>
	<view>
		<u-picker :show="filterShow" :columns="filterColumns" @cancel="filterShow = false">666</u-picker>
		<u-button @click="filterShow = true">打开</u-button>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				filterShow: false,
				filterColumns: [
            ['借贷产品','储蓄产品','理财产品','网上银行产品','保险产品']
					],
        type: ['借贷产品','储蓄产品','理财产品','网上银行产品','保险产品'],
				products: [{
						id: 129,
						name: "易方达蓝筹混合精选",
						type: 2,
						date: "2023-02-10 15:36:13",
						adminId: 40,
						description: "写七子重命制手维样使山器门名。太做量任开率也装易门关收始。最候和平拉光正热族候部类种和更。"
					},
					{
						id: 129,
						name: "易方达蓝筹混合精选",
						type: 2,
						date: "2023-02-10 15:36:13",
						adminId: 40,
						description: "写七子重命制手维样使山器门名。太做量任开率也装易门关收始。最候和平拉光正热族候部类种和更。"
					},
					{
						id: 129,
						name: "易方达蓝筹混合精选",
						type: 2,
						date: "2023-02-10 15:36:13",
						adminId: 40,
						description: "写七子重命制手维样使山器门名。太做量任开率也装易门关收始。最候和平拉光正热族候部类种和更。"
					},
				]
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
