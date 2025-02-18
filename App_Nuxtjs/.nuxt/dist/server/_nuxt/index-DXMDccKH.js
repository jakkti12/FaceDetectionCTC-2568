import { V as VRow, _ as __nuxt_component_0 } from "./HeaderComponent-B3CWU5QU.js";
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, toRefs, toRef, computed, shallowRef, reactive, watch, resolveComponent, withModifiers, resolveDynamicComponent } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderVNode } from "vue/server-renderer";
import { _ as _export_sfc, p as propsFactory, g as genericComponent, y as provideDefaults, x as convertToUnit } from "../server.mjs";
import { V as VCard, a as VCardTitle, d as VCardText } from "./lazy-C5DRqCjO.js";
import axios from "axios";
import { g as getUser, a as getTeacher, V as VAlert, b as getDayByweekId, c as getUserTeacher, d as getCheckLineWeekDay, p as percentageIineup, e as getWeeks } from "./VAlert-BV4vVzt_.js";
import { useRouter, useRoute } from "vue-router";
import { s as setInterval } from "./interval-gl53xdpR.js";
import { c as useRender, V as VIcon, d as VBtn, S as VProgressLinear } from "./VBtn-BQh1DFk2.js";
import { V as VSpacer, a as VDialog } from "./VDialog-CTYxqpGs.js";
import { V as VTextField } from "./VTextField-DYVwMBTO.js";
import { m as makeDataTableProps, a as makeDataTableGroupProps, b as makeFilterProps, c as createGroupBy, d as createSort, e as createHeaders, u as useDataTableItems, f as useFilter, p as provideSort, g as provideGroupBy, h as useSortedItems, i as useGroupedItems, j as provideSelection, k as provideExpanded, l as useOptions, V as VDataTableHeaders, n as VDataTableRows, o as VTable, q as VDataTableRow, r as VDataTable } from "./VDataTable-BcCSFXps.js";
import { m as makeVirtualProps, u as useVirtual, h as VVirtualScrollItem, V as VCol, c as VLayout, d as VNavigationDrawer, e as VListItem, f as VListItemTitle, g as VList } from "./VNavigationDrawer-CflmLKK7.js";
import { V as VDivider } from "./VDivider-0mIWdu7a.js";
import { P as ProfileComponent } from "./ProfileComponent-CaL55cVd.js";
import { V as VMain } from "./VMain-B0aKjWRH.js";
import "./NewLogo-BQlGcRu3.js";
import "./VOverlay-Bq6vi5Fa.js";
import "./forwardRefs-B2cVIy3B.js";
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
import "./createSimpleFunctional-34w8xNDu.js";
import "./VInput--HWDDWXB.js";
import "./VChip-Dwxv34Zv.js";
import "./ssrBoot-BtvJZs44.js";
import "./VApp-Dy1gUNa7.js";
const _sfc_main$5 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-22315650><div class="background-body" data-v-22315650><div class="container" data-v-22315650><div class="row" data-v-22315650><div class="col-md-5 text-center" data-v-22315650></div><div class="col-md-7" data-v-22315650><div class="header-homepage" data-v-22315650><div class="font-p-home" data-v-22315650><div class="box-shadow" data-v-22315650><p class="font-head" data-v-22315650> ระบบเช็คชื่อสแกนหน้า <br data-v-22315650> ประจําวัน </p><hr width="50%" data-v-22315650><p class="font-body" data-v-22315650> ให้บริการเช็คชื่อสแกนหน้าประจําวัน <br data-v-22315650> ที่ใช้งานได้ทุกที่ ทุกเวลา </p></div></div></div></div></div></div></div><div class="body-homepage container" data-v-22315650>`);
  _push(ssrRenderComponent(VCard, { class: "blog-container" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCardTitle, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="row text-center" data-v-22315650${_scopeId2}><div class="col-md-3 blog-item" data-v-22315650${_scopeId2}><h5 data-v-22315650${_scopeId2}><i class="fab fa-node-js me-2" data-v-22315650${_scopeId2}></i>Node.js</h5><p class="blog-content" data-v-22315650${_scopeId2}> Node.js เป็นแพลตฟอร์มที่ใช้สำหรับพัฒนาเซิร์ฟเวอร์และแอปพลิเคชันเว็บ โดยใช้ JavaScript มีประสิทธิภาพสูงและรองรับการทำงานแบบ Asynchronous เหมาะสำหรับระบบที่ต้องการประมวลผลแบบเรียลไทม์ เช่น Chat Applications และ API Services </p></div><div class="col-md-3 blog-item" data-v-22315650${_scopeId2}><h5 data-v-22315650${_scopeId2}><i class="fab fa-vuejs me-2" data-v-22315650${_scopeId2}></i>Nuxt.js</h5><p class="blog-content" data-v-22315650${_scopeId2}> Nuxt.js เป็นเฟรมเวิร์คที่ช่วยในการพัฒนาเว็บแอปพลิเคชันแบบ Vue.js โดยมีจุดเด่นคือการรองรับ Server-Side Rendering (SSR), SEO-friendly และโครงสร้างที่จัดการง่าย เหมาะสำหรับเว็บที่ต้องการโหลดเร็วและรองรับ SEO เช่น เว็บไซต์ E-commerce หรือ Blog </p></div><div class="col-md-3 blog-item" data-v-22315650${_scopeId2}><h5 data-v-22315650${_scopeId2}><i class="fab fa-python me-2" data-v-22315650${_scopeId2}></i>Python</h5><p class="blog-content" data-v-22315650${_scopeId2}> Python เป็นภาษาการเขียนโปรแกรมที่เรียบง่าย อ่านง่าย และทรงพลัง เหมาะสำหรับงานหลากหลาย เช่น Data Science, Machine Learning, Web Development และ Automation มี Frameworks เช่น Django และ Flask ที่ช่วยในการพัฒนาเว็บแอปพลิเคชันได้รวดเร็ว </p></div><div class="col-md-3 blog-item" data-v-22315650${_scopeId2}><h5 data-v-22315650${_scopeId2}><i class="fas fa-user-check me-2" data-v-22315650${_scopeId2}></i>Face Detection</h5><p class="blog-content" data-v-22315650${_scopeId2}> การตรวจจับใบหน้า (Face Detection) เป็นเทคโนโลยีที่ใช้ในระบบ AI สำหรับการระบุและตรวจจับตำแหน่งใบหน้าของบุคคลในภาพหรือวิดีโอ ไลบรารีที่นิยมใช้ เช่น OpenCV, Mediapipe และ Dlib โดยสามารถนำไปใช้งานในระบบความปลอดภัย การตรวจจับอารมณ์ หรือแอปพลิเคชันกล้อง </p></div></div>`);
            } else {
              return [
                createVNode("div", { class: "row text-center" }, [
                  createVNode("div", { class: "col-md-3 blog-item" }, [
                    createVNode("h5", null, [
                      createVNode("i", { class: "fab fa-node-js me-2" }),
                      createTextVNode("Node.js")
                    ]),
                    createVNode("p", { class: "blog-content" }, " Node.js เป็นแพลตฟอร์มที่ใช้สำหรับพัฒนาเซิร์ฟเวอร์และแอปพลิเคชันเว็บ โดยใช้ JavaScript มีประสิทธิภาพสูงและรองรับการทำงานแบบ Asynchronous เหมาะสำหรับระบบที่ต้องการประมวลผลแบบเรียลไทม์ เช่น Chat Applications และ API Services ")
                  ]),
                  createVNode("div", { class: "col-md-3 blog-item" }, [
                    createVNode("h5", null, [
                      createVNode("i", { class: "fab fa-vuejs me-2" }),
                      createTextVNode("Nuxt.js")
                    ]),
                    createVNode("p", { class: "blog-content" }, " Nuxt.js เป็นเฟรมเวิร์คที่ช่วยในการพัฒนาเว็บแอปพลิเคชันแบบ Vue.js โดยมีจุดเด่นคือการรองรับ Server-Side Rendering (SSR), SEO-friendly และโครงสร้างที่จัดการง่าย เหมาะสำหรับเว็บที่ต้องการโหลดเร็วและรองรับ SEO เช่น เว็บไซต์ E-commerce หรือ Blog ")
                  ]),
                  createVNode("div", { class: "col-md-3 blog-item" }, [
                    createVNode("h5", null, [
                      createVNode("i", { class: "fab fa-python me-2" }),
                      createTextVNode("Python")
                    ]),
                    createVNode("p", { class: "blog-content" }, " Python เป็นภาษาการเขียนโปรแกรมที่เรียบง่าย อ่านง่าย และทรงพลัง เหมาะสำหรับงานหลากหลาย เช่น Data Science, Machine Learning, Web Development และ Automation มี Frameworks เช่น Django และ Flask ที่ช่วยในการพัฒนาเว็บแอปพลิเคชันได้รวดเร็ว ")
                  ]),
                  createVNode("div", { class: "col-md-3 blog-item" }, [
                    createVNode("h5", null, [
                      createVNode("i", { class: "fas fa-user-check me-2" }),
                      createTextVNode("Face Detection")
                    ]),
                    createVNode("p", { class: "blog-content" }, " การตรวจจับใบหน้า (Face Detection) เป็นเทคโนโลยีที่ใช้ในระบบ AI สำหรับการระบุและตรวจจับตำแหน่งใบหน้าของบุคคลในภาพหรือวิดีโอ ไลบรารีที่นิยมใช้ เช่น OpenCV, Mediapipe และ Dlib โดยสามารถนำไปใช้งานในระบบความปลอดภัย การตรวจจับอารมณ์ หรือแอปพลิเคชันกล้อง ")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VCardTitle, null, {
            default: withCtx(() => [
              createVNode("div", { class: "row text-center" }, [
                createVNode("div", { class: "col-md-3 blog-item" }, [
                  createVNode("h5", null, [
                    createVNode("i", { class: "fab fa-node-js me-2" }),
                    createTextVNode("Node.js")
                  ]),
                  createVNode("p", { class: "blog-content" }, " Node.js เป็นแพลตฟอร์มที่ใช้สำหรับพัฒนาเซิร์ฟเวอร์และแอปพลิเคชันเว็บ โดยใช้ JavaScript มีประสิทธิภาพสูงและรองรับการทำงานแบบ Asynchronous เหมาะสำหรับระบบที่ต้องการประมวลผลแบบเรียลไทม์ เช่น Chat Applications และ API Services ")
                ]),
                createVNode("div", { class: "col-md-3 blog-item" }, [
                  createVNode("h5", null, [
                    createVNode("i", { class: "fab fa-vuejs me-2" }),
                    createTextVNode("Nuxt.js")
                  ]),
                  createVNode("p", { class: "blog-content" }, " Nuxt.js เป็นเฟรมเวิร์คที่ช่วยในการพัฒนาเว็บแอปพลิเคชันแบบ Vue.js โดยมีจุดเด่นคือการรองรับ Server-Side Rendering (SSR), SEO-friendly และโครงสร้างที่จัดการง่าย เหมาะสำหรับเว็บที่ต้องการโหลดเร็วและรองรับ SEO เช่น เว็บไซต์ E-commerce หรือ Blog ")
                ]),
                createVNode("div", { class: "col-md-3 blog-item" }, [
                  createVNode("h5", null, [
                    createVNode("i", { class: "fab fa-python me-2" }),
                    createTextVNode("Python")
                  ]),
                  createVNode("p", { class: "blog-content" }, " Python เป็นภาษาการเขียนโปรแกรมที่เรียบง่าย อ่านง่าย และทรงพลัง เหมาะสำหรับงานหลากหลาย เช่น Data Science, Machine Learning, Web Development และ Automation มี Frameworks เช่น Django และ Flask ที่ช่วยในการพัฒนาเว็บแอปพลิเคชันได้รวดเร็ว ")
                ]),
                createVNode("div", { class: "col-md-3 blog-item" }, [
                  createVNode("h5", null, [
                    createVNode("i", { class: "fas fa-user-check me-2" }),
                    createTextVNode("Face Detection")
                  ]),
                  createVNode("p", { class: "blog-content" }, " การตรวจจับใบหน้า (Face Detection) เป็นเทคโนโลยีที่ใช้ในระบบ AI สำหรับการระบุและตรวจจับตำแหน่งใบหน้าของบุคคลในภาพหรือวิดีโอ ไลบรารีที่นิยมใช้ เช่น OpenCV, Mediapipe และ Dlib โดยสามารถนำไปใช้งานในระบบความปลอดภัย การตรวจจับอารมณ์ หรือแอปพลิเคชันกล้อง ")
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/users/IndexComponent.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const HomeComponent = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-22315650"]]);
const _sfc_main$4 = {
  props: {
    week_id: { type: String, required: true },
    day_id: { type: String, required: true }
  },
  data: () => ({
    error: null,
    success: null,
    faceBoxes: [],
    status: "กำลังโหลด...",
    stream: null,
    intervalId: null,
    user: {},
    teacher: {}
  }),
  methods: {
    async startVideo() {
      try {
        this.stream = await (void 0).mediaDevices.getUserMedia({ video: true });
        this.$refs.video.srcObject = this.stream;
        this.intervalId = setInterval(this.captureFrame, 3e3);
        this.status = "กำลังตรวจสอบ...";
      } catch (err) {
        console.error("ไม่สามารถเข้าถึงกล้องได้:", err);
        this.status = "ไม่สามารถเข้าถึงกล้องได้";
      }
    },
    stopVideo() {
      if (this.stream) {
        this.stream.getTracks().forEach((track) => track.stop());
        this.stream = null;
      }
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
      this.status = "กล้องถูกปิด";
    },
    async captureFrame() {
      const video = this.$refs.video;
      const canvas = this.$refs.canvas;
      const context = canvas.getContext("2d");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const frame = canvas.toDataURL("image/jpeg");
      try {
        const response = await axios.post("http://localhost:8000/process-frame", {
          frame,
          user_id: this.user.id,
          username: this.user.username,
          teacher_id: this.teacher,
          week_id: this.week_id,
          day_id: this.day_id
        });
        console.log(response.data);
        if (response.data.status === "success") {
          this.status = `ตรวจพบ: ${response.data.name}`;
          this.message = response.data.message;
          this.faceBoxes = [response.data.boundingBox];
          this.success = "เช็คชื่อสำเร็จ";
        } else if (response.data.status === "checkin_time_over") {
          this.status = `ตรวจพบ: ${response.data.name}`;
          this.message = response.data.message;
          this.faceBoxes = [response.data.boundingBox];
          this.success = "หมดเวลาเช็คชื่อแล้ว";
        } else if (response.data.status === "already") {
          this.status = `ตรวจพบ: ${response.data.name}`;
          this.message = response.data.message;
          this.faceBoxes = [response.data.boundingBox];
          console.log("faceBox", this.faceBoxes);
        } else {
          this.faceBoxes = [];
        }
      } catch (err) {
        console.error("Error sending frame to API:", err);
        this.status = "เกิดข้อผิดพลาดในการเชื่อมต่อ API";
      }
    },
    boxStyle(box) {
      const video = this.$refs.video;
      const videoWidth = video.videoWidth;
      const videoHeight = video.videoHeight;
      const displayWidth = video.offsetWidth;
      const displayHeight = video.offsetHeight;
      const scaleX = displayWidth / videoWidth;
      const scaleY = displayHeight / videoHeight;
      return {
        position: "absolute",
        border: "2px solid red",
        top: `${box.y * scaleY}px`,
        left: `${box.x * scaleX}px`,
        width: `${box.width * scaleX}px`,
        height: `${box.height * scaleY}px`,
        pointerEvents: "none"
      };
    }
  },
  async mounted() {
    const resultuser = await getUser();
    if (resultuser.ok === 1) {
      this.user = resultuser.user;
      this.is_logged_in = true;
    } else {
      this.is_logged_in = false;
      this.$router.push("/");
      localStorage.setItem("lastComponentindex", "HomeComponent");
    }
    const resultteacher = await getTeacher();
    if (resultteacher.ok === 1) {
      this.teacher = resultteacher.teacher[0].id;
    }
    this.startVideo();
  },
  beforeUnmount() {
    this.stopVideo();
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->`);
  _push(ssrRenderComponent(VCardTitle, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`ตรวจจับใบหน้า`);
      } else {
        return [
          createTextVNode("ตรวจจับใบหน้า")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VCardText, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.error || _ctx.success) {
          _push2(ssrRenderComponent(VAlert, {
            type: _ctx.error ? "error" : "success",
            closable: ""
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`${ssrInterpolate(_ctx.error || _ctx.success)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.error || _ctx.success), 1)
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`<div class="video-container" data-v-18e1bc71${_scopeId}><video autoplay muted playsinline data-v-18e1bc71${_scopeId}></video><canvas style="${ssrRenderStyle({ "display": "none" })}" data-v-18e1bc71${_scopeId}></canvas><!--[-->`);
        ssrRenderList(_ctx.faceBoxes, (box, index2) => {
          _push2(`<div class="face-box" style="${ssrRenderStyle($options.boxStyle(box))}" data-v-18e1bc71${_scopeId}></div>`);
        });
        _push2(`<!--]--></div><p data-v-18e1bc71${_scopeId}>${ssrInterpolate(_ctx.status)}</p>`);
      } else {
        return [
          _ctx.error || _ctx.success ? (openBlock(), createBlock(VAlert, {
            key: 0,
            type: _ctx.error ? "error" : "success",
            closable: ""
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.error || _ctx.success), 1)
            ]),
            _: 1
          }, 8, ["type"])) : createCommentVNode("", true),
          createVNode("div", { class: "video-container" }, [
            createVNode("video", {
              ref: "video",
              autoplay: "",
              muted: "",
              playsinline: ""
            }, null, 512),
            createVNode("canvas", {
              ref: "canvas",
              style: { "display": "none" }
            }, null, 512),
            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.faceBoxes, (box, index2) => {
              return openBlock(), createBlock("div", {
                key: index2,
                class: "face-box",
                style: $options.boxStyle(box)
              }, null, 4);
            }), 128))
          ]),
          createVNode("p", null, toDisplayString(_ctx.status), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` ${ssrInterpolate(_ctx.faceBoxes)}<!--]-->`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/python/check/FaceDetection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const FaceDetection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-18e1bc71"]]);
const makeVDataTableVirtualProps = propsFactory({
  ...makeDataTableProps(),
  ...makeDataTableGroupProps(),
  ...makeVirtualProps(),
  ...makeFilterProps()
}, "VDataTableVirtual");
const VDataTableVirtual = genericComponent()({
  name: "VDataTableVirtual",
  props: makeVDataTableVirtualProps(),
  emits: {
    "update:modelValue": (value) => true,
    "update:sortBy": (value) => true,
    "update:options": (value) => true,
    "update:groupBy": (value) => true,
    "update:expanded": (value) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      groupBy
    } = createGroupBy(props);
    const {
      sortBy,
      multiSort,
      mustSort
    } = createSort(props);
    const {
      disableSort
    } = toRefs(props);
    const {
      columns,
      headers,
      filterFunctions,
      sortFunctions,
      sortRawFunctions
    } = createHeaders(props, {
      groupBy,
      showSelect: toRef(props, "showSelect"),
      showExpand: toRef(props, "showExpand")
    });
    const {
      items
    } = useDataTableItems(props, columns);
    const search = toRef(props, "search");
    const {
      filteredItems
    } = useFilter(props, items, search, {
      transform: (item) => item.columns,
      customKeyFilter: filterFunctions
    });
    const {
      toggleSort
    } = provideSort({
      sortBy,
      multiSort,
      mustSort
    });
    const {
      sortByWithGroups,
      opened,
      extractRows,
      isGroupOpen,
      toggleGroup
    } = provideGroupBy({
      groupBy,
      sortBy,
      disableSort
    });
    const {
      sortedItems
    } = useSortedItems(props, filteredItems, sortByWithGroups, {
      transform: (item) => ({
        ...item.raw,
        ...item.columns
      }),
      sortFunctions,
      sortRawFunctions
    });
    const {
      flatItems
    } = useGroupedItems(sortedItems, groupBy, opened);
    const allItems = computed(() => extractRows(flatItems.value));
    const {
      isSelected,
      select,
      selectAll,
      toggleSelect,
      someSelected,
      allSelected
    } = provideSelection(props, {
      allItems,
      currentPage: allItems
    });
    const {
      isExpanded,
      toggleExpand
    } = provideExpanded(props);
    const {
      containerRef,
      markerRef,
      paddingTop,
      paddingBottom,
      computedItems,
      handleItemResize,
      handleScroll,
      handleScrollend
    } = useVirtual(props, flatItems);
    const displayItems = computed(() => computedItems.value.map((item) => item.raw));
    useOptions({
      sortBy,
      page: shallowRef(1),
      itemsPerPage: shallowRef(-1),
      groupBy,
      search
    });
    provideDefaults({
      VDataTableRows: {
        hideNoData: toRef(props, "hideNoData"),
        noDataText: toRef(props, "noDataText"),
        loading: toRef(props, "loading"),
        loadingText: toRef(props, "loadingText")
      }
    });
    const slotProps = computed(() => ({
      sortBy: sortBy.value,
      toggleSort,
      someSelected: someSelected.value,
      allSelected: allSelected.value,
      isSelected,
      select,
      selectAll,
      toggleSelect,
      isExpanded,
      toggleExpand,
      isGroupOpen,
      toggleGroup,
      items: allItems.value.map((item) => item.raw),
      internalItems: allItems.value,
      groupedItems: flatItems.value,
      columns: columns.value,
      headers: headers.value
    }));
    useRender(() => {
      const dataTableHeadersProps = VDataTableHeaders.filterProps(props);
      const dataTableRowsProps = VDataTableRows.filterProps(props);
      const tableProps = VTable.filterProps(props);
      return createVNode(VTable, mergeProps({
        "class": ["v-data-table", {
          "v-data-table--loading": props.loading
        }, props.class],
        "style": props.style
      }, tableProps), {
        top: () => {
          var _a;
          return (_a = slots.top) == null ? void 0 : _a.call(slots, slotProps.value);
        },
        wrapper: () => {
          var _a, _b, _c;
          return createVNode("div", {
            "ref": containerRef,
            "onScrollPassive": handleScroll,
            "onScrollend": handleScrollend,
            "class": "v-table__wrapper",
            "style": {
              height: convertToUnit(props.height)
            }
          }, [createVNode("table", null, [(_a = slots.colgroup) == null ? void 0 : _a.call(slots, slotProps.value), !props.hideDefaultHeader && createVNode("thead", {
            "key": "thead"
          }, [createVNode(VDataTableHeaders, mergeProps(dataTableHeadersProps, {
            "sticky": props.fixedHeader
          }), slots)]), !props.hideDefaultBody && createVNode("tbody", null, [createVNode("tr", {
            "ref": markerRef,
            "style": {
              height: convertToUnit(paddingTop.value),
              border: 0
            }
          }, [createVNode("td", {
            "colspan": columns.value.length,
            "style": {
              height: 0,
              border: 0
            }
          }, null)]), (_b = slots["body.prepend"]) == null ? void 0 : _b.call(slots, slotProps.value), createVNode(VDataTableRows, mergeProps(attrs, dataTableRowsProps, {
            "items": displayItems.value
          }), {
            ...slots,
            item: (itemSlotProps) => createVNode(VVirtualScrollItem, {
              "key": itemSlotProps.internalItem.index,
              "renderless": true,
              "onUpdate:height": (height) => handleItemResize(itemSlotProps.internalItem.index, height)
            }, {
              default: (_ref2) => {
                var _a2;
                let {
                  itemRef
                } = _ref2;
                return ((_a2 = slots.item) == null ? void 0 : _a2.call(slots, {
                  ...itemSlotProps,
                  itemRef
                })) ?? createVNode(VDataTableRow, mergeProps(itemSlotProps.props, {
                  "ref": itemRef,
                  "key": itemSlotProps.internalItem.index,
                  "index": itemSlotProps.internalItem.index
                }), slots);
              }
            })
          }), (_c = slots["body.append"]) == null ? void 0 : _c.call(slots, slotProps.value), createVNode("tr", {
            "style": {
              height: convertToUnit(paddingBottom.value),
              border: 0
            }
          }, [createVNode("td", {
            "colspan": columns.value.length,
            "style": {
              height: 0,
              border: 0
            }
          }, null)])])])]);
        },
        bottom: () => {
          var _a;
          return (_a = slots.bottom) == null ? void 0 : _a.call(slots, slotProps.value);
        }
      });
    });
  }
});
const _sfc_main$3 = {
  components: {
    FaceDetection
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
          state.items = result.days.map((day, index2) => ({
            id: index2 + 1,
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
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FaceDetection = resolveComponent("FaceDetection");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-52b307f6>`);
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
              _push3(`<td class="button-open" data-v-52b307f6${_scopeId2}>`);
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
                                _push6(`<h5 data-v-52b307f6${_scopeId5}>ปิด</h5>`);
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
                                _push6(ssrRenderComponent(_component_FaceDetection, {
                                  week_id: $props.week_id,
                                  day_id: item.id
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_FaceDetection, {
                                    week_id: $props.week_id,
                                    day_id: item.id
                                  }, null, 8, ["week_id", "day_id"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode(_component_FaceDetection, {
                                  week_id: $props.week_id,
                                  day_id: item.id
                                }, null, 8, ["week_id", "day_id"])
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
                              createVNode(_component_FaceDetection, {
                                week_id: $props.week_id,
                                day_id: item.id
                              }, null, 8, ["week_id", "day_id"])
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
                              createVNode(_component_FaceDetection, {
                                week_id: $props.week_id,
                                day_id: item.id
                              }, null, 8, ["week_id", "day_id"])
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
                            createVNode(_component_FaceDetection, {
                              week_id: $props.week_id,
                              day_id: item.id
                            }, null, 8, ["week_id", "day_id"])
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/python/check/DayComponent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const DayComponent = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-52b307f6"]]);
const _sfc_main$2 = {
  components: {
    DayComponent
  },
  data: () => ({
    itemsCheckin: [],
    headersCheckin: [
      { title: "#", align: "center", key: "id" },
      { title: "สัปดาห์", align: "end", key: "week" },
      { title: "รายละเอียด", align: "end", key: "view" }
    ],
    dialog: {},
    teacher: "",
    error: null,
    success: null,
    count: "",
    tasks: [],
    newTask: null,
    search: "",
    headers: [
      { title: "#", align: "center", key: "id" },
      { title: "เวลา", align: "end", key: "time" },
      { title: "ผู้เช็คชื่อ", align: "end", key: "checker" }
    ],
    columns: [],
    user: {},
    faceBoxes: [],
    status: "กำลังโหลด...",
    message: "",
    stream: null,
    is_logged_in: false,
    router: useRouter(),
    route: useRoute(),
    intervalId: null,
    pollingId: null
  }),
  computed: {
    progress() {
      return this.count / 90 * 100;
    },
    remainingTasks() {
      return 90 - this.count;
    },
    completedTasks() {
      return this.count;
    }
  },
  methods: {
    openDialog(id) {
      this.dialog[id] = true;
    },
    closeDialog(id) {
      this.dialog[id] = false;
    },
    formatDate(date) {
      const options = { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" };
      return new Date(date).toLocaleString("th-TH", options);
    },
    async startVideo() {
      try {
        this.stream = await (void 0).mediaDevices.getUserMedia({ video: true });
        this.$refs.video.srcObject = this.stream;
        this.intervalId = setInterval(this.captureFrame, 3e3);
        this.status = "กำลังตรวจสอบ...";
      } catch (err) {
        console.error("ไม่สามารถเข้าถึงกล้องได้:", err);
        this.status = "ไม่สามารถเข้าถึงกล้องได้";
      }
    },
    stopVideo() {
      if (this.stream) {
        this.stream.getTracks().forEach((track) => track.stop());
        this.stream = null;
      }
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
      this.status = "กล้องถูกปิด";
    },
    async captureFrame() {
      const video = this.$refs.video;
      const canvas = this.$refs.canvas;
      const context = canvas.getContext("2d");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const frame = canvas.toDataURL("image/jpeg");
      try {
        const response = await axios.post("http://localhost:8000/process-frame", {
          frame,
          user_id: this.user.id,
          username: this.user.username
        });
        if (response.data.status === "success") {
          this.status = `ตรวจพบ: ${response.data.name}`;
          this.message = response.data.message;
          this.faceBoxes = [response.data.boundingBox];
          this.success = "เช็คชื่อสำเร็จ";
        } else if (response.data.status === "checkin_time_over") {
          this.status = `ตรวจพบ: ${response.data.name}`;
          this.message = response.data.message;
          this.faceBoxes = [response.data.boundingBox];
          this.success = "หมดเวลาเช็คชื่อแล้ว";
        } else if (response.data.status === "already") {
          this.status = `ตรวจพบ: ${response.data.name}`;
          this.message = response.data.message;
          this.faceBoxes = [response.data.boundingBox];
        } else {
          this.faceBoxes = [];
        }
      } catch (err) {
        console.error("Error sending frame to API:", err);
        this.status = "เกิดข้อผิดพลาดในการเชื่อมต่อ API";
      }
    },
    async fetchData() {
      const result = await percentageIineup();
      if (result.ok === 1) {
        this.count = result.count;
        this.columns = result.columns.map((item, index2) => ({
          ...item,
          id: index2 + 1
        }));
      }
      const resultWeeks = await getWeeks();
      if (resultWeeks.ok === 1 && Array.isArray(resultWeeks.weeks)) {
        this.itemsCheckin = resultWeeks.weeks.map((week) => ({
          id: week.id,
          week: week.week,
          start: week.start,
          end: week.end,
          room: week.room,
          status: week.status
        }));
        console.log(this.itemsCheckin);
      } else {
        console.error("Invalid data structure from API:", resultWeeks);
      }
    },
    startPolling() {
      this.pollingId = setInterval(this.fetchData);
    },
    stopPolling() {
      if (this.pollingId) {
        clearInterval(this.pollingId);
        this.pollingId = null;
      }
    }
  },
  watch: {
    dialog(newVal) {
      if (newVal) {
        this.startVideo();
      } else {
        this.stopVideo();
      }
    }
  },
  beforeUnmount() {
    this.stopVideo();
    this.stopPolling();
  },
  async mounted() {
    await this.fetchData();
    this.startPolling();
    const resultuser = await getUser();
    if (resultuser.ok === 1) {
      this.user = resultuser.user;
      this.is_logged_in = true;
    } else {
      this.is_logged_in = false;
      this.$router.push("/");
      localStorage.setItem("lastComponentindex", "HomeComponent");
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_DayComponent = resolveComponent("DayComponent");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-caf964ac>`);
  _push(ssrRenderComponent(VCard, {
    flat: "",
    class: "ma-5 text-center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VProgressLinear, {
          modelValue: $options.progress,
          "onUpdate:modelValue": ($event) => $options.progress = $event,
          height: 40,
          size: 350,
          rotate: 10,
          color: "#9292D1",
          striped: "",
          class: "me-2 text-h6"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<span class="text-h6" data-v-caf964ac${_scopeId2}>${ssrInterpolate(Math.round($options.progress))}%</span>`);
            } else {
              return [
                createVNode("span", { class: "text-h6" }, toDisplayString(Math.round($options.progress)) + "%", 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VProgressLinear, {
            modelValue: $options.progress,
            "onUpdate:modelValue": ($event) => $options.progress = $event,
            height: 40,
            size: 350,
            rotate: 10,
            color: "#9292D1",
            striped: "",
            class: "me-2 text-h6"
          }, {
            default: withCtx(() => [
              createVNode("span", { class: "text-h6" }, toDisplayString(Math.round($options.progress)) + "%", 1)
            ]),
            _: 1
          }, 8, ["modelValue", "onUpdate:modelValue"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VRow, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCol, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCard, { class: "ma-5" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VDivider, { vertical: "" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCard, {
                            width: "300px",
                            class: "animated-card"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VCardTitle, { class: "d-flex align-center" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(VIcon, {
                                        icon: "mdi-clock-outline",
                                        color: "warning",
                                        class: "mr-2"
                                      }, null, _parent7, _scopeId6));
                                      _push7(`<span class="text-h6" data-v-caf964ac${_scopeId6}>: ${ssrInterpolate($options.remainingTasks)}</span>`);
                                    } else {
                                      return [
                                        createVNode(VIcon, {
                                          icon: "mdi-clock-outline",
                                          color: "warning",
                                          class: "mr-2"
                                        }),
                                        createVNode("span", { class: "text-h6" }, ": " + toDisplayString($options.remainingTasks), 1)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VProgressLinear, {
                                  value: $options.remainingTasks / 90 * 100,
                                  height: "10",
                                  color: "warning",
                                  class: "mt-2"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VCardTitle, { class: "d-flex align-center" }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "mdi-clock-outline",
                                        color: "warning",
                                        class: "mr-2"
                                      }),
                                      createVNode("span", { class: "text-h6" }, ": " + toDisplayString($options.remainingTasks), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VProgressLinear, {
                                    value: $options.remainingTasks / 90 * 100,
                                    height: "10",
                                    color: "warning",
                                    class: "mt-2"
                                  }, null, 8, ["value"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VDivider, null, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCard, {
                            width: "300px",
                            class: "mt-5 animated-card"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VCardTitle, { class: "d-flex align-center" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(VIcon, {
                                        icon: "mdi-check-circle-outline",
                                        color: "success",
                                        class: "mr-2"
                                      }, null, _parent7, _scopeId6));
                                      _push7(`<span class="text-h6" data-v-caf964ac${_scopeId6}>: ${ssrInterpolate($options.completedTasks)}</span>`);
                                    } else {
                                      return [
                                        createVNode(VIcon, {
                                          icon: "mdi-check-circle-outline",
                                          color: "success",
                                          class: "mr-2"
                                        }),
                                        createVNode("span", { class: "text-h6" }, ": " + toDisplayString($options.completedTasks), 1)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VProgressLinear, {
                                  value: $options.completedTasks / 90 * 100,
                                  height: "10",
                                  color: "success",
                                  class: "mt-2"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VCardTitle, { class: "d-flex align-center" }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "mdi-check-circle-outline",
                                        color: "success",
                                        class: "mr-2"
                                      }),
                                      createVNode("span", { class: "text-h6" }, ": " + toDisplayString($options.completedTasks), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VProgressLinear, {
                                    value: $options.completedTasks / 90 * 100,
                                    height: "10",
                                    color: "success",
                                    class: "mt-2"
                                  }, null, 8, ["value"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VCard, {
                              width: "300px",
                              class: "animated-card"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardTitle, { class: "d-flex align-center" }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "mdi-clock-outline",
                                      color: "warning",
                                      class: "mr-2"
                                    }),
                                    createVNode("span", { class: "text-h6" }, ": " + toDisplayString($options.remainingTasks), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VProgressLinear, {
                                  value: $options.remainingTasks / 90 * 100,
                                  height: "10",
                                  color: "warning",
                                  class: "mt-2"
                                }, null, 8, ["value"])
                              ]),
                              _: 1
                            }),
                            createVNode(VDivider),
                            createVNode(VCard, {
                              width: "300px",
                              class: "mt-5 animated-card"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardTitle, { class: "d-flex align-center" }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "mdi-check-circle-outline",
                                      color: "success",
                                      class: "mr-2"
                                    }),
                                    createVNode("span", { class: "text-h6" }, ": " + toDisplayString($options.completedTasks), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VProgressLinear, {
                                  value: $options.completedTasks / 90 * 100,
                                  height: "10",
                                  color: "success",
                                  class: "mt-2"
                                }, null, 8, ["value"])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                    _push4(`<div class="d-flex justify-center" data-v-caf964ac${_scopeId3}>`);
                    _push4(ssrRenderComponent(VCard, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCardTitle, { class: "d-flex align-center pe-2 title-bar" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VIcon, {
                                  icon: "mdi-calendar-week",
                                  color: "primary"
                                }, null, _parent6, _scopeId5));
                                _push6(`<span class="ml-2 text-h6" data-v-caf964ac${_scopeId5}>เช็คชื่อเข้าแถว</span>`);
                                _push6(ssrRenderComponent(VSpacer, null, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VTextField, {
                                  modelValue: _ctx.search,
                                  "onUpdate:modelValue": ($event) => _ctx.search = $event,
                                  density: "compact",
                                  label: "ค้นหา",
                                  "prepend-inner-icon": "mdi-magnify",
                                  variant: "solo-filled",
                                  "hide-details": "",
                                  class: "search-field"
                                }, null, _parent6, _scopeId5));
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
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VDataTable, {
                            search: _ctx.search,
                            "onUpdate:search": ($event) => _ctx.search = $event,
                            headers: _ctx.headersCheckin,
                            "filter-keys": ["id", "week"],
                            items: _ctx.itemsCheckin
                          }, {
                            "item.view": withCtx(({ item }, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<td class="hover-effect" data-v-caf964ac${_scopeId5}>`);
                                _push6(ssrRenderComponent(VBtn, {
                                  onClick: ($event) => $options.openDialog(item.id)
                                }, {
                                  default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(VIcon, {
                                        size: "24px",
                                        color: "primary"
                                      }, {
                                        default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(`${ssrInterpolate(item.status === "pending" ? "mdi-pencil" : " mdi-eye")}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.status === "pending" ? "mdi-pencil" : " mdi-eye"), 1)
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
                                            createTextVNode(toDisplayString(item.status === "pending" ? "mdi-pencil" : " mdi-eye"), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VDialog, {
                                  modelValue: _ctx.dialog[item.id],
                                  "onUpdate:modelValue": ($event) => _ctx.dialog[item.id] = $event,
                                  "max-width": "800",
                                  persistent: ""
                                }, {
                                  default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(VCard, {
                                        "prepend-icon": "mdi-eye",
                                        title: "จัดการการเข้าแถว"
                                      }, {
                                        actions: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(ssrRenderComponent(VSpacer, null, null, _parent8, _scopeId7));
                                            _push8(ssrRenderComponent(VBtn, {
                                              onClick: ($event) => $options.closeDialog(item.id),
                                              color: "red"
                                            }, {
                                              default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                if (_push9) {
                                                  _push9(`<h5 data-v-caf964ac${_scopeId8}>ปิด</h5>`);
                                                } else {
                                                  return [
                                                    createVNode("h5", null, "ปิด")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent8, _scopeId7));
                                          } else {
                                            return [
                                              createVNode(VSpacer),
                                              createVNode(VBtn, {
                                                onClick: ($event) => $options.closeDialog(item.id),
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
                                        default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(ssrRenderComponent(VCardText, null, {
                                              default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                if (_push9) {
                                                  _push9(ssrRenderComponent(_component_DayComponent, {
                                                    week_id: item.id
                                                  }, null, _parent9, _scopeId8));
                                                } else {
                                                  return [
                                                    createVNode(_component_DayComponent, {
                                                      week_id: item.id
                                                    }, null, 8, ["week_id"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent8, _scopeId7));
                                          } else {
                                            return [
                                              createVNode(VCardText, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_DayComponent, {
                                                    week_id: item.id
                                                  }, null, 8, ["week_id"])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(VCard, {
                                          "prepend-icon": "mdi-eye",
                                          title: "จัดการการเข้าแถว"
                                        }, {
                                          actions: withCtx(() => [
                                            createVNode(VSpacer),
                                            createVNode(VBtn, {
                                              onClick: ($event) => $options.closeDialog(item.id),
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
                                                  week_id: item.id
                                                }, null, 8, ["week_id"])
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
                                }, _parent6, _scopeId5));
                                _push6(`</td>`);
                              } else {
                                return [
                                  createVNode("td", { class: "hover-effect" }, [
                                    createVNode(VBtn, {
                                      onClick: ($event) => $options.openDialog(item.id)
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
                                              onClick: ($event) => $options.closeDialog(item.id),
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
                                                  week_id: item.id
                                                }, null, 8, ["week_id"])
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
                          }, _parent5, _scopeId4));
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
                            createVNode(VDataTable, {
                              search: _ctx.search,
                              "onUpdate:search": ($event) => _ctx.search = $event,
                              headers: _ctx.headersCheckin,
                              "filter-keys": ["id", "week"],
                              items: _ctx.itemsCheckin
                            }, {
                              "item.view": withCtx(({ item }) => [
                                createVNode("td", { class: "hover-effect" }, [
                                  createVNode(VBtn, {
                                    onClick: ($event) => $options.openDialog(item.id)
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
                                            onClick: ($event) => $options.closeDialog(item.id),
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
                                                week_id: item.id
                                              }, null, 8, ["week_id"])
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
                    }, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode(VDivider, { vertical: "" }, {
                        default: withCtx(() => [
                          createVNode(VCard, {
                            width: "300px",
                            class: "animated-card"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, { class: "d-flex align-center" }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: "mdi-clock-outline",
                                    color: "warning",
                                    class: "mr-2"
                                  }),
                                  createVNode("span", { class: "text-h6" }, ": " + toDisplayString($options.remainingTasks), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(VProgressLinear, {
                                value: $options.remainingTasks / 90 * 100,
                                height: "10",
                                color: "warning",
                                class: "mt-2"
                              }, null, 8, ["value"])
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider),
                          createVNode(VCard, {
                            width: "300px",
                            class: "mt-5 animated-card"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, { class: "d-flex align-center" }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: "mdi-check-circle-outline",
                                    color: "success",
                                    class: "mr-2"
                                  }),
                                  createVNode("span", { class: "text-h6" }, ": " + toDisplayString($options.completedTasks), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(VProgressLinear, {
                                value: $options.completedTasks / 90 * 100,
                                height: "10",
                                color: "success",
                                class: "mt-2"
                              }, null, 8, ["value"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VDivider),
                      createVNode("div", { class: "d-flex justify-center" }, [
                        createVNode(VCard, null, {
                          default: withCtx(() => [
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
                            createVNode(VDataTable, {
                              search: _ctx.search,
                              "onUpdate:search": ($event) => _ctx.search = $event,
                              headers: _ctx.headersCheckin,
                              "filter-keys": ["id", "week"],
                              items: _ctx.itemsCheckin
                            }, {
                              "item.view": withCtx(({ item }) => [
                                createVNode("td", { class: "hover-effect" }, [
                                  createVNode(VBtn, {
                                    onClick: ($event) => $options.openDialog(item.id)
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
                                            onClick: ($event) => $options.closeDialog(item.id),
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
                                                week_id: item.id
                                              }, null, 8, ["week_id"])
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
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VCard, { class: "ma-5" }, {
                  default: withCtx(() => [
                    createVNode(VDivider, { vertical: "" }, {
                      default: withCtx(() => [
                        createVNode(VCard, {
                          width: "300px",
                          class: "animated-card"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, { class: "d-flex align-center" }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: "mdi-clock-outline",
                                  color: "warning",
                                  class: "mr-2"
                                }),
                                createVNode("span", { class: "text-h6" }, ": " + toDisplayString($options.remainingTasks), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VProgressLinear, {
                              value: $options.remainingTasks / 90 * 100,
                              height: "10",
                              color: "warning",
                              class: "mt-2"
                            }, null, 8, ["value"])
                          ]),
                          _: 1
                        }),
                        createVNode(VDivider),
                        createVNode(VCard, {
                          width: "300px",
                          class: "mt-5 animated-card"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, { class: "d-flex align-center" }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: "mdi-check-circle-outline",
                                  color: "success",
                                  class: "mr-2"
                                }),
                                createVNode("span", { class: "text-h6" }, ": " + toDisplayString($options.completedTasks), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VProgressLinear, {
                              value: $options.completedTasks / 90 * 100,
                              height: "10",
                              color: "success",
                              class: "mt-2"
                            }, null, 8, ["value"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider),
                    createVNode("div", { class: "d-flex justify-center" }, [
                      createVNode(VCard, null, {
                        default: withCtx(() => [
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
                          createVNode(VDataTable, {
                            search: _ctx.search,
                            "onUpdate:search": ($event) => _ctx.search = $event,
                            headers: _ctx.headersCheckin,
                            "filter-keys": ["id", "week"],
                            items: _ctx.itemsCheckin
                          }, {
                            "item.view": withCtx(({ item }) => [
                              createVNode("td", { class: "hover-effect" }, [
                                createVNode(VBtn, {
                                  onClick: ($event) => $options.openDialog(item.id)
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
                                          onClick: ($event) => $options.closeDialog(item.id),
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
                                              week_id: item.id
                                            }, null, 8, ["week_id"])
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
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VCol, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCard, { class: "ma-5" }, {
                text: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VRow, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCol, { class: "text-h6" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VIcon, { icon: "mdi-video-input-component" }, null, _parent6, _scopeId5));
                                _push6(` รายละเอียดการเช็คชื่อ `);
                              } else {
                                return [
                                  createVNode(VIcon, { icon: "mdi-video-input-component" }),
                                  createTextVNode(" รายละเอียดการเช็คชื่อ ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCol, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VTextField, {
                                  modelValue: _ctx.search,
                                  "onUpdate:modelValue": ($event) => _ctx.search = $event,
                                  label: "Search",
                                  "prepend-inner-icon": "mdi-magnify",
                                  variant: "outlined"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VTextField, {
                                    modelValue: _ctx.search,
                                    "onUpdate:modelValue": ($event) => _ctx.search = $event,
                                    label: "Search",
                                    "prepend-inner-icon": "mdi-magnify",
                                    variant: "outlined"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VCol, { class: "text-h6" }, {
                              default: withCtx(() => [
                                createVNode(VIcon, { icon: "mdi-video-input-component" }),
                                createTextVNode(" รายละเอียดการเช็คชื่อ ")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, null, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: _ctx.search,
                                  "onUpdate:modelValue": ($event) => _ctx.search = $event,
                                  label: "Search",
                                  "prepend-inner-icon": "mdi-magnify",
                                  variant: "outlined"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, { class: "text-h6" }, {
                            default: withCtx(() => [
                              createVNode(VIcon, { icon: "mdi-video-input-component" }),
                              createTextVNode(" รายละเอียดการเช็คชื่อ ")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, null, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: _ctx.search,
                                "onUpdate:modelValue": ($event) => _ctx.search = $event,
                                label: "Search",
                                "prepend-inner-icon": "mdi-magnify",
                                variant: "outlined"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VDataTableVirtual, {
                      headers: _ctx.headers,
                      items: _ctx.columns,
                      height: "450",
                      "item-value": "name",
                      search: _ctx.search
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VDataTableVirtual, {
                        headers: _ctx.headers,
                        items: _ctx.columns,
                        height: "450",
                        "item-value": "name",
                        search: _ctx.search
                      }, null, 8, ["headers", "items", "search"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VCard, { class: "ma-5" }, {
                  text: withCtx(() => [
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, { class: "text-h6" }, {
                          default: withCtx(() => [
                            createVNode(VIcon, { icon: "mdi-video-input-component" }),
                            createTextVNode(" รายละเอียดการเช็คชื่อ ")
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, null, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              modelValue: _ctx.search,
                              "onUpdate:modelValue": ($event) => _ctx.search = $event,
                              label: "Search",
                              "prepend-inner-icon": "mdi-magnify",
                              variant: "outlined"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  default: withCtx(() => [
                    createVNode(VDataTableVirtual, {
                      headers: _ctx.headers,
                      items: _ctx.columns,
                      height: "450",
                      "item-value": "name",
                      search: _ctx.search
                    }, null, 8, ["headers", "items", "search"])
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
          createVNode(VCol, null, {
            default: withCtx(() => [
              createVNode(VCard, { class: "ma-5" }, {
                default: withCtx(() => [
                  createVNode(VDivider, { vertical: "" }, {
                    default: withCtx(() => [
                      createVNode(VCard, {
                        width: "300px",
                        class: "animated-card"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, { class: "d-flex align-center" }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: "mdi-clock-outline",
                                color: "warning",
                                class: "mr-2"
                              }),
                              createVNode("span", { class: "text-h6" }, ": " + toDisplayString($options.remainingTasks), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VProgressLinear, {
                            value: $options.remainingTasks / 90 * 100,
                            height: "10",
                            color: "warning",
                            class: "mt-2"
                          }, null, 8, ["value"])
                        ]),
                        _: 1
                      }),
                      createVNode(VDivider),
                      createVNode(VCard, {
                        width: "300px",
                        class: "mt-5 animated-card"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, { class: "d-flex align-center" }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: "mdi-check-circle-outline",
                                color: "success",
                                class: "mr-2"
                              }),
                              createVNode("span", { class: "text-h6" }, ": " + toDisplayString($options.completedTasks), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VProgressLinear, {
                            value: $options.completedTasks / 90 * 100,
                            height: "10",
                            color: "success",
                            class: "mt-2"
                          }, null, 8, ["value"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VDivider),
                  createVNode("div", { class: "d-flex justify-center" }, [
                    createVNode(VCard, null, {
                      default: withCtx(() => [
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
                        createVNode(VDataTable, {
                          search: _ctx.search,
                          "onUpdate:search": ($event) => _ctx.search = $event,
                          headers: _ctx.headersCheckin,
                          "filter-keys": ["id", "week"],
                          items: _ctx.itemsCheckin
                        }, {
                          "item.view": withCtx(({ item }) => [
                            createVNode("td", { class: "hover-effect" }, [
                              createVNode(VBtn, {
                                onClick: ($event) => $options.openDialog(item.id)
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
                                        onClick: ($event) => $options.closeDialog(item.id),
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
                                            week_id: item.id
                                          }, null, 8, ["week_id"])
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
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(VCol, null, {
            default: withCtx(() => [
              createVNode(VCard, { class: "ma-5" }, {
                text: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, { class: "text-h6" }, {
                        default: withCtx(() => [
                          createVNode(VIcon, { icon: "mdi-video-input-component" }),
                          createTextVNode(" รายละเอียดการเช็คชื่อ ")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: _ctx.search,
                            "onUpdate:modelValue": ($event) => _ctx.search = $event,
                            label: "Search",
                            "prepend-inner-icon": "mdi-magnify",
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                default: withCtx(() => [
                  createVNode(VDataTableVirtual, {
                    headers: _ctx.headers,
                    items: _ctx.columns,
                    height: "450",
                    "item-value": "name",
                    search: _ctx.search
                  }, null, 8, ["headers", "items", "search"])
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
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/python/RealTimeFaceDetection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const RealTimeFaceDetection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-caf964ac"]]);
const _sfc_main$1 = {
  components: {
    HeaderComponent: __nuxt_component_0,
    HomeComponent,
    RealTimeFaceDetection,
    ProfileComponent
  },
  data() {
    return {
      drawer: true,
      rail: true,
      dynamicComponent: "HomeComponent",
      // คอมโพเนนต์เริ่มต้น
      username: "",
      isMobile: false,
      is_logged_in: false
    };
  },
  methods: {
    changeComponent(componentName) {
      this.dynamicComponent = componentName;
      localStorage.setItem("lastComponentindex", componentName);
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
  async mounted() {
    const result = await getUser();
    if (result.is_logged_in == true) {
      this.user = result.user;
      this.is_logged_in = true;
    } else {
      this.is_logged_in = false;
    }
    this.fetchUsersData();
    this.updateIsMobile();
    const lastComponent = localStorage.getItem("lastComponentindex");
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
                class: "navigation-drawer",
                width: 200
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
                            title: "Home",
                            value: "home",
                            onClick: ($event) => $options.changeComponent("HomeComponent"),
                            class: "custom-title-body"
                          }, null, _parent5, _scopeId4));
                          if ($data.is_logged_in == true) {
                            _push5(ssrRenderComponent(VListItem, {
                              "prepend-icon": "mdi-account",
                              title: "FaceDetection",
                              value: "facedetection",
                              onClick: ($event) => $options.changeComponent("RealTimeFaceDetection"),
                              class: "custom-title-body"
                            }, null, _parent5, _scopeId4));
                          } else {
                            _push5(`<!---->`);
                          }
                          _push5(ssrRenderComponent(VDivider, null, null, _parent5, _scopeId4));
                          if ($data.is_logged_in == true) {
                            _push5(ssrRenderComponent(VListItem, {
                              "prepend-icon": "mdi-cog",
                              title: "Profile",
                              value: "profile",
                              onClick: ($event) => $options.changeComponent("ProfileComponent"),
                              class: "custom-title-body"
                            }, null, _parent5, _scopeId4));
                          } else {
                            _push5(`<!---->`);
                          }
                        } else {
                          return [
                            createVNode(VListItem, {
                              "prepend-icon": "mdi-home-city",
                              title: "Home",
                              value: "home",
                              onClick: ($event) => $options.changeComponent("HomeComponent"),
                              class: "custom-title-body"
                            }, null, 8, ["onClick"]),
                            $data.is_logged_in == true ? (openBlock(), createBlock(VListItem, {
                              key: 0,
                              "prepend-icon": "mdi-account",
                              title: "FaceDetection",
                              value: "facedetection",
                              onClick: ($event) => $options.changeComponent("RealTimeFaceDetection"),
                              class: "custom-title-body"
                            }, null, 8, ["onClick"])) : createCommentVNode("", true),
                            createVNode(VDivider),
                            $data.is_logged_in == true ? (openBlock(), createBlock(VListItem, {
                              key: 1,
                              "prepend-icon": "mdi-cog",
                              title: "Profile",
                              value: "profile",
                              onClick: ($event) => $options.changeComponent("ProfileComponent"),
                              class: "custom-title-body"
                            }, null, 8, ["onClick"])) : createCommentVNode("", true)
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
                            title: "Home",
                            value: "home",
                            onClick: ($event) => $options.changeComponent("HomeComponent"),
                            class: "custom-title-body"
                          }, null, 8, ["onClick"]),
                          $data.is_logged_in == true ? (openBlock(), createBlock(VListItem, {
                            key: 0,
                            "prepend-icon": "mdi-account",
                            title: "FaceDetection",
                            value: "facedetection",
                            onClick: ($event) => $options.changeComponent("RealTimeFaceDetection"),
                            class: "custom-title-body"
                          }, null, 8, ["onClick"])) : createCommentVNode("", true),
                          createVNode(VDivider),
                          $data.is_logged_in == true ? (openBlock(), createBlock(VListItem, {
                            key: 1,
                            "prepend-icon": "mdi-cog",
                            title: "Profile",
                            value: "profile",
                            onClick: ($event) => $options.changeComponent("ProfileComponent"),
                            class: "custom-title-body"
                          }, null, 8, ["onClick"])) : createCommentVNode("", true)
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
                  class: "navigation-drawer",
                  width: 200
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
                          title: "Home",
                          value: "home",
                          onClick: ($event) => $options.changeComponent("HomeComponent"),
                          class: "custom-title-body"
                        }, null, 8, ["onClick"]),
                        $data.is_logged_in == true ? (openBlock(), createBlock(VListItem, {
                          key: 0,
                          "prepend-icon": "mdi-account",
                          title: "FaceDetection",
                          value: "facedetection",
                          onClick: ($event) => $options.changeComponent("RealTimeFaceDetection"),
                          class: "custom-title-body"
                        }, null, 8, ["onClick"])) : createCommentVNode("", true),
                        createVNode(VDivider),
                        $data.is_logged_in == true ? (openBlock(), createBlock(VListItem, {
                          key: 1,
                          "prepend-icon": "mdi-cog",
                          title: "Profile",
                          value: "profile",
                          onClick: ($event) => $options.changeComponent("ProfileComponent"),
                          class: "custom-title-body"
                        }, null, 8, ["onClick"])) : createCommentVNode("", true)
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
                class: "navigation-drawer",
                width: 200
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
                        title: "Home",
                        value: "home",
                        onClick: ($event) => $options.changeComponent("HomeComponent"),
                        class: "custom-title-body"
                      }, null, 8, ["onClick"]),
                      $data.is_logged_in == true ? (openBlock(), createBlock(VListItem, {
                        key: 0,
                        "prepend-icon": "mdi-account",
                        title: "FaceDetection",
                        value: "facedetection",
                        onClick: ($event) => $options.changeComponent("RealTimeFaceDetection"),
                        class: "custom-title-body"
                      }, null, 8, ["onClick"])) : createCommentVNode("", true),
                      createVNode(VDivider),
                      $data.is_logged_in == true ? (openBlock(), createBlock(VListItem, {
                        key: 1,
                        "prepend-icon": "mdi-cog",
                        title: "Profile",
                        value: "profile",
                        onClick: ($event) => $options.changeComponent("ProfileComponent"),
                        class: "custom-title-body"
                      }, null, 8, ["onClick"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navigation/NDIndex.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const NDIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-0748be4a"]]);
const _sfc_main = {
  components: {
    NDIndex
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NDIndex = resolveComponent("NDIndex");
  _push(ssrRenderComponent(_component_NDIndex, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-DXMDccKH.js.map
