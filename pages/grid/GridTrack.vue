<template>
	<view>
		<map style="width: 100%;height: 50vh;" :longitude="currLocation.longitude" :latitude="currLocation.latitude"
			:polyline="polylines" :markers="markers">
		</map>
		{{polylines}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currLocation: {
					longitude: 118.123456,
					latitude: 32.123456,
				},
				track: [{
					"trackId": 0,
					"marketerId": 0,
					"recordId": 0,
					"recordTime": "2022-11-11 11:11:11",
					"recordLocation": {
						"latitude": 32.123456,
						"longitude": 118.123456
					}
				},{
					"trackId": 1,
					"marketerId": 0,
					"recordId": 0,
					"recordTime": "2022-11-11 11:11:12",
					"recordLocation": {
						"latitude": 32.1245,
						"longitude": 118.123456
					}
				},{
					"trackId": 2,
					"marketerId": 0,
					"recordId": 0,
					"recordTime": "2022-11-11 11:11:13",
					"recordLocation": {
						"latitude": 32.1235,
						"longitude": 118.14
					}
				},{
					"trackId": 3,
					"marketerId": 0,
					"recordId": 0,
					"recordTime": "2022-11-11 11:11:14",
					"recordLocation": {
						"latitude": 32.12355,
						"longitude": 118.144
					}
				}],
				polylines: [{
					points:[],
					color: '#05b62d',
					arrowLine: true,
					colorList: true,
					width: 13,
					borderWidth: 2,
				}],
				markers:[
					
				]
			}
		},
		methods: {
			generatePointsFromTrack(track){ // 把 track 中的坐标提取出来
				const res = [];
				track.map(item => {
					res.push(item.recordLocation);

				})
				console.log(res)
				return res;
			},
			generateMarkers(track){
				const res = [];
				track.map(item => {
					res.push({
						id: item.trackId,
						latitude: item.recordLocation.latitude,
						longitude: item.recordLocation.longitude,
						iconPath: '/static/icon/image/location.png'
					});
				
				})
				console.log(res)
				return res;
			}
		},
		onLoad() {
			// if(this.track.length === 0){
			// 	uni.getLocation({
			// 		success: (res) => {
			// 			console.log(res)
			// 			this.currLocation.longitude = res.longitude;
			// 			this.currLocation.latitude = res.latitude;
			// 		}
			// 	})
			// } else {
			// 	this.currLocation.longitude = this.track[0].recordLocation.longitude;
			// 	this.currLocation.latitude= this.track[0].recordLocation.latitude;
			// }
			this.currLocation.longitude = this.track[0].recordLocation.longitude;
			this.currLocation.latitude= this.track[0].recordLocation.latitude;
			this.polylines[0].points = this.generatePointsFromTrack(this.track);
			this.markers = this.generateMarkers(this.track);
		}
	}
</script>

<style>

</style>