"use strict";
const common_vendor = require("../../common/vendor.js");
const api_user = require("../../api/user.js");
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
        institutionName: "",
        code: ""
      },
      tips: "",
      rules: {
        "name": {
          required: true,
          message: "请填写姓名",
          trigger: ["blur", "change"]
        },
        "code": {
          type: "string",
          required: true,
          len: 6,
          message: "请填写6位验证码",
          trigger: ["blur"]
        },
        "phone": [
          {
            required: true,
            message: "请输入手机号",
            trigger: ["change", "blur"]
          },
          {
            // 自定义验证函数，见上说明
            validator: (rule, value, callback) => {
              return common_vendor.index.$u.test.mobile(value);
            },
            message: "手机号码不正确",
            // 触发器可以同时用blur和change
            trigger: ["change", "blur"]
          }
        ],
        "institutionName": {
          type: "string",
          required: true,
          message: "请选择所属机构",
          trigger: ["blur", "change"]
        }
      }
    };
  },
  mounted() {
    this.$refs.form1.setRules(this.rules);
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
      if (!common_vendor.index.$u.test.mobile(this.userInfo.phone)) {
        common_vendor.index.$u.toast("手机号填写不正确");
        return;
      }
      if (this.$refs.uCode.canGetCode) {
        common_vendor.index.showLoading({
          title: "正在获取验证码"
        });
        setTimeout(() => {
          common_vendor.index.hideLoading();
          api_user.sendVerificationCode(this.userInfo.phone).then(
            (res) => {
              if (res.data) {
                common_vendor.index.$u.toast("验证码已发送");
              } else {
                common_vendor.index.$u.toast("验证码发送失败");
              }
            }
          ).catch((err) => {
            common_vendor.index.$u.toast("验证码发送失败");
          });
          this.$refs.uCode.start();
        }, 2e3);
      } else {
        common_vendor.index.$u.toast("倒计时结束后再发送");
      }
    },
    navigateToInstitutionSelection() {
      common_vendor.index.navigateTo({
        url: "/pages/institution/InstitutionList"
      });
    },
    submit() {
      this.$refs.form1.validate().then((res) => {
        common_vendor.index.$u.toast("校验通过");
      }).catch((errors) => {
        common_vendor.index.$u.toast("资料填写有误，请检查！");
      });
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
      prop: "name",
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
      prop: "phone",
      borderBottom: true
    }),
    i: common_vendor.o(($event) => $data.userInfo.code = $event),
    j: common_vendor.p({
      width: "120rpx",
      placeholder: "请填写验证码",
      border: "none",
      modelValue: $data.userInfo.code
    }),
    k: common_vendor.o($options.getCode),
    l: common_vendor.p({
      type: "success",
      size: "mini",
      text: $data.tips
    }),
    m: common_vendor.sr("uToast", "2c8548e4-8,2c8548e4-5"),
    n: common_vendor.sr("uCode", "2c8548e4-9,2c8548e4-5"),
    o: common_vendor.o($options.codeChange),
    p: common_vendor.p({
      seconds: _ctx.seconds
    }),
    q: common_vendor.sr("code", "2c8548e4-5,2c8548e4-0"),
    r: common_vendor.p({
      label: "验证码",
      borderBottom: true,
      prop: "code"
    }),
    s: common_vendor.sr("institutionName", "2c8548e4-11,2c8548e4-10"),
    t: common_vendor.o(($event) => $data.userInfo.institutionName = $event),
    v: common_vendor.p({
      prop: "institutionName",
      placeholder: "请选择所属机构",
      border: "none",
      modelValue: $data.userInfo.institutionName
    }),
    w: common_vendor.p({
      name: "arrow-right"
    }),
    x: common_vendor.sr("institutionId", "2c8548e4-10,2c8548e4-0"),
    y: common_vendor.o($options.navigateToInstitutionSelection),
    z: common_vendor.p({
      label: "所属机构",
      prop: "userInfo.institutionId",
      borderBottom: true
    }),
    A: common_vendor.sr("form1", "2c8548e4-0"),
    B: common_vendor.p({
      labelPosition: "left",
      labelWidth: "180rpx",
      model: $data.userInfo,
      rules: $data.rules
    }),
    C: common_vendor.o($options.submit),
    D: common_vendor.p({
      type: "primary"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/fred/Course/Graduation Project/BPMS-FrontEnd/pages/about/register.vue"]]);
wx.createPage(MiniProgramPage);
