"use strict";
const common_vendor = require("../../common/vendor.js");
const IconButton = () => "../../components/IconButton.js";
const _sfc_main = {
  components: {
    IconButton
  },
  data() {
    return {};
  },
  methods: {}
};
if (!Array) {
  const _component_icon_button = common_vendor.resolveComponent("icon-button");
  _component_icon_button();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      ["nav-url"]: "/pages/about/register",
      ["img-url"]: "/static/icon/image/my.png",
      text: "\u4EA7\u54C1\u7BA1\u7406"
    }),
    b: common_vendor.p({
      ["nav-url"]: "/pages/about/register",
      ["img-url"]: "/static/icon/image/my.png",
      text: "666"
    }),
    c: common_vendor.p({
      ["nav-url"]: "/pages/about/register",
      ["img-url"]: "/static/icon/image/my.png",
      text: "666"
    }),
    d: common_vendor.p({
      ["nav-url"]: "/pages/about/register",
      ["img-url"]: "/static/icon/image/my.png",
      text: "666"
    }),
    e: common_vendor.p({
      ["nav-url"]: "/pages/about/register",
      ["img-url"]: "/static/icon/image/my.png",
      text: "666"
    }),
    f: common_vendor.p({
      ["nav-url"]: "/pages/about/register",
      ["img-url"]: "/static/icon/image/my.png",
      text: "666"
    }),
    g: common_vendor.p({
      ["nav-url"]: "/pages/about/register",
      ["img-url"]: "/static/icon/image/my.png",
      text: "666"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/fred/Course/Graduation Project/BPMS-FrontEnd/pages/function/function.vue"]]);
wx.createPage(MiniProgramPage);
