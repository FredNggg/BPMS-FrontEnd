"use strict";
const common_vendor = require("../../common/vendor.js");
const common_functionMenu = require("../../common/function-menu.js");
const unlogin = () => "../../components/unlogin.js";
const IconButton = () => "../../components/IconButton.js";
const _sfc_main = {
  components: {
    IconButton,
    unlogin
  },
  data() {
    return {
      functionList: [],
      loggedIn: false
    };
  },
  methods: {
    checkLoggedIn() {
      return common_vendor.index.getStorageSync("userInfo");
    }
  },
  onLoad() {
    this.loggedIn = this.checkLoggedIn();
    this.functionList = common_vendor.index.getStorageSync("userRole") === 1 ? common_functionMenu.MARKETER_LIST : common_functionMenu.ADMIN_LIST;
  }
};
if (!Array) {
  const _component_unlogin = common_vendor.resolveComponent("unlogin");
  const _component_icon_button = common_vendor.resolveComponent("icon-button");
  const _easycom_u_divider2 = common_vendor.resolveComponent("u-divider");
  (_component_unlogin + _component_icon_button + _easycom_u_divider2)();
}
const _easycom_u_divider = () => "../../uni_modules/uview-plus/components/u-divider/u-divider.js";
if (!Math) {
  _easycom_u_divider();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !$data.loggedIn
  }, !$data.loggedIn ? {} : {
    b: common_vendor.f($data.functionList, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.f(item.functions, (func, k1, i1) => {
          return {
            a: "9df2b800-1-" + i0 + "-" + i1,
            b: common_vendor.p({
              ["nav-url"]: func.pagePath,
              ["img-url"]: func.iconPath,
              text: func.name
            })
          };
        }),
        c: "9df2b800-2-" + i0
      };
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/fred/Course/Graduation Project/BPMS-FrontEnd/pages/function/function.vue"]]);
wx.createPage(MiniProgramPage);
