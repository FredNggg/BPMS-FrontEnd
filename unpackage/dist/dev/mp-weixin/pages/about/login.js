"use strict";
const common_vendor = require("../../common/vendor.js");
const api_user = require("../../api/user.js");
require("../../utils/request.js");
require("../../common/operate.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    login(data) {
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
    weChatLogin(userRole) {
      common_vendor.index.login({
        provider: "weixin",
        //使用微信登录
        success: function(res) {
          common_vendor.index.setStorageSync(
            "wechatLoginCode",
            res.code
          );
          api_user.wechatLogin(userRole, common_vendor.index.getStorageSync("wechatLoginCode")).then((res2) => {
            console.log(res2);
            if (res2.code == 200) {
              common_vendor.index.setStorageSync(
                "userInfo",
                res2.data.userVO
              );
              common_vendor.index.setStorageSync(
                "token",
                res2.Authorization
              );
              common_vendor.index.setStorageSync(
                "userRole",
                res2.data.userVO.userRole
              );
              common_vendor.index.setStorageSync(
                "instituition",
                res2.data.institutionVO
              );
              common_vendor.index.$u.toast("登录成功");
              common_vendor.index.reLaunch({
                url: "/pages/index/index"
              });
            } else {
              common_vendor.index.$u.toast(res2.msg);
            }
          });
        },
        fail: (err) => {
          reject(err);
        }
      });
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
    c: common_vendor.o(($event) => $options.weChatLogin(0)),
    d: common_vendor.o(($event) => $options.weChatLogin(1)),
    e: common_vendor.o(($event) => $options.phoneLogin())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/fred/Course/Graduation Project/BPMS-FrontEnd/pages/about/login.vue"]]);
wx.createPage(MiniProgramPage);
