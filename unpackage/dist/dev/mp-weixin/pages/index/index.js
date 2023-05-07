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
      }],
      newsList: [
        {
          "title": "英国央行维持利率不变",
          "summary": "英国央行周四宣布维持基准利率不变，即0.1%，并表示将继续购买政府和企业债券以支持经济复苏。该决定符合市场预期。",
          "time": "2023-05-06 14:00:00"
        },
        {
          "title": "美国经济增长超预期",
          "summary": "美国经济在上个季度增长了6.4%，超过了预期。这是由于消费者支出和商业投资的强劲表现，以及政府的财政刺激措施。",
          "time": "2023-05-05 08:30:00"
        },
        {
          "title": "中国制造业活动增速放缓",
          "summary": "中国制造业活动增速在4月份放缓，制造业采购经理人指数（PMI）从上个月的51.9下降到51.1。这是由于原材料短缺和物流问题所导致的。",
          "time": "2023-05-04 10:00:00"
        },
        {
          "title": "国际油价上涨超过70美元",
          "summary": "国际油价在周三上涨，布伦特原油价格超过了70美元/桶。这是由于全球经济复苏和沙特阿拉伯宣布将进一步减产所带来的供需变化所导致的。",
          "time": "2023-05-03 16:45:00"
        },
        {
          "title": "欧元区通胀率上升",
          "summary": "欧元区4月份通胀率达到2.0%，高于预期。这是由于能源和食品价格上涨所带来的影响。",
          "time": "2023-05-02 13:15:00"
        }
      ]
    };
  },
  onLoad() {
  },
  methods: {}
};
if (!Array) {
  const _easycom_u_divider2 = common_vendor.resolveComponent("u-divider");
  _easycom_u_divider2();
}
const _easycom_u_divider = () => "../../uni_modules/uview-plus/components/u-divider/u-divider.js";
if (!Math) {
  _easycom_u_divider();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.headerList, (item, index, i0) => {
      return {
        a: item.imgUrl,
        b: index
      };
    }),
    b: common_vendor.f($data.newsList, (news, k0, i0) => {
      return {
        a: common_vendor.t(news.title),
        b: common_vendor.t(news.summary),
        c: common_vendor.t(news.time),
        d: news.title
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/fred/Course/Graduation Project/BPMS-FrontEnd/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
