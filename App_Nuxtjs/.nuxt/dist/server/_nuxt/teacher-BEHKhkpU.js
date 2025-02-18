import { V as VRow, _ as __nuxt_component_0 } from "./HeaderComponent-B3CWU5QU.js";
import { g as getUser, c as getUserTeacher, V as VAlert, b as getDayByweekId, d as getCheckLineWeekDay, e as getWeeks, u as updatedCheckLine, f as getCheckLine, h as getCheckLineById, i as percentageIineupTeacher } from "./VAlert-BV4vVzt_.js";
import { mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext, reactive, watch, toRefs, resolveComponent, computed, Fragment, renderList, withModifiers, resolveDynamicComponent } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderVNode } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { V as VCol, a as VPagination, c as VLayout, d as VNavigationDrawer, e as VListItem, f as VListItemTitle, g as VList } from "./VNavigationDrawer-CflmLKK7.js";
import { V as VCard, d as VCardText, b as VImg, e as VCardActions, a as VCardTitle } from "./lazy-C5DRqCjO.js";
import axios from "axios";
import { V as VStepper } from "./VStepper-mkFbp8xd.js";
import { V as VFileInput } from "./VFileInput-DQu0Y8pt.js";
import { d as VBtn, V as VIcon, S as VProgressLinear } from "./VBtn-BQh1DFk2.js";
import { V as VDivider } from "./VDivider-0mIWdu7a.js";
import { r as VDataTable } from "./VDataTable-BcCSFXps.js";
import { V as VChip } from "./VChip-Dwxv34Zv.js";
import { V as VSpacer, a as VDialog } from "./VDialog-CTYxqpGs.js";
import { V as VTextField } from "./VTextField-DYVwMBTO.js";
import { useRouter, useRoute } from "vue-router";
import { V as VMain } from "./VMain-B0aKjWRH.js";
import "./NewLogo-BQlGcRu3.js";
import "./VOverlay-Bq6vi5Fa.js";
import "./forwardRefs-B2cVIy3B.js";
import "./createSimpleFunctional-34w8xNDu.js";
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
import "./VInput--HWDDWXB.js";
import "./ssrBoot-BtvJZs44.js";
const _sfc_main$b = {
  data() {
    return {
      user: {
        username: "",
        email: "",
        profile: "",
        user_type: ""
      }
    };
  },
  methods: {},
  async mounted() {
    try {
      const result = await getUser();
      if (result.is_logged_in) {
        this.user = result.user;
      } else {
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mt-5" }, _attrs))} data-v-5651f05d>`);
  _push(ssrRenderComponent(VCol, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCard, { class: "p-4" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<h1 data-v-5651f05d${_scopeId2}> ยินดีต้อนรับ <a class="text-primary" data-v-5651f05d${_scopeId2}>${ssrInterpolate($data.user.username)}, ${ssrInterpolate($data.user.user_type)}</a></h1><p class="text-muted" data-v-5651f05d${_scopeId2}> อีเมล: ${ssrInterpolate($data.user.email)}</p>`);
              if ($data.user.profile) {
                _push3(`<div class="profile-section" data-v-5651f05d${_scopeId2}><img${ssrRenderAttr("src", $data.user.profile)} alt="User Profile" class="profile-img rounded-circle" data-v-5651f05d${_scopeId2}></div>`);
              } else {
                _push3(`<!---->`);
              }
            } else {
              return [
                createVNode("h1", null, [
                  createTextVNode(" ยินดีต้อนรับ "),
                  createVNode("a", { class: "text-primary" }, toDisplayString($data.user.username) + ", " + toDisplayString($data.user.user_type), 1)
                ]),
                createVNode("p", { class: "text-muted" }, " อีเมล: " + toDisplayString($data.user.email), 1),
                $data.user.profile ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "profile-section"
                }, [
                  createVNode("img", {
                    src: $data.user.profile,
                    alt: "User Profile",
                    class: "profile-img rounded-circle"
                  }, null, 8, ["src"])
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VCard, { class: "p-4" }, {
            default: withCtx(() => [
              createVNode("h1", null, [
                createTextVNode(" ยินดีต้อนรับ "),
                createVNode("a", { class: "text-primary" }, toDisplayString($data.user.username) + ", " + toDisplayString($data.user.user_type), 1)
              ]),
              createVNode("p", { class: "text-muted" }, " อีเมล: " + toDisplayString($data.user.email), 1),
              $data.user.profile ? (openBlock(), createBlock("div", {
                key: 0,
                class: "profile-section"
              }, [
                createVNode("img", {
                  src: $data.user.profile,
                  alt: "User Profile",
                  class: "profile-img rounded-circle"
                }, null, 8, ["src"])
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VCol, { class: "mt-4" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCard, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(VCard)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/teacher/HomeComponent.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const HomeComponent = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b], ["__scopeId", "data-v-5651f05d"]]);
const _sfc_main$a = {
  props: {
    week_id: {
      type: String,
      required: true
    },
    day_id: {
      type: String,
      required: true
    },
    teacher_id: {
      type: String,
      required: true
    },
    student_id: {
      type: Array,
      required: true
    },
    room_id: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      error: null,
      success: null,
      step: 1,
      image: null,
      imagePreview: null,
      check_students: [],
      unique_filename: "",
      search: "",
      status: 0,
      headers: [
        { title: "#", key: "student_id" },
        { title: "ชื่อนักเรียน", key: "student_username" },
        { title: "สัปดาห์", key: "week" },
        { title: "วันที่", key: "day" },
        { title: "สถานะ", key: "status" }
      ]
    };
  },
  methods: {
    // สลับสถานะของนักเรียน
    toggleStatus(item) {
      item.status = item.status === 1 ? 0 : 1;
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
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
    async processImage() {
      const formData = new FormData();
      const student_ids = this.student_id.map((student) => student.student_id);
      const room_ids = this.room_id.map((student) => student.room_id);
      formData.append("week_id", this.week_id);
      formData.append("day_id", this.day_id);
      formData.append("image", this.image);
      formData.append("teacher_id", this.teacher_id);
      formData.append("student_ids", JSON.stringify(student_ids));
      formData.append("room_id", JSON.stringify(room_ids));
      try {
        const response = await axios.post("http://localhost:8000/teacher-process-image", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
        if (response.data.status === "success") {
          this.check_students = this.check_students.map((student) => {
            const statusInfo = response.data.student_statuses.find((s) => s.student_id === student.student_id);
            if (statusInfo) {
              student.status = statusInfo.status;
              this.unique_filename = statusInfo.picture;
            }
            return student;
          });
          this.imagePreview = `data:image/jpeg;base64,${response.data.processed_image}`;
          this.step = 2;
        } else {
          this.error = "Error processing data: " + response.data.message;
        }
      } catch (error) {
        this.error = "An error occurred while processing data.";
      }
    },
    async submitData() {
      try {
        const student_statuses = this.check_students.map((student) => ({
          student_id: student.student_id,
          room_id: student.room_id,
          status: student.status
        }));
        const response = await axios.post("http://localhost:8000/teacher-process-frame", {
          week_id: this.week_id,
          day_id: this.day_id,
          teacher_id: this.teacher_id,
          student_statuses,
          picture: this.unique_filename
        });
        if (response.data.status === "success") {
          this.success = "Data saved successfully!";
        } else {
          this.error = "Error saving data: " + response.data.message;
        }
      } catch (error) {
        console.error("Error:", error);
        this.error = "An error occurred while saving data.";
      }
    }
  },
  async mounted() {
    try {
      const result = await getUserTeacher();
      if (result.ok === 1) {
        this.check_students = result.students;
      } else {
        console.error("Failed to fetch check lines:", result.message);
      }
    } catch (error) {
      console.error("Error fetching check lines:", error);
    }
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->`);
  if ($data.error || $data.success) {
    _push(ssrRenderComponent(VAlert, {
      type: $data.error ? "error" : "success",
      closable: "",
      title: $data.error ? "Login Failed" : "Login Successful",
      text: "",
      variant: "elevated",
      class: "alert-global"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate($data.error || $data.success)}`);
        } else {
          return [
            createTextVNode(toDisplayString($data.error || $data.success), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(VStepper, {
    "alt-labels": "",
    "hide-actions": "",
    items: ["Step 1", "Step 2"],
    "step-color": "secondary",
    color: "primary",
    modelValue: $data.step,
    "onUpdate:modelValue": ($event) => $data.step = $event
  }, {
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
                      onClick: $options.processImage,
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
                        onClick: $options.processImage,
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
                      onClick: $options.processImage,
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
                    onClick: $options.processImage,
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
                    _push4(`<p data-v-b876e163${_scopeId3}><strong data-v-b876e163${_scopeId3}>Teacher ID:</strong> ${ssrInterpolate($props.teacher_id)}</p><p data-v-b876e163${_scopeId3}><strong data-v-b876e163${_scopeId3}>Student ID:</strong> ${ssrInterpolate(this.student_id.map((student) => student.student_id))}</p><p data-v-b876e163${_scopeId3}><strong data-v-b876e163${_scopeId3}>Room ID:</strong> ${ssrInterpolate(this.room_id.map((student) => student.room_id))}</p><p data-v-b876e163${_scopeId3}><strong data-v-b876e163${_scopeId3}>Image Preview:</strong></p>`);
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
                        createTextVNode(" " + toDisplayString($props.teacher_id), 1)
                      ]),
                      createVNode("p", null, [
                        createVNode("strong", null, "Student ID:"),
                        createTextVNode(" " + toDisplayString(this.student_id.map((student) => student.student_id)), 1)
                      ]),
                      createVNode("p", null, [
                        createVNode("strong", null, "Room ID:"),
                        createTextVNode(" " + toDisplayString(this.room_id.map((student) => student.room_id)), 1)
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
              _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VDataTable, {
                search: $data.search,
                "onUpdate:search": ($event) => $data.search = $event,
                headers: $data.headers,
                items: $data.check_students,
                class: "elevation-1"
              }, {
                "item.week": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`${ssrInterpolate($props.week_id)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString($props.week_id), 1)
                    ];
                  }
                }),
                "item.day": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`${ssrInterpolate($props.day_id)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString($props.day_id), 1)
                    ];
                  }
                }),
                "item.status": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VChip, {
                      color: item.status === 1 ? "green" : "red",
                      dark: "",
                      small: "",
                      class: ["status-chip", item.status === 1 ? "animate-green" : "animate-red"],
                      onClick: ($event) => $options.toggleStatus(item)
                    }, {
                      default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`${ssrInterpolate(item.status === 1 ? "มา" : "ขาด")}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.status === 1 ? "มา" : "ขาด"), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VChip, {
                        color: item.status === 1 ? "green" : "red",
                        dark: "",
                        small: "",
                        class: ["status-chip", item.status === 1 ? "animate-green" : "animate-red"],
                        onClick: ($event) => $options.toggleStatus(item)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.status === 1 ? "มา" : "ขาด"), 1)
                        ]),
                        _: 2
                      }, 1032, ["color", "class", "onClick"])
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
                      createTextVNode(" " + toDisplayString($props.teacher_id), 1)
                    ]),
                    createVNode("p", null, [
                      createVNode("strong", null, "Student ID:"),
                      createTextVNode(" " + toDisplayString(this.student_id.map((student) => student.student_id)), 1)
                    ]),
                    createVNode("p", null, [
                      createVNode("strong", null, "Room ID:"),
                      createTextVNode(" " + toDisplayString(this.room_id.map((student) => student.room_id)), 1)
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
                createVNode(VDivider),
                createVNode(VDataTable, {
                  search: $data.search,
                  "onUpdate:search": ($event) => $data.search = $event,
                  headers: $data.headers,
                  items: $data.check_students,
                  class: "elevation-1"
                }, {
                  "item.week": withCtx(({ item }) => [
                    createTextVNode(toDisplayString($props.week_id), 1)
                  ]),
                  "item.day": withCtx(({ item }) => [
                    createTextVNode(toDisplayString($props.day_id), 1)
                  ]),
                  "item.status": withCtx(({ item }) => [
                    createVNode(VChip, {
                      color: item.status === 1 ? "green" : "red",
                      dark: "",
                      small: "",
                      class: ["status-chip", item.status === 1 ? "animate-green" : "animate-red"],
                      onClick: ($event) => $options.toggleStatus(item)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.status === 1 ? "มา" : "ขาด"), 1)
                      ]),
                      _: 2
                    }, 1032, ["color", "class", "onClick"])
                  ]),
                  _: 1
                }, 8, ["search", "onUpdate:search", "headers", "items"]),
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
                    createTextVNode(" " + toDisplayString($props.teacher_id), 1)
                  ]),
                  createVNode("p", null, [
                    createVNode("strong", null, "Student ID:"),
                    createTextVNode(" " + toDisplayString(this.student_id.map((student) => student.student_id)), 1)
                  ]),
                  createVNode("p", null, [
                    createVNode("strong", null, "Room ID:"),
                    createTextVNode(" " + toDisplayString(this.room_id.map((student) => student.room_id)), 1)
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
              createVNode(VDivider),
              createVNode(VDataTable, {
                search: $data.search,
                "onUpdate:search": ($event) => $data.search = $event,
                headers: $data.headers,
                items: $data.check_students,
                class: "elevation-1"
              }, {
                "item.week": withCtx(({ item }) => [
                  createTextVNode(toDisplayString($props.week_id), 1)
                ]),
                "item.day": withCtx(({ item }) => [
                  createTextVNode(toDisplayString($props.day_id), 1)
                ]),
                "item.status": withCtx(({ item }) => [
                  createVNode(VChip, {
                    color: item.status === 1 ? "green" : "red",
                    dark: "",
                    small: "",
                    class: ["status-chip", item.status === 1 ? "animate-green" : "animate-red"],
                    onClick: ($event) => $options.toggleStatus(item)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.status === 1 ? "มา" : "ขาด"), 1)
                    ]),
                    _: 2
                  }, 1032, ["color", "class", "onClick"])
                ]),
                _: 1
              }, 8, ["search", "onUpdate:search", "headers", "items"]),
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
  _push(`<!--]-->`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/teacher/check/StepperComponent.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const StepperComponent = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a], ["__scopeId", "data-v-b876e163"]]);
