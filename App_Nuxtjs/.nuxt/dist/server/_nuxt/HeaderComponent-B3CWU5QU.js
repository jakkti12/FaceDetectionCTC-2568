import axios from "axios";
import { useRouter, useRoute } from "vue-router";
import { g as getUser } from "./VAlert-BV4vVzt_.js";
import { computed, h, capitalize, ref, inject, shallowRef, provide, watch, mergeProps, createVNode, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_0 } from "./NewLogo-BQlGcRu3.js";
import { p as propsFactory, g as genericComponent, f as breakpoints, o as omit, h as useProxiedModel, e as useRtl, j as getUid, k as isClickInsideElement, l as getNextElement, m as focusableChildren, q as focusChild, _ as _export_sfc } from "../server.mjs";
import { m as makeVOverlayProps, V as VDialogTransition, u as useScopeId, a as VMenuSymbol, b as VOverlay } from "./VOverlay-Bq6vi5Fa.js";
import { m as makeComponentProps, b as makeTagProps, c as useRender, e as VDefaultsProvider, d as VBtn, V as VIcon } from "./VBtn-BQh1DFk2.js";
import { f as forwardRefs } from "./forwardRefs-B2cVIy3B.js";
import { f as VAvatar, b as VImg, V as VCard, d as VCardText } from "./lazy-C5DRqCjO.js";
import { V as VDivider } from "./VDivider-0mIWdu7a.js";
const ALIGNMENT = ["start", "end", "center"];
const SPACE = ["space-between", "space-around", "space-evenly"];
function makeRowProps(prefix, def) {
  return breakpoints.reduce((props, val) => {
    const prefixKey = prefix + capitalize(val);
    props[prefixKey] = def();
    return props;
  }, {});
}
const ALIGN_VALUES = [...ALIGNMENT, "baseline", "stretch"];
const alignValidator = (str) => ALIGN_VALUES.includes(str);
const alignProps = makeRowProps("align", () => ({
  type: String,
  default: null,
  validator: alignValidator
}));
const JUSTIFY_VALUES = [...ALIGNMENT, ...SPACE];
const justifyValidator = (str) => JUSTIFY_VALUES.includes(str);
const justifyProps = makeRowProps("justify", () => ({
  type: String,
  default: null,
  validator: justifyValidator
}));
const ALIGN_CONTENT_VALUES = [...ALIGNMENT, ...SPACE, "stretch"];
const alignContentValidator = (str) => ALIGN_CONTENT_VALUES.includes(str);
const alignContentProps = makeRowProps("alignContent", () => ({
  type: String,
  default: null,
  validator: alignContentValidator
}));
const propMap = {
  align: Object.keys(alignProps),
  justify: Object.keys(justifyProps),
  alignContent: Object.keys(alignContentProps)
};
const classMap = {
  align: "align",
  justify: "justify",
  alignContent: "align-content"
};
function breakpointClass(type, prop, val) {
  let className = classMap[type];
  if (val == null) {
    return void 0;
  }
  if (prop) {
    const breakpoint = prop.replace(type, "");
    className += `-${breakpoint}`;
  }
  className += `-${val}`;
  return className.toLowerCase();
}
const makeVRowProps = propsFactory({
  dense: Boolean,
  noGutters: Boolean,
  align: {
    type: String,
    default: null,
    validator: alignValidator
  },
  ...alignProps,
  justify: {
    type: String,
    default: null,
    validator: justifyValidator
  },
  ...justifyProps,
  alignContent: {
    type: String,
    default: null,
    validator: alignContentValidator
  },
  ...alignContentProps,
  ...makeComponentProps(),
  ...makeTagProps()
}, "VRow");
const VRow = genericComponent()({
  name: "VRow",
  props: makeVRowProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const classes = computed(() => {
      const classList = [];
      let type;
      for (type in propMap) {
        propMap[type].forEach((prop) => {
          const value = props[prop];
          const className = breakpointClass(type, prop, value);
          if (className) classList.push(className);
        });
      }
      classList.push({
        "v-row--no-gutters": props.noGutters,
        "v-row--dense": props.dense,
        [`align-${props.align}`]: props.align,
        [`justify-${props.justify}`]: props.justify,
        [`align-content-${props.alignContent}`]: props.alignContent
      });
      return classList;
    });
    return () => {
      var _a;
      return h(props.tag, {
        class: ["v-row", classes.value, props.class],
        style: props.style
      }, (_a = slots.default) == null ? void 0 : _a.call(slots));
    };
  }
});
const makeVMenuProps = propsFactory({
  // TODO
  // disableKeys: Boolean,
  id: String,
  submenu: Boolean,
  ...omit(makeVOverlayProps({
    closeDelay: 250,
    closeOnContentClick: true,
    locationStrategy: "connected",
    location: void 0,
    openDelay: 300,
    scrim: false,
    scrollStrategy: "reposition",
    transition: {
      component: VDialogTransition
    }
  }), ["absolute"])
}, "VMenu");
const VMenu = genericComponent()({
  name: "VMenu",
  props: makeVMenuProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isActive = useProxiedModel(props, "modelValue");
    const {
      scopeId
    } = useScopeId();
    const {
      isRtl
    } = useRtl();
    const uid = getUid();
    const id = computed(() => props.id || `v-menu-${uid}`);
    const overlay = ref();
    const parent = inject(VMenuSymbol, null);
    const openChildren = shallowRef(/* @__PURE__ */ new Set());
    provide(VMenuSymbol, {
      register() {
        openChildren.value.add(uid);
      },
      unregister() {
        openChildren.value.delete(uid);
      },
      closeParents(e) {
        setTimeout(() => {
          var _a;
          if (!openChildren.value.size && !props.persistent && (e == null || ((_a = overlay.value) == null ? void 0 : _a.contentEl) && !isClickInsideElement(e, overlay.value.contentEl))) {
            isActive.value = false;
            parent == null ? void 0 : parent.closeParents();
          }
        }, 40);
      }
    });
    watch(isActive, (val) => {
      if (val) {
        parent == null ? void 0 : parent.register();
      } else {
        parent == null ? void 0 : parent.unregister();
      }
    }, {
      immediate: true
    });
    function onClickOutside(e) {
      parent == null ? void 0 : parent.closeParents(e);
    }
    function onKeydown(e) {
      var _a, _b, _c, _d, _e;
      if (props.disabled) return;
      if (e.key === "Tab" || e.key === "Enter" && !props.closeOnContentClick) {
        if (e.key === "Enter" && (e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLInputElement && !!e.target.closest("form"))) return;
        if (e.key === "Enter") e.preventDefault();
        const nextElement = getNextElement(focusableChildren((_a = overlay.value) == null ? void 0 : _a.contentEl, false), e.shiftKey ? "prev" : "next", (el) => el.tabIndex >= 0);
        if (!nextElement) {
          isActive.value = false;
          (_c = (_b = overlay.value) == null ? void 0 : _b.activatorEl) == null ? void 0 : _c.focus();
        }
      } else if (props.submenu && e.key === (isRtl.value ? "ArrowRight" : "ArrowLeft")) {
        isActive.value = false;
        (_e = (_d = overlay.value) == null ? void 0 : _d.activatorEl) == null ? void 0 : _e.focus();
      }
    }
    function onActivatorKeydown(e) {
      var _a;
      if (props.disabled) return;
      const el = (_a = overlay.value) == null ? void 0 : _a.contentEl;
      if (el && isActive.value) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          e.stopImmediatePropagation();
          focusChild(el, "next");
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          e.stopImmediatePropagation();
          focusChild(el, "prev");
        } else if (props.submenu) {
          if (e.key === (isRtl.value ? "ArrowRight" : "ArrowLeft")) {
            isActive.value = false;
          } else if (e.key === (isRtl.value ? "ArrowLeft" : "ArrowRight")) {
            e.preventDefault();
            focusChild(el, "first");
          }
        }
      } else if (props.submenu ? e.key === (isRtl.value ? "ArrowLeft" : "ArrowRight") : ["ArrowDown", "ArrowUp"].includes(e.key)) {
        isActive.value = true;
        e.preventDefault();
        setTimeout(() => setTimeout(() => onActivatorKeydown(e)));
      }
    }
    const activatorProps = computed(() => mergeProps({
      "aria-haspopup": "menu",
      "aria-expanded": String(isActive.value),
      "aria-owns": id.value,
      onKeydown: onActivatorKeydown
    }, props.activatorProps));
    useRender(() => {
      const overlayProps = VOverlay.filterProps(props);
      return createVNode(VOverlay, mergeProps({
        "ref": overlay,
        "id": id.value,
        "class": ["v-menu", props.class],
        "style": props.style
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": ($event) => isActive.value = $event,
        "absolute": true,
        "activatorProps": activatorProps.value,
        "location": props.location ?? (props.submenu ? "end" : "bottom"),
        "onClick:outside": onClickOutside,
        "onKeydown": onKeydown
      }, scopeId), {
        activator: slots.activator,
        default: function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return createVNode(VDefaultsProvider, {
            "root": "VMenu"
          }, {
            default: () => {
              var _a;
              return [(_a = slots.default) == null ? void 0 : _a.call(slots, ...args)];
            }
          });
        }
      });
    });
    return forwardRefs({
      id,
      ΨopenChildren: openChildren
    }, overlay);
  }
});
const _sfc_main = {
  data() {
    return {
      user: {
        username: "",
        email: "",
        profile: "",
        user_type: ""
      },
      is_logged_in: false,
      router: useRouter(),
      route: useRoute()
    };
  },
  methods: {
    async logout() {
      try {
        const response = await axios.post(
          "http://localhost:7000/auth/logout",
          {}
        );
        if (response.status == 200) {
          localStorage.removeItem("token");
          this.router.push("/auth/login");
        } else {
          console.error("Error during logout:", response);
        }
      } catch (error) {
        console.error("Error during logout:", error);
      }
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
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mt-4" }, _attrs))} data-v-f0383405>`);
  _push(ssrRenderComponent(VRow, {
    justify: "space-between",
    align: "center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<a href="/" data-v-f0383405${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="logo" style="${ssrRenderStyle({ "width": "120px" })}" data-v-f0383405${_scopeId}></a><div data-v-f0383405${_scopeId}>`);
        if (!$data.is_logged_in) {
          _push2(ssrRenderComponent(VBtn, {
            href: "/auth/login",
            class: "text-primary",
            outlined: ""
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(` ลงชื่อเข้าสู่ระบบ `);
              } else {
                return [
                  createTextVNode(" ลงชื่อเข้าสู่ระบบ ")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          _push2(ssrRenderComponent(VMenu, {
            "min-width": "200px",
            rounded: "",
            class: "menu-bar"
          }, {
            activator: withCtx(({ props }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(VBtn, mergeProps({ icon: "" }, props), {
                  default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(VAvatar, {
                        color: "white",
                        size: "large"
                      }, {
                        default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(ssrRenderComponent(VImg, {
                              src: $data.user.profile,
                              alt: "Profile Picture",
                              cover: ""
                            }, null, _parent5, _scopeId4));
                          } else {
                            return [
                              createVNode(VImg, {
                                src: $data.user.profile,
                                alt: "Profile Picture",
                                cover: ""
                              }, null, 8, ["src"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(VAvatar, {
                          color: "white",
                          size: "large"
                        }, {
                          default: withCtx(() => [
                            createVNode(VImg, {
                              src: $data.user.profile,
                              alt: "Profile Picture",
                              cover: ""
                            }, null, 8, ["src"])
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(VBtn, mergeProps({ icon: "" }, props), {
                    default: withCtx(() => [
                      createVNode(VAvatar, {
                        color: "white",
                        size: "large"
                      }, {
                        default: withCtx(() => [
                          createVNode(VImg, {
                            src: $data.user.profile,
                            alt: "Profile Picture",
                            cover: ""
                          }, null, 8, ["src"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1040)
                ];
              }
            }),
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(VCard, { class: "down-menu" }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(VCardText, null, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`<div class="mx-auto text-center" data-v-f0383405${_scopeId4}>`);
                            _push5(ssrRenderComponent(VAvatar, { color: "brown" }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(ssrRenderComponent(VImg, {
                                    src: $data.user.profile,
                                    alt: "Profile Picture",
                                    cover: ""
                                  }, null, _parent6, _scopeId5));
                                } else {
                                  return [
                                    createVNode(VImg, {
                                      src: $data.user.profile,
                                      alt: "Profile Picture",
                                      cover: ""
                                    }, null, 8, ["src"])
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent5, _scopeId4));
                            _push5(`<h3 data-v-f0383405${_scopeId4}>${ssrInterpolate($data.user.fullName)}</h3><p class="text-caption mt-1" data-v-f0383405${_scopeId4}>${ssrInterpolate($data.user.email)}</p>`);
                            _push5(ssrRenderComponent(VDivider, { class: "my-3" }, null, _parent5, _scopeId4));
                            _push5(ssrRenderComponent(VBtn, {
                              variant: "text",
                              rounded: "",
                              onClick: ($event) => $data.router.push($data.user.user_type)
                            }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(ssrRenderComponent(VIcon, {
                                    start: "",
                                    icon: "mdi-account"
                                  }, null, _parent6, _scopeId5));
                                  _push6(` ${ssrInterpolate($data.user.user_type)}`);
                                } else {
                                  return [
                                    createVNode(VIcon, {
                                      start: "",
                                      icon: "mdi-account"
                                    }),
                                    createTextVNode(" " + toDisplayString($data.user.user_type), 1)
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent5, _scopeId4));
                            _push5(ssrRenderComponent(VDivider, { class: "my-3" }, null, _parent5, _scopeId4));
                            _push5(ssrRenderComponent(VBtn, {
                              variant: "text",
                              rounded: "",
                              onClick: $options.logout
                            }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(ssrRenderComponent(VIcon, {
                                    start: "",
                                    icon: "mdi-logout"
                                  }, null, _parent6, _scopeId5));
                                  _push6(` Logout `);
                                } else {
                                  return [
                                    createVNode(VIcon, {
                                      start: "",
                                      icon: "mdi-logout"
                                    }),
                                    createTextVNode(" Logout ")
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent5, _scopeId4));
                            _push5(`</div>`);
                          } else {
                            return [
                              createVNode("div", { class: "mx-auto text-center" }, [
                                createVNode(VAvatar, { color: "brown" }, {
                                  default: withCtx(() => [
                                    createVNode(VImg, {
                                      src: $data.user.profile,
                                      alt: "Profile Picture",
                                      cover: ""
                                    }, null, 8, ["src"])
                                  ]),
                                  _: 1
                                }),
                                createVNode("h3", null, toDisplayString($data.user.fullName), 1),
                                createVNode("p", { class: "text-caption mt-1" }, toDisplayString($data.user.email), 1),
                                createVNode(VDivider, { class: "my-3" }),
                                createVNode(VBtn, {
                                  variant: "text",
                                  rounded: "",
                                  onClick: ($event) => $data.router.push($data.user.user_type)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      start: "",
                                      icon: "mdi-account"
                                    }),
                                    createTextVNode(" " + toDisplayString($data.user.user_type), 1)
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(VDivider, { class: "my-3" }),
                                createVNode(VBtn, {
                                  variant: "text",
                                  rounded: "",
                                  onClick: $options.logout
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      start: "",
                                      icon: "mdi-logout"
                                    }),
                                    createTextVNode(" Logout ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ])
                            ];
                          }
                        }),
                        _: 1
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "mx-auto text-center" }, [
                              createVNode(VAvatar, { color: "brown" }, {
                                default: withCtx(() => [
                                  createVNode(VImg, {
                                    src: $data.user.profile,
                                    alt: "Profile Picture",
                                    cover: ""
                                  }, null, 8, ["src"])
                                ]),
                                _: 1
                              }),
                              createVNode("h3", null, toDisplayString($data.user.fullName), 1),
                              createVNode("p", { class: "text-caption mt-1" }, toDisplayString($data.user.email), 1),
                              createVNode(VDivider, { class: "my-3" }),
                              createVNode(VBtn, {
                                variant: "text",
                                rounded: "",
                                onClick: ($event) => $data.router.push($data.user.user_type)
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    start: "",
                                    icon: "mdi-account"
                                  }),
                                  createTextVNode(" " + toDisplayString($data.user.user_type), 1)
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(VDivider, { class: "my-3" }),
                              createVNode(VBtn, {
                                variant: "text",
                                rounded: "",
                                onClick: $options.logout
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    start: "",
                                    icon: "mdi-logout"
                                  }),
                                  createTextVNode(" Logout ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ])
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
                  createVNode(VCard, { class: "down-menu" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "mx-auto text-center" }, [
                            createVNode(VAvatar, { color: "brown" }, {
                              default: withCtx(() => [
                                createVNode(VImg, {
                                  src: $data.user.profile,
                                  alt: "Profile Picture",
                                  cover: ""
                                }, null, 8, ["src"])
                              ]),
                              _: 1
                            }),
                            createVNode("h3", null, toDisplayString($data.user.fullName), 1),
                            createVNode("p", { class: "text-caption mt-1" }, toDisplayString($data.user.email), 1),
                            createVNode(VDivider, { class: "my-3" }),
                            createVNode(VBtn, {
                              variant: "text",
                              rounded: "",
                              onClick: ($event) => $data.router.push($data.user.user_type)
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  start: "",
                                  icon: "mdi-account"
                                }),
                                createTextVNode(" " + toDisplayString($data.user.user_type), 1)
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(VDivider, { class: "my-3" }),
                            createVNode(VBtn, {
                              variant: "text",
                              rounded: "",
                              onClick: $options.logout
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  start: "",
                                  icon: "mdi-logout"
                                }),
                                createTextVNode(" Logout ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ])
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
        }
        _push2(`</div>`);
      } else {
        return [
          createVNode("a", { href: "/" }, [
            createVNode("img", {
              src: _imports_0,
              alt: "logo",
              style: { "width": "120px" }
            })
          ]),
          createVNode("div", null, [
            !$data.is_logged_in ? (openBlock(), createBlock(VBtn, {
              key: 0,
              href: "/auth/login",
              class: "text-primary",
              outlined: ""
            }, {
              default: withCtx(() => [
                createTextVNode(" ลงชื่อเข้าสู่ระบบ ")
              ]),
              _: 1
            })) : (openBlock(), createBlock(VMenu, {
              key: 1,
              "min-width": "200px",
              rounded: "",
              class: "menu-bar"
            }, {
              activator: withCtx(({ props }) => [
                createVNode(VBtn, mergeProps({ icon: "" }, props), {
                  default: withCtx(() => [
                    createVNode(VAvatar, {
                      color: "white",
                      size: "large"
                    }, {
                      default: withCtx(() => [
                        createVNode(VImg, {
                          src: $data.user.profile,
                          alt: "Profile Picture",
                          cover: ""
                        }, null, 8, ["src"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1040)
              ]),
              default: withCtx(() => [
                createVNode(VCard, { class: "down-menu" }, {
                  default: withCtx(() => [
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "mx-auto text-center" }, [
                          createVNode(VAvatar, { color: "brown" }, {
                            default: withCtx(() => [
                              createVNode(VImg, {
                                src: $data.user.profile,
                                alt: "Profile Picture",
                                cover: ""
                              }, null, 8, ["src"])
                            ]),
                            _: 1
                          }),
                          createVNode("h3", null, toDisplayString($data.user.fullName), 1),
                          createVNode("p", { class: "text-caption mt-1" }, toDisplayString($data.user.email), 1),
                          createVNode(VDivider, { class: "my-3" }),
                          createVNode(VBtn, {
                            variant: "text",
                            rounded: "",
                            onClick: ($event) => $data.router.push($data.user.user_type)
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                start: "",
                                icon: "mdi-account"
                              }),
                              createTextVNode(" " + toDisplayString($data.user.user_type), 1)
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VDivider, { class: "my-3" }),
                          createVNode(VBtn, {
                            variant: "text",
                            rounded: "",
                            onClick: $options.logout
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                start: "",
                                icon: "mdi-logout"
                              }),
                              createTextVNode(" Logout ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }))
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header/HeaderComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f0383405"]]);
export {
  VRow as V,
  __nuxt_component_0 as _,
  VMenu as a
};
//# sourceMappingURL=HeaderComponent-B3CWU5QU.js.map
