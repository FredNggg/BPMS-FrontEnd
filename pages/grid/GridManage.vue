<template>
	<view>
		<grid-base></grid-base>
	</view>
</template>

<script>
	import GridBase from '@/pages/grid/GridBase.vue'
	
	export default {
		components: {GridBase},
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		options: {
			styleIsolation: 'shared'
		},
		onShow(){
			// uni.$once(
			// 	'selectedInstitution',
			// 	function(data) {
			// 		console.log('监听', data)
			// 	}
			// )
		}
	}
</script>

<style>

</style>
