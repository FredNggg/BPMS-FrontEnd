"use strict";
const common_vendor = require("../../common/vendor.js");
const common_functionMenu = require("../../common/function-menu.js");
const IconButton = () => "../../components/IconButton.js";
const _sfc_main = {
  components: {
    IconButton
  },
  data() {
    return {
      functionList: []
    };
  },
  methods: {},
  onLoad() {
    this.functionList = common_vendor.index.getStorageSync("userRole") === 1 ? common_functionMenu.MARKETER_LIST : common_functionMenu.ADMIN_LIST;
  }
};
if (!Array) {
  const _component_icon_button = common_vendor.resolveComponent("icon-button");
  _component_icon_button();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.functionList, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.f(item.functions, (func, k1, i1) => {
          return {
            a: "9df2b800-0-" + i0 + "-" + i1,
            b: common_vendor.p({
              ["nav-url"]: func.pagePath,
              ["img-url"]: func.iconPath,
              text: func.name
            })
          };
        })
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/fred/Course/Graduation Project/BPMS-FrontEnd/pages/function/function.vue"]]);
wx.createPage(MiniProgramPage);
