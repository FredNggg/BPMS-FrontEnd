"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      headerList: [{
        imgUrl: "/static/image/header1.jpg",
        linkUrl: ""
      }, {
        imgUrl: "/static/image/header2.jpg",
        linkUrl: ""
      }]
    };
  },
  onLoad() {
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.headerList, (item, index, i0) => {
      return {
        a: item.imgUrl,
        b: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/fred/Course/Graduation Project/BPMS-FrontEnd/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
