"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "unlogin",
  data() {
    return {};
  },
  methods: {
    navigateTo: function(url) {
      common_vendor.index.navigateTo({
        url
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.navigateTo(`/pages/about/login`)),
    b: common_vendor.o(($event) => $options.navigateTo(`/pages/about/register`))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/fred/Course/Graduation Project/BPMS-FrontEnd/components/unlogin.vue"]]);
wx.createComponent(Component);
