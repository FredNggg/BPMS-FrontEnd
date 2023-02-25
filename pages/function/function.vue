<template>
<<<<<<< HEAD
  <view v-if="roleId !== 0 && roleId !== 1">
    <unlogin></unlogin>
  </view>
	<view v-else class="icon-wall" v-for="item in functionList">
		<div class="title">{{ item.title }}</div>

		<p class="icons" v-for="func in item.functions">
			<icon-button :nav-url="func.pagePath" :img-url="func.iconPath" :text="func.name"></icon-button>
		</p>

	</view>

=======
	<div class="icon-wall">
		<icon-button nav-url="/pages/about/register" img-url="/static/icon/image/my.png" text="产品管理"></icon-button>
		<icon-button nav-url="/pages/about/register" img-url="/static/icon/image/my.png" text="666"></icon-button>
		<icon-button nav-url="/pages/about/register" img-url="/static/icon/image/my.png" text="666"></icon-button>
		<icon-button nav-url="/pages/about/register" img-url="/static/icon/image/my.png" text="666"></icon-button>
		<icon-button nav-url="/pages/about/register" img-url="/static/icon/image/my.png" text="666"></icon-button>
		<icon-button nav-url="/pages/about/register" img-url="/static/icon/image/my.png" text="666"></icon-button>
		<icon-button nav-url="/pages/about/register" img-url="/static/icon/image/my.png" text="666"></icon-button>
		
	</div>
>>>>>>> parent of 7e44193 (feat: 功能页完善；图标补充)
</template>

<script>
	import IconButton from '@/components/IconButton.vue'
<<<<<<< HEAD
	import {
		MARKETER_LIST,
		ADMIN_LIST
	} from "../../common/function-menu";
  import Unlogin from "@/components/unlogin.vue";



	export default {
		components: {
      Unlogin,
			IconButton
		},

		data() {
			return {
        roleId: -1,
				functionList: [],
			}
		},
		methods: {},
		onLoad() {
      this.roleId = uni.getStorageSync('roleId');
			this.functionList = uni.getStorageSync('roleId') === 0 ? MARKETER_LIST : ADMIN_LIST;
=======

	export default {
		components: {
			IconButton
		},

		data() {
			return {

			}
		},
		methods: {

>>>>>>> parent of 7e44193 (feat: 功能页完善；图标补充)
		}
	}
</script>

<<<<<<< HEAD
<style lang="scss">

	.icon-wall {
		margin-left: 40rpx;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		margin-right: 40rpx;
		border-radius: 30rpx;
		display: flex;
		flex-wrap: wrap;
		background-color: #ffffff;
	}

	.icons {
		border-radius: 10rpx;

	}

	.title {
		width: 100%;
		font-size: 36rpx;
		font-weight: bold;
		text-decoration: underline;
		padding-bottom: 20rpx;
		// background-color: #f8f8f8;
	}
</style>
=======
<style>
	.icon-wall {
		margin: 40rpx 40rpx;
		display: flex;
		flex-wrap: wrap;
	}
</style>
>>>>>>> parent of 7e44193 (feat: 功能页完善；图标补充)
