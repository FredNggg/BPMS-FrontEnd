"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const common_vendor = require("./common/vendor.js");
const store_index = require("./store/index.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/function/function.js";
  "./pages/about/about.js";
  "./pages/about/login.js";
  "./pages/about/register.js";
  "./pages/product/ProductReserve.js";
  "./pages/product/ProductList.js";
  "./pages/product/ProductHistory.js";
  "./pages/merchant/MerchantCreate.js";
  "./pages/merchant/MerchantView.js";
  "./pages/grid/GridTrack.js";
  "./pages/grid/GridManage.js";
  "./pages/product/ProductCreate.js";
  "./pages/product/ProductManage.js";
  "./pages/user/UserCheck.js";
  "./pages/user/UserManage.js";
  "./pages/merchant/MerchantCheck.js";
  "./pages/merchant/MerchantManage.js";
  "./pages/grid/GridCheck.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/fred/Course/Graduation Project/BPMS-FrontEnd/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(store_index.store);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
