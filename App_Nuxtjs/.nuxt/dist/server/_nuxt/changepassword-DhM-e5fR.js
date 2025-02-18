import { ref, createVNode, computed, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
import { p as propsFactory, g as genericComponent, _ as _export_sfc } from "../server.mjs";
import { V as VApp } from "./VApp-Dy1gUNa7.js";
import { V as VMain } from "./VMain-B0aKjWRH.js";
import { m as makeComponentProps, c as useRender, V as VIcon, d as VBtn } from "./VBtn-BQh1DFk2.js";
import { j as makeFormProps, k as createForm, d as VInput } from "./VInput--HWDDWXB.js";
import { f as forwardRefs } from "./forwardRefs-B2cVIy3B.js";
import { V as VTextField } from "./VTextField-DYVwMBTO.js";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "radix3";
import "defu";
import "ufo";
import "./ssrBoot-BtvJZs44.js";
const makeVFormProps = propsFactory({
  ...makeComponentProps(),
  ...makeFormProps()
}, "VForm");
const VForm = genericComponent()({
  name: "VForm",
  props: makeVFormProps(),
  emits: {
    "update:modelValue": (val) => true,
    submit: (e) => true
  },
  setup(props, _ref) {
    let {
      slots,
      emit
    } = _ref;
    const form = createForm(props);
    const formRef = ref();
    function onReset(e) {
      e.preventDefault();
      form.reset();
    }
    function onSubmit(_e) {
      const e = _e;
      const ready = form.validate();
      e.then = ready.then.bind(ready);
      e.catch = ready.catch.bind(ready);
      e.finally = ready.finally.bind(ready);
      emit("submit", e);
      if (!e.defaultPrevented) {
        ready.then((_ref2) => {
          var _a;
          let {
            valid
          } = _ref2;
          if (valid) {
            (_a = formRef.value) == null ? void 0 : _a.submit();
          }
        });
      }
      e.preventDefault();
    }
    useRender(() => {
      var _a;
      return createVNode("form", {
        "ref": formRef,
        "class": ["v-form", props.class],
        "style": props.style,
        "novalidate": true,
        "onReset": onReset,
        "onSubmit": onSubmit
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots, form)]);
    });
    return forwardRefs(form, formRef);
  }
});
const _sfc_main = {
  __name: "changepassword",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    useRoute();
    const originalPassword = ref("");
    const newPassword = ref("");
    const confirmPassword = ref("");
    const showOriginalPassword = ref(false);
    const showNewPassword = ref(false);
    const showConfirmPassword = ref(false);
    const isFormValid = computed(() => {
      return originalPassword.value && newPassword.value && confirmPassword.value && newPassword.value === confirmPassword.value;
    });
    const changePassword = async () => {
      var _a, _b;
      if (newPassword.value !== confirmPassword.value) {
        alert("รหัสผ่านใหม่และยืนยันรหัสผ่านไม่ตรงกัน");
        return;
      }
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "http://localhost:7000/settings/change-password",
          {
            newPassword: newPassword.value,
            originalPassword: originalPassword.value
            // ส่งรหัสผ่านเดิม
          },
          {
            headers: {
              authorization: token
              // ส่ง token ผ่าน headers
            }
          }
        );
        alert(response.data.message);
        router.push("setting");
      } catch (error) {
        const message = ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || error.message;
        alert(`เกิดข้อผิดพลาด: ${message}`);
      }
    };
    const toggleShowOriginalPassword = () => {
      showOriginalPassword.value = !showOriginalPassword.value;
    };
    const toggleShowNewPassword = () => {
      showNewPassword.value = !showNewPassword.value;
    };
    const toggleShowConfirmPassword = () => {
      showConfirmPassword.value = !showConfirmPassword.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VApp, mergeProps({ class: "change-password container mt-5" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center" data-v-2bdf7a84${_scopeId}><hr data-v-2bdf7a84${_scopeId}><h1 class="text-h5 font-weight-bold" data-v-2bdf7a84${_scopeId}>เปลี่ยนรหัสผ่าน</h1><hr data-v-2bdf7a84${_scopeId}></div>`);
            _push2(ssrRenderComponent(VMain, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VForm, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VInput, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: originalPassword.value,
                                "onUpdate:modelValue": ($event) => originalPassword.value = $event,
                                type: showOriginalPassword.value ? "text" : "password",
                                label: "กรอกรหัสผ่านเดิม",
                                outlined: "",
                                dense: "",
                                required: ""
                              }, {
                                append: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, { onClick: toggleShowOriginalPassword }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(showOriginalPassword.value ? "mdi-eye-off" : "mdi-eye")}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(showOriginalPassword.value ? "mdi-eye-off" : "mdi-eye"), 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VIcon, { onClick: toggleShowOriginalPassword }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(showOriginalPassword.value ? "mdi-eye-off" : "mdi-eye"), 1)
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  modelValue: originalPassword.value,
                                  "onUpdate:modelValue": ($event) => originalPassword.value = $event,
                                  type: showOriginalPassword.value ? "text" : "password",
                                  label: "กรอกรหัสผ่านเดิม",
                                  outlined: "",
                                  dense: "",
                                  required: ""
                                }, {
                                  append: withCtx(() => [
                                    createVNode(VIcon, { onClick: toggleShowOriginalPassword }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(showOriginalPassword.value ? "mdi-eye-off" : "mdi-eye"), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue", "type"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VInput, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: newPassword.value,
                                "onUpdate:modelValue": ($event) => newPassword.value = $event,
                                type: showNewPassword.value ? "text" : "password",
                                label: "กรอกรหัสผ่านใหม่",
                                outlined: "",
                                dense: "",
                                required: ""
                              }, {
                                append: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, { onClick: toggleShowNewPassword }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(showNewPassword.value ? "mdi-eye-off" : "mdi-eye")}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(showNewPassword.value ? "mdi-eye-off" : "mdi-eye"), 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VIcon, { onClick: toggleShowNewPassword }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(showNewPassword.value ? "mdi-eye-off" : "mdi-eye"), 1)
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  modelValue: newPassword.value,
                                  "onUpdate:modelValue": ($event) => newPassword.value = $event,
                                  type: showNewPassword.value ? "text" : "password",
                                  label: "กรอกรหัสผ่านใหม่",
                                  outlined: "",
                                  dense: "",
                                  required: ""
                                }, {
                                  append: withCtx(() => [
                                    createVNode(VIcon, { onClick: toggleShowNewPassword }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(showNewPassword.value ? "mdi-eye-off" : "mdi-eye"), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue", "type"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VInput, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: confirmPassword.value,
                                "onUpdate:modelValue": ($event) => confirmPassword.value = $event,
                                type: showConfirmPassword.value ? "text" : "password",
                                label: "ยืนยันรหัสผ่านใหม่",
                                outlined: "",
                                dense: "",
                                required: ""
                              }, {
                                append: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, { onClick: toggleShowConfirmPassword }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(showConfirmPassword.value ? "mdi-eye-off" : "mdi-eye")}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(showConfirmPassword.value ? "mdi-eye-off" : "mdi-eye"), 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VIcon, { onClick: toggleShowConfirmPassword }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(showConfirmPassword.value ? "mdi-eye-off" : "mdi-eye"), 1)
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  modelValue: confirmPassword.value,
                                  "onUpdate:modelValue": ($event) => confirmPassword.value = $event,
                                  type: showConfirmPassword.value ? "text" : "password",
                                  label: "ยืนยันรหัสผ่านใหม่",
                                  outlined: "",
                                  dense: "",
                                  required: ""
                                }, {
                                  append: withCtx(() => [
                                    createVNode(VIcon, { onClick: toggleShowConfirmPassword }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(showConfirmPassword.value ? "mdi-eye-off" : "mdi-eye"), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue", "type"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "primary",
                          class: "mt-4",
                          onClick: changePassword,
                          disabled: !isFormValid.value
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` ยืนยันการเปลี่ยนรหัส `);
                            } else {
                              return [
                                createTextVNode(" ยืนยันการเปลี่ยนรหัส ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VInput, null, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: originalPassword.value,
                                "onUpdate:modelValue": ($event) => originalPassword.value = $event,
                                type: showOriginalPassword.value ? "text" : "password",
                                label: "กรอกรหัสผ่านเดิม",
                                outlined: "",
                                dense: "",
                                required: ""
                              }, {
                                append: withCtx(() => [
                                  createVNode(VIcon, { onClick: toggleShowOriginalPassword }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(showOriginalPassword.value ? "mdi-eye-off" : "mdi-eye"), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue", "type"])
                            ]),
                            _: 1
                          }),
                          createVNode(VInput, null, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: newPassword.value,
                                "onUpdate:modelValue": ($event) => newPassword.value = $event,
                                type: showNewPassword.value ? "text" : "password",
                                label: "กรอกรหัสผ่านใหม่",
                                outlined: "",
                                dense: "",
                                required: ""
                              }, {
                                append: withCtx(() => [
                                  createVNode(VIcon, { onClick: toggleShowNewPassword }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(showNewPassword.value ? "mdi-eye-off" : "mdi-eye"), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue", "type"])
                            ]),
                            _: 1
                          }),
                          createVNode(VInput, null, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: confirmPassword.value,
                                "onUpdate:modelValue": ($event) => confirmPassword.value = $event,
                                type: showConfirmPassword.value ? "text" : "password",
                                label: "ยืนยันรหัสผ่านใหม่",
                                outlined: "",
                                dense: "",
                                required: ""
                              }, {
                                append: withCtx(() => [
                                  createVNode(VIcon, { onClick: toggleShowConfirmPassword }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(showConfirmPassword.value ? "mdi-eye-off" : "mdi-eye"), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue", "type"])
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            color: "primary",
                            class: "mt-4",
                            onClick: changePassword,
                            disabled: !isFormValid.value
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" ยืนยันการเปลี่ยนรหัส ")
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VForm, null, {
                      default: withCtx(() => [
                        createVNode(VInput, null, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              modelValue: originalPassword.value,
                              "onUpdate:modelValue": ($event) => originalPassword.value = $event,
                              type: showOriginalPassword.value ? "text" : "password",
                              label: "กรอกรหัสผ่านเดิม",
                              outlined: "",
                              dense: "",
                              required: ""
                            }, {
                              append: withCtx(() => [
                                createVNode(VIcon, { onClick: toggleShowOriginalPassword }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(showOriginalPassword.value ? "mdi-eye-off" : "mdi-eye"), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue", "type"])
                          ]),
                          _: 1
                        }),
                        createVNode(VInput, null, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              modelValue: newPassword.value,
                              "onUpdate:modelValue": ($event) => newPassword.value = $event,
                              type: showNewPassword.value ? "text" : "password",
                              label: "กรอกรหัสผ่านใหม่",
                              outlined: "",
                              dense: "",
                              required: ""
                            }, {
                              append: withCtx(() => [
                                createVNode(VIcon, { onClick: toggleShowNewPassword }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(showNewPassword.value ? "mdi-eye-off" : "mdi-eye"), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue", "type"])
                          ]),
                          _: 1
                        }),
                        createVNode(VInput, null, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              modelValue: confirmPassword.value,
                              "onUpdate:modelValue": ($event) => confirmPassword.value = $event,
                              type: showConfirmPassword.value ? "text" : "password",
                              label: "ยืนยันรหัสผ่านใหม่",
                              outlined: "",
                              dense: "",
                              required: ""
                            }, {
                              append: withCtx(() => [
                                createVNode(VIcon, { onClick: toggleShowConfirmPassword }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(showConfirmPassword.value ? "mdi-eye-off" : "mdi-eye"), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue", "type"])
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          color: "primary",
                          class: "mt-4",
                          onClick: changePassword,
                          disabled: !isFormValid.value
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" ยืนยันการเปลี่ยนรหัส ")
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "text-center" }, [
                createVNode("hr"),
                createVNode("h1", { class: "text-h5 font-weight-bold" }, "เปลี่ยนรหัสผ่าน"),
                createVNode("hr")
              ]),
              createVNode(VMain, null, {
                default: withCtx(() => [
                  createVNode(VForm, null, {
                    default: withCtx(() => [
                      createVNode(VInput, null, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: originalPassword.value,
                            "onUpdate:modelValue": ($event) => originalPassword.value = $event,
                            type: showOriginalPassword.value ? "text" : "password",
                            label: "กรอกรหัสผ่านเดิม",
                            outlined: "",
                            dense: "",
                            required: ""
                          }, {
                            append: withCtx(() => [
                              createVNode(VIcon, { onClick: toggleShowOriginalPassword }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(showOriginalPassword.value ? "mdi-eye-off" : "mdi-eye"), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "type"])
                        ]),
                        _: 1
                      }),
                      createVNode(VInput, null, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: newPassword.value,
                            "onUpdate:modelValue": ($event) => newPassword.value = $event,
                            type: showNewPassword.value ? "text" : "password",
                            label: "กรอกรหัสผ่านใหม่",
                            outlined: "",
                            dense: "",
                            required: ""
                          }, {
                            append: withCtx(() => [
                              createVNode(VIcon, { onClick: toggleShowNewPassword }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(showNewPassword.value ? "mdi-eye-off" : "mdi-eye"), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "type"])
                        ]),
                        _: 1
                      }),
                      createVNode(VInput, null, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: confirmPassword.value,
                            "onUpdate:modelValue": ($event) => confirmPassword.value = $event,
                            type: showConfirmPassword.value ? "text" : "password",
                            label: "ยืนยันรหัสผ่านใหม่",
                            outlined: "",
                            dense: "",
                            required: ""
                          }, {
                            append: withCtx(() => [
                              createVNode(VIcon, { onClick: toggleShowConfirmPassword }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(showConfirmPassword.value ? "mdi-eye-off" : "mdi-eye"), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "type"])
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        color: "primary",
                        class: "mt-4",
                        onClick: changePassword,
                        disabled: !isFormValid.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" ยืนยันการเปลี่ยนรหัส ")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings/changepassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const changepassword = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2bdf7a84"]]);
export {
  changepassword as default
};
//# sourceMappingURL=changepassword-DhM-e5fR.js.map
