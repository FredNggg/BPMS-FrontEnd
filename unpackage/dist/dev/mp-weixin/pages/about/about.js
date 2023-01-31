"use strict";
const common_vendor = require("../../common/vendor.js");
const unlogin = () => "../../components/unlogin.js";
const _sfc_main = {
  components: {
    unlogin
  },
  data() {
    return {};
  },
  methods: {}
};
if (!Array) {
  const _component_unlogin = common_vendor.resolveComponent("unlogin");
  _component_unlogin();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/fred/Course/Graduation Project/BPMS-FrontEnd/pages/about/about.vue"]]);
wx.createPage(MiniProgramPage);
