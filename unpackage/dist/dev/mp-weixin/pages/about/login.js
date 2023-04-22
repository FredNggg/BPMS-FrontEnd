"use strict";
const common_vendor = require("../../common/vendor.js");
common_vendor.useStore();
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    login(data) {
      this.$store.commit("setRoleId", data);
      common_vendor.index.login({
        provider: "weixin",
        //使用微信登录
        success: function(loginRes) {
          console.log("sucess: ", loginRes);
        },
        fail: (err) => {
          reject(err);
        }
      });
      common_vendor.index.showToast({
        title: `登录成功！`
      });
      common_vendor.index.reLaunch({
        url: "/pages/index/index"
      });
    },
    wechatLogin() {
    },
    phoneLogin() {
      common_vendor.index.navigateTo({
        url: "/pages/about/phone-login"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.login(0)),
    b: common_vendor.o(($event) => $options.login(1)),
    c: common_vendor.o(($event) => $options.wechatLogin()),
    d: common_vendor.o(($event) => $options.phoneLogin())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/fred/Course/Graduation Project/BPMS-FrontEnd/pages/about/login.vue"]]);
wx.createPage(MiniProgramPage);