const _sfc_main$9 = {
  components: {
    StepperComponent
  },
  props: {
    week_id: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const state = reactive({
      search: "",
      items: [],
      headers: [
        { title: "#", key: "id" },
        { title: "วัน", align: "end", key: "day" },
        { title: "รายละเอียด", align: "end", key: "view" }
      ],
      dialog: {},
      // ใช้ object แทน ref
      teacher: "",
      student: {},
      studentCount: "",
      Checkin: false
    });
    const openDialog = (id) => {
      state.dialog[id] = true;
    };
    const closeDialog = (id) => {
      state.dialog[id] = false;
    };
    const formatDate = (date) => {
      const options = { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" };
      return new Date(date).toLocaleString("th-TH", options);
    };
    const handleSubmit = (data) => {
      console.log("Submitted Data:", data);
    };
    const fetchDays = async () => {
      try {
        const result = await getDayByweekId(props.week_id);
        const user = await getUser();
        const resultStudent = await getUserTeacher();
        if (result.ok === 1 && Array.isArray(result.days)) {
          state.items = result.days.map((day, index) => ({
            id: index + 1,
            day_id: day.id,
            day: day.day,
            start: day.start,
            end: day.end,
            status: day.status
          }));
        } else {
          console.error("Invalid data structure from API:", result);
        }
        if (user.ok === 1) {
          state.teacher = user.user.id;
        } else {
          console.error("Invalid data structure from API:", user);
        }
        if (resultStudent.ok === 1) {
          state.student = resultStudent.students;
          state.studentCount = resultStudent.students.length;
        } else {
          console.error("Invalid data structure from API:", resultStudent);
        }
      } catch (error) {
        console.error("Error fetching weeks:", error);
      }
    };
    const checkLineStatus = async (week_id, day_id) => {
      try {
        const result = await getCheckLineWeekDay(week_id, day_id);
        console.log("item", result);
        if (result.ok === 1 && result.check_lines_by_id.length > 0) {
          state.items = state.items.map((item) => {
            if (item.id === day_id && props.week_id === week_id) {
              return { ...item, status: "closed" };
            }
            return item;
          });
        }
      } catch (error) {
        console.error("Error checking line status:", error);
      }
    };
    fetchDays();
    watch(() => props.week_id, (newWeekId) => {
      state.items.forEach((item) => {
        checkLineStatus(newWeekId, item.id);
      });
    });
    return {
      ...toRefs(state),
      openDialog,
      closeDialog,
      formatDate,
      handleSubmit
    };
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_StepperComponent = resolveComponent("StepperComponent");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-5c25a4c5>`);
  _push(ssrRenderComponent(VCard, { flat: "" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCardTitle, { class: "d-flex align-center pe-2" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VIcon, { icon: "mdi-calendar-week" }, null, _parent3, _scopeId2));
              _push3(` สัปดาห์ที่ ${ssrInterpolate($props.week_id)} `);
              _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VTextField, {
                modelValue: _ctx.search,
                "onUpdate:modelValue": ($event) => _ctx.search = $event,
                density: "compact",
                label: "ค้นหา",
                "prepend-inner-icon": "mdi-magnify",
                variant: "solo-filled",
                flat: "",
                "hide-details": "",
                "single-line": ""
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VIcon, { icon: "mdi-calendar-week" }),
                createTextVNode(" สัปดาห์ที่ " + toDisplayString($props.week_id) + " ", 1),
                createVNode(VSpacer),
                createVNode(VTextField, {
                  modelValue: _ctx.search,
                  "onUpdate:modelValue": ($event) => _ctx.search = $event,
                  density: "compact",
                  label: "ค้นหา",
                  "prepend-inner-icon": "mdi-magnify",
                  variant: "solo-filled",
                  flat: "",
                  "hide-details": "",
                  "single-line": ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VDataTable, {
          search: _ctx.search,
          "onUpdate:search": ($event) => _ctx.search = $event,
          headers: _ctx.headers,
          items: _ctx.items
        }, {
          "item.view": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<td class="button-open" data-v-5c25a4c5${_scopeId2}>`);
              _push3(ssrRenderComponent(VBtn, {
                onClick: ($event) => $setup.openDialog(item.id),
                disabled: item.status === "closed"
              }, {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VIcon, {
                      size: "24px",
                      color: "primary"
                    }, {
                      default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`${ssrInterpolate(item.status === "pending" ? "mdi-pencil" : "mdi-eye")}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.status === "pending" ? "mdi-pencil" : "mdi-eye"), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VIcon, {
                        size: "24px",
                        color: "primary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.status === "pending" ? "mdi-pencil" : "mdi-eye"), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VDialog, {
                modelValue: _ctx.dialog[item.id],
                "onUpdate:modelValue": ($event) => _ctx.dialog[item.id] = $event,
                "max-width": "800",
                persistent: ""
              }, {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCard, {
                      "prepend-icon": "mdi-eye",
                      title: "จัดการการเข้าแถว"
                    }, {
                      actions: withCtx((_3, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VSpacer, null, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VBtn, {
                            onClick: ($event) => $setup.closeDialog(item.id),
                            color: "red"
                          }, {
                            default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<h5 data-v-5c25a4c5${_scopeId5}>ปิด</h5>`);
                              } else {
                                return [
                                  createVNode("h5", null, "ปิด")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VSpacer),
                            createVNode(VBtn, {
                              onClick: ($event) => $setup.closeDialog(item.id),
                              color: "red"
                            }, {
                              default: withCtx(() => [
                                createVNode("h5", null, "ปิด")
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ];
                        }
                      }),
                      default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_StepperComponent, {
                                  week_id: $props.week_id,
                                  day_id: item.id,
                                  teacher_id: _ctx.teacher,
                                  student_id: _ctx.student,
                                  room_id: _ctx.student,
                                  onSubmit: $setup.handleSubmit
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_StepperComponent, {
                                    week_id: $props.week_id,
                                    day_id: item.id,
                                    teacher_id: _ctx.teacher,
                                    student_id: _ctx.student,
                                    room_id: _ctx.student,
                                    onSubmit: $setup.handleSubmit
                                  }, null, 8, ["week_id", "day_id", "teacher_id", "student_id", "room_id", "onSubmit"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode(_component_StepperComponent, {
                                  week_id: $props.week_id,
                                  day_id: item.id,
                                  teacher_id: _ctx.teacher,
                                  student_id: _ctx.student,
                                  room_id: _ctx.student,
                                  onSubmit: $setup.handleSubmit
                                }, null, 8, ["week_id", "day_id", "teacher_id", "student_id", "room_id", "onSubmit"])
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VCard, {
                        "prepend-icon": "mdi-eye",
                        title: "จัดการการเข้าแถว"
                      }, {
                        actions: withCtx(() => [
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            onClick: ($event) => $setup.closeDialog(item.id),
                            color: "red"
                          }, {
                            default: withCtx(() => [
                              createVNode("h5", null, "ปิด")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]),
                        default: withCtx(() => [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_component_StepperComponent, {
                                week_id: $props.week_id,
                                day_id: item.id,
                                teacher_id: _ctx.teacher,
                                student_id: _ctx.student,
                                room_id: _ctx.student,
                                onSubmit: $setup.handleSubmit
                              }, null, 8, ["week_id", "day_id", "teacher_id", "student_id", "room_id", "onSubmit"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
              _push3(`</td>`);
            } else {
              return [
                createVNode("td", { class: "button-open" }, [
                  createVNode(VBtn, {
                    onClick: ($event) => $setup.openDialog(item.id),
                    disabled: item.status === "closed"
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, {
                        size: "24px",
                        color: "primary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.status === "pending" ? "mdi-pencil" : "mdi-eye"), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["onClick", "disabled"]),
                  createVNode(VDialog, {
                    modelValue: _ctx.dialog[item.id],
                    "onUpdate:modelValue": ($event) => _ctx.dialog[item.id] = $event,
                    "max-width": "800",
                    persistent: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(VCard, {
                        "prepend-icon": "mdi-eye",
                        title: "จัดการการเข้าแถว"
                      }, {
                        actions: withCtx(() => [
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            onClick: ($event) => $setup.closeDialog(item.id),
                            color: "red"
                          }, {
                            default: withCtx(() => [
                              createVNode("h5", null, "ปิด")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]),
                        default: withCtx(() => [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_component_StepperComponent, {
                                week_id: $props.week_id,
                                day_id: item.id,
                                teacher_id: _ctx.teacher,
                                student_id: _ctx.student,
                                room_id: _ctx.student,
                                onSubmit: $setup.handleSubmit
                              }, null, 8, ["week_id", "day_id", "teacher_id", "student_id", "room_id", "onSubmit"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["modelValue", "onUpdate:modelValue"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VCardTitle, { class: "d-flex align-center pe-2" }, {
            default: withCtx(() => [
              createVNode(VIcon, { icon: "mdi-calendar-week" }),
              createTextVNode(" สัปดาห์ที่ " + toDisplayString($props.week_id) + " ", 1),
              createVNode(VSpacer),
              createVNode(VTextField, {
                modelValue: _ctx.search,
                "onUpdate:modelValue": ($event) => _ctx.search = $event,
                density: "compact",
                label: "ค้นหา",
                "prepend-inner-icon": "mdi-magnify",
                variant: "solo-filled",
                flat: "",
                "hide-details": "",
                "single-line": ""
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            _: 1
          }),
          createVNode(VDataTable, {
            search: _ctx.search,
            "onUpdate:search": ($event) => _ctx.search = $event,
            headers: _ctx.headers,
            items: _ctx.items
          }, {
            "item.view": withCtx(({ item }) => [
              createVNode("td", { class: "button-open" }, [
                createVNode(VBtn, {
                  onClick: ($event) => $setup.openDialog(item.id),
                  disabled: item.status === "closed"
                }, {
                  default: withCtx(() => [
                    createVNode(VIcon, {
                      size: "24px",
                      color: "primary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.status === "pending" ? "mdi-pencil" : "mdi-eye"), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["onClick", "disabled"]),
                createVNode(VDialog, {
                  modelValue: _ctx.dialog[item.id],
                  "onUpdate:modelValue": ($event) => _ctx.dialog[item.id] = $event,
                  "max-width": "800",
                  persistent: ""
                }, {
                  default: withCtx(() => [
                    createVNode(VCard, {
                      "prepend-icon": "mdi-eye",
                      title: "จัดการการเข้าแถว"
                    }, {
                      actions: withCtx(() => [
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          onClick: ($event) => $setup.closeDialog(item.id),
                          color: "red"
                        }, {
                          default: withCtx(() => [
                            createVNode("h5", null, "ปิด")
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ]),
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_component_StepperComponent, {
                              week_id: $props.week_id,
                              day_id: item.id,
                              teacher_id: _ctx.teacher,
                              student_id: _ctx.student,
                              room_id: _ctx.student,
                              onSubmit: $setup.handleSubmit
                            }, null, 8, ["week_id", "day_id", "teacher_id", "student_id", "room_id", "onSubmit"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue"])
              ])
            ]),
            _: 1
          }, 8, ["search", "onUpdate:search", "headers", "items"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/teacher/check/DayComponent.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const DayComponent$1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9], ["__scopeId", "data-v-5c25a4c5"]]);
const _sfc_main$8 = {
  components: {
    DayComponent: DayComponent$1
  },
  setup() {
    const state = reactive({
      search: "",
      items: [],
      headers: [
        { title: "#", key: "id" },
        { title: "สัปดาห์", key: "week" },
        { title: "เริ่ม", key: "start" },
        { title: "สิ้นสุด", key: "end" },
        { title: "ห้อง", key: "room" },
        { title: "สถานะ", key: "status" },
        { title: "รายละเอียด", key: "view" }
      ],
      dialog: {},
      // ใช้ object แทน ref
      teacher: ""
    });
    const openDialog = (id) => {
      state.dialog[id] = true;
    };
    const closeDialog = (id) => {
      state.dialog[id] = false;
    };
    const formatDate = (date) => {
      const options = { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" };
      return new Date(date).toLocaleString("th-TH", options);
    };
    const handleSubmit = (data) => {
      console.log("Submitted Data:", data);
    };
    const fetchWeeks = async () => {
      try {
        const resultStudent = await getUserTeacher();
        const user = await getUser();
        const result = await getWeeks();
        if (result.ok === 1 && Array.isArray(result.weeks)) {
          state.items = result.weeks.map((week) => ({
            id: week.id,
            week: week.week,
            start: week.start,
            end: week.end,
            room: week.room,
            status: week.status
          }));
        } else {
          console.error("Invalid data structure from API:", result);
        }
        if (resultStudent.ok === 1) {
          state.users = resultStudent.students;
        } else {
          console.error("Invalid data structure from API:", resultStudent);
        }
        if (user.ok === 1) {
          state.teacher = user.user.id;
        } else {
          console.error("Invalid data structure from API:", user);
        }
      } catch (error) {
        console.error("Error fetching weeks:", error);
      }
    };
    fetchWeeks();
    return {
      ...toRefs(state),
      openDialog,
      closeDialog,
      formatDate,
      handleSubmit
    };
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_DayComponent = resolveComponent("DayComponent");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-ec562d03>`);
  _push(ssrRenderComponent(VCard, {
    flat: "",
    class: "elevation-3 animated-card"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCardTitle, { class: "d-flex align-center pe-2 title-bar" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VIcon, {
                icon: "mdi-calendar-week",
                color: "primary"
              }, null, _parent3, _scopeId2));
              _push3(`<span class="ml-2 text-h6" data-v-ec562d03${_scopeId2}>เช็คชื่อเข้าแถว</span>`);
              _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VTextField, {
                modelValue: _ctx.search,
                "onUpdate:modelValue": ($event) => _ctx.search = $event,
                density: "compact",
                label: "ค้นหา",
                "prepend-inner-icon": "mdi-magnify",
                variant: "solo-filled",
                "hide-details": "",
                class: "search-field"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VIcon, {
                  icon: "mdi-calendar-week",
                  color: "primary"
                }),
                createVNode("span", { class: "ml-2 text-h6" }, "เช็คชื่อเข้าแถว"),
                createVNode(VSpacer),
                createVNode(VTextField, {
                  modelValue: _ctx.search,
                  "onUpdate:modelValue": ($event) => _ctx.search = $event,
                  density: "compact",
                  label: "ค้นหา",
                  "prepend-inner-icon": "mdi-magnify",
                  variant: "solo-filled",
                  "hide-details": "",
                  class: "search-field"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(VDataTable, {
          search: _ctx.search,
          "onUpdate:search": ($event) => _ctx.search = $event,
          headers: _ctx.headers,
          "filter-keys": ["id", "start", "end", "week", "room"],
          items: _ctx.items
        }, {
          "item.week": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<td data-v-ec562d03${_scopeId2}>${ssrInterpolate(item.week)}</td>`);
            } else {
              return [
                createVNode("td", null, toDisplayString(item.week), 1)
              ];
            }
          }),
          "item.start": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<td data-v-ec562d03${_scopeId2}>${ssrInterpolate($setup.formatDate(item.start))}</td>`);
            } else {
              return [
                createVNode("td", null, toDisplayString($setup.formatDate(item.start)), 1)
              ];
            }
          }),
          "item.end": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<td data-v-ec562d03${_scopeId2}>${ssrInterpolate($setup.formatDate(item.end))}</td>`);
            } else {
              return [
                createVNode("td", null, toDisplayString($setup.formatDate(item.end)), 1)
              ];
            }
          }),
          "item.room": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<td data-v-ec562d03${_scopeId2}>${ssrInterpolate(item.room)}</td>`);
            } else {
              return [
                createVNode("td", null, toDisplayString(item.room), 1)
              ];
            }
          }),
          "item.status": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<td data-v-ec562d03${_scopeId2}>${ssrInterpolate(item.status)}</td>`);
            } else {
              return [
                createVNode("td", null, toDisplayString(item.status), 1)
              ];
            }
          }),
          "item.view": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<td class="hover-effect" data-v-ec562d03${_scopeId2}>`);
              _push3(ssrRenderComponent(VBtn, {
                onClick: ($event) => $setup.openDialog(item.id)
              }, {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VIcon, {
                      size: "24px",
                      color: "primary"
                    }, {
                      default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`${ssrInterpolate(item.status === "pending" ? "mdi-pencil" : " mdi-eye")}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.status === "pending" ? "mdi-pencil" : " mdi-eye"), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VIcon, {
                        size: "24px",
                        color: "primary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.status === "pending" ? "mdi-pencil" : " mdi-eye"), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VDialog, {
                modelValue: _ctx.dialog[item.id],
                "onUpdate:modelValue": ($event) => _ctx.dialog[item.id] = $event,
                "max-width": "800",
                persistent: ""
              }, {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCard, {
                      "prepend-icon": "mdi-eye",
                      title: "จัดการการเข้าแถว"
                    }, {
                      actions: withCtx((_3, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VSpacer, null, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VBtn, {
                            onClick: ($event) => $setup.closeDialog(item.id),
                            color: "red"
                          }, {
                            default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<h5 data-v-ec562d03${_scopeId5}>ปิด</h5>`);
                              } else {
                                return [
                                  createVNode("h5", null, "ปิด")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VSpacer),
                            createVNode(VBtn, {
                              onClick: ($event) => $setup.closeDialog(item.id),
                              color: "red"
                            }, {
                              default: withCtx(() => [
                                createVNode("h5", null, "ปิด")
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ];
                        }
                      }),
                      default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_DayComponent, {
                                  week_id: item.id,
                                  onSubmit: $setup.handleSubmit
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_DayComponent, {
                                    week_id: item.id,
                                    onSubmit: $setup.handleSubmit
                                  }, null, 8, ["week_id", "onSubmit"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode(_component_DayComponent, {
                                  week_id: item.id,
                                  onSubmit: $setup.handleSubmit
                                }, null, 8, ["week_id", "onSubmit"])
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VCard, {
                        "prepend-icon": "mdi-eye",
                        title: "จัดการการเข้าแถว"
                      }, {
                        actions: withCtx(() => [
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            onClick: ($event) => $setup.closeDialog(item.id),
                            color: "red"
                          }, {
                            default: withCtx(() => [
                              createVNode("h5", null, "ปิด")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]),
                        default: withCtx(() => [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_component_DayComponent, {
                                week_id: item.id,
                                onSubmit: $setup.handleSubmit
                              }, null, 8, ["week_id", "onSubmit"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
              _push3(`</td>`);
            } else {
              return [
                createVNode("td", { class: "hover-effect" }, [
                  createVNode(VBtn, {
                    onClick: ($event) => $setup.openDialog(item.id)
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, {
                        size: "24px",
                        color: "primary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.status === "pending" ? "mdi-pencil" : " mdi-eye"), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  createVNode(VDialog, {
                    modelValue: _ctx.dialog[item.id],
                    "onUpdate:modelValue": ($event) => _ctx.dialog[item.id] = $event,
                    "max-width": "800",
                    persistent: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(VCard, {
                        "prepend-icon": "mdi-eye",
                        title: "จัดการการเข้าแถว"
                      }, {
                        actions: withCtx(() => [
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            onClick: ($event) => $setup.closeDialog(item.id),
                            color: "red"
                          }, {
                            default: withCtx(() => [
                              createVNode("h5", null, "ปิด")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]),
                        default: withCtx(() => [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_component_DayComponent, {
                                week_id: item.id,
                                onSubmit: $setup.handleSubmit
                              }, null, 8, ["week_id", "onSubmit"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["modelValue", "onUpdate:modelValue"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VCardTitle, { class: "d-flex align-center pe-2 title-bar" }, {
            default: withCtx(() => [
              createVNode(VIcon, {
                icon: "mdi-calendar-week",
                color: "primary"
              }),
              createVNode("span", { class: "ml-2 text-h6" }, "เช็คชื่อเข้าแถว"),
              createVNode(VSpacer),
              createVNode(VTextField, {
                modelValue: _ctx.search,
                "onUpdate:modelValue": ($event) => _ctx.search = $event,
                density: "compact",
                label: "ค้นหา",
                "prepend-inner-icon": "mdi-magnify",
                variant: "solo-filled",
                "hide-details": "",
                class: "search-field"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            _: 1
          }),
          createVNode(VDivider),
          createVNode(VDataTable, {
            search: _ctx.search,
            "onUpdate:search": ($event) => _ctx.search = $event,
            headers: _ctx.headers,
            "filter-keys": ["id", "start", "end", "week", "room"],
            items: _ctx.items
          }, {
            "item.week": withCtx(({ item }) => [
              createVNode("td", null, toDisplayString(item.week), 1)
            ]),
            "item.start": withCtx(({ item }) => [
              createVNode("td", null, toDisplayString($setup.formatDate(item.start)), 1)
            ]),
            "item.end": withCtx(({ item }) => [
              createVNode("td", null, toDisplayString($setup.formatDate(item.end)), 1)
            ]),
            "item.room": withCtx(({ item }) => [
              createVNode("td", null, toDisplayString(item.room), 1)
            ]),
            "item.status": withCtx(({ item }) => [
              createVNode("td", null, toDisplayString(item.status), 1)
            ]),
            "item.view": withCtx(({ item }) => [
              createVNode("td", { class: "hover-effect" }, [
                createVNode(VBtn, {
                  onClick: ($event) => $setup.openDialog(item.id)
                }, {
                  default: withCtx(() => [
                    createVNode(VIcon, {
                      size: "24px",
                      color: "primary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.status === "pending" ? "mdi-pencil" : " mdi-eye"), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["onClick"]),
                createVNode(VDialog, {
                  modelValue: _ctx.dialog[item.id],
                  "onUpdate:modelValue": ($event) => _ctx.dialog[item.id] = $event,
                  "max-width": "800",
                  persistent: ""
                }, {
                  default: withCtx(() => [
                    createVNode(VCard, {
                      "prepend-icon": "mdi-eye",
                      title: "จัดการการเข้าแถว"
                    }, {
                      actions: withCtx(() => [
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          onClick: ($event) => $setup.closeDialog(item.id),
                          color: "red"
                        }, {
                          default: withCtx(() => [
                            createVNode("h5", null, "ปิด")
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ]),
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_component_DayComponent, {
                              week_id: item.id,
                              onSubmit: $setup.handleSubmit
                            }, null, 8, ["week_id", "onSubmit"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue"])
              ])
            ]),
            _: 1
          }, 8, ["search", "onUpdate:search", "headers", "items"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/teacher/ImageCheckComponent.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const ImageCheckComponent = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8], ["__scopeId", "data-v-ec562d03"]]);
const _sfc_main$7 = {
  props: {
    week_id: {
      type: String,
      required: true
    },
    day_id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      check_line: [],
      picture: {},
      search: "",
      headers: [
        { title: "#", key: "student_id" },
        { title: "ชื่อ", key: "student_username" },
        { title: "อีเมล", key: "student_email" },
        { title: "สถานะ", key: "student_status" }
      ]
    };
  },
  methods: {
    async toggleStatus(item) {
      const newStatus = item.student_status === 1 ? 0 : 1;
      const response = await updatedCheckLine(this.week_id, this.day_id, item.student_id, newStatus);
      if (response.ok === 1) {
        item.student_status = newStatus;
        this.$emit("update");
      } else {
        console.error("Failed to update status");
      }
    }
  },
  async mounted() {
    const check_line = await getCheckLine(this.week_id, this.day_id);
    if (check_line.ok === 1) {
      this.check_line = check_line.check_lines_user;
      this.picture = check_line.check_lines_user[0].picture;
      console.log(this.picture);
    }
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-b3eb885e>`);
  _push(ssrRenderComponent(VImg, {
    src: `http://localhost:7000/uploads/check_in_teacher/${$data.picture}`,
    height: "200px",
    class: "mb-4"
  }, null, _parent));
  _push(ssrRenderComponent(VDataTable, {
    search: $data.search,
    "onUpdate:search": ($event) => $data.search = $event,
    headers: $data.headers,
    items: $data.check_line,
    class: "elevation-1"
  }, {
    "item.student_status": withCtx(({ item }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VChip, {
          color: item.student_status === 1 ? "green" : "red",
          dark: "",
          small: "",
          class: ["status-chip", item.student_status === 1 ? "animate-green" : "animate-red"],
          onClick: ($event) => $options.toggleStatus(item)
        }, {
          default: withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(item.student_status === 1 ? "มา" : "ขาด")}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.student_status === 1 ? "มา" : "ขาด"), 1)
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VChip, {
            color: item.student_status === 1 ? "green" : "red",
            dark: "",
            small: "",
            class: ["status-chip", item.student_status === 1 ? "animate-green" : "animate-red"],
            onClick: ($event) => $options.toggleStatus(item)
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(item.student_status === 1 ? "มา" : "ขาด"), 1)
            ]),
            _: 2
          }, 1032, ["color", "class", "onClick"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/teacher/view/CheckIineComponent.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const CheckIineComponent = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7], ["__scopeId", "data-v-b3eb885e"]]);
const _sfc_main$6 = {
  components: {
    CheckIineComponent
  },
  props: {
    week_id: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const state = reactive({
      search: "",
      items: [],
      headers: [
        { title: "#", key: "id" },
        { title: "เปอร์เซ็น", align: "end", key: "progress" },
        { title: "วัน", align: "end", key: "day" },
        { title: "รายละเอียด", align: "end", key: "view" }
      ],
      dialog: {},
      teacher: "",
      student: {},
      studentCount: 0,
      progress: "",
      itemsPerPage: 8
    });
    const openDialog = (id) => {
      state.dialog[id] = true;
    };
    const closeDialog = (id) => {
      state.dialog[id] = false;
      fetchDays();
    };
    const formatDate = (date) => {
      const options = { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" };
      return new Date(date).toLocaleString("th-TH", options);
    };
    const handleSubmit = (data) => {
      console.log("Submitted Data:", data);
    };
    const handleUpdate = () => {
      fetchDays();
    };
    const calculateProgress = (totalStudents) => {
      if (state.studentCount === 0) return 0;
      return Math.round(totalStudents / state.studentCount * 100);
    };
    const fetchDays = async () => {
      try {
        const result = await getDayByweekId(props.week_id);
        const user = await getUser();
        const resultStudent = await getUserTeacher();
        if (result.ok === 1 && Array.isArray(result.days)) {
          state.items = result.days.map((day) => ({
            id: day.id,
            day: day.day,
            start: day.start,
            end: day.end,
            status: day.status,
            totalStudents: 0
          }));
        } else {
          console.error("Invalid data structure from API:", result);
        }
        if (user.ok === 1) {
          state.teacher = user.user.id;
        } else {
          console.error("Invalid data structure from API:", user);
        }
        if (resultStudent.ok === 1) {
          state.student = resultStudent.students;
          state.studentCount = resultStudent.students.length;
        } else {
          console.error("Invalid data structure from API:", resultStudent);
        }
        for (const item of state.items) {
          const totalStudents = await getCheckLine(props.week_id, item.id);
          if (totalStudents.ok === 1) {
            item.totalStudents = totalStudents.check_lines.length;
          }
        }
      } catch (error) {
        console.error("Error fetching weeks:", error);
      }
    };
    fetchDays();
    return {
      ...toRefs(state),
      openDialog,
      closeDialog,
      formatDate,
      handleSubmit,
      handleUpdate,
      calculateProgress
    };
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CheckIineComponent = resolveComponent("CheckIineComponent");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-2d976964>`);
  _push(ssrRenderComponent(VCard, {
    flat: "",
    class: "elevation-3"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCardTitle, { class: "d-flex align-center pe-2" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VIcon, {
                icon: "mdi-calendar-week",
                color: "primary"
              }, null, _parent3, _scopeId2));
              _push3(`<span class="ml-2 text-h6" data-v-2d976964${_scopeId2}>สัปดาห์ที่ ${ssrInterpolate($props.week_id)}</span>`);
              _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VTextField, {
                modelValue: _ctx.search,
                "onUpdate:modelValue": ($event) => _ctx.search = $event,
                density: "compact",
                label: "ค้นหา",
                "prepend-inner-icon": "mdi-magnify",
                variant: "solo-filled",
                flat: "",
                "hide-details": "",
                "single-line": "",
                class: "search-field"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VIcon, {
                  icon: "mdi-calendar-week",
                  color: "primary"
                }),
                createVNode("span", { class: "ml-2 text-h6" }, "สัปดาห์ที่ " + toDisplayString($props.week_id), 1),
                createVNode(VSpacer),
                createVNode(VTextField, {
                  modelValue: _ctx.search,
                  "onUpdate:modelValue": ($event) => _ctx.search = $event,
                  density: "compact",
                  label: "ค้นหา",
                  "prepend-inner-icon": "mdi-magnify",
                  variant: "solo-filled",
                  flat: "",
                  "hide-details": "",
                  "single-line": "",
                  class: "search-field"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VDataTable, {
          search: _ctx.search,
          "onUpdate:search": ($event) => _ctx.search = $event,
          headers: _ctx.headers,
          items: _ctx.items,
          class: "custom-data-table"
        }, {
          "item.progress": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VProgressLinear, {
                "model-value": $setup.calculateProgress(item.totalStudents),
                height: "30",
                color: "#9292D1",
                rounded: "",
                striped: ""
              }, {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<span class="text-h6" data-v-2d976964${_scopeId3}>${ssrInterpolate($setup.calculateProgress(item.totalStudents))}%</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-h6" }, toDisplayString($setup.calculateProgress(item.totalStudents)) + "%", 1)
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VProgressLinear, {
                  "model-value": $setup.calculateProgress(item.totalStudents),
                  height: "30",
                  color: "#9292D1",
                  rounded: "",
                  striped: ""
                }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-h6" }, toDisplayString($setup.calculateProgress(item.totalStudents)) + "%", 1)
                  ]),
                  _: 2
                }, 1032, ["model-value"])
              ];
            }
          }),
          "item.view": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<td class="button-open" data-v-2d976964${_scopeId2}>`);
              _push3(ssrRenderComponent(VBtn, {
                onClick: ($event) => $setup.openDialog(item.id),
                class: "btn-open",
                icon: ""
              }, {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VIcon, {
                      size: "24px",
                      color: "primary"
                    }, {
                      default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`${ssrInterpolate(item.status === "pending" ? "mdi-pencil" : "mdi-eye")}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.status === "pending" ? "mdi-pencil" : "mdi-eye"), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VIcon, {
                        size: "24px",
                        color: "primary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.status === "pending" ? "mdi-pencil" : "mdi-eye"), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VDialog, {
                modelValue: _ctx.dialog[item.id],
                "onUpdate:modelValue": ($event) => _ctx.dialog[item.id] = $event,
                "max-width": "800",
                persistent: "",
                transition: "dialog-bottom-transition"
              }, {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCard, {
                      "prepend-icon": "mdi-eye",
                      title: "เช็คข้อมูล",
                      class: "dialog-card"
                    }, {
                      actions: withCtx((_3, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VSpacer, null, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VBtn, {
                            onClick: ($event) => $setup.closeDialog(item.id),
                            color: "red",
                            class: "btn-close"
                          }, {
                            default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<h5 data-v-2d976964${_scopeId5}>ปิด</h5>`);
                              } else {
                                return [
                                  createVNode("h5", null, "ปิด")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VSpacer),
                            createVNode(VBtn, {
                              onClick: ($event) => $setup.closeDialog(item.id),
                              color: "red",
                              class: "btn-close"
                            }, {
                              default: withCtx(() => [
                                createVNode("h5", null, "ปิด")
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ];
                        }
                      }),
                      default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_CheckIineComponent, {
                                  week_id: $props.week_id,
                                  day_id: item.id,
                                  onSubmit: $setup.handleSubmit,
                                  onUpdate: $setup.handleUpdate
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_CheckIineComponent, {
                                    week_id: $props.week_id,
                                    day_id: item.id,
                                    onSubmit: $setup.handleSubmit,
                                    onUpdate: $setup.handleUpdate
                                  }, null, 8, ["week_id", "day_id", "onSubmit", "onUpdate"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode(_component_CheckIineComponent, {
                                  week_id: $props.week_id,
                                  day_id: item.id,
                                  onSubmit: $setup.handleSubmit,
                                  onUpdate: $setup.handleUpdate
                                }, null, 8, ["week_id", "day_id", "onSubmit", "onUpdate"])
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VCard, {
                        "prepend-icon": "mdi-eye",
                        title: "เช็คข้อมูล",
                        class: "dialog-card"
                      }, {
                        actions: withCtx(() => [
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            onClick: ($event) => $setup.closeDialog(item.id),
                            color: "red",
                            class: "btn-close"
                          }, {
                            default: withCtx(() => [
                              createVNode("h5", null, "ปิด")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]),
                        default: withCtx(() => [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_component_CheckIineComponent, {
                                week_id: $props.week_id,
                                day_id: item.id,
                                onSubmit: $setup.handleSubmit,
                                onUpdate: $setup.handleUpdate
                              }, null, 8, ["week_id", "day_id", "onSubmit", "onUpdate"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
              _push3(`</td>`);
            } else {
              return [
                createVNode("td", { class: "button-open" }, [
                  createVNode(VBtn, {
                    onClick: ($event) => $setup.openDialog(item.id),
                    class: "btn-open",
                    icon: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, {
                        size: "24px",
                        color: "primary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.status === "pending" ? "mdi-pencil" : "mdi-eye"), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  createVNode(VDialog, {
                    modelValue: _ctx.dialog[item.id],
                    "onUpdate:modelValue": ($event) => _ctx.dialog[item.id] = $event,
                    "max-width": "800",
                    persistent: "",
                    transition: "dialog-bottom-transition"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCard, {
                        "prepend-icon": "mdi-eye",
                        title: "เช็คข้อมูล",
                        class: "dialog-card"
                      }, {
                        actions: withCtx(() => [
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            onClick: ($event) => $setup.closeDialog(item.id),
                            color: "red",
                            class: "btn-close"
                          }, {
                            default: withCtx(() => [
                              createVNode("h5", null, "ปิด")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]),
                        default: withCtx(() => [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_component_CheckIineComponent, {
                                week_id: $props.week_id,
                                day_id: item.id,
                                onSubmit: $setup.handleSubmit,
                                onUpdate: $setup.handleUpdate
                              }, null, 8, ["week_id", "day_id", "onSubmit", "onUpdate"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["modelValue", "onUpdate:modelValue"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VCardTitle, { class: "d-flex align-center pe-2" }, {
            default: withCtx(() => [
              createVNode(VIcon, {
                icon: "mdi-calendar-week",
                color: "primary"
              }),
              createVNode("span", { class: "ml-2 text-h6" }, "สัปดาห์ที่ " + toDisplayString($props.week_id), 1),
              createVNode(VSpacer),
              createVNode(VTextField, {
                modelValue: _ctx.search,
                "onUpdate:modelValue": ($event) => _ctx.search = $event,
                density: "compact",
                label: "ค้นหา",
                "prepend-inner-icon": "mdi-magnify",
                variant: "solo-filled",
                flat: "",
                "hide-details": "",
                "single-line": "",
                class: "search-field"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            _: 1
          }),
          createVNode(VDataTable, {
            search: _ctx.search,
            "onUpdate:search": ($event) => _ctx.search = $event,
            headers: _ctx.headers,
            items: _ctx.items,
            class: "custom-data-table"
          }, {
            "item.progress": withCtx(({ item }) => [
              createVNode(VProgressLinear, {
                "model-value": $setup.calculateProgress(item.totalStudents),
                height: "30",
                color: "#9292D1",
                rounded: "",
                striped: ""
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "text-h6" }, toDisplayString($setup.calculateProgress(item.totalStudents)) + "%", 1)
                ]),
                _: 2
              }, 1032, ["model-value"])
            ]),
            "item.view": withCtx(({ item }) => [
              createVNode("td", { class: "button-open" }, [
                createVNode(VBtn, {
                  onClick: ($event) => $setup.openDialog(item.id),
                  class: "btn-open",
                  icon: ""
                }, {
                  default: withCtx(() => [
                    createVNode(VIcon, {
                      size: "24px",
                      color: "primary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.status === "pending" ? "mdi-pencil" : "mdi-eye"), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["onClick"]),
                createVNode(VDialog, {
                  modelValue: _ctx.dialog[item.id],
                  "onUpdate:modelValue": ($event) => _ctx.dialog[item.id] = $event,
                  "max-width": "800",
                  persistent: "",
                  transition: "dialog-bottom-transition"
                }, {
                  default: withCtx(() => [
                    createVNode(VCard, {
                      "prepend-icon": "mdi-eye",
                      title: "เช็คข้อมูล",
                      class: "dialog-card"
                    }, {
                      actions: withCtx(() => [
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          onClick: ($event) => $setup.closeDialog(item.id),
                          color: "red",
                          class: "btn-close"
                        }, {
                          default: withCtx(() => [
                            createVNode("h5", null, "ปิด")
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ]),
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_component_CheckIineComponent, {
                              week_id: $props.week_id,
                              day_id: item.id,
                              onSubmit: $setup.handleSubmit,
                              onUpdate: $setup.handleUpdate
                            }, null, 8, ["week_id", "day_id", "onSubmit", "onUpdate"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue"])
              ])
            ]),
            _: 1
          }, 8, ["search", "onUpdate:search", "headers", "items"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/teacher/view/DayComponent.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const DayComponent = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-2d976964"]]);
const _sfc_main$5 = {
  components: {
    DayComponent
  },
  setup() {
    const state = reactive({
      search: "",
      items: [],
      totalStudents: [],
      headers: [
        { title: "#", key: "id" },
        { title: "สัปดาห์", key: "week" },
        { title: "เริ่ม", key: "start" },
        { title: "สิ้นสุด", key: "end" },
        { title: "ห้อง", key: "room" },
        { title: "สถานะ", key: "status" },
        { title: "รายละเอียด", key: "view" }
      ],
      dialog: {},
      teacher: "",
      studentCount: 0,
      dayCount: 7,
      page: 1,
      // หน้าปัจจุบัน
      itemsPerPage: 8,
      // จำนวนรายการต่อหน้า
      weekcount: 0
    });
    const filteredItems = computed(() => {
      if (!state.search) return state.items;
      return state.items.filter(
        (item) => Object.values(item).some(
          (val) => String(val).toLowerCase().includes(state.search.toLowerCase())
        )
      );
    });
    const totalStudents = computed(() => {
      const start = (state.page - 1) * state.itemsPerPage;
      const end = start + state.itemsPerPage;
      return state.totalStudents.slice(start, end);
    });
    const paginatedItems = computed(() => {
      const start = (state.page - 1) * state.itemsPerPage;
      const end = start + state.itemsPerPage;
      return filteredItems.value.slice(start, end);
    });
    const totalPages = computed(() => {
      return Math.ceil(filteredItems.value.length / state.itemsPerPage);
    });
    const openDialog = (id) => {
      state.dialog[id] = true;
    };
    const closeDialog = (id) => {
      state.dialog[id] = false;
    };
    const formatDate = (date) => {
      const options = { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" };
      return new Date(date).toLocaleString("th-TH", options);
    };
    const handleSubmit = (data) => {
      console.log("Submitted Data:", data);
    };
    const fetchWeeks = async () => {
      try {
        const result = await getWeeks();
        const resultStudent = await getUserTeacher();
        const user = await getUser();
        if (result.ok === 1 && Array.isArray(result.weeks)) {
          state.items = result.weeks.map((week) => ({
            id: week.id,
            week: week.week,
            start: week.start,
            end: week.end,
            room: week.room,
            status: week.status
          }));
          state.weekcount = result.weeks.length;
        } else {
          console.error("Invalid data structure from API:", result);
        }
        if (resultStudent.ok === 1) {
          state.studentCount = resultStudent.students.length;
        } else {
          console.error("Invalid data structure from API:", resultStudent);
        }
        if (user.ok === 1) {
          state.teacher = user.user.id;
        } else {
          console.error("Invalid data structure from API:", user);
        }
        for (const item of state.items) {
          for (let day = 1; day <= 7; day++) {
            const totalStudents2 = await getCheckLine(item.id, 1);
            if (totalStudents2.ok === 1) {
              state.totalStudents = totalStudents2.check_lines.length;
            }
          }
        }
      } catch (error) {
        console.error("Error fetching weeks:", error);
      }
    };
    fetchWeeks();
    return {
      ...toRefs(state),
      totalStudents,
      openDialog,
      closeDialog,
      formatDate,
      handleSubmit,
      paginatedItems,
      totalPages
    };
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_DayComponent = resolveComponent("DayComponent");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-22f39613>`);
  _push(ssrRenderComponent(VCard, {
    flat: "",
    class: "elevation-3 animated-card"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCardTitle, { class: "d-flex align-center pe-2 title-bar" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VIcon, {
                icon: "mdi-calendar-week",
                color: "primary"
              }, null, _parent3, _scopeId2));
              _push3(`<span class="ml-2 text-h6" data-v-22f39613${_scopeId2}>ผลลัพธ์การเข้าแถว</span>`);
              _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VTextField, {
                modelValue: _ctx.search,
                "onUpdate:modelValue": ($event) => _ctx.search = $event,
                density: "compact",
                label: "ค้นหา",
                "prepend-inner-icon": "mdi-magnify",
                variant: "solo-filled",
                "hide-details": "",
                class: "search-field"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VIcon, {
                  icon: "mdi-calendar-week",
                  color: "primary"
                }),
                createVNode("span", { class: "ml-2 text-h6" }, "ผลลัพธ์การเข้าแถว"),
                createVNode(VSpacer),
                createVNode(VTextField, {
                  modelValue: _ctx.search,
                  "onUpdate:modelValue": ($event) => _ctx.search = $event,
                  density: "compact",
                  label: "ค้นหา",
                  "prepend-inner-icon": "mdi-magnify",
                  variant: "solo-filled",
                  "hide-details": "",
                  class: "search-field"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(VRow, { class: "pa-4" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList($setup.paginatedItems, (item) => {
                _push3(ssrRenderComponent(VCol, {
                  key: item.id,
                  cols: "12",
                  sm: "6",
                  md: "4",
                  lg: "3"
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(VCard, { class: "hover-effect" }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(ssrRenderComponent(VCardTitle, { class: "gradient-title" }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`สัปดาห์ที่ ${ssrInterpolate(item.week)}`);
                                } else {
                                  return [
                                    createTextVNode("สัปดาห์ที่ " + toDisplayString(item.week), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                            _push5(ssrRenderComponent(VCardText, null, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`<div data-v-22f39613${_scopeId5}><strong data-v-22f39613${_scopeId5}>เริ่ม:</strong> ${ssrInterpolate($setup.formatDate(item.start))}</div><div data-v-22f39613${_scopeId5}><strong data-v-22f39613${_scopeId5}>สิ้นสุด:</strong> ${ssrInterpolate($setup.formatDate(item.end))}</div><div data-v-22f39613${_scopeId5}><strong data-v-22f39613${_scopeId5}>ห้อง:</strong> ${ssrInterpolate(item.room)}</div><div data-v-22f39613${_scopeId5}><strong data-v-22f39613${_scopeId5}>สถานะ:</strong> ${ssrInterpolate(item.status)}</div>`);
                                } else {
                                  return [
                                    createVNode("div", null, [
                                      createVNode("strong", null, "เริ่ม:"),
                                      createTextVNode(" " + toDisplayString($setup.formatDate(item.start)), 1)
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("strong", null, "สิ้นสุด:"),
                                      createTextVNode(" " + toDisplayString($setup.formatDate(item.end)), 1)
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("strong", null, "ห้อง:"),
                                      createTextVNode(" " + toDisplayString(item.room), 1)
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("strong", null, "สถานะ:"),
                                      createTextVNode(" " + toDisplayString(item.status), 1)
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                            _push5(ssrRenderComponent(VCardActions, null, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(ssrRenderComponent(VBtn, {
                                    onClick: ($event) => $setup.openDialog(item.id),
                                    class: "btn-open",
                                    icon: ""
                                  }, {
                                    default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(ssrRenderComponent(VIcon, {
                                          size: "24px",
                                          color: "primary"
                                        }, {
                                          default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                            if (_push8) {
                                              _push8(`${ssrInterpolate(item.status === "pending" ? "mdi-pencil" : "mdi-eye")}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(item.status === "pending" ? "mdi-pencil" : "mdi-eye"), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent7, _scopeId6));
                                      } else {
                                        return [
                                          createVNode(VIcon, {
                                            size: "24px",
                                            color: "primary"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.status === "pending" ? "mdi-pencil" : "mdi-eye"), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent6, _scopeId5));
                                } else {
                                  return [
                                    createVNode(VBtn, {
                                      onClick: ($event) => $setup.openDialog(item.id),
                                      class: "btn-open",
                                      icon: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          size: "24px",
                                          color: "primary"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.status === "pending" ? "mdi-pencil" : "mdi-eye"), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          } else {
                            return [
                              createVNode(VCardTitle, { class: "gradient-title" }, {
                                default: withCtx(() => [
                                  createTextVNode("สัปดาห์ที่ " + toDisplayString(item.week), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VCardText, null, {
                                default: withCtx(() => [
                                  createVNode("div", null, [
                                    createVNode("strong", null, "เริ่ม:"),
                                    createTextVNode(" " + toDisplayString($setup.formatDate(item.start)), 1)
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("strong", null, "สิ้นสุด:"),
                                    createTextVNode(" " + toDisplayString($setup.formatDate(item.end)), 1)
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("strong", null, "ห้อง:"),
                                    createTextVNode(" " + toDisplayString(item.room), 1)
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("strong", null, "สถานะ:"),
                                    createTextVNode(" " + toDisplayString(item.status), 1)
                                  ])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VCardActions, null, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    onClick: ($event) => $setup.openDialog(item.id),
                                    class: "btn-open",
                                    icon: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        size: "24px",
                                        color: "primary"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.status === "pending" ? "mdi-pencil" : "mdi-eye"), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(VCard, { class: "hover-effect" }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, { class: "gradient-title" }, {
                              default: withCtx(() => [
                                createTextVNode("สัปดาห์ที่ " + toDisplayString(item.week), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode("div", null, [
                                  createVNode("strong", null, "เริ่ม:"),
                                  createTextVNode(" " + toDisplayString($setup.formatDate(item.start)), 1)
                                ]),
                                createVNode("div", null, [
                                  createVNode("strong", null, "สิ้นสุด:"),
                                  createTextVNode(" " + toDisplayString($setup.formatDate(item.end)), 1)
                                ]),
                                createVNode("div", null, [
                                  createVNode("strong", null, "ห้อง:"),
                                  createTextVNode(" " + toDisplayString(item.room), 1)
                                ]),
                                createVNode("div", null, [
                                  createVNode("strong", null, "สถานะ:"),
                                  createTextVNode(" " + toDisplayString(item.status), 1)
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VCardActions, null, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  onClick: ($event) => $setup.openDialog(item.id),
                                  class: "btn-open",
                                  icon: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      size: "24px",
                                      color: "primary"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.status === "pending" ? "mdi-pencil" : "mdi-eye"), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList($setup.paginatedItems, (item) => {
                  return openBlock(), createBlock(VCol, {
                    key: item.id,
                    cols: "12",
                    sm: "6",
                    md: "4",
                    lg: "3"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCard, { class: "hover-effect" }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, { class: "gradient-title" }, {
                            default: withCtx(() => [
                              createTextVNode("สัปดาห์ที่ " + toDisplayString(item.week), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("div", null, [
                                createVNode("strong", null, "เริ่ม:"),
                                createTextVNode(" " + toDisplayString($setup.formatDate(item.start)), 1)
                              ]),
                              createVNode("div", null, [
                                createVNode("strong", null, "สิ้นสุด:"),
                                createTextVNode(" " + toDisplayString($setup.formatDate(item.end)), 1)
                              ]),
                              createVNode("div", null, [
                                createVNode("strong", null, "ห้อง:"),
                                createTextVNode(" " + toDisplayString(item.room), 1)
                              ]),
                              createVNode("div", null, [
                                createVNode("strong", null, "สถานะ:"),
                                createTextVNode(" " + toDisplayString(item.status), 1)
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(VCardActions, null, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                onClick: ($event) => $setup.openDialog(item.id),
                                class: "btn-open",
                                icon: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    size: "24px",
                                    color: "primary"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.status === "pending" ? "mdi-pencil" : "mdi-eye"), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VPagination, {
          modelValue: _ctx.page,
          "onUpdate:modelValue": ($event) => _ctx.page = $event,
          length: $setup.totalPages,
          "total-visible": 5,
          class: "mt-4"
        }, null, _parent2, _scopeId));
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.items, (item) => {
          _push2(ssrRenderComponent(VDialog, {
            key: item.id,
            modelValue: _ctx.dialog[item.id],
            "onUpdate:modelValue": ($event) => _ctx.dialog[item.id] = $event,
            "max-width": "800",
            persistent: ""
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(VCard, {
                  "prepend-icon": "mdi-eye",
                  title: "จัดการการเข้าแถว"
                }, {
                  actions: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                      _push4(ssrRenderComponent(VBtn, {
                        onClick: ($event) => $setup.closeDialog(item.id),
                        color: "red"
                      }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`<h5 data-v-22f39613${_scopeId4}>ปิด</h5>`);
                          } else {
                            return [
                              createVNode("h5", null, "ปิด")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          onClick: ($event) => $setup.closeDialog(item.id),
                          color: "red"
                        }, {
                          default: withCtx(() => [
                            createVNode("h5", null, "ปิด")
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ];
                    }
                  }),
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(VCardText, null, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(ssrRenderComponent(_component_DayComponent, {
                              week_id: item.id,
                              onSubmit: $setup.handleSubmit
                            }, null, _parent5, _scopeId4));
                          } else {
                            return [
                              createVNode(_component_DayComponent, {
                                week_id: item.id,
                                onSubmit: $setup.handleSubmit
                              }, null, 8, ["week_id", "onSubmit"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_component_DayComponent, {
                              week_id: item.id,
                              onSubmit: $setup.handleSubmit
                            }, null, 8, ["week_id", "onSubmit"])
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(VCard, {
                    "prepend-icon": "mdi-eye",
                    title: "จัดการการเข้าแถว"
                  }, {
                    actions: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        onClick: ($event) => $setup.closeDialog(item.id),
                        color: "red"
                      }, {
                        default: withCtx(() => [
                          createVNode("h5", null, "ปิด")
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ]),
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(_component_DayComponent, {
                            week_id: item.id,
                            onSubmit: $setup.handleSubmit
                          }, null, 8, ["week_id", "onSubmit"])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          createVNode(VCardTitle, { class: "d-flex align-center pe-2 title-bar" }, {
            default: withCtx(() => [
              createVNode(VIcon, {
                icon: "mdi-calendar-week",
                color: "primary"
              }),
              createVNode("span", { class: "ml-2 text-h6" }, "ผลลัพธ์การเข้าแถว"),
              createVNode(VSpacer),
              createVNode(VTextField, {
                modelValue: _ctx.search,
                "onUpdate:modelValue": ($event) => _ctx.search = $event,
                density: "compact",
                label: "ค้นหา",
                "prepend-inner-icon": "mdi-magnify",
                variant: "solo-filled",
                "hide-details": "",
                class: "search-field"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            _: 1
          }),
          createVNode(VDivider),
          createVNode(VRow, { class: "pa-4" }, {
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList($setup.paginatedItems, (item) => {
                return openBlock(), createBlock(VCol, {
                  key: item.id,
                  cols: "12",
                  sm: "6",
                  md: "4",
                  lg: "3"
                }, {
                  default: withCtx(() => [
                    createVNode(VCard, { class: "hover-effect" }, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, { class: "gradient-title" }, {
                          default: withCtx(() => [
                            createTextVNode("สัปดาห์ที่ " + toDisplayString(item.week), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("div", null, [
                              createVNode("strong", null, "เริ่ม:"),
                              createTextVNode(" " + toDisplayString($setup.formatDate(item.start)), 1)
                            ]),
                            createVNode("div", null, [
                              createVNode("strong", null, "สิ้นสุด:"),
                              createTextVNode(" " + toDisplayString($setup.formatDate(item.end)), 1)
                            ]),
                            createVNode("div", null, [
                              createVNode("strong", null, "ห้อง:"),
                              createTextVNode(" " + toDisplayString(item.room), 1)
                            ]),
                            createVNode("div", null, [
                              createVNode("strong", null, "สถานะ:"),
                              createTextVNode(" " + toDisplayString(item.status), 1)
                            ])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(VCardActions, null, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              onClick: ($event) => $setup.openDialog(item.id),
                              class: "btn-open",
                              icon: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  size: "24px",
                                  color: "primary"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.status === "pending" ? "mdi-pencil" : "mdi-eye"), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ]),
            _: 1
          }),
          createVNode(VPagination, {
            modelValue: _ctx.page,
            "onUpdate:modelValue": ($event) => _ctx.page = $event,
            length: $setup.totalPages,
            "total-visible": 5,
            class: "mt-4"
          }, null, 8, ["modelValue", "onUpdate:modelValue", "length"]),
          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item) => {
            return openBlock(), createBlock(VDialog, {
              key: item.id,
              modelValue: _ctx.dialog[item.id],
              "onUpdate:modelValue": ($event) => _ctx.dialog[item.id] = $event,
              "max-width": "800",
              persistent: ""
            }, {
              default: withCtx(() => [
                createVNode(VCard, {
                  "prepend-icon": "mdi-eye",
                  title: "จัดการการเข้าแถว"
                }, {
                  actions: withCtx(() => [
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      onClick: ($event) => $setup.closeDialog(item.id),
                      color: "red"
                    }, {
                      default: withCtx(() => [
                        createVNode("h5", null, "ปิด")
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ]),
                  default: withCtx(() => [
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(_component_DayComponent, {
                          week_id: item.id,
                          onSubmit: $setup.handleSubmit
                        }, null, 8, ["week_id", "onSubmit"])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/teacher/ImageViewComponent.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const ImageViewComponent = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-22f39613"]]);
const _sfc_main$4 = {
  props: {
    student_id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      search: "",
      students: [],
      headers: [
        { title: "#", key: "check_line_id" },
        { title: "สัปดาห์", key: "week" },
        { title: "วันที่", key: "day_id" },
        { title: "สถานะ", key: "student_status" }
      ]
    };
  },
  methods: {
    async toggleStatus(item) {
      const newStatus = item.student_status === 1 ? 0 : 1;
      const response = await updatedCheckLine(item.week, item.day_id, item.student_id, newStatus);
      if (response.ok === 1) {
        item.student_status = newStatus;
        this.$emit("update");
      } else {
        console.error("Failed to update status");
      }
    }
  },
  async mounted() {
    const result = await getCheckLineById(this.student_id);
    if (result.ok === 1) {
      this.students = result.check_lines_by_id.map((item, index) => ({
        ...item,
        check_line_id: index + 1
      }));
    }
    console.log(this.students);
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-c644846b>`);
  _push(ssrRenderComponent(VCard, {
    flat: "",
    class: "elevation-3 animated-card"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCardTitle, { class: "d-flex align-center pe-2 title-bar" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VTextField, {
                modelValue: $data.search,
                "onUpdate:modelValue": ($event) => $data.search = $event,
                density: "compact",
                label: "ค้นหา",
                "prepend-inner-icon": "mdi-magnify",
                variant: "solo-filled",
                "hide-details": "",
                class: "search-field"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VTextField, {
                  modelValue: $data.search,
                  "onUpdate:modelValue": ($event) => $data.search = $event,
                  density: "compact",
                  label: "ค้นหา",
                  "prepend-inner-icon": "mdi-magnify",
                  variant: "solo-filled",
                  "hide-details": "",
                  class: "search-field"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(VDataTable, {
          search: $data.search,
          "onUpdate:search": ($event) => $data.search = $event,
          headers: $data.headers,
          items: $data.students,
          class: "elevation-1"
        }, {
          "item.student_status": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VChip, {
                color: item.student_status === 1 ? "green" : "red",
                dark: "",
                small: "",
                class: ["status-chip", item.student_status === 1 ? "animate-green" : "animate-red"],
                onClick: ($event) => $options.toggleStatus(item)
              }, {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`${ssrInterpolate(item.student_status === 1 ? "มา" : "ขาด")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.student_status === 1 ? "มา" : "ขาด"), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VChip, {
                  color: item.student_status === 1 ? "green" : "red",
                  dark: "",
                  small: "",
                  class: ["status-chip", item.student_status === 1 ? "animate-green" : "animate-red"],
                  onClick: ($event) => $options.toggleStatus(item)
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.student_status === 1 ? "มา" : "ขาด"), 1)
                  ]),
                  _: 2
                }, 1032, ["color", "class", "onClick"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VCardTitle, { class: "d-flex align-center pe-2 title-bar" }, {
            default: withCtx(() => [
              createVNode(VTextField, {
                modelValue: $data.search,
                "onUpdate:modelValue": ($event) => $data.search = $event,
                density: "compact",
                label: "ค้นหา",
                "prepend-inner-icon": "mdi-magnify",
                variant: "solo-filled",
                "hide-details": "",
                class: "search-field"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            _: 1
          }),
          createVNode(VDivider),
          createVNode(VDataTable, {
            search: $data.search,
            "onUpdate:search": ($event) => $data.search = $event,
            headers: $data.headers,
            items: $data.students,
            class: "elevation-1"
          }, {
            "item.student_status": withCtx(({ item }) => [
              createVNode(VChip, {
                color: item.student_status === 1 ? "green" : "red",
                dark: "",
                small: "",
                class: ["status-chip", item.student_status === 1 ? "animate-green" : "animate-red"],
                onClick: ($event) => $options.toggleStatus(item)
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(item.student_status === 1 ? "มา" : "ขาด"), 1)
                ]),
                _: 2
              }, 1032, ["color", "class", "onClick"])
            ]),
            _: 1
          }, 8, ["search", "onUpdate:search", "headers", "items"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/teacher/view-all/studentViewCompomponent.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const studentViewCompomponent = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-c644846b"]]);
const _sfc_main$3 = {
  components: {
    studentViewCompomponent
  },
  setup() {
    const state = reactive({
      search: "",
      items: [],
      totalStudents: [],
      headers: [
        { title: "#", key: "id" },
        { title: "สัปดาห์", key: "username" },
        { title: "ชื่อ", key: "firstname" },
        { title: "นามสกุล", key: "lastname" },
        { title: "ห้อง", key: "user_type" },
        { title: "รายละเอียด", key: "status" }
      ],
      dialog: {},
      teacher: "",
      studentCount: 0,
      dayCount: 7,
      page: 1,
      itemsPerPage: 8,
      weekcount: 0,
      studentCounts: []
    });
    const filteredItems = computed(() => {
      if (!state.search) return state.items;
      return state.items.filter(
        (item) => Object.values(item).some(
          (val) => String(val).toLowerCase().includes(state.search.toLowerCase())
        )
      );
    });
    const totalStudents = computed(() => {
      const start = (state.page - 1) * state.itemsPerPage;
      const end = start + state.itemsPerPage;
      return state.totalStudents.slice(start, end);
    });
    const paginatedItems = computed(() => {
      const start = (state.page - 1) * state.itemsPerPage;
      const end = start + state.itemsPerPage;
      return filteredItems.value.slice(start, end);
    });
    const totalPages = computed(() => {
      return Math.ceil(filteredItems.value.length / state.itemsPerPage);
    });
    const openDialog = (id) => {
      state.dialog[id] = true;
    };
    const closeDialog = (id) => {
      state.dialog[id] = false;
    };
    const formatDate = (date) => {
      const options = { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" };
      return new Date(date).toLocaleString("th-TH", options);
    };
    const handleSubmit = (data) => {
      console.log("Submitted Data:", data);
    };
    const handleUpdate = () => {
      fetchWeeks();
    };
    const fetchWeeks = async () => {
      try {
        const result = await getWeeks();
        const resultStudent = await getUserTeacher();
        const user = await getUser();
        if (resultStudent.ok === 1 && Array.isArray(resultStudent.students)) {
          state.items = resultStudent.students.map((student) => ({
            id: student.student_id,
            username: student.student_username,
            firstname: student.student_firstname,
            lastname: student.student_lastname,
            email: student.student_email,
            user_type: student.student_type,
            profile: student.student_profile,
            room: student.student_room,
            status: student.user_status
          }));
          console.log(state.items);
        } else {
          console.error("Invalid data structure from API:", result);
        }
        const testline = await percentageIineupTeacher();
        if (testline.ok === 1) {
          state.studentCounts = testline.studentCounts;
        }
        console.log("testline", testline);
      } catch (error) {
        console.error("Error fetching weeks:", error);
      }
    };
    const calculateProgress = (studentId) => {
      const studentCount = state.studentCounts.find((item) => item.student_id === studentId);
      if (!studentCount) return 0;
      const percentage = studentCount.count / 90 * 100;
      return Math.round(percentage);
    };
    fetchWeeks();
    return {
      ...toRefs(state),
      totalStudents,
      openDialog,
      closeDialog,
      formatDate,
      handleSubmit,
      paginatedItems,
      totalPages,
      calculateProgress,
      handleUpdate
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_studentViewCompomponent = resolveComponent("studentViewCompomponent");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-fe60957a>`);
  _push(ssrRenderComponent(VCard, {
    flat: "",
    class: "elevation-3 animated-card"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCardTitle, { class: "d-flex align-center pe-2 title-bar" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VIcon, {
                icon: "mdi-calendar-week",
                color: "primary"
              }, null, _parent3, _scopeId2));
              _push3(`<span class="ml-2 text-h6" data-v-fe60957a${_scopeId2}>สรุปผลนักเรียน</span>`);
              _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VTextField, {
                modelValue: _ctx.search,
                "onUpdate:modelValue": ($event) => _ctx.search = $event,
                density: "compact",
                label: "ค้นหา",
                "prepend-inner-icon": "mdi-magnify",
                variant: "solo-filled",
                "hide-details": "",
                class: "search-field"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VIcon, {
                  icon: "mdi-calendar-week",
                  color: "primary"
                }),
                createVNode("span", { class: "ml-2 text-h6" }, "สรุปผลนักเรียน"),
                createVNode(VSpacer),
                createVNode(VTextField, {
                  modelValue: _ctx.search,
                  "onUpdate:modelValue": ($event) => _ctx.search = $event,
                  density: "compact",
                  label: "ค้นหา",
                  "prepend-inner-icon": "mdi-magnify",
                  variant: "solo-filled",
                  "hide-details": "",
                  class: "search-field"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(VRow, { class: "pa-4" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList($setup.paginatedItems, (item) => {
                _push3(ssrRenderComponent(VCol, {
                  key: item.id,
                  cols: "12",
                  sm: "6",
                  md: "4",
                  lg: "3"
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(VCard, { class: "hover-effect" }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(ssrRenderComponent(VCardTitle, { class: "gradient-title" }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(ssrRenderComponent(VImg, {
                                    src: `http://localhost:7000/uploads/profiles/${item.profile}`,
                                    height: "200px"
                                  }, null, _parent6, _scopeId5));
                                } else {
                                  return [
                                    createVNode(VImg, {
                                      src: `http://localhost:7000/uploads/profiles/${item.profile}`,
                                      height: "200px"
                                    }, null, 8, ["src"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                            _push5(ssrRenderComponent(VCardText, { class: "container" }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(ssrRenderComponent(VProgressLinear, {
                                    "model-value": $setup.calculateProgress(item.id),
                                    height: 40,
                                    size: 160,
                                    rotate: 10,
                                    color: "#9292D1",
                                    class: "text-h6",
                                    striped: ""
                                  }, {
                                    default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(`<span class="text-h6" data-v-fe60957a${_scopeId6}>${ssrInterpolate($setup.calculateProgress(item.id))}%</span>`);
                                      } else {
                                        return [
                                          createVNode("span", { class: "text-h6" }, toDisplayString($setup.calculateProgress(item.id)) + "%", 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent6, _scopeId5));
                                  _push6(`<div data-v-fe60957a${_scopeId5}><strong data-v-fe60957a${_scopeId5}>ไอดีนักเรียน:</strong> ${ssrInterpolate(item.id)}</div><div data-v-fe60957a${_scopeId5}><strong data-v-fe60957a${_scopeId5}>ชื่อผู้ใช้:</strong> ${ssrInterpolate(item.username)}</div><div data-v-fe60957a${_scopeId5}><strong data-v-fe60957a${_scopeId5}>อีเมล:</strong> ${ssrInterpolate(item.email)}</div><div data-v-fe60957a${_scopeId5}><strong data-v-fe60957a${_scopeId5}>ชื่อ:</strong> ${ssrInterpolate(item.firstname)}</div><div data-v-fe60957a${_scopeId5}><strong data-v-fe60957a${_scopeId5}>นามสกุล:</strong> ${ssrInterpolate(item.lastname)}</div><div data-v-fe60957a${_scopeId5}><strong data-v-fe60957a${_scopeId5}>ห้อง:</strong> ${ssrInterpolate(item.room)}</div><div data-v-fe60957a${_scopeId5}><strong data-v-fe60957a${_scopeId5}>สถานะ:</strong>`);
                                  _push6(ssrRenderComponent(VChip, {
                                    color: item.status === 1 ? "green" : "red",
                                    dark: "",
                                    small: "",
                                    class: ["status-chip", item.status === 1 ? "animate-green" : "animate-red"]
                                  }, {
                                    default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(`${ssrInterpolate(item.status === 1 ? "ออนไลน์" : "ออฟไลน์")}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(item.status === 1 ? "ออนไลน์" : "ออฟไลน์"), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent6, _scopeId5));
                                  _push6(`</div>`);
                                } else {
                                  return [
                                    createVNode(VProgressLinear, {
                                      "model-value": $setup.calculateProgress(item.id),
                                      height: 40,
                                      size: 160,
                                      rotate: 10,
                                      color: "#9292D1",
                                      class: "text-h6",
                                      striped: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "text-h6" }, toDisplayString($setup.calculateProgress(item.id)) + "%", 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["model-value"]),
                                    createVNode("div", null, [
                                      createVNode("strong", null, "ไอดีนักเรียน:"),
                                      createTextVNode(" " + toDisplayString(item.id), 1)
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("strong", null, "ชื่อผู้ใช้:"),
                                      createTextVNode(" " + toDisplayString(item.username), 1)
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("strong", null, "อีเมล:"),
                                      createTextVNode(" " + toDisplayString(item.email), 1)
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("strong", null, "ชื่อ:"),
                                      createTextVNode(" " + toDisplayString(item.firstname), 1)
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("strong", null, "นามสกุล:"),
                                      createTextVNode(" " + toDisplayString(item.lastname), 1)
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("strong", null, "ห้อง:"),
                                      createTextVNode(" " + toDisplayString(item.room), 1)
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("strong", null, "สถานะ:"),
                                      createVNode(VChip, {
                                        color: item.status === 1 ? "green" : "red",
                                        dark: "",
                                        small: "",
                                        class: ["status-chip", item.status === 1 ? "animate-green" : "animate-red"]
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.status === 1 ? "ออนไลน์" : "ออฟไลน์"), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color", "class"])
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                            _push5(ssrRenderComponent(VCardActions, null, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(ssrRenderComponent(VBtn, {
                                    onClick: ($event) => $setup.openDialog(item.id),
                                    class: "btn-open",
                                    icon: ""
                                  }, {
                                    default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(ssrRenderComponent(VIcon, {
                                          size: "24px",
                                          color: "primary"
                                        }, {
                                          default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                            if (_push8) {
                                              _push8(`${ssrInterpolate(item.status === "pending" ? "mdi-pencil" : "mdi-eye")}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(item.status === "pending" ? "mdi-pencil" : "mdi-eye"), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent7, _scopeId6));
                                      } else {
                                        return [
                                          createVNode(VIcon, {
                                            size: "24px",
                                            color: "primary"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.status === "pending" ? "mdi-pencil" : "mdi-eye"), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent6, _scopeId5));
                                } else {
                                  return [
                                    createVNode(VBtn, {
                                      onClick: ($event) => $setup.openDialog(item.id),
                                      class: "btn-open",
                                      icon: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          size: "24px",
                                          color: "primary"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.status === "pending" ? "mdi-pencil" : "mdi-eye"), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          } else {
                            return [
                              createVNode(VCardTitle, { class: "gradient-title" }, {
                                default: withCtx(() => [
                                  createVNode(VImg, {
                                    src: `http://localhost:7000/uploads/profiles/${item.profile}`,
                                    height: "200px"
                                  }, null, 8, ["src"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VCardText, { class: "container" }, {
                                default: withCtx(() => [
                                  createVNode(VProgressLinear, {
                                    "model-value": $setup.calculateProgress(item.id),
                                    height: 40,
                                    size: 160,
                                    rotate: 10,
                                    color: "#9292D1",
                                    class: "text-h6",
                                    striped: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "text-h6" }, toDisplayString($setup.calculateProgress(item.id)) + "%", 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["model-value"]),
                                  createVNode("div", null, [
                                    createVNode("strong", null, "ไอดีนักเรียน:"),
                                    createTextVNode(" " + toDisplayString(item.id), 1)
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("strong", null, "ชื่อผู้ใช้:"),
                                    createTextVNode(" " + toDisplayString(item.username), 1)
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("strong", null, "อีเมล:"),
                                    createTextVNode(" " + toDisplayString(item.email), 1)
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("strong", null, "ชื่อ:"),
                                    createTextVNode(" " + toDisplayString(item.firstname), 1)
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("strong", null, "นามสกุล:"),
                                    createTextVNode(" " + toDisplayString(item.lastname), 1)
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("strong", null, "ห้อง:"),
                                    createTextVNode(" " + toDisplayString(item.room), 1)
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("strong", null, "สถานะ:"),
                                    createVNode(VChip, {
                                      color: item.status === 1 ? "green" : "red",
                                      dark: "",
                                      small: "",
                                      class: ["status-chip", item.status === 1 ? "animate-green" : "animate-red"]
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.status === 1 ? "ออนไลน์" : "ออฟไลน์"), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color", "class"])
                                  ])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VCardActions, null, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    onClick: ($event) => $setup.openDialog(item.id),
                                    class: "btn-open",
                                    icon: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        size: "24px",
                                        color: "primary"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.status === "pending" ? "mdi-pencil" : "mdi-eye"), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(VCard, { class: "hover-effect" }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, { class: "gradient-title" }, {
                              default: withCtx(() => [
                                createVNode(VImg, {
                                  src: `http://localhost:7000/uploads/profiles/${item.profile}`,
                                  height: "200px"
                                }, null, 8, ["src"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VCardText, { class: "container" }, {
                              default: withCtx(() => [
                                createVNode(VProgressLinear, {
                                  "model-value": $setup.calculateProgress(item.id),
                                  height: 40,
                                  size: 160,
                                  rotate: 10,
                                  color: "#9292D1",
                                  class: "text-h6",
                                  striped: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-h6" }, toDisplayString($setup.calculateProgress(item.id)) + "%", 1)
                                  ]),
                                  _: 2
                                }, 1032, ["model-value"]),
                                createVNode("div", null, [
                                  createVNode("strong", null, "ไอดีนักเรียน:"),
                                  createTextVNode(" " + toDisplayString(item.id), 1)
                                ]),
                                createVNode("div", null, [
                                  createVNode("strong", null, "ชื่อผู้ใช้:"),
                                  createTextVNode(" " + toDisplayString(item.username), 1)
                                ]),
                                createVNode("div", null, [
                                  createVNode("strong", null, "อีเมล:"),
                                  createTextVNode(" " + toDisplayString(item.email), 1)
                                ]),
                                createVNode("div", null, [
                                  createVNode("strong", null, "ชื่อ:"),
                                  createTextVNode(" " + toDisplayString(item.firstname), 1)
                                ]),
                                createVNode("div", null, [
                                  createVNode("strong", null, "นามสกุล:"),
                                  createTextVNode(" " + toDisplayString(item.lastname), 1)
                                ]),
                                createVNode("div", null, [
                                  createVNode("strong", null, "ห้อง:"),
                                  createTextVNode(" " + toDisplayString(item.room), 1)
                                ]),
                                createVNode("div", null, [
                                  createVNode("strong", null, "สถานะ:"),
                                  createVNode(VChip, {
                                    color: item.status === 1 ? "green" : "red",
                                    dark: "",
                                    small: "",
                                    class: ["status-chip", item.status === 1 ? "animate-green" : "animate-red"]
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.status === 1 ? "ออนไลน์" : "ออฟไลน์"), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color", "class"])
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VCardActions, null, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  onClick: ($event) => $setup.openDialog(item.id),
                                  class: "btn-open",
                                  icon: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      size: "24px",
                                      color: "primary"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.status === "pending" ? "mdi-pencil" : "mdi-eye"), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList($setup.paginatedItems, (item) => {
                  return openBlock(), createBlock(VCol, {
                    key: item.id,
                    cols: "12",
                    sm: "6",
                    md: "4",
                    lg: "3"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCard, { class: "hover-effect" }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, { class: "gradient-title" }, {
                            default: withCtx(() => [
                              createVNode(VImg, {
                                src: `http://localhost:7000/uploads/profiles/${item.profile}`,
                                height: "200px"
                              }, null, 8, ["src"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(VCardText, { class: "container" }, {
                            default: withCtx(() => [
                              createVNode(VProgressLinear, {
                                "model-value": $setup.calculateProgress(item.id),
                                height: 40,
                                size: 160,
                                rotate: 10,
                                color: "#9292D1",
                                class: "text-h6",
                                striped: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-h6" }, toDisplayString($setup.calculateProgress(item.id)) + "%", 1)
                                ]),
                                _: 2
                              }, 1032, ["model-value"]),
                              createVNode("div", null, [
                                createVNode("strong", null, "ไอดีนักเรียน:"),
                                createTextVNode(" " + toDisplayString(item.id), 1)
                              ]),
                              createVNode("div", null, [
                                createVNode("strong", null, "ชื่อผู้ใช้:"),
                                createTextVNode(" " + toDisplayString(item.username), 1)
                              ]),
                              createVNode("div", null, [
                                createVNode("strong", null, "อีเมล:"),
                                createTextVNode(" " + toDisplayString(item.email), 1)
                              ]),
                              createVNode("div", null, [
                                createVNode("strong", null, "ชื่อ:"),
                                createTextVNode(" " + toDisplayString(item.firstname), 1)
                              ]),
                              createVNode("div", null, [
                                createVNode("strong", null, "นามสกุล:"),
                                createTextVNode(" " + toDisplayString(item.lastname), 1)
                              ]),
                              createVNode("div", null, [
                                createVNode("strong", null, "ห้อง:"),
                                createTextVNode(" " + toDisplayString(item.room), 1)
                              ]),
                              createVNode("div", null, [
                                createVNode("strong", null, "สถานะ:"),
                                createVNode(VChip, {
                                  color: item.status === 1 ? "green" : "red",
                                  dark: "",
                                  small: "",
                                  class: ["status-chip", item.status === 1 ? "animate-green" : "animate-red"]
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.status === 1 ? "ออนไลน์" : "ออฟไลน์"), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color", "class"])
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(VCardActions, null, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                onClick: ($event) => $setup.openDialog(item.id),
                                class: "btn-open",
                                icon: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    size: "24px",
                                    color: "primary"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.status === "pending" ? "mdi-pencil" : "mdi-eye"), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VPagination, {
          modelValue: _ctx.page,
          "onUpdate:modelValue": ($event) => _ctx.page = $event,
          length: $setup.totalPages,
          "total-visible": 5,
          class: "mt-4"
        }, null, _parent2, _scopeId));
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.items, (item) => {
          _push2(ssrRenderComponent(VDialog, {
            key: item.id,
            modelValue: _ctx.dialog[item.id],
            "onUpdate:modelValue": ($event) => _ctx.dialog[item.id] = $event,
            "max-width": "800",
            persistent: ""
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(VCard, {
                  "prepend-icon": "mdi-eye",
                  title: "จัดการการเข้าแถว"
                }, {
                  actions: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                      _push4(ssrRenderComponent(VBtn, {
                        onClick: ($event) => $setup.closeDialog(item.id),
                        color: "red"
                      }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`<h5 data-v-fe60957a${_scopeId4}>ปิด</h5>`);
                          } else {
                            return [
                              createVNode("h5", null, "ปิด")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          onClick: ($event) => $setup.closeDialog(item.id),
                          color: "red"
                        }, {
                          default: withCtx(() => [
                            createVNode("h5", null, "ปิด")
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ];
                    }
                  }),
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(VCardText, null, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(ssrRenderComponent(_component_studentViewCompomponent, {
                              student_id: item.id,
                              onSubmit: $setup.handleSubmit,
                              onUpdate: $setup.handleUpdate
                            }, null, _parent5, _scopeId4));
                          } else {
                            return [
                              createVNode(_component_studentViewCompomponent, {
                                student_id: item.id,
                                onSubmit: $setup.handleSubmit,
                                onUpdate: $setup.handleUpdate
                              }, null, 8, ["student_id", "onSubmit", "onUpdate"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_component_studentViewCompomponent, {
                              student_id: item.id,
                              onSubmit: $setup.handleSubmit,
                              onUpdate: $setup.handleUpdate
                            }, null, 8, ["student_id", "onSubmit", "onUpdate"])
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(VCard, {
                    "prepend-icon": "mdi-eye",
                    title: "จัดการการเข้าแถว"
                  }, {
                    actions: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        onClick: ($event) => $setup.closeDialog(item.id),
                        color: "red"
                      }, {
                        default: withCtx(() => [
                          createVNode("h5", null, "ปิด")
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ]),
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(_component_studentViewCompomponent, {
                            student_id: item.id,
                            onSubmit: $setup.handleSubmit,
                            onUpdate: $setup.handleUpdate
                          }, null, 8, ["student_id", "onSubmit", "onUpdate"])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          createVNode(VCardTitle, { class: "d-flex align-center pe-2 title-bar" }, {
            default: withCtx(() => [
              createVNode(VIcon, {
                icon: "mdi-calendar-week",
                color: "primary"
              }),
              createVNode("span", { class: "ml-2 text-h6" }, "สรุปผลนักเรียน"),
              createVNode(VSpacer),
              createVNode(VTextField, {
                modelValue: _ctx.search,
                "onUpdate:modelValue": ($event) => _ctx.search = $event,
                density: "compact",
                label: "ค้นหา",
                "prepend-inner-icon": "mdi-magnify",
                variant: "solo-filled",
                "hide-details": "",
                class: "search-field"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            _: 1
          }),
          createVNode(VDivider),
          createVNode(VRow, { class: "pa-4" }, {
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList($setup.paginatedItems, (item) => {
                return openBlock(), createBlock(VCol, {
                  key: item.id,
                  cols: "12",
                  sm: "6",
                  md: "4",
                  lg: "3"
                }, {
                  default: withCtx(() => [
                    createVNode(VCard, { class: "hover-effect" }, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, { class: "gradient-title" }, {
                          default: withCtx(() => [
                            createVNode(VImg, {
                              src: `http://localhost:7000/uploads/profiles/${item.profile}`,
                              height: "200px"
                            }, null, 8, ["src"])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(VCardText, { class: "container" }, {
                          default: withCtx(() => [
                            createVNode(VProgressLinear, {
                              "model-value": $setup.calculateProgress(item.id),
                              height: 40,
                              size: 160,
                              rotate: 10,
                              color: "#9292D1",
                              class: "text-h6",
                              striped: ""
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-h6" }, toDisplayString($setup.calculateProgress(item.id)) + "%", 1)
                              ]),
                              _: 2
                            }, 1032, ["model-value"]),
                            createVNode("div", null, [
                              createVNode("strong", null, "ไอดีนักเรียน:"),
                              createTextVNode(" " + toDisplayString(item.id), 1)
                            ]),
                            createVNode("div", null, [
                              createVNode("strong", null, "ชื่อผู้ใช้:"),
                              createTextVNode(" " + toDisplayString(item.username), 1)
                            ]),
                            createVNode("div", null, [
                              createVNode("strong", null, "อีเมล:"),
                              createTextVNode(" " + toDisplayString(item.email), 1)
                            ]),
                            createVNode("div", null, [
                              createVNode("strong", null, "ชื่อ:"),
                              createTextVNode(" " + toDisplayString(item.firstname), 1)
                            ]),
                            createVNode("div", null, [
                              createVNode("strong", null, "นามสกุล:"),
                              createTextVNode(" " + toDisplayString(item.lastname), 1)
                            ]),
                            createVNode("div", null, [
                              createVNode("strong", null, "ห้อง:"),
                              createTextVNode(" " + toDisplayString(item.room), 1)
                            ]),
                            createVNode("div", null, [
                              createVNode("strong", null, "สถานะ:"),
                              createVNode(VChip, {
                                color: item.status === 1 ? "green" : "red",
                                dark: "",
                                small: "",
                                class: ["status-chip", item.status === 1 ? "animate-green" : "animate-red"]
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.status === 1 ? "ออนไลน์" : "ออฟไลน์"), 1)
                                ]),
                                _: 2
                              }, 1032, ["color", "class"])
                            ])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(VCardActions, null, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              onClick: ($event) => $setup.openDialog(item.id),
                              class: "btn-open",
                              icon: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  size: "24px",
                                  color: "primary"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.status === "pending" ? "mdi-pencil" : "mdi-eye"), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ]),
            _: 1
          }),
          createVNode(VPagination, {
            modelValue: _ctx.page,
            "onUpdate:modelValue": ($event) => _ctx.page = $event,
            length: $setup.totalPages,
            "total-visible": 5,
            class: "mt-4"
          }, null, 8, ["modelValue", "onUpdate:modelValue", "length"]),
          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item) => {
            return openBlock(), createBlock(VDialog, {
              key: item.id,
              modelValue: _ctx.dialog[item.id],
              "onUpdate:modelValue": ($event) => _ctx.dialog[item.id] = $event,
              "max-width": "800",
              persistent: ""
            }, {
              default: withCtx(() => [
                createVNode(VCard, {
                  "prepend-icon": "mdi-eye",
                  title: "จัดการการเข้าแถว"
                }, {
                  actions: withCtx(() => [
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      onClick: ($event) => $setup.closeDialog(item.id),
                      color: "red"
                    }, {
                      default: withCtx(() => [
                        createVNode("h5", null, "ปิด")
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ]),
                  default: withCtx(() => [
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(_component_studentViewCompomponent, {
                          student_id: item.id,
                          onSubmit: $setup.handleSubmit,
                          onUpdate: $setup.handleUpdate
                        }, null, 8, ["student_id", "onSubmit", "onUpdate"])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/teacher/StudentComponent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const StudentComponent = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-fe60957a"]]);
const _sfc_main$2 = {
  setup() {
    return {};
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/teacher/InputDataComponent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const InputDataComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  name: "NavigationDrawer",
  components: {
    HeaderComponent: __nuxt_component_0,
    HomeComponent,
    ImageCheckComponent,
    ImageViewComponent,
    StudentComponent,
    InputDataComponent
  },
  data() {
    return {
      user: {
        id: "",
        username: "",
        email: "",
        role: "",
        profile: "",
        user_type: ""
      },
      drawer: true,
      rail: true,
      dynamicComponent: "HomeComponent",
      // คอมโพเนนต์เริ่มต้น
      username: "",
      isMobile: false,
      router: useRouter(),
      route: useRoute()
    };
  },
  methods: {
    changeComponent(componentName) {
      this.dynamicComponent = componentName;
      localStorage.setItem("lastComponentteacher", componentName);
    },
    fetchUsersData() {
      const token = localStorage.getItem("token");
      if (!token) return;
      axios.get("http://localhost:7000/user/get-user", {
        headers: { authorization: `Bearer ${token}` }
      }).then((response) => {
        const data = response.data;
        if (data.ok === 1) {
          this.profileImages = `http://localhost:7000/uploads/profiles/${data.user.profile}`;
          this.username = data.user.username;
        } else {
          console.error("Error fetching user data:", data.error);
        }
      }).catch((error) => {
        console.error("Error fetching user data:", error);
      });
    },
    updateIsMobile() {
      this.isMobile = (void 0).innerWidth <= 0;
    }
  },
  computed: {
    avatarSize() {
      if (this.rail && !this.isMobile) {
        this.avatarSize = 48;
      } else {
        this.avatarSize = 36;
      }
    }
  },
  async mounted() {
    const result = await getUser();
    if (result.ok === 1) {
      if (result.user.user_type == "teacher") {
        this.user = result.user;
      } else {
        this.$router.push("/");
      }
    } else {
      this.$router.push("/");
    }
    this.fetchUsersData();
    this.updateIsMobile();
    const lastComponent = localStorage.getItem("lastComponentteacher");
    if (lastComponent) {
      this.dynamicComponent = lastComponent;
    }
    (void 0).addEventListener("resize", this.updateIsMobile);
  },
  beforeDestroy() {
    (void 0).removeEventListener("resize", this.updateIsMobile);
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeaderComponent = __nuxt_component_0;
  _push(ssrRenderComponent(VCard, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VLayout, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VNavigationDrawer, {
                modelValue: $data.drawer,
                "onUpdate:modelValue": ($event) => $data.drawer = $event,
                rail: $data.rail && !$data.isMobile,
                permanent: "",
                onClick: ($event) => $data.rail = false,
                width: 260
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VListItem, { class: "profile-container" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          if (!$data.rail || $data.isMobile) {
                            _push5(ssrRenderComponent(VListItem, {
                              title: "Face \r\n                Detection",
                              class: "profile-name"
                            }, null, _parent5, _scopeId4));
                          } else {
                            _push5(`<!---->`);
                          }
                          if (!$data.rail || $data.isMobile) {
                            _push5(ssrRenderComponent(VListItemTitle, null, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(ssrRenderComponent(VBtn, {
                                    class: "toggle-rail-btn",
                                    icon: "mdi-chevron-left",
                                    variant: "text",
                                    onClick: ($event) => $data.rail = !$data.rail
                                  }, null, _parent6, _scopeId5));
                                } else {
                                  return [
                                    createVNode(VBtn, {
                                      class: "toggle-rail-btn",
                                      icon: "mdi-chevron-left",
                                      variant: "text",
                                      onClick: withModifiers(($event) => $data.rail = !$data.rail, ["stop"])
                                    }, null, 8, ["onClick"])
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent5, _scopeId4));
                          } else {
                            _push5(`<!---->`);
                          }
                        } else {
                          return [
                            !$data.rail || $data.isMobile ? (openBlock(), createBlock(VListItem, {
                              key: 0,
                              title: "Face \r\n                Detection",
                              class: "profile-name"
                            })) : createCommentVNode("", true),
                            !$data.rail || $data.isMobile ? (openBlock(), createBlock(VListItemTitle, { key: 1 }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  class: "toggle-rail-btn",
                                  icon: "mdi-chevron-left",
                                  variant: "text",
                                  onClick: withModifiers(($event) => $data.rail = !$data.rail, ["stop"])
                                }, null, 8, ["onClick"])
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VList, {
                      density: "compact",
                      nav: ""
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VListItem, {
                            "prepend-icon": "mdi-home-city",
                            value: "หน้าหลัก",
                            title: "",
                            onClick: ($event) => $options.changeComponent("HomeComponent"),
                            class: "custom-title-head"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                if (!$data.rail) {
                                  _push6(`<a data-v-95e651d9${_scopeId5}> หน้าหลัก </a>`);
                                } else {
                                  _push6(`<!---->`);
                                }
                              } else {
                                return [
                                  !$data.rail ? (openBlock(), createBlock("a", { key: 0 }, " หน้าหลัก ")) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          if (!$data.rail) {
                            _push5(ssrRenderComponent(VDivider, null, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`จัดการการเข้าแถว`);
                                } else {
                                  return [
                                    createTextVNode("จัดการการเข้าแถว")
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent5, _scopeId4));
                          } else {
                            _push5(ssrRenderComponent(VDivider, null, null, _parent5, _scopeId4));
                          }
                          _push5(ssrRenderComponent(VListItem, {
                            "prepend-icon": "mdi-image-check",
                            value: "จัดการการเข้าแถว",
                            title: "",
                            onClick: ($event) => $options.changeComponent("ImageCheckComponent"),
                            class: "custom-title-body"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                if (!$data.rail) {
                                  _push6(`<p data-v-95e651d9${_scopeId5}>จัดการการเข้าแถว</p>`);
                                } else {
                                  _push6(`<!---->`);
                                }
                              } else {
                                return [
                                  !$data.rail ? (openBlock(), createBlock("p", { key: 0 }, "จัดการการเข้าแถว")) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VListItem, {
                            "prepend-icon": "mdi-database-eye",
                            value: "ผลการเข้าแถว",
                            title: "",
                            onClick: ($event) => $options.changeComponent("ImageViewComponent"),
                            class: "custom-title-body"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                if (!$data.rail) {
                                  _push6(`<p data-v-95e651d9${_scopeId5}>ผลการเข้าแถว</p>`);
                                } else {
                                  _push6(`<!---->`);
                                }
                              } else {
                                return [
                                  !$data.rail ? (openBlock(), createBlock("p", { key: 0 }, "ผลการเข้าแถว")) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          if (!$data.rail) {
                            _push5(ssrRenderComponent(VDivider, null, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`นักเรียนในการดูแล`);
                                } else {
                                  return [
                                    createTextVNode("นักเรียนในการดูแล")
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent5, _scopeId4));
                          } else {
                            _push5(ssrRenderComponent(VDivider, null, null, _parent5, _scopeId4));
                          }
                          _push5(ssrRenderComponent(VListItem, {
                            "prepend-icon": "mdi-database-eye",
                            value: "สรุปผลนักเรียน",
                            title: "",
                            onClick: ($event) => $options.changeComponent("StudentComponent"),
                            class: "custom-title-body"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                if (!$data.rail) {
                                  _push6(`<p data-v-95e651d9${_scopeId5}>สรุปผลนักเรียน</p>`);
                                } else {
                                  _push6(`<!---->`);
                                }
                              } else {
                                return [
                                  !$data.rail ? (openBlock(), createBlock("p", { key: 0 }, "สรุปผลนักเรียน")) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VListItem, {
                              "prepend-icon": "mdi-home-city",
                              value: "หน้าหลัก",
                              title: "",
                              onClick: ($event) => $options.changeComponent("HomeComponent"),
                              class: "custom-title-head"
                            }, {
                              default: withCtx(() => [
                                !$data.rail ? (openBlock(), createBlock("a", { key: 0 }, " หน้าหลัก ")) : createCommentVNode("", true)
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            !$data.rail ? (openBlock(), createBlock(VDivider, { key: 0 }, {
                              default: withCtx(() => [
                                createTextVNode("จัดการการเข้าแถว")
                              ]),
                              _: 1
                            })) : (openBlock(), createBlock(VDivider, { key: 1 })),
                            createVNode(VListItem, {
                              "prepend-icon": "mdi-image-check",
                              value: "จัดการการเข้าแถว",
                              title: "",
                              onClick: ($event) => $options.changeComponent("ImageCheckComponent"),
                              class: "custom-title-body"
                            }, {
                              default: withCtx(() => [
                                !$data.rail ? (openBlock(), createBlock("p", { key: 0 }, "จัดการการเข้าแถว")) : createCommentVNode("", true)
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(VListItem, {
                              "prepend-icon": "mdi-database-eye",
                              value: "ผลการเข้าแถว",
                              title: "",
                              onClick: ($event) => $options.changeComponent("ImageViewComponent"),
                              class: "custom-title-body"
                            }, {
                              default: withCtx(() => [
                                !$data.rail ? (openBlock(), createBlock("p", { key: 0 }, "ผลการเข้าแถว")) : createCommentVNode("", true)
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            !$data.rail ? (openBlock(), createBlock(VDivider, { key: 2 }, {
                              default: withCtx(() => [
                                createTextVNode("นักเรียนในการดูแล")
                              ]),
                              _: 1
                            })) : (openBlock(), createBlock(VDivider, { key: 3 })),
                            createVNode(VListItem, {
                              "prepend-icon": "mdi-database-eye",
                              value: "สรุปผลนักเรียน",
                              title: "",
                              onClick: ($event) => $options.changeComponent("StudentComponent"),
                              class: "custom-title-body"
                            }, {
                              default: withCtx(() => [
                                !$data.rail ? (openBlock(), createBlock("p", { key: 0 }, "สรุปผลนักเรียน")) : createCommentVNode("", true)
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VListItem, { class: "profile-container" }, {
                        default: withCtx(() => [
                          !$data.rail || $data.isMobile ? (openBlock(), createBlock(VListItem, {
                            key: 0,
                            title: "Face \r\n                Detection",
                            class: "profile-name"
                          })) : createCommentVNode("", true),
                          !$data.rail || $data.isMobile ? (openBlock(), createBlock(VListItemTitle, { key: 1 }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                class: "toggle-rail-btn",
                                icon: "mdi-chevron-left",
                                variant: "text",
                                onClick: withModifiers(($event) => $data.rail = !$data.rail, ["stop"])
                              }, null, 8, ["onClick"])
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }),
                      createVNode(VDivider),
                      createVNode(VList, {
                        density: "compact",
                        nav: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(VListItem, {
                            "prepend-icon": "mdi-home-city",
                            value: "หน้าหลัก",
                            title: "",
                            onClick: ($event) => $options.changeComponent("HomeComponent"),
                            class: "custom-title-head"
                          }, {
                            default: withCtx(() => [
                              !$data.rail ? (openBlock(), createBlock("a", { key: 0 }, " หน้าหลัก ")) : createCommentVNode("", true)
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          !$data.rail ? (openBlock(), createBlock(VDivider, { key: 0 }, {
                            default: withCtx(() => [
                              createTextVNode("จัดการการเข้าแถว")
                            ]),
                            _: 1
                          })) : (openBlock(), createBlock(VDivider, { key: 1 })),
                          createVNode(VListItem, {
                            "prepend-icon": "mdi-image-check",
                            value: "จัดการการเข้าแถว",
                            title: "",
                            onClick: ($event) => $options.changeComponent("ImageCheckComponent"),
                            class: "custom-title-body"
                          }, {
                            default: withCtx(() => [
                              !$data.rail ? (openBlock(), createBlock("p", { key: 0 }, "จัดการการเข้าแถว")) : createCommentVNode("", true)
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VListItem, {
                            "prepend-icon": "mdi-database-eye",
                            value: "ผลการเข้าแถว",
                            title: "",
                            onClick: ($event) => $options.changeComponent("ImageViewComponent"),
                            class: "custom-title-body"
                          }, {
                            default: withCtx(() => [
                              !$data.rail ? (openBlock(), createBlock("p", { key: 0 }, "ผลการเข้าแถว")) : createCommentVNode("", true)
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          !$data.rail ? (openBlock(), createBlock(VDivider, { key: 2 }, {
                            default: withCtx(() => [
                              createTextVNode("นักเรียนในการดูแล")
                            ]),
                            _: 1
                          })) : (openBlock(), createBlock(VDivider, { key: 3 })),
                          createVNode(VListItem, {
                            "prepend-icon": "mdi-database-eye",
                            value: "สรุปผลนักเรียน",
                            title: "",
                            onClick: ($event) => $options.changeComponent("StudentComponent"),
                            class: "custom-title-body"
                          }, {
                            default: withCtx(() => [
                              !$data.rail ? (openBlock(), createBlock("p", { key: 0 }, "สรุปผลนักเรียน")) : createCommentVNode("", true)
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
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VMain, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_HeaderComponent, null, null, _parent4, _scopeId3));
                    ssrRenderVNode(_push4, createVNode(resolveDynamicComponent($data.dynamicComponent), null, null), _parent4, _scopeId3);
                  } else {
                    return [
                      createVNode(_component_HeaderComponent),
                      (openBlock(), createBlock(resolveDynamicComponent($data.dynamicComponent)))
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VNavigationDrawer, {
                  modelValue: $data.drawer,
                  "onUpdate:modelValue": ($event) => $data.drawer = $event,
                  rail: $data.rail && !$data.isMobile,
                  permanent: "",
                  onClick: ($event) => $data.rail = false,
                  width: 260
                }, {
                  default: withCtx(() => [
                    createVNode(VListItem, { class: "profile-container" }, {
                      default: withCtx(() => [
                        !$data.rail || $data.isMobile ? (openBlock(), createBlock(VListItem, {
                          key: 0,
                          title: "Face \r\n                Detection",
                          class: "profile-name"
                        })) : createCommentVNode("", true),
                        !$data.rail || $data.isMobile ? (openBlock(), createBlock(VListItemTitle, { key: 1 }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              class: "toggle-rail-btn",
                              icon: "mdi-chevron-left",
                              variant: "text",
                              onClick: withModifiers(($event) => $data.rail = !$data.rail, ["stop"])
                            }, null, 8, ["onClick"])
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider),
                    createVNode(VList, {
                      density: "compact",
                      nav: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(VListItem, {
                          "prepend-icon": "mdi-home-city",
                          value: "หน้าหลัก",
                          title: "",
                          onClick: ($event) => $options.changeComponent("HomeComponent"),
                          class: "custom-title-head"
                        }, {
                          default: withCtx(() => [
                            !$data.rail ? (openBlock(), createBlock("a", { key: 0 }, " หน้าหลัก ")) : createCommentVNode("", true)
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        !$data.rail ? (openBlock(), createBlock(VDivider, { key: 0 }, {
                          default: withCtx(() => [
                            createTextVNode("จัดการการเข้าแถว")
                          ]),
                          _: 1
                        })) : (openBlock(), createBlock(VDivider, { key: 1 })),
                        createVNode(VListItem, {
                          "prepend-icon": "mdi-image-check",
                          value: "จัดการการเข้าแถว",
                          title: "",
                          onClick: ($event) => $options.changeComponent("ImageCheckComponent"),
                          class: "custom-title-body"
                        }, {
                          default: withCtx(() => [
                            !$data.rail ? (openBlock(), createBlock("p", { key: 0 }, "จัดการการเข้าแถว")) : createCommentVNode("", true)
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VListItem, {
                          "prepend-icon": "mdi-database-eye",
                          value: "ผลการเข้าแถว",
                          title: "",
                          onClick: ($event) => $options.changeComponent("ImageViewComponent"),
                          class: "custom-title-body"
                        }, {
                          default: withCtx(() => [
                            !$data.rail ? (openBlock(), createBlock("p", { key: 0 }, "ผลการเข้าแถว")) : createCommentVNode("", true)
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        !$data.rail ? (openBlock(), createBlock(VDivider, { key: 2 }, {
                          default: withCtx(() => [
                            createTextVNode("นักเรียนในการดูแล")
                          ]),
                          _: 1
                        })) : (openBlock(), createBlock(VDivider, { key: 3 })),
                        createVNode(VListItem, {
                          "prepend-icon": "mdi-database-eye",
                          value: "สรุปผลนักเรียน",
                          title: "",
                          onClick: ($event) => $options.changeComponent("StudentComponent"),
                          class: "custom-title-body"
                        }, {
                          default: withCtx(() => [
                            !$data.rail ? (openBlock(), createBlock("p", { key: 0 }, "สรุปผลนักเรียน")) : createCommentVNode("", true)
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue", "rail", "onClick"]),
                createVNode(VMain, null, {
                  default: withCtx(() => [
                    createVNode(_component_HeaderComponent),
                    (openBlock(), createBlock(resolveDynamicComponent($data.dynamicComponent)))
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
          createVNode(VLayout, null, {
            default: withCtx(() => [
              createVNode(VNavigationDrawer, {
                modelValue: $data.drawer,
                "onUpdate:modelValue": ($event) => $data.drawer = $event,
                rail: $data.rail && !$data.isMobile,
                permanent: "",
                onClick: ($event) => $data.rail = false,
                width: 260
              }, {
                default: withCtx(() => [
                  createVNode(VListItem, { class: "profile-container" }, {
                    default: withCtx(() => [
                      !$data.rail || $data.isMobile ? (openBlock(), createBlock(VListItem, {
                        key: 0,
                        title: "Face \r\n                Detection",
                        class: "profile-name"
                      })) : createCommentVNode("", true),
                      !$data.rail || $data.isMobile ? (openBlock(), createBlock(VListItemTitle, { key: 1 }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            class: "toggle-rail-btn",
                            icon: "mdi-chevron-left",
                            variant: "text",
                            onClick: withModifiers(($event) => $data.rail = !$data.rail, ["stop"])
                          }, null, 8, ["onClick"])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(VDivider),
                  createVNode(VList, {
                    density: "compact",
                    nav: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(VListItem, {
                        "prepend-icon": "mdi-home-city",
                        value: "หน้าหลัก",
                        title: "",
                        onClick: ($event) => $options.changeComponent("HomeComponent"),
                        class: "custom-title-head"
                      }, {
                        default: withCtx(() => [
                          !$data.rail ? (openBlock(), createBlock("a", { key: 0 }, " หน้าหลัก ")) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      !$data.rail ? (openBlock(), createBlock(VDivider, { key: 0 }, {
                        default: withCtx(() => [
                          createTextVNode("จัดการการเข้าแถว")
                        ]),
                        _: 1
                      })) : (openBlock(), createBlock(VDivider, { key: 1 })),
                      createVNode(VListItem, {
                        "prepend-icon": "mdi-image-check",
                        value: "จัดการการเข้าแถว",
                        title: "",
                        onClick: ($event) => $options.changeComponent("ImageCheckComponent"),
                        class: "custom-title-body"
                      }, {
                        default: withCtx(() => [
                          !$data.rail ? (openBlock(), createBlock("p", { key: 0 }, "จัดการการเข้าแถว")) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VListItem, {
                        "prepend-icon": "mdi-database-eye",
                        value: "ผลการเข้าแถว",
                        title: "",
                        onClick: ($event) => $options.changeComponent("ImageViewComponent"),
                        class: "custom-title-body"
                      }, {
                        default: withCtx(() => [
                          !$data.rail ? (openBlock(), createBlock("p", { key: 0 }, "ผลการเข้าแถว")) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      !$data.rail ? (openBlock(), createBlock(VDivider, { key: 2 }, {
                        default: withCtx(() => [
                          createTextVNode("นักเรียนในการดูแล")
                        ]),
                        _: 1
                      })) : (openBlock(), createBlock(VDivider, { key: 3 })),
                      createVNode(VListItem, {
                        "prepend-icon": "mdi-database-eye",
                        value: "สรุปผลนักเรียน",
                        title: "",
                        onClick: ($event) => $options.changeComponent("StudentComponent"),
                        class: "custom-title-body"
                      }, {
                        default: withCtx(() => [
                          !$data.rail ? (openBlock(), createBlock("p", { key: 0 }, "สรุปผลนักเรียน")) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "rail", "onClick"]),
              createVNode(VMain, null, {
                default: withCtx(() => [
                  createVNode(_component_HeaderComponent),
                  (openBlock(), createBlock(resolveDynamicComponent($data.dynamicComponent)))
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navigation/NDTeacher.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const NDTeacher = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-95e651d9"]]);
const _sfc_main = {
  components: {
    NDTeacher
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NDTeacher = resolveComponent("NDTeacher");
  _push(ssrRenderComponent(_component_NDTeacher, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/teacher.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const teacher = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  teacher as default
};
//# sourceMappingURL=teacher-BEHKhkpU.js.map
