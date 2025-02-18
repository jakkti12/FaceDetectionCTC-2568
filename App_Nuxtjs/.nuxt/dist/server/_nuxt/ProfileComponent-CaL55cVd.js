import { ref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import axios from "axios";
import { _ as _export_sfc } from "../server.mjs";
import { V as VAlert } from "./VAlert-BV4vVzt_.js";
import { V as VApp } from "./VApp-Dy1gUNa7.js";
import { f as VAvatar, b as VImg } from "./lazy-C5DRqCjO.js";
import { d as VBtn } from "./VBtn-BQh1DFk2.js";
import { V as VMain } from "./VMain-B0aKjWRH.js";
const _sfc_main = {
  __name: "ProfileComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const Username = ref("");
    const Email = ref("");
    const error = ref(null);
    const success = ref(null);
    const profileImages = ref("");
    const fileInput = ref(null);
    const selectedFile = ref(null);
    const onFileSelected = (event) => {
      const file = event.target.files[0];
      if (file) {
        selectedFile.value = file;
        profileImages.value = URL.createObjectURL(file);
      }
    };
    const saveImage = async () => {
      try {
        if (!selectedFile.value) {
          error.value = "กรุณาเลือกไฟล์ก่อนอัปโหลด";
          return;
        }
        const token = localStorage.getItem("token");
        const formData = new FormData();
        formData.append("picture", selectedFile.value);
        const response = await axios.post(
          "http://localhost:7000/upload/upload-single",
          formData,
          {
            headers: {
              "authorization": `Bearer ${token}`,
              "Content-Type": "multipart/form-data"
            }
          }
        );
        if (response.data.ok === 1) {
          success.value = "เปลี่ยนโปรไฟล์สำเร็จ";
          profileImages.value = `http://localhost:7000/uploads/profiles/${response.data.file}`;
          URL.revokeObjectURL(profileImages.value);
          selectedFile.value = null;
          setTimeout(() => {
            success.value = null;
            error.value = null;
          }, 3e3);
        } else {
          error.value = "เกิดข้อผิดพลาดในการเปลี่ยนแปลงโปรไฟล์";
        }
      } catch (e) {
        error.value = "เกิดข้อผิดพลาด: " + e.message;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (error.value || success.value) {
        _push(ssrRenderComponent(VAlert, {
          type: error.value ? "error" : "success",
          closable: "",
          title: error.value ? "Login Failed" : "Login Successful",
          text: "",
          variant: "elevated",
          class: "alert-global"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(error.value || success.value)}`);
            } else {
              return [
                createTextVNode(toDisplayString(error.value || success.value), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(VApp, { class: "container" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="profile-section background-body" data-v-ac1d4374${_scopeId}><div class="text-center" data-v-ac1d4374${_scopeId}>`);
            _push2(ssrRenderComponent(VAvatar, {
              size: "120",
              class: "mb-4 white avatar"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VImg, {
                    src: profileImages.value,
                    alt: "Profile Picture",
                    cover: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`<input type="file" accept="image/*" style="${ssrRenderStyle({ "display": "none" })}" data-v-ac1d4374${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtn, {
                    icon: "mdi-pencil",
                    size: "small",
                    class: "avatar-edit-btn",
                    color: "white",
                    variant: "flat",
                    onClick: ($event) => _ctx.$refs.fileInput.click()
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VImg, {
                      src: profileImages.value,
                      alt: "Profile Picture",
                      cover: ""
                    }, null, 8, ["src"]),
                    createVNode("input", {
                      type: "file",
                      ref_key: "fileInput",
                      ref: fileInput,
                      accept: "image/*",
                      onChange: onFileSelected,
                      style: { "display": "none" }
                    }, null, 544),
                    createVNode(VBtn, {
                      icon: "mdi-pencil",
                      size: "small",
                      class: "avatar-edit-btn",
                      color: "white",
                      variant: "flat",
                      onClick: ($event) => _ctx.$refs.fileInput.click()
                    }, null, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div style="${ssrRenderStyle({ "color": "#ffffff" })}" data-v-ac1d4374${_scopeId}>Hello, ${ssrInterpolate(Username.value)}</div><div class="mb-5" style="${ssrRenderStyle({ "color": "#ffffff" })}" data-v-ac1d4374${_scopeId}>${ssrInterpolate(Email.value)}</div>`);
            _push2(ssrRenderComponent(VBtn, {
              class: "mb-5",
              color: "#C5D6BA",
              onClick: saveImage
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` บันทึกรูปภาพ `);
                } else {
                  return [
                    createTextVNode(" บันทึกรูปภาพ ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(VMain, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "profile-section background-body" }, [
                createVNode("div", { class: "text-center" }, [
                  createVNode(VAvatar, {
                    size: "120",
                    class: "mb-4 white avatar"
                  }, {
                    default: withCtx(() => [
                      createVNode(VImg, {
                        src: profileImages.value,
                        alt: "Profile Picture",
                        cover: ""
                      }, null, 8, ["src"]),
                      createVNode("input", {
                        type: "file",
                        ref_key: "fileInput",
                        ref: fileInput,
                        accept: "image/*",
                        onChange: onFileSelected,
                        style: { "display": "none" }
                      }, null, 544),
                      createVNode(VBtn, {
                        icon: "mdi-pencil",
                        size: "small",
                        class: "avatar-edit-btn",
                        color: "white",
                        variant: "flat",
                        onClick: ($event) => _ctx.$refs.fileInput.click()
                      }, null, 8, ["onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode("div", { style: { "color": "#ffffff" } }, "Hello, " + toDisplayString(Username.value), 1),
                  createVNode("div", {
                    class: "mb-5",
                    style: { "color": "#ffffff" }
                  }, toDisplayString(Email.value), 1),
                  createVNode(VBtn, {
                    class: "mb-5",
                    color: "#C5D6BA",
                    onClick: saveImage
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" บันทึกรูปภาพ ")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode(VMain)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/settings/ProfileComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProfileComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ac1d4374"]]);
export {
  ProfileComponent as P
};
//# sourceMappingURL=ProfileComponent-CaL55cVd.js.map
