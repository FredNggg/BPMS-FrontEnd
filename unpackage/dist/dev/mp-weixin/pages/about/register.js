"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../api/user.js");
require("../../utils/request.js");
require("../../common/operate.js");
const _sfc_main = {
  data() {
    return {
      userInfo: {
        name: "",
        phone: "",
        institutionId: "",
        position: "营销人员",
        state: 0,
        institutionName: ""
      },
      verificationCode: "",
      tips: ""
    };
  },
  mounted() {
    common_vendor.index.$on(
      "selectedInstitution",
      (data) => {
        this.userInfo.institutionId = data.institutionId;
        this.userInfo.institutionName = data.institutionName;
        console.log("this.userInfo.institutionId:", this.userInfo.institutionId);
      }
    );
  },
  methods: {
    codeChange(text) {
      this.tips = text;
    },
    getCode() {
      if (this.$refs.uCode.canGetCode) {
        common_vendor.index.showLoading({
          title: "正在获取验证码"
        });
        setTimeout(() => {
          common_vendor.index.hideLoading();
          common_vendor.index.$u.toast("验证码已发送");
          this.$refs.uCode.start();
        }, 2e3);
      } else {
        common_vendor.index.$u.toast("倒计时结束后再发送");
      }
    },
    end() {
      common_vendor.index.$u.toast("倒计时结束");
    },
    start() {
      common_vendor.index.$u.toast("倒计时开始");
    },
    navigateToInstitutionSelection() {
      common_vendor.index.navigateTo({
        url: "/pages/institution/InstitutionList"
      });
    },
    submit() {
    }
  },
  destroyed() {
    common_vendor.index.$off("selectedInstitution");
  }
};
if (!Array) {
  const _easycom_u__input2 = common_vendor.resolveComponent("u--input");
  const _easycom_u_form_item2 = common_vendor.resolveComponent("u-form-item");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  const _easycom_u_toast2 = common_vendor.resolveComponent("u-toast");
  const _easycom_u_code2 = common_vendor.resolveComponent("u-code");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u__form2 = common_vendor.resolveComponent("u--form");
  (_easycom_u__input2 + _easycom_u_form_item2 + _easycom_u_button2 + _easycom_u_toast2 + _easycom_u_code2 + _easycom_u_icon2 + _easycom_u__form2)();
}
const _easycom_u__input = () => "../../uni_modules/uview-plus/components/u--input/u--input.js";
const _easycom_u_form_item = () => "../../uni_modules/uview-plus/components/u-form-item/u-form-item.js";
const _easycom_u_button = () => "../../uni_modules/uview-plus/components/u-button/u-button.js";
const _easycom_u_toast = () => "../../uni_modules/uview-plus/components/u-toast/u-toast.js";
const _easycom_u_code = () => "../../uni_modules/uview-plus/components/u-code/u-code.js";
const _easycom_u_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_u__form = () => "../../uni_modules/uview-plus/components/u--form/u--form.js";
if (!Math) {
  (_easycom_u__input + _easycom_u_form_item + _easycom_u_button + _easycom_u_toast + _easycom_u_code + _easycom_u_icon + _easycom_u__form)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.userInfo.name = $event),
    b: common_vendor.p({
      placeholder: "请输入姓名",
      border: "none",
      modelValue: $data.userInfo.name
    }),
    c: common_vendor.sr("name", "2c8548e4-1,2c8548e4-0"),
    d: common_vendor.p({
      label: "姓名",
      prop: "userInfo.name",
      borderBottom: true
    }),
    e: common_vendor.o(($event) => $data.userInfo.phone = $event),
    f: common_vendor.p({
      placeholder: "请输入11位手机号码",
      border: "none",
      modelValue: $data.userInfo.phone
    }),
    g: common_vendor.sr("phone", "2c8548e4-3,2c8548e4-0"),
    h: common_vendor.p({
      label: "手机号码",
      prop: "userInfo.phone",
      borderBottom: true
    }),
    i: common_vendor.o(($event) => $data.verificationCode = $event),
    j: common_vendor.p({
      width: "120rpx",
      placeholder: "请填写验证码",
      border: "none",
      modelValue: $data.verificationCode
    }),
    k: common_vendor.o($options.getCode),
    l: common_vendor.p({
      type: "success",
      size: "mini",
      text: $data.tips
    }),
    m: common_vendor.sr("uToast", "2c8548e4-8,2c8548e4-5"),
    n: common_vendor.sr("uCode", "2c8548e4-9,2c8548e4-5"),
    o: common_vendor.o($options.end),
    p: common_vendor.o($options.start),
    q: common_vendor.o($options.codeChange),
    r: common_vendor.p({
      seconds: _ctx.seconds
    }),
    s: common_vendor.sr("phone", "2c8548e4-5,2c8548e4-0"),
    t: common_vendor.p({
      label: "验证码",
      borderBottom: true,
      prop: "code"
    }),
    v: common_vendor.o(($event) => $data.userInfo.institutionName = $event),
    w: common_vendor.p({
      placeholder: "请选择所属机构",
      border: "none",
      modelValue: $data.userInfo.institutionName
    }),
    x: common_vendor.p({
      name: "arrow-right"
    }),
    y: common_vendor.sr("institutionId", "2c8548e4-10,2c8548e4-0"),
    z: common_vendor.o($options.navigateToInstitutionSelection),
    A: common_vendor.p({
      label: "所属机构",
      prop: "userInfo.institutionId",
      borderBottom: true
    }),
    B: common_vendor.sr("form1", "2c8548e4-0"),
    C: common_vendor.p({
      labelPosition: "left",
      labelWidth: "180rpx",
      model: $data.userInfo,
      rules: _ctx.rules
    }),
    D: common_vendor.o($options.submit),
    E: common_vendor.p({
      type: "primary"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/fred/Course/Graduation Project/BPMS-FrontEnd/pages/about/register.vue"]]);
wx.createPage(MiniProgramPage);
