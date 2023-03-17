<template>
	<view>
		<u-sticky>
			<u-search placeholder="请输入机构名称" :actionText="'返回'" :show-action="false"
			@change="search" :clearabled="true" v-model="keyword"></u-search>
		</u-sticky>

		<u-list @scrolltolower="scrolltolower">
			<u-list-item @tap="backWithParam(item.id, item.name)" v-for="(item, index) in institutionList" :key="index">
				<u-cell :title="item.name" :label="item.location"></u-cell>
			</u-list-item>
		</u-list>
	</view>
</template>

<script>
	import {
		searchInstitution
	} from '@/api/institution.js'

	export default {
		data() {
			return {
				keyword: '',
				currPage: 1,
				institutionList: [
				]
			};
		},
		methods: {
			search(value) {
				this.currPage = 1;
				searchInstitution(value, this.currPage).then(
					res => {
						const data = res.data.records;
						this.institutionList = data;
					})
			},
			scrolltolower() {
				searchInstitution(this.keyword, this.currPage + 1).then(
					res => {
						const data = res.data.records;
						console.log(data)
						if (data.length > 0){
							this.institutionList = this.institutionList.concat(data);
							this.currPage++;
						}	
					})
			},
			backWithParam(institutionId, institutionName){
			
				const item = {institutionId: institutionId, institutionName: institutionName};
			
				uni.$emit('selectedInstitution',item)
				// uni.setStorageSync('selectedInstitution',item)
				uni.navigateBack({
				    delta: 1
				});

			}
		},
		onLoad() {
			this.search(this.keyword);
		}
	}
</script>

<style lang="scss">

</style>
