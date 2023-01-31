<template>
	<div class="icon-wall">
		<icon-button nav-url="/pages/about/register" img-url="/static/icon/image/my.png" text="产品管理"></icon-button>
		<icon-button nav-url="/pages/about/register" img-url="/static/icon/image/my.png" text="666"></icon-button>
		<icon-button nav-url="/pages/about/register" img-url="/static/icon/image/my.png" text="666"></icon-button>
		<icon-button nav-url="/pages/about/register" img-url="/static/icon/image/my.png" text="666"></icon-button>
		<icon-button nav-url="/pages/about/register" img-url="/static/icon/image/my.png" text="666"></icon-button>
		<icon-button nav-url="/pages/about/register" img-url="/static/icon/image/my.png" text="666"></icon-button>
		<icon-button nav-url="/pages/about/register" img-url="/static/icon/image/my.png" text="666"></icon-button>
		
	</div>
</template>

<script>
	import IconButton from '@/components/IconButton.vue'

	export default {
		components: {
			IconButton
		},

		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.icon-wall {
		margin: 40rpx 40rpx;
		display: flex;
		flex-wrap: wrap;
	}
</style>
