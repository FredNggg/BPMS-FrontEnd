<template>

	<view>

		<map style="width: 100%;height: 100vh;" :longitude="currLocation.longitude" :latitude="currLocation.latitude"
			:polygons="adminMode===0? polygons: createGridInfo.gridCreatePolygon" :markers="markers" @tap="tapMap">

			<view class="button-list">
				<cover-view v-show="adminMode === 0">
					<button class="functions" @tap="switchAdminMode(1)"> 创建网格</button>
					<button class="functions"> 编辑网格</button>
					<button class="functions"> 查看网格</button>

				</cover-view>
				<cover-view v-show="adminMode === 1">
					<button class="functions" @tap="refreshGridCreation"> 重置</button>
					<button class="functions" @tap="createGrid"> 创建</button>
					<button class="functions" @tap="switchAdminMode(0)"> 返回</button>
					<cover-view>已选择的点： {{createGridInfo.selectedPoint}}</cover-view>

				</cover-view>


			</view>
			<view class="position" @click="switchToMyPosition">
				<u-icon size="32" name="/static/icon/image/coordinate.png" />
			</view>

		</map>
		<u-popup :show="createGridInfo.infoPopUpShow" :round="10" mode="center">
			<view class="createForm">
				<grid-create-form :points="markers.map((item) => {
					return {latitude: item.latitude, longitude: item.longitude}
				})"></grid-create-form>
				<u-button @tap="createGridInfo.infoPopUpShow = false">取消</u-button>
			</view>
		</u-popup>

	</view>

</template>
<!-- DRAFT(0, "草稿"),
    ENABLE(1, "启用"),
    DISABLE(2, "停用"),
    DELETE(3, "删除"), -->

