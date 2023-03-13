<template>
	<view>
		<view>
			<map style="width: 100%; height: 100vh;" :longitude="currLocation.longitude"
				:latitude="currLocation.latitude" :polygons="polygons" strokeWidth="20px">
			</map>
		</view>
	</view>
</template>
<!-- DRAFT(0, "草稿"),
    ENABLE(1, "启用"),
    DISABLE(2, "停用"),
    DELETE(3, "删除"), -->
<script>
	export default {
		name: 'GridBase',
		data() {
			return {
				currLocation: {
					latitude: 0,
					longitude: 0,
				},
				gridList: [{
						"id": 4,
						"name": "栖道",
						"type": 2,
						"institutionId": 2,
						"adminId": 0,
						"state": 1,
						"point": [
							[
								31.15,
								118.22
							],
							[
								32.37,
								118.22
							],
							[
								32.37,
								119.14
							],
							[
								31.15,
								119.14
							]
						]
					},
					{
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
					}
				],
				polygons: [{
					points: [],
					strokeWidth: 13,
					strokeColor: '#FF0000',
					fillColor: '#FF000054',
				}]
			}
		},
		methods: {
			generatePointsJson(array) { // 将坐标数组转换为[{latitude: 0, longitude: 0}]格式
				const res = []
				for (let item of array) {
					let cur = {};
					cur.latitude = item[0];
					cur.longitude = item[1];
					res.push(cur);
				}
				console.log(res);
				return res;
			},
			generateGridPolygons(gridList) {
				const polygons = [];
				const colorList = ['#003399', '#66CCCC','#CCFF66','#FF99CC']
				gridList.map(
					(grid, index) => {
						let polygon = {};
						polygon.strokeWidth = 8;
						polygon.strokeColor = colorList[index % colorList.length];
						polygon.fillColor = polygon.strokeColor+'54';
						polygon.points = this.generatePointsJson(grid.point);
						polygons.push(polygon)
					}
				)
				return polygons;
			}
		},
		created() {
			// uni.getLocation({
			// 	success: (res) => {
			// 		this.currLocation.latitude = res.latitude;
			// 		this.currLocation.longitude = res.longitude;
			// 	},
			// 	fail: (err) => {
			// 		console.log(err)
			// 	}
			// })

			this.currLocation.latitude = this.gridList[0].point[0][0];
			this.currLocation.longitude = this.gridList[0].point[0][1];
			this.polygons = this.generateGridPolygons(this.gridList)
			// this.polygons[0].points = this.generatePointsJson(this.gridList[0].point);
		}
	}
</script>

<style>

</style>
