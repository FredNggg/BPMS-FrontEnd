<template>

	<view class="map">

		<map style="width: 100%;height: 100vh;" :longitude="currLocation.longitude" :latitude="currLocation.latitude"
			:polygons="polygons" :markers="markers" @tap="tapMap">
			
				<view class="button-list">
					<view v-if="adminMode === 0">
						<button class="functions" @tap="switchAdminMode(1)"> 创建网格</button>
						<button class="functions"> 编辑网格</button>
						<button class="functions"> 查看网格</button>

					</view>
					<view v-if="adminMode === 1">
						<button class="functions" @tap="refreshGridCreation"> 重置</button>

						<button class="functions" @tap="switchAdminMode(0)"> 返回</button>
						<view>已选择的点： {{createGridInfo.selectedPoint}}</view>
					</view>
					

				</view>

			<view class="position" shape="circle" @tap="switchToMyPosition">
				<u-icon size="32" name="/static/icon/image/coordinate.png"></u-icon>
			</view>
		</map>


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
				}],
				markers:[
					
				], // 创建网格时的标记点
				adminMode: 0, // 0 - 未选择, 1 - 创建网格
				createGridInfo: {
					selectedPoint: 0,
					
				}
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
				const colorList = ['#003399', '#66CCCC', '#CCFF66', '#FF99CC']
				gridList.map(
					(grid, index) => {
						let polygon = {};
						polygon.strokeWidth = 8;
						polygon.strokeColor = colorList[index % colorList.length];
						polygon.fillColor = polygon.strokeColor + '54';
						polygon.points = this.generatePointsJson(grid.point);
						polygons.push(polygon)
					}
				)
				return polygons;
			},
			switchToMyPosition() { // 切换到我现在的定位
				uni.getLocation({
					success: (res) => {
						console.log(res)
						// this.currLocation.latitude = res.latitude;
						// this.currLocation.longitude = res.longitude;

						this.currLocation.latitude = this.gridList[0].point[0][0];
						this.currLocation.longitude = this.gridList[0].point[0][1];
					},
					fail: (err) => {
						console.log(err)
					}
				})
			},
			switchAdminMode(adminMode) {
				this.adminMode = adminMode;
			},
			refreshGridCreation(){
			this.markers = [];	
			},
			tapMap(e) {
				if(this.adminMode !== 1){
					return;
				}
				this.markers.push({
					latitude: e.detail.latitude,
					longitude: e.detail.longitude,
					iconPath: '/static/icon/image/coordinate.png'
				})
				console.log(e.detail);
				
			}
		},
		created() {

			this.switchToMyPosition();
			this.polygons = this.generateGridPolygons(this.gridList)
			// this.polygons[0].points = this.generatePointsJson(this.gridList[0].point);
		},
		options: {
			styleIsolation: 'shared'
		},

	}
</script>

<style lang="scss" scoped>
	.button-list {
		// position: relative;
		width: 100%;

		.functions {
			width: 400rpx;
		}

		
	}
	
	.position {
		position: absolute;
		display: flex;
		justify-content: center;
		background-color: #fff;
		border-radius: 50%;
		border: solid 2rpx #c8c7cc;
		margin: 0 auto;
		height: 80rpx;
		width: 80rpx;
		right: 40rpx;
		bottom: 200rpx;
		width: 80rpx;
	}
</style>
