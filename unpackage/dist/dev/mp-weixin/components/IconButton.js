"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "IconButton",
  props: ["navUrl", "imgUrl", "text"],
  data() {
    return {};
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.imgUrl,
    b: common_vendor.t($props.text),
    c: $props.navUrl
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/fred/Course/Graduation Project/BPMS-FrontEnd/components/IconButton.vue"]]);
wx.createComponent(Component);
