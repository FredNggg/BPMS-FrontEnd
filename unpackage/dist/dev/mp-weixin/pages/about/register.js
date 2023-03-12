"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      model: {}
    };
  },
  methods: {}
};
if (!Array) {
  const _easycom_u__form2 = common_vendor.resolveComponent("u--form");
  _easycom_u__form2();
}
const _easycom_u__form = () => "../../uni_modules/uview-plus/components/u--form/u--form.js";
if (!Math) {
  _easycom_u__form();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.sr("form1", "2c8548e4-0"),
    b: common_vendor.p({
      labelPosition: "left",
      model: $data.model,
      rules: _ctx.rules
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/fred/Course/Graduation Project/BPMS-FrontEnd/pages/about/register.vue"]]);
wx.createPage(MiniProgramPage);
