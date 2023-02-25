"use strict";
const common_vendor = require("../common/vendor.js");
const store = common_vendor.createStore({
  state: {
    wx_token: "",
    roleId: 0
    // 用户角色：0 为营销人员，1 为管理人员
  },
  mutations: {
    // 设置用户角色 Id
    setRoleId(state, data) {
      state.roleId = data;
      common_vendor.index.setStorageSync("roleId", data);
    }
  }
});
exports.store = store;
