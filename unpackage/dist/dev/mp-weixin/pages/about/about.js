"use strict";
const common_vendor = require("../../common/vendor.js");
const unlogin = () => "../../components/unlogin.js";
const _sfc_main = {
  components: {
    unlogin
  },
  data() {
    return {
      roleId: common_vendor.index.getStorageSync("userRole"),
      userInfo: common_vendor.index.getStorageInfoSync("userInfo")
    };
  },
  methods: {
    checkLoggedIn() {
      return common_vendor.index.getStorageSync("userRole").length === 0;
    },
    logout() {
      common_vendor.index.clearStorageSync();
      common_vendor.index.reLaunch({
        url: "/pages/index/index"
      });
    }
  }
};
if (!Array) {
  const _component_unlogin = common_vendor.resolveComponent("unlogin");
  _component_unlogin();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $options.checkLoggedIn()
  }, $options.checkLoggedIn() ? {} : common_vendor.e({
    b: $data.roleId === 1
  }, $data.roleId === 1 ? {} : {}, {
    c: $data.roleId === 0
  }, $data.roleId === 0 ? {} : {}, {
    d: common_vendor.o(($event) => $options.logout())
  }));
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/fred/Course/Graduation Project/BPMS-FrontEnd/pages/about/about.vue"]]);
wx.createPage(MiniProgramPage);
