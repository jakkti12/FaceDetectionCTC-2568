import { V as VRow, _ as __nuxt_component_0 } from "./HeaderComponent-B3CWU5QU.js";
import { g as getUser, V as VAlert } from "./VAlert-BV4vVzt_.js";
import { createVNode, mergeProps, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext, Fragment, renderList, withModifiers, resolveDynamicComponent } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderVNode } from "vue/server-renderer";
import { p as propsFactory, g as genericComponent, e as useRtl, _ as _export_sfc } from "../server.mjs";
import { V as VCol, a as VPagination, b as VSelect, c as VLayout, d as VNavigationDrawer, e as VListItem, f as VListItemTitle, g as VList } from "./VNavigationDrawer-CflmLKK7.js";
import { V as VCard, a as VCardTitle, b as VImg, c as VCardSubtitle, d as VCardText, e as VCardActions } from "./lazy-C5DRqCjO.js";
import axios from "axios";
import * as XLSX from "xlsx";
import "hookable";
import { m as makeComponentProps, a as makeDimensionProps, b as makeTagProps, u as useDimension, c as useRender, V as VIcon, d as VBtn } from "./VBtn-BQh1DFk2.js";
import { V as VSpacer, a as VDialog } from "./VDialog-CTYxqpGs.js";
import { V as VTextField } from "./VTextField-DYVwMBTO.js";
import { V as VFileInput } from "./VFileInput-DQu0Y8pt.js";
import { V as VDivider } from "./VDivider-0mIWdu7a.js";
import "./VOverlay-Bq6vi5Fa.js";
import { V as VMain } from "./VMain-B0aKjWRH.js";
const makeVContainerProps = propsFactory({
  fluid: {
    type: Boolean,
    default: false
  },
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeTagProps()
}, "VContainer");
const VContainer = genericComponent()({
  name: "VContainer",
  props: makeVContainerProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      rtlClasses
    } = useRtl();
    const {
      dimensionStyles
    } = useDimension(props);
    useRender(() => createVNode(props.tag, {
      "class": ["v-container", {
        "v-container--fluid": props.fluid
      }, rtlClasses.value, props.class],
      "style": [dimensionStyles.value, props.style]
    }, slots));
    return {};
  }
});
const _sfc_main$2 = {
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
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mt-5" }, _attrs))} data-v-e197da99>`);
  _push(ssrRenderComponent(VCol, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCard, { class: "p-4" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<h1 data-v-e197da99${_scopeId2}> ยินดีต้อนรับ <a class="text-primary" data-v-e197da99${_scopeId2}>${ssrInterpolate($data.user.username)}, ${ssrInterpolate($data.user.user_type)}</a></h1><p class="text-muted" data-v-e197da99${_scopeId2}> อีเมล: ${ssrInterpolate($data.user.email)}</p>`);
              if ($data.user.profile) {
                _push3(`<div class="profile-section" data-v-e197da99${_scopeId2}><img${ssrRenderAttr("src", $data.user.profile)} alt="User Profile" class="profile-img rounded-circle" data-v-e197da99${_scopeId2}></div>`);
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/HomeComponent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const HomeComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-e197da99"]]);
const _sfc_main$1 = {
  data: () => ({
    excelFile: null,
    userTypes: ["student", "teacher", "admin"],
    roomTypes: ["E1", "E2", "E3", "E4"],
    user_type: "",
    search: "",
    desserts: [],
    dialog: false,
    dialogDelete: false,
    editedIndex: -1,
    editedItem: {
      id: "",
      student_id: "",
      username: "",
      password: "",
      NewPassword: "",
      picture: "",
      user_type: ""
      // เพิ่ม property นี้
    },
    defaultItem: {
      id: "",
      student_id: "",
      username: "",
      password: "",
      picture: "",
      user_type: ""
      // เพิ่ม property นี้
    },
    singleFile: null,
    singleFilePreview: null,
    showSuccess: false,
    showAlert: false,
    successMessage: "",
    alertMessage: "",
    isAdmin: false,
    page: 1,
    itemsPerPage: 8,
    windowWidth: (void 0).innerWidth,
    NewPassword: ""
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "เพิ่มสมาชิกใหม่" : "แก้ไขข้อมูล";
    },
    filteredDesserts() {
      return this.desserts.filter(
        (item) => item.username.toLowerCase().includes(this.search.toLowerCase())
      );
    },
    totalPages() {
      return Math.ceil(this.filteredDesserts.length / this.itemsPerPage);
    },
    paginatedDesserts() {
      const start = (this.page - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredDesserts.slice(start, end);
    }
  },
  watch: {
    windowWidth(newWidth) {
      this.itemsPerPage = newWidth < 600 ? 2 : 8;
    }
  },
  async created() {
    try {
      const response = await axios.get("http://localhost:7000/admin/list-users-all");
      this.desserts = response.data.users;
    } catch (error) {
      this.showError("เกิดข้อผิดพลาดในการโหลดข้อมูลสมาชิก");
    }
  },
  async mounted() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.showError("คุณไม่ได้เข้าสู่ระบบ");
      this.$router.push("/auth/login");
      return;
    }
    try {
      const response = await axios.get(
        "http://localhost:7000/settings/check-user-type",
        {
          headers: {
            authorization: `Bearer ${token}`
          }
        }
      );
      this.user_type = response.data.user_type;
      if (this.user_type === "admin") {
        this.isAdmin = true;
      } else {
        this.showError("คุณไม่มีสิทธิ์เข้าถึงหน้านี้");
      }
    } catch (error) {
      this.showError("เกิดข้อผิดพลาดในการตรวจสอบสิทธิ์ผู้ใช้");
    }
    (void 0).addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    (void 0).removeEventListener("resize", this.handleResize);
  },
  methods: {
    openExcelFileDialog() {
      this.$refs.excelFileInput.click();
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const data = e.target.result;
          const workbook = XLSX.read(data, { type: "binary" });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);
          this.uploadExcelData(jsonData);
        };
        reader.readAsBinaryString(file);
      }
    },
    async uploadExcelData(data) {
      try {
        const response = await axios.post("http://localhost:7000/admin/upload-excel", {
          users: data
        });
        this.showSucc("นำเข้าข้อมูลสำเร็จ");
      } catch (error) {
        this.showError("เกิดข้อผิดพลาดในการนำเข้าข้อมูล");
      }
    },
    handleResize() {
      this.windowWidth = (void 0).innerWidth;
    },
    showSucc(message) {
      this.successMessage = message;
      this.showSuccess = true;
    },
    showError(message) {
      this.alertMessage = message;
      this.showAlert = true;
    },
    closeAlert() {
      this.showAlert = false;
      this.showSuccess = false;
    },
    previewSingleFile() {
      if (this.singleFile) {
        this.singleFilePreview = URL.createObjectURL(this.singleFile);
      } else {
        this.singleFilePreview = null;
      }
    },
    async updateFaceData(id) {
      const formData = new FormData();
      const user_id = id;
      const file = this.singleFile;
      formData.append("user_id", user_id);
      formData.append("image", file);
      try {
        if (!file) {
          alert("กรุณาเลือกรูปภาพ");
          return;
        }
        const response = await axios.post("http://localhost:8000/update_face_data", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
        console.log(response.data);
        alert("อัปเดตข้อมูลใบหน้าสำเร็จ");
      } catch (error) {
        console.error("Error updating face data:", error);
        alert("เกิดข้อผิดพลาดในการอัปเดตข้อมูลใบหน้า");
      }
    },
    newItem() {
      this.editedIndex = -1;
      this.editedItem = { ...this.defaultItem };
      this.dialog = true;
    },
    async bypassItem(item) {
      const response = await axios.post("http://localhost:7000/admin/bypass-user", {
        id: item
      });
      if (response.status == 200) {
        localStorage.setItem("token", response.data.token);
        this.$router.push("/auth/login");
      }
    },
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = { ...item };
      this.dialog = true;
    },
    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = { ...item };
      this.dialogDelete = true;
    },
    async deleteItemConfirm() {
      try {
        await axios.post(
          "http://localhost:7000/admin/delete-user-by-id",
          this.editedItem
        );
        this.desserts.splice(this.editedIndex, 1);
      } catch (error) {
        this.showError("เกิดข้อผิดพลาดในการลบข้อมูล");
      }
      this.dialogDelete = false;
    },
    close() {
      this.dialog = false;
      this.editedItem = { ...this.defaultItem };
      this.singleFile = null;
      this.singleFilePreview = null;
    },
    closeDelete() {
      this.dialogDelete = false;
      this.editedItem = { ...this.defaultItem };
    },
    async save() {
      try {
        if (!this.editedItem.username || !this.editedItem.NewPassword || !this.editedItem.user_type) {
          this.showError("กรุณากรอกข้อมูลให้ครบทุกช่อง");
          return;
        }
        const roomMapping = {
          "E1": 1,
          "E2": 2,
          "E3": 3,
          "E4": 4,
          "E5": 5
        };
        if (this.editedItem.group_id) {
          this.editedItem.group_id = roomMapping[this.editedItem.group_name] || this.editedItem.group_name;
        }
        if (this.singleFile) {
          const formData = new FormData();
          formData.append("picture", this.singleFile);
          formData.append("user_id", this.editedItem.id);
          const uploadResponse = await axios.post(
            "http://localhost:7000/upload/upload-profile-user",
            formData,
            { headers: { "Content-Type": "multipart/form-data" } }
          );
          this.editedItem.profile = uploadResponse.data.file.filename;
        }
        if (this.editedItem.id) {
          await axios.post(
            "http://localhost:7000/admin/update-user",
            this.editedItem
          );
          Object.assign(this.desserts[this.editedIndex], this.editedItem);
        } else {
          const createResponse = await axios.post("http://localhost:7000/admin/create-user", this.editedItem);
          this.desserts.push(createResponse.data.user);
        }
        if (this.editedItem.NewPassword) {
          await axios.post(
            "http://localhost:7000/admin/change-password",
            this.editedItem
          );
        }
        this.close();
      } catch (error) {
        this.showError("เกิดข้อผิดพลาดในการบันทึกข้อมูล");
      }
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mt-2" }, _attrs))} data-v-6ee964d6>`);
  _push(ssrRenderComponent(VCard, {
    flat: "",
    class: "elevation-3 animated-card"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.isAdmin) {
          _push2(ssrRenderComponent(VCardTitle, { class: "d-flex align-center pe-2 title-bar" }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(VIcon, {
                  icon: "mdi-account-edit",
                  color: "ffffff"
                }, null, _parent3, _scopeId2));
                _push3(`<span class="ml-2 text-h6" data-v-6ee964d6${_scopeId2}>จัดการผู้ใช้งาน</span>`);
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
                if (_ctx.isAdmin) {
                  _push3(ssrRenderComponent(VBtn, {
                    color: "primary",
                    class: "ml-2 action-btn",
                    onClick: $options.newItem
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`เพิ่มผู้ใช้งาน`);
                      } else {
                        return [
                          createTextVNode("เพิ่มผู้ใช้งาน")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  _push3(`<!---->`);
                }
                _push3(ssrRenderComponent(VBtn, {
                  color: "primary",
                  class: "ml-2 action-btn",
                  onClick: $options.openExcelFileDialog
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(` นำเข้าข้อมูลจาก Excel `);
                    } else {
                      return [
                        createTextVNode(" นำเข้าข้อมูลจาก Excel ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
                _push3(ssrRenderComponent(VFileInput, {
                  ref: "excelFileInput",
                  modelValue: _ctx.excelFile,
                  "onUpdate:modelValue": ($event) => _ctx.excelFile = $event,
                  accept: ".xlsx,.xls",
                  label: "เลือกไฟล์ Excel",
                  style: { "display": "none" },
                  onChange: $options.handleFileUpload
                }, null, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(VIcon, {
                    icon: "mdi-account-edit",
                    color: "ffffff"
                  }),
                  createVNode("span", { class: "ml-2 text-h6" }, "จัดการผู้ใช้งาน"),
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
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  _ctx.isAdmin ? (openBlock(), createBlock(VBtn, {
                    key: 0,
                    color: "primary",
                    class: "ml-2 action-btn",
                    onClick: $options.newItem
                  }, {
                    default: withCtx(() => [
                      createTextVNode("เพิ่มผู้ใช้งาน")
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : createCommentVNode("", true),
                  createVNode(VBtn, {
                    color: "primary",
                    class: "ml-2 action-btn",
                    onClick: $options.openExcelFileDialog
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" นำเข้าข้อมูลจาก Excel ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(VFileInput, {
                    ref: "excelFileInput",
                    modelValue: _ctx.excelFile,
                    "onUpdate:modelValue": ($event) => _ctx.excelFile = $event,
                    accept: ".xlsx,.xls",
                    label: "เลือกไฟล์ Excel",
                    style: { "display": "none" },
                    onChange: $options.handleFileUpload
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
        if (_ctx.showAlert) {
          _push2(ssrRenderComponent(VAlert, {
            type: "error",
            style: { "z-index": "1000" },
            closable: "",
            title: "ข้อผิดพลาด",
            text: "",
            variant: "outlined",
            "onClick:close": $options.closeAlert
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`${ssrInterpolate(_ctx.alertMessage)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.alertMessage), 1)
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.showSuccess) {
          _push2(ssrRenderComponent(VAlert, {
            type: "success",
            style: { "z-index": "1000" },
            closable: "",
            title: "สำเร็จ",
            text: "",
            variant: "outlined",
            "onClick:close": $options.closeAlert
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`${ssrInterpolate(_ctx.successMessage)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.successMessage), 1)
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.isAdmin) {
          _push2(ssrRenderComponent(VRow, { class: "mt-5" }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<!--[-->`);
                ssrRenderList($options.paginatedDesserts, (item, index) => {
                  _push3(ssrRenderComponent(VCol, {
                    key: item.id,
                    cols: "12",
                    sm: "6",
                    md: "3"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VContainer, { class: "md-2" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCard, {
                                class: "hover-effect mx-auto",
                                outlined: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VImg, {
                                      src: `http://localhost:7000/uploads/profiles/${item.profile}`,
                                      height: "200px"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCardTitle, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(item.username)}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(item.username), 1)
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCardSubtitle, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`User ID: ${ssrInterpolate(item.id)}`);
                                        } else {
                                          return [
                                            createTextVNode("User ID: " + toDisplayString(item.id), 1)
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCardText, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`User Type: ${ssrInterpolate(item.user_type)}`);
                                        } else {
                                          return [
                                            createTextVNode("User Type: " + toDisplayString(item.user_type), 1)
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCardText, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Room: ${ssrInterpolate(item.group_name)}`);
                                        } else {
                                          return [
                                            createTextVNode("Room: " + toDisplayString(item.group_name), 1)
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCardActions, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VBtn, {
                                            color: "green",
                                            text: "",
                                            onClick: ($event) => $options.bypassItem(item.id)
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` เข้าสู่ระบบ `);
                                              } else {
                                                return [
                                                  createTextVNode(" เข้าสู่ระบบ ")
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VBtn, {
                                            color: "primary",
                                            text: "",
                                            onClick: ($event) => $options.editItem(item)
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` แก้ไข `);
                                              } else {
                                                return [
                                                  createTextVNode(" แก้ไข ")
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VBtn, {
                                            color: "error",
                                            text: "",
                                            onClick: ($event) => $options.deleteItem(item)
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` ลบ `);
                                              } else {
                                                return [
                                                  createTextVNode(" ลบ ")
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VBtn, {
                                              color: "green",
                                              text: "",
                                              onClick: ($event) => $options.bypassItem(item.id)
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" เข้าสู่ระบบ ")
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"]),
                                            createVNode(VBtn, {
                                              color: "primary",
                                              text: "",
                                              onClick: ($event) => $options.editItem(item)
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" แก้ไข ")
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"]),
                                            createVNode(VBtn, {
                                              color: "error",
                                              text: "",
                                              onClick: ($event) => $options.deleteItem(item)
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" ลบ ")
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VImg, {
                                        src: `http://localhost:7000/uploads/profiles/${item.profile}`,
                                        height: "200px"
                                      }, null, 8, ["src"]),
                                      createVNode(VCardTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.username), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VCardSubtitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("User ID: " + toDisplayString(item.id), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VCardText, null, {
                                        default: withCtx(() => [
                                          createTextVNode("User Type: " + toDisplayString(item.user_type), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VCardText, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Room: " + toDisplayString(item.group_name), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VCardActions, null, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            color: "green",
                                            text: "",
                                            onClick: ($event) => $options.bypassItem(item.id)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" เข้าสู่ระบบ ")
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"]),
                                          createVNode(VBtn, {
                                            color: "primary",
                                            text: "",
                                            onClick: ($event) => $options.editItem(item)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" แก้ไข ")
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"]),
                                          createVNode(VBtn, {
                                            color: "error",
                                            text: "",
                                            onClick: ($event) => $options.deleteItem(item)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" ลบ ")
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCard, {
                                  class: "hover-effect mx-auto",
                                  outlined: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VImg, {
                                      src: `http://localhost:7000/uploads/profiles/${item.profile}`,
                                      height: "200px"
                                    }, null, 8, ["src"]),
                                    createVNode(VCardTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.username), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VCardSubtitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("User ID: " + toDisplayString(item.id), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VCardText, null, {
                                      default: withCtx(() => [
                                        createTextVNode("User Type: " + toDisplayString(item.user_type), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VCardText, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Room: " + toDisplayString(item.group_name), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VCardActions, null, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          color: "green",
                                          text: "",
                                          onClick: ($event) => $options.bypassItem(item.id)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" เข้าสู่ระบบ ")
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"]),
                                        createVNode(VBtn, {
                                          color: "primary",
                                          text: "",
                                          onClick: ($event) => $options.editItem(item)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" แก้ไข ")
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"]),
                                        createVNode(VBtn, {
                                          color: "error",
                                          text: "",
                                          onClick: ($event) => $options.deleteItem(item)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" ลบ ")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VContainer, { class: "md-2" }, {
                            default: withCtx(() => [
                              createVNode(VCard, {
                                class: "hover-effect mx-auto",
                                outlined: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(VImg, {
                                    src: `http://localhost:7000/uploads/profiles/${item.profile}`,
                                    height: "200px"
                                  }, null, 8, ["src"]),
                                  createVNode(VCardTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.username), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VCardSubtitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("User ID: " + toDisplayString(item.id), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VCardText, null, {
                                    default: withCtx(() => [
                                      createTextVNode("User Type: " + toDisplayString(item.user_type), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VCardText, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Room: " + toDisplayString(item.group_name), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VCardActions, null, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        color: "green",
                                        text: "",
                                        onClick: ($event) => $options.bypassItem(item.id)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" เข้าสู่ระบบ ")
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"]),
                                      createVNode(VBtn, {
                                        color: "primary",
                                        text: "",
                                        onClick: ($event) => $options.editItem(item)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" แก้ไข ")
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"]),
                                      createVNode(VBtn, {
                                        color: "error",
                                        text: "",
                                        onClick: ($event) => $options.deleteItem(item)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" ลบ ")
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
                  (openBlock(true), createBlock(Fragment, null, renderList($options.paginatedDesserts, (item, index) => {
                    return openBlock(), createBlock(VCol, {
                      key: item.id,
                      cols: "12",
                      sm: "6",
                      md: "3"
                    }, {
                      default: withCtx(() => [
                        createVNode(VContainer, { class: "md-2" }, {
                          default: withCtx(() => [
                            createVNode(VCard, {
                              class: "hover-effect mx-auto",
                              outlined: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(VImg, {
                                  src: `http://localhost:7000/uploads/profiles/${item.profile}`,
                                  height: "200px"
                                }, null, 8, ["src"]),
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.username), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VCardSubtitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("User ID: " + toDisplayString(item.id), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VCardText, null, {
                                  default: withCtx(() => [
                                    createTextVNode("User Type: " + toDisplayString(item.user_type), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VCardText, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Room: " + toDisplayString(item.group_name), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VCardActions, null, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      color: "green",
                                      text: "",
                                      onClick: ($event) => $options.bypassItem(item.id)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" เข้าสู่ระบบ ")
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"]),
                                    createVNode(VBtn, {
                                      color: "primary",
                                      text: "",
                                      onClick: ($event) => $options.editItem(item)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" แก้ไข ")
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"]),
                                    createVNode(VBtn, {
                                      color: "error",
                                      text: "",
                                      onClick: ($event) => $options.deleteItem(item)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" ลบ ")
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
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.isAdmin) {
          _push2(ssrRenderComponent(VPagination, {
            modelValue: _ctx.page,
            "onUpdate:modelValue": ($event) => _ctx.page = $event,
            length: $options.totalPages,
            "total-visible": 7,
            class: "hover-effect mt-4"
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(ssrRenderComponent(VDialog, {
          modelValue: _ctx.dialog,
          "onUpdate:modelValue": ($event) => _ctx.dialog = $event,
          "max-width": "500px"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCard, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCardTitle, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<span class="text-h5" data-v-6ee964d6${_scopeId4}>${ssrInterpolate($options.formTitle)}</span>`);
                        } else {
                          return [
                            createVNode("span", { class: "text-h5" }, toDisplayString($options.formTitle), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCardText, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VContainer, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VRow, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(ssrRenderComponent(VTextField, {
                                              modelValue: _ctx.editedItem.id,
                                              "onUpdate:modelValue": ($event) => _ctx.editedItem.id = $event,
                                              label: "UserID",
                                              disabled: ""
                                            }, null, _parent8, _scopeId7));
                                          } else {
                                            return [
                                              createVNode(VTextField, {
                                                modelValue: _ctx.editedItem.id,
                                                "onUpdate:modelValue": ($event) => _ctx.editedItem.id = $event,
                                                label: "UserID",
                                                disabled: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(ssrRenderComponent(VTextField, {
                                              modelValue: _ctx.editedItem.username,
                                              "onUpdate:modelValue": ($event) => _ctx.editedItem.username = $event,
                                              label: "Username"
                                            }, null, _parent8, _scopeId7));
                                          } else {
                                            return [
                                              createVNode(VTextField, {
                                                modelValue: _ctx.editedItem.username,
                                                "onUpdate:modelValue": ($event) => _ctx.editedItem.username = $event,
                                                label: "Username"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(ssrRenderComponent(VTextField, {
                                              modelValue: _ctx.editedItem.NewPassword,
                                              "onUpdate:modelValue": ($event) => _ctx.editedItem.NewPassword = $event,
                                              label: "Password",
                                              type: "password"
                                            }, null, _parent8, _scopeId7));
                                          } else {
                                            return [
                                              createVNode(VTextField, {
                                                modelValue: _ctx.editedItem.NewPassword,
                                                "onUpdate:modelValue": ($event) => _ctx.editedItem.NewPassword = $event,
                                                label: "Password",
                                                type: "password"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(ssrRenderComponent(VSelect, {
                                              modelValue: _ctx.editedItem.user_type,
                                              "onUpdate:modelValue": ($event) => _ctx.editedItem.user_type = $event,
                                              items: _ctx.userTypes,
                                              label: "User Type",
                                              required: ""
                                            }, null, _parent8, _scopeId7));
                                          } else {
                                            return [
                                              createVNode(VSelect, {
                                                modelValue: _ctx.editedItem.user_type,
                                                "onUpdate:modelValue": ($event) => _ctx.editedItem.user_type = $event,
                                                items: _ctx.userTypes,
                                                label: "User Type",
                                                required: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(ssrRenderComponent(VSelect, {
                                              modelValue: _ctx.editedItem.group_name,
                                              "onUpdate:modelValue": ($event) => _ctx.editedItem.group_name = $event,
                                              items: _ctx.roomTypes,
                                              label: "ห้อง",
                                              required: ""
                                            }, null, _parent8, _scopeId7));
                                          } else {
                                            return [
                                              createVNode(VSelect, {
                                                modelValue: _ctx.editedItem.group_name,
                                                "onUpdate:modelValue": ($event) => _ctx.editedItem.group_name = $event,
                                                items: _ctx.roomTypes,
                                                label: "ห้อง",
                                                required: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(ssrRenderComponent(VFileInput, {
                                              modelValue: _ctx.singleFile,
                                              "onUpdate:modelValue": ($event) => _ctx.singleFile = $event,
                                              label: "อัปโหลดรูป",
                                              accept: "image/*",
                                              onChange: $options.previewSingleFile
                                            }, null, _parent8, _scopeId7));
                                          } else {
                                            return [
                                              createVNode(VFileInput, {
                                                modelValue: _ctx.singleFile,
                                                "onUpdate:modelValue": ($event) => _ctx.singleFile = $event,
                                                label: "อัปโหลดรูป",
                                                accept: "image/*",
                                                onChange: $options.previewSingleFile
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: _ctx.editedItem.id,
                                              "onUpdate:modelValue": ($event) => _ctx.editedItem.id = $event,
                                              label: "UserID",
                                              disabled: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: _ctx.editedItem.username,
                                              "onUpdate:modelValue": ($event) => _ctx.editedItem.username = $event,
                                              label: "Username"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: _ctx.editedItem.NewPassword,
                                              "onUpdate:modelValue": ($event) => _ctx.editedItem.NewPassword = $event,
                                              label: "Password",
                                              type: "password"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VSelect, {
                                              modelValue: _ctx.editedItem.user_type,
                                              "onUpdate:modelValue": ($event) => _ctx.editedItem.user_type = $event,
                                              items: _ctx.userTypes,
                                              label: "User Type",
                                              required: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VSelect, {
                                              modelValue: _ctx.editedItem.group_name,
                                              "onUpdate:modelValue": ($event) => _ctx.editedItem.group_name = $event,
                                              items: _ctx.roomTypes,
                                              label: "ห้อง",
                                              required: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VFileInput, {
                                              modelValue: _ctx.singleFile,
                                              "onUpdate:modelValue": ($event) => _ctx.singleFile = $event,
                                              label: "อัปโหลดรูป",
                                              accept: "image/*",
                                              onChange: $options.previewSingleFile
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                if (_ctx.singleFilePreview) {
                                  _push6(ssrRenderComponent(VImg, {
                                    src: _ctx.singleFilePreview,
                                    "max-width": "100",
                                    "max-height": "100",
                                    class: "my-4"
                                  }, null, _parent6, _scopeId5));
                                } else {
                                  _push6(`<!---->`);
                                }
                              } else {
                                return [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: _ctx.editedItem.id,
                                            "onUpdate:modelValue": ($event) => _ctx.editedItem.id = $event,
                                            label: "UserID",
                                            disabled: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: _ctx.editedItem.username,
                                            "onUpdate:modelValue": ($event) => _ctx.editedItem.username = $event,
                                            label: "Username"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: _ctx.editedItem.NewPassword,
                                            "onUpdate:modelValue": ($event) => _ctx.editedItem.NewPassword = $event,
                                            label: "Password",
                                            type: "password"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: _ctx.editedItem.user_type,
                                            "onUpdate:modelValue": ($event) => _ctx.editedItem.user_type = $event,
                                            items: _ctx.userTypes,
                                            label: "User Type",
                                            required: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: _ctx.editedItem.group_name,
                                            "onUpdate:modelValue": ($event) => _ctx.editedItem.group_name = $event,
                                            items: _ctx.roomTypes,
                                            label: "ห้อง",
                                            required: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VFileInput, {
                                            modelValue: _ctx.singleFile,
                                            "onUpdate:modelValue": ($event) => _ctx.singleFile = $event,
                                            label: "อัปโหลดรูป",
                                            accept: "image/*",
                                            onChange: $options.previewSingleFile
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  _ctx.singleFilePreview ? (openBlock(), createBlock(VImg, {
                                    key: 0,
                                    src: _ctx.singleFilePreview,
                                    "max-width": "100",
                                    "max-height": "100",
                                    class: "my-4"
                                  }, null, 8, ["src"])) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VContainer, null, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: _ctx.editedItem.id,
                                          "onUpdate:modelValue": ($event) => _ctx.editedItem.id = $event,
                                          label: "UserID",
                                          disabled: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: _ctx.editedItem.username,
                                          "onUpdate:modelValue": ($event) => _ctx.editedItem.username = $event,
                                          label: "Username"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: _ctx.editedItem.NewPassword,
                                          "onUpdate:modelValue": ($event) => _ctx.editedItem.NewPassword = $event,
                                          label: "Password",
                                          type: "password"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: _ctx.editedItem.user_type,
                                          "onUpdate:modelValue": ($event) => _ctx.editedItem.user_type = $event,
                                          items: _ctx.userTypes,
                                          label: "User Type",
                                          required: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: _ctx.editedItem.group_name,
                                          "onUpdate:modelValue": ($event) => _ctx.editedItem.group_name = $event,
                                          items: _ctx.roomTypes,
                                          label: "ห้อง",
                                          required: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VFileInput, {
                                          modelValue: _ctx.singleFile,
                                          "onUpdate:modelValue": ($event) => _ctx.singleFile = $event,
                                          label: "อัปโหลดรูป",
                                          accept: "image/*",
                                          onChange: $options.previewSingleFile
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                _ctx.singleFilePreview ? (openBlock(), createBlock(VImg, {
                                  key: 0,
                                  src: _ctx.singleFilePreview,
                                  "max-width": "100",
                                  "max-height": "100",
                                  class: "my-4"
                                }, null, 8, ["src"])) : createCommentVNode("", true)
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCardActions, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VBtn, {
                            text: "",
                            onClick: $options.close
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`ยกเลิก`);
                              } else {
                                return [
                                  createTextVNode("ยกเลิก")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VBtn, {
                            text: "",
                            color: "primary",
                            onClick: $options.save
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`บันทึก`);
                              } else {
                                return [
                                  createTextVNode("บันทึก")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VBtn, {
                              text: "",
                              onClick: $options.close
                            }, {
                              default: withCtx(() => [
                                createTextVNode("ยกเลิก")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(VBtn, {
                              text: "",
                              color: "primary",
                              onClick: $options.save
                            }, {
                              default: withCtx(() => [
                                createTextVNode("บันทึก")
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
                      createVNode(VCardTitle, null, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-h5" }, toDisplayString($options.formTitle), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VContainer, null, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: _ctx.editedItem.id,
                                        "onUpdate:modelValue": ($event) => _ctx.editedItem.id = $event,
                                        label: "UserID",
                                        disabled: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: _ctx.editedItem.username,
                                        "onUpdate:modelValue": ($event) => _ctx.editedItem.username = $event,
                                        label: "Username"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: _ctx.editedItem.NewPassword,
                                        "onUpdate:modelValue": ($event) => _ctx.editedItem.NewPassword = $event,
                                        label: "Password",
                                        type: "password"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: _ctx.editedItem.user_type,
                                        "onUpdate:modelValue": ($event) => _ctx.editedItem.user_type = $event,
                                        items: _ctx.userTypes,
                                        label: "User Type",
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: _ctx.editedItem.group_name,
                                        "onUpdate:modelValue": ($event) => _ctx.editedItem.group_name = $event,
                                        items: _ctx.roomTypes,
                                        label: "ห้อง",
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VFileInput, {
                                        modelValue: _ctx.singleFile,
                                        "onUpdate:modelValue": ($event) => _ctx.singleFile = $event,
                                        label: "อัปโหลดรูป",
                                        accept: "image/*",
                                        onChange: $options.previewSingleFile
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              _ctx.singleFilePreview ? (openBlock(), createBlock(VImg, {
                                key: 0,
                                src: _ctx.singleFilePreview,
                                "max-width": "100",
                                "max-height": "100",
                                class: "my-4"
                              }, null, 8, ["src"])) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCardActions, null, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            text: "",
                            onClick: $options.close
                          }, {
                            default: withCtx(() => [
                              createTextVNode("ยกเลิก")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            text: "",
                            color: "primary",
                            onClick: $options.save
                          }, {
                            default: withCtx(() => [
                              createTextVNode("บันทึก")
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
            } else {
              return [
                createVNode(VCard, null, {
                  default: withCtx(() => [
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-h5" }, toDisplayString($options.formTitle), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(VContainer, null, {
                          default: withCtx(() => [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: _ctx.editedItem.id,
                                      "onUpdate:modelValue": ($event) => _ctx.editedItem.id = $event,
                                      label: "UserID",
                                      disabled: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: _ctx.editedItem.username,
                                      "onUpdate:modelValue": ($event) => _ctx.editedItem.username = $event,
                                      label: "Username"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: _ctx.editedItem.NewPassword,
                                      "onUpdate:modelValue": ($event) => _ctx.editedItem.NewPassword = $event,
                                      label: "Password",
                                      type: "password"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      modelValue: _ctx.editedItem.user_type,
                                      "onUpdate:modelValue": ($event) => _ctx.editedItem.user_type = $event,
                                      items: _ctx.userTypes,
                                      label: "User Type",
                                      required: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      modelValue: _ctx.editedItem.group_name,
                                      "onUpdate:modelValue": ($event) => _ctx.editedItem.group_name = $event,
                                      items: _ctx.roomTypes,
                                      label: "ห้อง",
                                      required: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VFileInput, {
                                      modelValue: _ctx.singleFile,
                                      "onUpdate:modelValue": ($event) => _ctx.singleFile = $event,
                                      label: "อัปโหลดรูป",
                                      accept: "image/*",
                                      onChange: $options.previewSingleFile
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            _ctx.singleFilePreview ? (openBlock(), createBlock(VImg, {
                              key: 0,
                              src: _ctx.singleFilePreview,
                              "max-width": "100",
                              "max-height": "100",
                              class: "my-4"
                            }, null, 8, ["src"])) : createCommentVNode("", true)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, null, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          text: "",
                          onClick: $options.close
                        }, {
                          default: withCtx(() => [
                            createTextVNode("ยกเลิก")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VBtn, {
                          text: "",
                          color: "primary",
                          onClick: $options.save
                        }, {
                          default: withCtx(() => [
                            createTextVNode("บันทึก")
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
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VDialog, {
          modelValue: _ctx.dialogDelete,
          "onUpdate:modelValue": ($event) => _ctx.dialogDelete = $event,
          "max-width": "500px"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCard, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCardTitle, { class: "text-h5" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`ยืนยันการลบ?`);
                        } else {
                          return [
                            createTextVNode("ยืนยันการลบ?")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCardActions, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VBtn, {
                            text: "",
                            onClick: $options.closeDelete
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`ยกเลิก`);
                              } else {
                                return [
                                  createTextVNode("ยกเลิก")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VBtn, {
                            text: "",
                            color: "error",
                            onClick: $options.deleteItemConfirm
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`ตกลง`);
                              } else {
                                return [
                                  createTextVNode("ตกลง")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VBtn, {
                              text: "",
                              onClick: $options.closeDelete
                            }, {
                              default: withCtx(() => [
                                createTextVNode("ยกเลิก")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(VBtn, {
                              text: "",
                              color: "error",
                              onClick: $options.deleteItemConfirm
                            }, {
                              default: withCtx(() => [
                                createTextVNode("ตกลง")
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
                      createVNode(VCardTitle, { class: "text-h5" }, {
                        default: withCtx(() => [
                          createTextVNode("ยืนยันการลบ?")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardActions, null, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            text: "",
                            onClick: $options.closeDelete
                          }, {
                            default: withCtx(() => [
                              createTextVNode("ยกเลิก")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            text: "",
                            color: "error",
                            onClick: $options.deleteItemConfirm
                          }, {
                            default: withCtx(() => [
                              createTextVNode("ตกลง")
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
            } else {
              return [
                createVNode(VCard, null, {
                  default: withCtx(() => [
                    createVNode(VCardTitle, { class: "text-h5" }, {
                      default: withCtx(() => [
                        createTextVNode("ยืนยันการลบ?")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, null, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          text: "",
                          onClick: $options.closeDelete
                        }, {
                          default: withCtx(() => [
                            createTextVNode("ยกเลิก")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VBtn, {
                          text: "",
                          color: "error",
                          onClick: $options.deleteItemConfirm
                        }, {
                          default: withCtx(() => [
                            createTextVNode("ตกลง")
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
        }, _parent2, _scopeId));
      } else {
        return [
          _ctx.isAdmin ? (openBlock(), createBlock(VCardTitle, {
            key: 0,
            class: "d-flex align-center pe-2 title-bar"
          }, {
            default: withCtx(() => [
              createVNode(VIcon, {
                icon: "mdi-account-edit",
                color: "ffffff"
              }),
              createVNode("span", { class: "ml-2 text-h6" }, "จัดการผู้ใช้งาน"),
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
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              _ctx.isAdmin ? (openBlock(), createBlock(VBtn, {
                key: 0,
                color: "primary",
                class: "ml-2 action-btn",
                onClick: $options.newItem
              }, {
                default: withCtx(() => [
                  createTextVNode("เพิ่มผู้ใช้งาน")
                ]),
                _: 1
              }, 8, ["onClick"])) : createCommentVNode("", true),
              createVNode(VBtn, {
                color: "primary",
                class: "ml-2 action-btn",
                onClick: $options.openExcelFileDialog
              }, {
                default: withCtx(() => [
                  createTextVNode(" นำเข้าข้อมูลจาก Excel ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(VFileInput, {
                ref: "excelFileInput",
                modelValue: _ctx.excelFile,
                "onUpdate:modelValue": ($event) => _ctx.excelFile = $event,
                accept: ".xlsx,.xls",
                label: "เลือกไฟล์ Excel",
                style: { "display": "none" },
                onChange: $options.handleFileUpload
              }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
            ]),
            _: 1
          })) : createCommentVNode("", true),
          createVNode(VDivider),
          _ctx.showAlert ? (openBlock(), createBlock(VAlert, {
            key: 1,
            type: "error",
            style: { "z-index": "1000" },
            closable: "",
            title: "ข้อผิดพลาด",
            text: "",
            variant: "outlined",
            "onClick:close": $options.closeAlert
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.alertMessage), 1)
            ]),
            _: 1
          }, 8, ["onClick:close"])) : createCommentVNode("", true),
          _ctx.showSuccess ? (openBlock(), createBlock(VAlert, {
            key: 2,
            type: "success",
            style: { "z-index": "1000" },
            closable: "",
            title: "สำเร็จ",
            text: "",
            variant: "outlined",
            "onClick:close": $options.closeAlert
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.successMessage), 1)
            ]),
            _: 1
          }, 8, ["onClick:close"])) : createCommentVNode("", true),
          _ctx.isAdmin ? (openBlock(), createBlock(VRow, {
            key: 3,
            class: "mt-5"
          }, {
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList($options.paginatedDesserts, (item, index) => {
                return openBlock(), createBlock(VCol, {
                  key: item.id,
                  cols: "12",
                  sm: "6",
                  md: "3"
                }, {
                  default: withCtx(() => [
                    createVNode(VContainer, { class: "md-2" }, {
                      default: withCtx(() => [
                        createVNode(VCard, {
                          class: "hover-effect mx-auto",
                          outlined: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(VImg, {
                              src: `http://localhost:7000/uploads/profiles/${item.profile}`,
                              height: "200px"
                            }, null, 8, ["src"]),
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.username), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VCardSubtitle, null, {
                              default: withCtx(() => [
                                createTextVNode("User ID: " + toDisplayString(item.id), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createTextVNode("User Type: " + toDisplayString(item.user_type), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createTextVNode("Room: " + toDisplayString(item.group_name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VCardActions, null, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  color: "green",
                                  text: "",
                                  onClick: ($event) => $options.bypassItem(item.id)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" เข้าสู่ระบบ ")
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"]),
                                createVNode(VBtn, {
                                  color: "primary",
                                  text: "",
                                  onClick: ($event) => $options.editItem(item)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" แก้ไข ")
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"]),
                                createVNode(VBtn, {
                                  color: "error",
                                  text: "",
                                  onClick: ($event) => $options.deleteItem(item)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" ลบ ")
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
                    }, 1024)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ]),
            _: 1
          })) : createCommentVNode("", true),
          _ctx.isAdmin ? (openBlock(), createBlock(VPagination, {
            key: 4,
            modelValue: _ctx.page,
            "onUpdate:modelValue": ($event) => _ctx.page = $event,
            length: $options.totalPages,
            "total-visible": 7,
            class: "hover-effect mt-4"
          }, null, 8, ["modelValue", "onUpdate:modelValue", "length"])) : createCommentVNode("", true),
          createVNode(VDialog, {
            modelValue: _ctx.dialog,
            "onUpdate:modelValue": ($event) => _ctx.dialog = $event,
            "max-width": "500px"
          }, {
            default: withCtx(() => [
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-h5" }, toDisplayString($options.formTitle), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VContainer, null, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: _ctx.editedItem.id,
                                    "onUpdate:modelValue": ($event) => _ctx.editedItem.id = $event,
                                    label: "UserID",
                                    disabled: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: _ctx.editedItem.username,
                                    "onUpdate:modelValue": ($event) => _ctx.editedItem.username = $event,
                                    label: "Username"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: _ctx.editedItem.NewPassword,
                                    "onUpdate:modelValue": ($event) => _ctx.editedItem.NewPassword = $event,
                                    label: "Password",
                                    type: "password"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    modelValue: _ctx.editedItem.user_type,
                                    "onUpdate:modelValue": ($event) => _ctx.editedItem.user_type = $event,
                                    items: _ctx.userTypes,
                                    label: "User Type",
                                    required: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    modelValue: _ctx.editedItem.group_name,
                                    "onUpdate:modelValue": ($event) => _ctx.editedItem.group_name = $event,
                                    items: _ctx.roomTypes,
                                    label: "ห้อง",
                                    required: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VFileInput, {
                                    modelValue: _ctx.singleFile,
                                    "onUpdate:modelValue": ($event) => _ctx.singleFile = $event,
                                    label: "อัปโหลดรูป",
                                    accept: "image/*",
                                    onChange: $options.previewSingleFile
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          _ctx.singleFilePreview ? (openBlock(), createBlock(VImg, {
                            key: 0,
                            src: _ctx.singleFilePreview,
                            "max-width": "100",
                            "max-height": "100",
                            class: "my-4"
                          }, null, 8, ["src"])) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        text: "",
                        onClick: $options.close
                      }, {
                        default: withCtx(() => [
                          createTextVNode("ยกเลิก")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VBtn, {
                        text: "",
                        color: "primary",
                        onClick: $options.save
                      }, {
                        default: withCtx(() => [
                          createTextVNode("บันทึก")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue", "onUpdate:modelValue"]),
          createVNode(VDialog, {
            modelValue: _ctx.dialogDelete,
            "onUpdate:modelValue": ($event) => _ctx.dialogDelete = $event,
            "max-width": "500px"
          }, {
            default: withCtx(() => [
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "text-h5" }, {
                    default: withCtx(() => [
                      createTextVNode("ยืนยันการลบ?")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        text: "",
                        onClick: $options.closeDelete
                      }, {
                        default: withCtx(() => [
                          createTextVNode("ยกเลิก")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VBtn, {
                        text: "",
                        color: "error",
                        onClick: $options.deleteItemConfirm
                      }, {
                        default: withCtx(() => [
                          createTextVNode("ตกลง")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue", "onUpdate:modelValue"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/UsersComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const UsersComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-6ee964d6"]]);
const _sfc_main = {
  name: "NavigationDrawer",
  components: {
    HeaderComponent: __nuxt_component_0,
    HomeComponent,
    UsersComponent
  },
  data() {
    return {
      drawer: true,
      rail: true,
      dynamicComponent: "HomeComponent",
      // คอมโพเนนต์เริ่มต้น
      username: "",
      isMobile: false
    };
  },
  methods: {
    changeComponent(componentName) {
      this.dynamicComponent = componentName;
      localStorage.setItem("lastComponentadmin", componentName);
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
      if (result.user.user_type == "admin") {
        this.user = result.user;
      } else {
        this.$router.push("/");
      }
    } else {
      this.$router.push("/");
    }
    this.fetchUsersData();
    this.updateIsMobile();
    const lastComponent = localStorage.getItem("lastComponentadmin");
    if (lastComponent) {
      this.dynamicComponent = lastComponent;
    }
    (void 0).addEventListener("resize", this.updateIsMobile);
  },
  beforeDestroy() {
    (void 0).removeEventListener("resize", this.updateIsMobile);
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
                onClick: ($event) => $data.rail = false
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VListItem, { class: "profile-container" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          if (!$data.rail || $data.isMobile) {
                            _push5(ssrRenderComponent(VListItem, {
                              title: "Face Detection",
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
                              title: "Face Detection",
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
                            title: "",
                            value: "หน้าหลัก",
                            onClick: ($event) => $options.changeComponent("HomeComponent"),
                            class: "custom-title-body"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                if (!$data.rail) {
                                  _push6(`<p data-v-b6b3c44e${_scopeId5}>หน้าหลัก</p>`);
                                } else {
                                  _push6(`<!---->`);
                                }
                              } else {
                                return [
                                  !$data.rail ? (openBlock(), createBlock("p", { key: 0 }, "หน้าหลัก")) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          if (!$data.rail) {
                            _push5(ssrRenderComponent(VDivider, null, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`จัดการผู้ใช้`);
                                } else {
                                  return [
                                    createTextVNode("จัดการผู้ใช้")
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent5, _scopeId4));
                          } else {
                            _push5(ssrRenderComponent(VDivider, null, null, _parent5, _scopeId4));
                          }
                          _push5(ssrRenderComponent(VListItem, {
                            "prepend-icon": "mdi-account",
                            title: "",
                            value: "จัดการผู้ใช้",
                            onClick: ($event) => $options.changeComponent("UsersComponent"),
                            class: "custom-title-body"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                if (!$data.rail) {
                                  _push6(`<p data-v-b6b3c44e${_scopeId5}>จัดการผู้ใช้</p>`);
                                } else {
                                  _push6(`<!---->`);
                                }
                              } else {
                                return [
                                  !$data.rail ? (openBlock(), createBlock("p", { key: 0 }, "จัดการผู้ใช้")) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VListItem, {
                              "prepend-icon": "mdi-home-city",
                              title: "",
                              value: "หน้าหลัก",
                              onClick: ($event) => $options.changeComponent("HomeComponent"),
                              class: "custom-title-body"
                            }, {
                              default: withCtx(() => [
                                !$data.rail ? (openBlock(), createBlock("p", { key: 0 }, "หน้าหลัก")) : createCommentVNode("", true)
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            !$data.rail ? (openBlock(), createBlock(VDivider, { key: 0 }, {
                              default: withCtx(() => [
                                createTextVNode("จัดการผู้ใช้")
                              ]),
                              _: 1
                            })) : (openBlock(), createBlock(VDivider, { key: 1 })),
                            createVNode(VListItem, {
                              "prepend-icon": "mdi-account",
                              title: "",
                              value: "จัดการผู้ใช้",
                              onClick: ($event) => $options.changeComponent("UsersComponent"),
                              class: "custom-title-body"
                            }, {
                              default: withCtx(() => [
                                !$data.rail ? (openBlock(), createBlock("p", { key: 0 }, "จัดการผู้ใช้")) : createCommentVNode("", true)
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
                            title: "Face Detection",
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
                            title: "",
                            value: "หน้าหลัก",
                            onClick: ($event) => $options.changeComponent("HomeComponent"),
                            class: "custom-title-body"
                          }, {
                            default: withCtx(() => [
                              !$data.rail ? (openBlock(), createBlock("p", { key: 0 }, "หน้าหลัก")) : createCommentVNode("", true)
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          !$data.rail ? (openBlock(), createBlock(VDivider, { key: 0 }, {
                            default: withCtx(() => [
                              createTextVNode("จัดการผู้ใช้")
                            ]),
                            _: 1
                          })) : (openBlock(), createBlock(VDivider, { key: 1 })),
                          createVNode(VListItem, {
                            "prepend-icon": "mdi-account",
                            title: "",
                            value: "จัดการผู้ใช้",
                            onClick: ($event) => $options.changeComponent("UsersComponent"),
                            class: "custom-title-body"
                          }, {
                            default: withCtx(() => [
                              !$data.rail ? (openBlock(), createBlock("p", { key: 0 }, "จัดการผู้ใช้")) : createCommentVNode("", true)
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
                  onClick: ($event) => $data.rail = false
                }, {
                  default: withCtx(() => [
                    createVNode(VListItem, { class: "profile-container" }, {
                      default: withCtx(() => [
                        !$data.rail || $data.isMobile ? (openBlock(), createBlock(VListItem, {
                          key: 0,
                          title: "Face Detection",
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
                          title: "",
                          value: "หน้าหลัก",
                          onClick: ($event) => $options.changeComponent("HomeComponent"),
                          class: "custom-title-body"
                        }, {
                          default: withCtx(() => [
                            !$data.rail ? (openBlock(), createBlock("p", { key: 0 }, "หน้าหลัก")) : createCommentVNode("", true)
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        !$data.rail ? (openBlock(), createBlock(VDivider, { key: 0 }, {
                          default: withCtx(() => [
                            createTextVNode("จัดการผู้ใช้")
                          ]),
                          _: 1
                        })) : (openBlock(), createBlock(VDivider, { key: 1 })),
                        createVNode(VListItem, {
                          "prepend-icon": "mdi-account",
                          title: "",
                          value: "จัดการผู้ใช้",
                          onClick: ($event) => $options.changeComponent("UsersComponent"),
                          class: "custom-title-body"
                        }, {
                          default: withCtx(() => [
                            !$data.rail ? (openBlock(), createBlock("p", { key: 0 }, "จัดการผู้ใช้")) : createCommentVNode("", true)
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
                onClick: ($event) => $data.rail = false
              }, {
                default: withCtx(() => [
                  createVNode(VListItem, { class: "profile-container" }, {
                    default: withCtx(() => [
                      !$data.rail || $data.isMobile ? (openBlock(), createBlock(VListItem, {
                        key: 0,
                        title: "Face Detection",
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
                        title: "",
                        value: "หน้าหลัก",
                        onClick: ($event) => $options.changeComponent("HomeComponent"),
                        class: "custom-title-body"
                      }, {
                        default: withCtx(() => [
                          !$data.rail ? (openBlock(), createBlock("p", { key: 0 }, "หน้าหลัก")) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      !$data.rail ? (openBlock(), createBlock(VDivider, { key: 0 }, {
                        default: withCtx(() => [
                          createTextVNode("จัดการผู้ใช้")
                        ]),
                        _: 1
                      })) : (openBlock(), createBlock(VDivider, { key: 1 })),
                      createVNode(VListItem, {
                        "prepend-icon": "mdi-account",
                        title: "",
                        value: "จัดการผู้ใช้",
                        onClick: ($event) => $options.changeComponent("UsersComponent"),
                        class: "custom-title-body"
                      }, {
                        default: withCtx(() => [
                          !$data.rail ? (openBlock(), createBlock("p", { key: 0 }, "จัดการผู้ใช้")) : createCommentVNode("", true)
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navigation/NDAdmin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const NDAdmin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b6b3c44e"]]);
export {
  NDAdmin as N
};
//# sourceMappingURL=NDAdmin-C5RAPb5i.js.map
