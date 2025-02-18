import { _ as __nuxt_component_1 } from "./FooterComponent-DyBxY8i_.js";
import { ref, watch, mergeProps, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _imports_0 } from "./NewLogo-BQlGcRu3.js";
import axios from "axios";
import { useRouter, useRoute } from "vue-router";
import { s as setInterval } from "./interval-gl53xdpR.js";
import { _ as _export_sfc } from "../server.mjs";
import { a as VDialog, V as VSpacer } from "./VDialog-CTYxqpGs.js";
import { d as VBtn } from "./VBtn-BQh1DFk2.js";
import { V as VCard, e as VCardActions } from "./lazy-C5DRqCjO.js";
import "hookable";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "radix3";
import "defu";
import "ufo";
import "./VOverlay-Bq6vi5Fa.js";
import "./forwardRefs-B2cVIy3B.js";
import "./createSimpleFunctional-34w8xNDu.js";
const _sfc_main$1 = {
  __name: "RegisterComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    useRoute();
    const username = ref("");
    const email = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const error = ref(null);
    const dialog = ref(false);
    const status = ref("กำลังโหลด...");
    const video = ref(null);
    const stream = ref(null);
    const intervalId = ref(null);
    const faceBoxes = ref([]);
    const imageBase64 = ref("");
    const startVideo = async () => {
      try {
        const mediaStream = await (void 0).mediaDevices.getUserMedia({ video: true });
        video.value.srcObject = mediaStream;
        stream.value = mediaStream;
        status.value = "กำลังตรวจจับใบหน้า...";
        intervalId.value = setInterval(detectFace, 2e3);
      } catch (err) {
        console.error("ไม่สามารถเข้าถึงกล้องได้:", err);
        status.value = "ไม่สามารถเข้าถึงกล้องได้";
      }
    };
    const closeDialog = () => {
      dialog.value = false;
      if (stream.value) {
        stream.value.getTracks().forEach((track) => track.stop());
        stream.value = null;
      }
      status.value = "กล้องถูกปิด";
      faceBoxes.value = [];
    };
    const detectFace = async () => {
      var _a;
      if (!video.value) return;
      const canvas = (void 0).createElement("canvas");
      const context = canvas.getContext("2d");
      const videoElement = video.value;
      canvas.width = videoElement.videoWidth;
      canvas.height = videoElement.videoHeight;
      context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
      imageBase64.value = canvas.toDataURL("image/jpeg").split(",")[1];
      try {
        const response = await axios.post("http://localhost:8000/detect_face", { image: imageBase64.value });
        if (response.data.status === "success") {
          const boundingBoxes = response.data.boundingBoxes;
          const videoDisplayWidth = videoElement.clientWidth;
          const videoDisplayHeight = videoElement.clientHeight;
          const scaleX = videoDisplayWidth / canvas.width;
          const scaleY = videoDisplayHeight / canvas.height;
          faceBoxes.value = boundingBoxes.map((box) => ({
            x: box.x * scaleX,
            y: box.y * scaleY,
            width: box.width * scaleX,
            height: box.height * scaleY
          }));
          status.value = "ตรวจพบใบหน้า กรุณากดลงทะเบียน";
        } else {
          faceBoxes.value = [];
          status.value = "ไม่พบใบหน้า";
        }
      } catch (err) {
        console.error("Error detecting face:", ((_a = err.response) == null ? void 0 : _a.data) || err);
        faceBoxes.value = [];
        status.value = "เกิดข้อผิดพลาด";
      }
    };
    const registerUser = async () => {
      try {
        const response = await axios.post("http://localhost:8000/register", {
          username: username.value,
          email: email.value,
          password: password.value,
          image: imageBase64.value
        });
        if (response.data.status === "success") {
          alert("สมัครสมาชิกสำเร็จ");
          closeDialog();
          router.push("/auth/login");
        } else {
          alert(response.data.message);
        }
      } catch (err) {
        alert("เกิดข้อผิดพลาดในการสมัคร");
      }
    };
    watch(dialog, (newValue) => {
      if (newValue) startVideo();
      else closeDialog();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-58785b15><div class="row text-center mt-5" data-v-58785b15><div class="col" data-v-58785b15><div class="p-2" data-v-58785b15><img style="${ssrRenderStyle({ "width": "350px", "border-radius": "100%" })}"${ssrRenderAttr("src", _imports_0)} alt="Logo" data-v-58785b15></div><h2 data-v-58785b15>สมัครสมาชิก</h2><p data-v-58785b15> หรือ <a href="/auth/login" class="" data-v-58785b15>ลงชื่อเข้าใช้</a></p></div></div><div class="row mt-5 justify-content-center" data-v-58785b15><div class="col-md-8 col-lg-6" data-v-58785b15><div class="card" data-v-58785b15><div class="card-body" data-v-58785b15>`);
      if (error.value) {
        _push(`<div class="error" data-v-58785b15>${ssrInterpolate(error.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form data-v-58785b15><div class="mb-3" data-v-58785b15><label for="inputUsername" class="form-label" data-v-58785b15>ชื่อผู้ใช้</label><input${ssrRenderAttr("value", username.value)} type="text" class="form-control" id="inputUsername" required data-v-58785b15></div><div class="mb-3" data-v-58785b15><label for="inputEmail" class="form-label" data-v-58785b15>อีเมล</label><input${ssrRenderAttr("value", email.value)} type="email" class="form-control" id="inputEmail" required data-v-58785b15></div><div class="mb-3" data-v-58785b15><label for="inputPassword" class="form-label" data-v-58785b15>รหัสผ่าน</label><input${ssrRenderAttr("value", password.value)} type="password" class="form-control" id="inputPassword" required data-v-58785b15></div><div class="mb-3" data-v-58785b15><label for="inputConfirmPassword" class="form-label" data-v-58785b15>ยืนยันรหัสผ่าน</label><input${ssrRenderAttr("value", confirmPassword.value)} type="password" class="form-control" id="inputConfirmPassword" required data-v-58785b15></div>`);
      _push(ssrRenderComponent(VDialog, {
        modelValue: dialog.value,
        "onUpdate:modelValue": ($event) => dialog.value = $event,
        "max-width": "80%",
        persistent: ""
      }, {
        activator: withCtx(({ props: activatorProps }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, mergeProps(activatorProps, {
              class: "w-100",
              color: "primary"
            }), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` สมัครสมาชิก `);
                } else {
                  return [
                    createTextVNode(" สมัครสมาชิก ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, mergeProps(activatorProps, {
                class: "w-100",
                color: "primary"
              }), {
                default: withCtx(() => [
                  createTextVNode(" สมัครสมาชิก ")
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, {
              "prepend-icon": "mdi-camera",
              title: "ตรวจสอบใบหน้า"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="" data-v-58785b15${_scopeId2}><video autoplay muted playsinline data-v-58785b15${_scopeId2}></video><canvas style="${ssrRenderStyle({ "display": "none" })}" data-v-58785b15${_scopeId2}></canvas><!--[-->`);
                  ssrRenderList(faceBoxes.value, (box, index) => {
                    _push3(`<div class="face-box" style="${ssrRenderStyle({
                      position: "absolute",
                      border: "2px solid red",
                      top: `${box.y}px`,
                      left: `${box.x}px`,
                      width: `${box.width}px`,
                      height: `${box.height}px`,
                      pointerEvents: "none"
                    })}" data-v-58785b15${_scopeId2}></div>`);
                  });
                  _push3(`<!--]--><p data-v-58785b15${_scopeId2}>${ssrInterpolate(status.value)}</p></div>`);
                  _push3(ssrRenderComponent(VCardActions, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "green",
                          onClick: registerUser
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` ลงทะเบียน `);
                            } else {
                              return [
                                createTextVNode(" ลงทะเบียน ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "red",
                          onClick: closeDialog
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` ปิด `);
                            } else {
                              return [
                                createTextVNode(" ปิด ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            color: "green",
                            onClick: registerUser
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" ลงทะเบียน ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            color: "red",
                            onClick: closeDialog
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" ปิด ")
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
                    createVNode("div", { class: "" }, [
                      createVNode("video", {
                        ref_key: "video",
                        ref: video,
                        autoplay: "",
                        muted: "",
                        playsinline: ""
                      }, null, 512),
                      createVNode("canvas", {
                        ref: "canvas",
                        style: { "display": "none" }
                      }, null, 512),
                      (openBlock(true), createBlock(Fragment, null, renderList(faceBoxes.value, (box, index) => {
                        return openBlock(), createBlock("div", {
                          class: "face-box",
                          key: index,
                          style: {
                            position: "absolute",
                            border: "2px solid red",
                            top: `${box.y}px`,
                            left: `${box.x}px`,
                            width: `${box.width}px`,
                            height: `${box.height}px`,
                            pointerEvents: "none"
                          }
                        }, null, 4);
                      }), 128)),
                      createVNode("p", null, toDisplayString(status.value), 1)
                    ]),
                    createVNode(VCardActions, null, {
                      default: withCtx(() => [
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          color: "green",
                          onClick: registerUser
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" ลงทะเบียน ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          color: "red",
                          onClick: closeDialog
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" ปิด ")
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
              createVNode(VCard, {
                "prepend-icon": "mdi-camera",
                title: "ตรวจสอบใบหน้า"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "" }, [
                    createVNode("video", {
                      ref_key: "video",
                      ref: video,
                      autoplay: "",
                      muted: "",
                      playsinline: ""
                    }, null, 512),
                    createVNode("canvas", {
                      ref: "canvas",
                      style: { "display": "none" }
                    }, null, 512),
                    (openBlock(true), createBlock(Fragment, null, renderList(faceBoxes.value, (box, index) => {
                      return openBlock(), createBlock("div", {
                        class: "face-box",
                        key: index,
                        style: {
                          position: "absolute",
                          border: "2px solid red",
                          top: `${box.y}px`,
                          left: `${box.x}px`,
                          width: `${box.width}px`,
                          height: `${box.height}px`,
                          pointerEvents: "none"
                        }
                      }, null, 4);
                    }), 128)),
                    createVNode("p", null, toDisplayString(status.value), 1)
                  ]),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        color: "green",
                        onClick: registerUser
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" ลงทะเบียน ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        color: "red",
                        onClick: closeDialog
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" ปิด ")
                        ]),
                        _: 1
                      })
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
      _push(`</form><hr data-v-58785b15><div class="text-center" data-v-58785b15><a href="/" class="link-secondary" data-v-58785b15>กลับสู่หน้าหลัก</a></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/auth/RegisterComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const RegisterComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-58785b15"]]);
const _sfc_main = {
  components: {
    RegisterComponent,
    FooterComponent: __nuxt_component_1
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_RegisterComponent = resolveComponent("RegisterComponent");
  const _component_FooterComponent = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_RegisterComponent, null, null, _parent));
  _push(ssrRenderComponent(_component_FooterComponent, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const register = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  register as default
};
//# sourceMappingURL=register-D-dsb8Tw.js.map