<script>
	import {
		GridCreateForm
	} from '../../components/GridCreateForm.vue'

	import {
		getGridList
	} from '@/api/grid.js'

	export default {
		name: 'GridBase',
		components: {
			GridCreateForm
		},
		data() {
			return {
				currLocation: {
					latitude: 0,
					longitude: 0,
				},
				showGridList: false, // 点击网格后显示网格列表
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

				markers: [

				], // 创建网格时的标记点
				adminMode: 0, // 0 - 未选择, 1 - 创建网格
				createGridInfo: {
					selectedPoint: 0,
					infoPopUpShow: false,
					gridCreatePolygon: [{
						points: [],
						strokeWidth: 8,
						strokeColor: '#d81e06',
						fillColor: '#d81e0654',
					}],
				},
				checkGridInfo: {
					idList: [],
					infoList: [],
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
			generatePointsArray(array) { // 将坐标数组[{latitude: 0, longitude: 0},]转换为[[0,0]...]格式
				const res = []
				for (let item of array) {
					let cur = [];
					cur = [item.latitude, item.longitude];
					res.push(cur);
				}
				return res;
			},
			generateGridPolygons(gridList) {
				const polygons = [];
				const colorList = ['#003399', '#66CCCC', '#CCFF66', '#FF99CC']
				this.gridList.map(
					(grid, index) => {
						let polygon = {};
						polygon.strokeWidth = 8;
						polygon.strokeColor = colorList[index % colorList.length];
						polygon.fillColor = polygon.strokeColor + '54';
						polygon.points = grid.points.map(item => {
							return {
								latitude: item.latitude,
								longitude: item.longitude
							}
						});
						polygons.push(polygon)
					}
				)
				return polygons;
			},
			switchToMyPosition() { // 切换到我现在的定位
				console.log('你摸到我了')
				uni.getLocation({
					success: (res) => {
						// console.log(res)
						// this.currLocation.latitude = res.latitude;
						// this.currLocation.longitude = res.longitude;
						if (this.gridList.length > 0) {
							console.log('gridList', this.gridList);
							this.currLocation.latitude = this.gridList[0].points[0].latitude;
							this.currLocation.longitude = this.gridList[0].points[0].longitude;
						}

					},
					fail: (err) => {
						console.log(err)
					}
				})
			},
			switchAdminMode(adminMode) {
				this.adminMode = adminMode;
				console.log('this.adminMode:', this.adminMode)
				this.refreshGridCreation()
			},
			refreshGridCreation() {
				this.markers = [];
				this.createGridInfo.selectedPoint = 0;
				this.createGridInfo.gridCreatePolygon[0].points = [];
			},
			createGrid() {
				if (this.createGridInfo.selectedPoint < 3) {
					uni.showToast({
						title: '请选择3个或更多节点以形成网格！',
						icon: 'none',
					})
					return;
				}
				console.log(this.generatePointsArray(this.markers))
				this.createGridInfo.infoPopUpShow = true
			},
			tapMap(e) {
				console.log('tapmap!')
				if (this.adminMode === 1) {
					this.markers = this.markers.concat({
						id: this.createGridInfo.selectedPoint++,
						latitude: e.detail.latitude,
						longitude: e.detail.longitude,
						height: 30,
						width: 30,
						iconPath: '/static/icon/image/location.png'
					})
					if (this.createGridInfo.selectedPoint === 2) { // 三个点及以上才能形成多边形
						for (const item of this.markers) {
							this.createGridInfo.gridCreatePolygon[0].points = this.createGridInfo.gridCreatePolygon[0]
								.points
								.concat({
									latitude: item.latitude,
									longitude: item.longitude,
								})
						}
					}
					if (this.createGridInfo.selectedPoint > 2) {
						this.createGridInfo.gridCreatePolygon[0].points = this.createGridInfo.gridCreatePolygon[0].points
							.concat({
								latitude: e.detail.latitude,
								longitude: e.detail.longitude,
							})
					}
				} else if (this.adminMode === 0) {
					this.judgeGrid(e.detail.latitude, e.detail.longitude)
				}



			},
			judgeGrid(latitude, longitude) { // 判断点击的经纬度是否有网格
				this.checkGridInfo.idList = [];
				for (let grid of this.gridList) {
					if (this.rayCasting([latitude, longitude], grid.points.map(item => {
							return [item.latitude, item.longitude]
						}))) {
						this.checkGridInfo.idList.push(grid.id);
					} else {
						console.log('out!');
					}
				}
				if(this.checkGridInfo.idList > 0){
					this.showGridList = true;
				}
			},
			/**
			 * p :[x,y] ,带判定的P点
			 * poly: [[x0,y0],[x1,y1]......] 多边形的路径
			 */
			rayCasting(p, poly) {
				// px，py为p点的x和y坐标
				let px = p[0],
					py = p[1],
					flag = false

				//这个for循环是为了遍历多边形的每一个线段
				for (let i = 0, l = poly.length, j = l - 1; i < l; j = i, i++) {
					let sx = poly[i][0], //线段起点x坐标
						sy = poly[i][1], //线段起点y坐标
						tx = poly[j][0], //线段终点x坐标
						ty = poly[j][1] //线段终点y坐标

					// 点与多边形顶点重合
					if ((sx === px && sy === py) || (tx === px && ty === py)) {
						return true
					}

					// 点的射线和多边形的一条边重合，并且点在边上
					if ((sy === ty && sy === py) && ((sx > px && tx < px) || (sx < px && tx > px))) {
						return true
					}

					// 判断线段两端点是否在射线两侧
					if ((sy < py && ty >= py) || (sy >= py && ty < py)) {
						// 求射线和线段的交点x坐标，交点y坐标当然是py
						let x = sx + (py - sy) * (tx - sx) / (ty - sy)

						// 点在多边形的边上
						if (x === px) {
							return true
						}

						// x大于px来保证射线是朝右的，往一个方向射，假如射线穿过多边形的边界，flag取反一下
						if (x > px) {
							flag = !flag
						}
					}
				}

				// 射线穿过多边形边界的次数为奇数时点在多边形内
				return flag ? true : false
			}

		},
		created() {
			console.log('created');

			getGridList().then(res => {
				console.log(res.data)
				this.gridList = res.data;
				this.polygons = this.generateGridPolygons(this.gridList);
				this.switchToMyPosition();
				console.log(this.polygons)
			})
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
		display: flex;
		justify-content: center;
		position: absolute;
		background-color: #fff;
		border-radius: 50%;
		border: solid 2rpx #c8c7cc;
		height: 80rpx;
		width: 80rpx;
		right: 40rpx;
		bottom: 200rpx;
		width: 80rpx;
	}

	.createForm {
		padding: 30rpx 30rpx;
		width: 500rpx;
	}
</style>
