<template>
	<view>
		<u-datetime-picker closeOnClickOverlay ref="datetimePicker" @confirm="confirmDate" :formatter="formatter" :show="datePickerShow" v-model="currTimeStamp" mode="date"></u-datetime-picker>
		<u-button @click="datePickerShow = true">{{currDate}}</u-button>
		<map style="width: 100%;height: 90vh;" :longitude="currLocation.longitude" :latitude="currLocation.latitude"
			:polyline="polylines" :markers="markers" @markertap="markerTap">
		</map>
		
	</view>
</template>

<script>
	import {
		getTrackByMarketerId
	} from '@/api/merchant.js';

	export default {
		data() {
			return {
				currLocation: {
					longitude: 118.123456,
					latitude: 32.123456,
				},
				currDate: '2023-04-21',
				currTimeStamp: 0,
				datePickerShow: false,
				track: [{
					"trackId": 0,
					"marketerId": 0,
					"recordId": 0,
					"recordTime": "2022-11-11 11:11:11",
					"recordLocation": {
						"latitude": 32.123456,
						"longitude": 118.123456
					}
				}, {
					"trackId": 1,
					"marketerId": 0,
					"recordId": 1,
					"recordTime": "2022-11-11 11:11:12",
					"recordLocation": {
						"latitude": 32.1245,
						"longitude": 118.123456
					}
				}, {
					"trackId": 2,
					"marketerId": 0,
					"recordId": 2,
					"recordTime": "2022-11-11 11:11:13",
					"recordLocation": {
						"latitude": 32.1235,
						"longitude": 118.14
					}
				}, {
					"trackId": 3,
					"marketerId": 0,
					"recordId": 3,
					"recordTime": "2022-11-11 11:11:14",
					"recordLocation": {
						"latitude": 32.12355,
						"longitude": 118.144
					}
				}],
				polylines: [{
					points: [],
					color: '#05b62d',
					arrowLine: true,
					colorList: true,
					width: 13,
					borderWidth: 2,
				}],
				markers: [

				]
			}
		},
		methods: {
			generatePointsFromTrack(track) { // 把 track 中的坐标提取出来
				const res = [];
				track.map(item => {
					res.push(item.recordLocation);

				})
				console.log(res)
				return res;
			},
			generateMarkers(track) {
				const res = [];
				console.log(track)
				track.map(item => {
					res.push({
						id: item.recordId,
						label: {
							anchorX: 0,
							anchorY: 0,
							content: item.trackId,
							color: '#fff',
							fontSize: 12,
							joinCluster: true,
							borderRadius: 5,
							padding: 5,
							textAlign: 'center',
							//ios系统要求16进制 才有透明度
							bgColor: '#000000B3',

						},
						latitude: item.recordLocation.latitude,
						longitude: item.recordLocation.longitude,
						iconPath: '/static/icon/image/location.png'
					});

				})
				console.log(res)
				return res;
			},
			markerTap(e) {
				console.log(e);
				// uni.navigateTo({
				// 	url: `/pages/merchant/MerchantDetail?id=${e.markerId}`
				// })
			},
			formatter(type, value) {
				if (type === 'year') {
					return `${value}年`
				}
				if (type === 'month') {
					return `${value}月`
				}
				if (type === 'day') {
					return `${value}日`
				}
				return value
			},
			confirmDate(e){
				const timeFormat = uni.$u.timeFormat;
				console.log('e', e, timeFormat(e.value, 'yyyy-mm-dd'))
				this.currDate = timeFormat(e.value, 'yyyy-mm-dd');
				this.datePickerShow = false;
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
			this.currLocation.latitude = this.track[0].recordLocation.latitude;
			this.polylines[0].points = this.generatePointsFromTrack(this.track);
			this.markers = this.generateMarkers(this.track);
		},
		onReady() {

			this.$refs.datetimePicker.setFormatter(this.formatter)
		},
	}
</script>

<style>

</style>