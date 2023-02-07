<template>


<view class="icon-wall" v-for="item in functionList">
  <div class="title">{{item.title}}</div>
  <p v-for="func in item.functions">
    <icon-button :nav-url="func.pagePath" :img-url="func.iconPath" :text="func.name"></icon-button>
  </p>
</view>

</template>

<script>
import IconButton from '@/components/IconButton.vue'
import {MARKETER_LIST, ADMIN_LIST} from "../../common/function-menu";

export default {
  components: {
    IconButton
  },

  data() {
    return {
      functionList: [],
    }
  },
  methods: {},
  onLoad(){
    this.functionList = uni.getStorageSync('roleId') === 0 ? MARKETER_LIST : ADMIN_LIST;
  }
}
</script>

<style>
.icon-wall {
  margin: 40 rpx 40 rpx;
  display: flex;
  flex-wrap: wrap;
}
.title{
  width: 100%;
}
</style>
