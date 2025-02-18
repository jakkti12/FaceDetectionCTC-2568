import axios from "axios";
import { mergeProps, withCtx, createVNode, openBlock, createBlock, createCommentVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { V as VStepper } from "./VStepper-mkFbp8xd.js";
import { V as VCard, d as VCardText, b as VImg, e as VCardActions } from "./lazy-C5DRqCjO.js";
import { V as VFileInput } from "./VFileInput-DQu0Y8pt.js";
import { d as VBtn } from "./VBtn-BQh1DFk2.js";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "./createSimpleFunctional-34w8xNDu.js";
import "./ssrBoot-BtvJZs44.js";
import "./forwardRefs-B2cVIy3B.js";
import "./VDivider-0mIWdu7a.js";
import "./VInput--HWDDWXB.js";
import "./VChip-Dwxv34Zv.js";
const _sfc_main = {
  data() {
    return {
      step: 1,
      // Current step
      image: null,
      // Uploaded image file
      imagePreview: null,
      // Base64 image preview
      teacher: 2,
      // Dummy teacher ID
      student: 4,
      // Dummy student ID
      id: 2,
      // Dummy ID
      room: 1
      // Dummy room ID
    };
  },
  methods: {
    // Handle image upload and generate preview
    handleImageUpload(file) {
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imagePreview = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        this.imagePreview = null;
      }
    },
    // Submit data to API
    async submitData() {
      try {
        const formData = new FormData();
        formData.append("image", this.image);
        formData.append("teacher_id", this.teacher);
        formData.append("student_ids", JSON.stringify([this.student]));
        formData.append("room_id", this.room);
        const response = await axios.post(
          "http://localhost:8000/teacher-process-frame",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data"
              // Set content type
            }
          }
        );
        if (response.status === "success") {
          alert("Data submitted successfully!");
          console.log("Recognized Students:", response.recognized_students);
          console.log("Absent Students:", response.absent_students);
        } else {
          alert("Error submitting data: " + response.message);
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while submitting data.");
        console.log(this.image);
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent(VStepper, mergeProps({
    "alt-labels": "",
    editable: "",
    items: ["Step 1", "Step 2"],
    modelValue: $data.step,
    "onUpdate:modelValue": ($event) => $data.step = $event
  }, _attrs), {
    "item.1": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCard, {
          title: "Step One: Upload Image",
          flat: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCardText, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VFileInput, {
                      modelValue: $data.image,
                      "onUpdate:modelValue": ($event) => $data.image = $event,
                      label: "Upload Student Image",
                      accept: "image/*",
                      onChange: $options.handleImageUpload,
                      rules: [(v) => !!v || "Image is required"],
                      required: ""
                    }, null, _parent4, _scopeId3));
                    if ($data.imagePreview) {
                      _push4(ssrRenderComponent(VImg, {
                        src: $data.imagePreview,
                        "max-height": "300",
                        contain: ""
                      }, null, _parent4, _scopeId3));
                    } else {
                      _push4(`<!---->`);
                    }
                  } else {
                    return [
                      createVNode(VFileInput, {
                        modelValue: $data.image,
                        "onUpdate:modelValue": ($event) => $data.image = $event,
                        label: "Upload Student Image",
                        accept: "image/*",
                        onChange: $options.handleImageUpload,
                        rules: [(v) => !!v || "Image is required"],
                        required: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange", "rules"]),
                      $data.imagePreview ? (openBlock(), createBlock(VImg, {
                        key: 0,
                        src: $data.imagePreview,
                        "max-height": "300",
                        contain: ""
                      }, null, 8, ["src"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCardActions, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VBtn, {
                      color: "primary",
                      onClick: ($event) => $data.step = 2,
                      disabled: !$data.image
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Next`);
                        } else {
                          return [
                            createTextVNode("Next")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VBtn, {
                        color: "primary",
                        onClick: ($event) => $data.step = 2,
                        disabled: !$data.image
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Next")
                        ]),
                        _: 1
                      }, 8, ["onClick", "disabled"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VCardText, null, {
                  default: withCtx(() => [
                    createVNode(VFileInput, {
                      modelValue: $data.image,
                      "onUpdate:modelValue": ($event) => $data.image = $event,
                      label: "Upload Student Image",
                      accept: "image/*",
                      onChange: $options.handleImageUpload,
                      rules: [(v) => !!v || "Image is required"],
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange", "rules"]),
                    $data.imagePreview ? (openBlock(), createBlock(VImg, {
                      key: 0,
                      src: $data.imagePreview,
                      "max-height": "300",
                      contain: ""
                    }, null, 8, ["src"])) : createCommentVNode("", true)
                  ]),
                  _: 1
                }),
                createVNode(VCardActions, null, {
                  default: withCtx(() => [
                    createVNode(VBtn, {
                      color: "primary",
                      onClick: ($event) => $data.step = 2,
                      disabled: !$data.image
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Next")
                      ]),
                      _: 1
                    }, 8, ["onClick", "disabled"])
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
          createVNode(VCard, {
            title: "Step One: Upload Image",
            flat: ""
          }, {
            default: withCtx(() => [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VFileInput, {
                    modelValue: $data.image,
                    "onUpdate:modelValue": ($event) => $data.image = $event,
                    label: "Upload Student Image",
                    accept: "image/*",
                    onChange: $options.handleImageUpload,
                    rules: [(v) => !!v || "Image is required"],
                    required: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange", "rules"]),
                  $data.imagePreview ? (openBlock(), createBlock(VImg, {
                    key: 0,
                    src: $data.imagePreview,
                    "max-height": "300",
                    contain: ""
                  }, null, 8, ["src"])) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode(VCardActions, null, {
                default: withCtx(() => [
                  createVNode(VBtn, {
                    color: "primary",
                    onClick: ($event) => $data.step = 2,
                    disabled: !$data.image
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Next")
                    ]),
                    _: 1
                  }, 8, ["onClick", "disabled"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    "item.2": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCard, {
          title: "Step Two: Confirm and Submit",
          flat: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCardText, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<p data-v-652d671c${_scopeId3}><strong data-v-652d671c${_scopeId3}>Teacher ID:</strong> ${ssrInterpolate($data.teacher)}</p><p data-v-652d671c${_scopeId3}><strong data-v-652d671c${_scopeId3}>Student ID:</strong> ${ssrInterpolate($data.student)}</p><p data-v-652d671c${_scopeId3}><strong data-v-652d671c${_scopeId3}>Room ID:</strong> ${ssrInterpolate($data.room)}</p><p data-v-652d671c${_scopeId3}><strong data-v-652d671c${_scopeId3}>Image Preview:</strong></p>`);
                    if ($data.imagePreview) {
                      _push4(ssrRenderComponent(VImg, {
                        src: $data.imagePreview,
                        "max-height": "300",
                        contain: ""
                      }, null, _parent4, _scopeId3));
                    } else {
                      _push4(`<!---->`);
                    }
                  } else {
                    return [
                      createVNode("p", null, [
                        createVNode("strong", null, "Teacher ID:"),
                        createTextVNode(" " + toDisplayString($data.teacher), 1)
                      ]),
                      createVNode("p", null, [
                        createVNode("strong", null, "Student ID:"),
                        createTextVNode(" " + toDisplayString($data.student), 1)
                      ]),
                      createVNode("p", null, [
                        createVNode("strong", null, "Room ID:"),
                        createTextVNode(" " + toDisplayString($data.room), 1)
                      ]),
                      createVNode("p", null, [
                        createVNode("strong", null, "Image Preview:")
                      ]),
                      $data.imagePreview ? (openBlock(), createBlock(VImg, {
                        key: 0,
                        src: $data.imagePreview,
                        "max-height": "300",
                        contain: ""
                      }, null, 8, ["src"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCardActions, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VBtn, {
                      color: "secondary",
                      onClick: ($event) => $data.step = 1
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Back`);
                        } else {
                          return [
                            createTextVNode("Back")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VBtn, {
                      color: "primary",
                      onClick: $options.submitData
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Submit`);
                        } else {
                          return [
                            createTextVNode("Submit")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VBtn, {
                        color: "secondary",
                        onClick: ($event) => $data.step = 1
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Back")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VBtn, {
                        color: "primary",
                        onClick: $options.submitData
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Submit")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VCardText, null, {
                  default: withCtx(() => [
                    createVNode("p", null, [
                      createVNode("strong", null, "Teacher ID:"),
                      createTextVNode(" " + toDisplayString($data.teacher), 1)
                    ]),
                    createVNode("p", null, [
                      createVNode("strong", null, "Student ID:"),
                      createTextVNode(" " + toDisplayString($data.student), 1)
                    ]),
                    createVNode("p", null, [
                      createVNode("strong", null, "Room ID:"),
                      createTextVNode(" " + toDisplayString($data.room), 1)
                    ]),
                    createVNode("p", null, [
                      createVNode("strong", null, "Image Preview:")
                    ]),
                    $data.imagePreview ? (openBlock(), createBlock(VImg, {
                      key: 0,
                      src: $data.imagePreview,
                      "max-height": "300",
                      contain: ""
                    }, null, 8, ["src"])) : createCommentVNode("", true)
                  ]),
                  _: 1
                }),
                createVNode(VCardActions, null, {
                  default: withCtx(() => [
                    createVNode(VBtn, {
                      color: "secondary",
                      onClick: ($event) => $data.step = 1
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Back")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(VBtn, {
                      color: "primary",
                      onClick: $options.submitData
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Submit")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
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
          createVNode(VCard, {
            title: "Step Two: Confirm and Submit",
            flat: ""
          }, {
            default: withCtx(() => [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("p", null, [
                    createVNode("strong", null, "Teacher ID:"),
                    createTextVNode(" " + toDisplayString($data.teacher), 1)
                  ]),
                  createVNode("p", null, [
                    createVNode("strong", null, "Student ID:"),
                    createTextVNode(" " + toDisplayString($data.student), 1)
                  ]),
                  createVNode("p", null, [
                    createVNode("strong", null, "Room ID:"),
                    createTextVNode(" " + toDisplayString($data.room), 1)
                  ]),
                  createVNode("p", null, [
                    createVNode("strong", null, "Image Preview:")
                  ]),
                  $data.imagePreview ? (openBlock(), createBlock(VImg, {
                    key: 0,
                    src: $data.imagePreview,
                    "max-height": "300",
                    contain: ""
                  }, null, 8, ["src"])) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode(VCardActions, null, {
                default: withCtx(() => [
                  createVNode(VBtn, {
                    color: "secondary",
                    onClick: ($event) => $data.step = 1
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Back")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(VBtn, {
                    color: "primary",
                    onClick: $options.submitData
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Submit")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
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
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const checkin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-652d671c"]]);
export {
  checkin as default
};
//# sourceMappingURL=checkin-W_J22tdW.js.map
