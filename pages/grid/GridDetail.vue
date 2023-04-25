<template>
	<view>
		<map style="width: 100%;height: 40vh;" :longitude="grid.points[0].longitude" :latitude="grid.points[0].latitude"
			:polygons="polygons">
		</map>
		<view class="form">
			<u--form labelPosition="left" labelWidth="160rpx"
				labelStyle="border-left: solid 10rpx #48BFFF;padding-left: 10rpx;">
				<u-form-item label="网格编号">
					{{grid.id}}
				</u-form-item>
				<u-form-item label="网格名称">
					{{grid.name}}
				</u-form-item>
				<u-form-item label="机构名称">
					{{institutionName}}
				</u-form-item>
				<u-form-item label="创建时间">
					{{grid.createTime}}
				</u-form-item>
				<u-form-item v-if="userRole==0" label="网格状态">
					{{grid.createTime}}
				</u-form-item>
			</u--form>
		</view>
	</view>
</template>

<script>
	import {
		getGridDetail
	} from '@/api/grid.js'
	import {
		getInstitutionDetail
	} from '@/api/institution.js'
	export default {
		data() {
			return {
				institutionName: '',
				userRole: null,
				grid: {
					"id": 6,
					"name": "霞道",
					"type": 2,
					"institutionId": 2,
					"adminId": 0,
					"state": 1,
					"point": [
						[
							31.14,
							118.22
						],
						[
							32.36,
							118.22
						],
						[
							32.36,
							119.14
						],
						[
							31.14,
							119.14
						]
					]
				},
				polygons: [{
					strokeWidth: 8,
					strokeColor: '#FF6670',
					fillColor: '#FF667054',
					points: []
				}]
			}
		},
		methods: {
			getInstitutionName(id) {
				getInstitutionDetail(id).then(res => {
					this.institutionName = res.data.name;
				})
			}
		},
		onLoad(option) {
			getGridDetail(option.id).then(res => {
				this.grid = res.data;
				this.getInstitutionName(this.grid.institutionId);
				this.polygons[0].points = res.data.points;
				console.log(res);
			})
			this.userRole = uni.getStorageSync('userRole');
			// console.log(option)
		}
	}
</script>

<style>

</style>
