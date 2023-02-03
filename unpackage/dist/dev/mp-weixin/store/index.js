"use strict";
const common_vendor = require("../common/vendor.js");
const store = common_vendor.createStore({
  state: {
    wx_token: "",
    roleId: 0
  },
  mutations: {
    setRoleId(state, data) {
      state.roleId = data;
      common_vendor.index.setStorageSync("roleId", data);
    }
  }
});
exports.store = store;
